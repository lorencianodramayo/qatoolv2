const express = require("express");
const AdmZip = require("adm-zip");
//google
const bucket = require("../settings/googleSetup");
const multer = require("../settings/multerSetup");
//models
const CreativeModel = require("../models/CreativeModel");

const router = express.Router();

router.get("/", (req, res) => {
  arr = [];
  return res.status(200).json(arr);
});

function extendTimeout(req, res, next) {
  res.setTimeout(480000, function (){
    console.log("timeout");
  })
  next();
}

router.post("/save_zip", extendTimeout, multer.any(), (req, res, next) => {
  let arrCount = 0, 
      arrCreatives = [];

  if(req.files.length > 0){
    new CreativeModel({
      bucketName: process.env.GCS_BUCKET,
    }).save((error, result) => {
      //loop multiple files
      for (const file of req.files) {
        //initialize zip files
        let zip = new AdmZip(file.buffer),
          count = 0;
        //get all files in zip
        zip.getEntries().map((entry) => {
          //find index and inject codes
          if (entry.name.toLowerCase() === "index.html") {
            let index = entry.getData().toString("utf8").split("</html>").join(`
                            <script>
                              var possibleValues;
                              window.addEventListener('load', (event) => {
                                parent.postMessage({
                                  type: 'SAVE_DYNAMIC',
                                  dynamic: {
                                    defaultValues: defaultValues,
                                    possibleValues: possibleValues
                                  }
                                }, '*');
                              });
                              
                              window.addEventListener('DOMContentLoaded', function() {
                                window.addEventListener("message", (event) => {
                                    //console.log(event);
                                    switch(event.data.type){
                                      case 'GET_DYNAMIC':
                                        console.log(event)
                                      break;
                                    }

                                    /*if(typeof event.data === "object"){
                                        defaultValues= event.data;
                                    }else{
                                      if(event.data === "pause"){
                                        gwd.auto_PauseBtnClick();
                                      }else{
                                        gwd.auto_PlayBtnClick();
                                      }
                                    }*/

                                }, false);
                              }, true);
                            </script>
                          </body>`);
            entry.setData(Buffer.from(index, "utf8"));
          }
          //create fileStream
          const gFile = bucket.file(`${result._id}/${entry.entryName}`),
            fileStream = gFile.createWriteStream({
              resumable: false,
              validation: false,
              forever: false,
            });
            fileStream.on("error", (err) => console.log(err));
            fileStream.on("finish", () => {
                count++;
                zip.getEntries().length === count? arrCount++ : null;
                //push to array
                arrCreatives.indexOf(entry.entryName) === -1 &&
                entry.isDirectory
                  ? arrCreatives.push({
                      index: arrCreatives.length,
                      name: entry.entryName.replace(/\\|\//g, ""),
                    })
                  : null;
                //check if all are uploaded to bucket
                if(arrCount === req.files.length){
                  CreativeModel.findByIdAndUpdate(
                    { _id: result._id },
                    { $set: { creatives: arrCreatives } },
                    { new: true },(err, cra) => {
                      if (err) {
                        return res
                          .status(500)
                          .json({ msg: "Sorry, internal server errors" });
                      }
                      console.log(cra);
                      return res.status(200).json(cra);
                    }
                  );
                }
              }
            );
            fileStream.end(entry.getData());
        });
      }
    });
  }
});

router.get("/get_creative", (req, res ) => {
  CreativeModel.findById(req.query.id, (error, result) => {
    //return
    if (error) {
      return res.status(500).json({ msg: "Sorry, internal server errors" });
    }

    return res.status(200).json(result);
  });
});

router.put("/update_creative", (req, res) => { 
  let obj = JSON.parse(`${req.query.dynamic}`);

  CreativeModel.findOneAndUpdate(
    {
      _id: req.query.id,
    },
    {
      $set: { "creatives.$[element].dynamic": obj.data.dynamic },
    },
    { multi:true, arrayFilters: [{ "element.index" : obj.data.index }], new:true },
    (error, result) => {
      if (error) {
        return res.status(500).json({ msg: "Sorry, internal server errors" });
      }

      return res.status(200).json(result);
    }
  );
})

module.exports = router;
