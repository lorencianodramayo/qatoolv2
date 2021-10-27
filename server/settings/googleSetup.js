const { Storage } = require("@google-cloud/storage");

const storage = new Storage({
  projectId: process.env.GCLOUD_PROJECT_ID,
  credentials: {
    client_email: process.env.GCLOUD_CLIENT_EMAIL,
    private_key: process.env.GCLOUD_PRIVATE_KEY,
  },
});

//bucket name
const bucket = storage.bucket(process.env.GCS_BUCKET);

module.exports = bucket;
