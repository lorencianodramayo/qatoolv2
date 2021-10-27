import axios from "axios";

export const saveZip = (files) => async (dispatch) => {
  const formData = new FormData();

  for (const file of files) {
    formData.append("files", file); 
  }

  try {
    const res = await axios({
      method: "POST",
      url: "/api/save_zip",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    dispatch({
      type: "SAVE_ZIP",
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: "DATA_ERROR",
      payload: error,
    });
  }
};

export const getCreative = (id) => async (dispatch) => {
  try{
    const res = await axios({
      method: "GET",
      url: "/api/get_creative",
      params: {
        id
      }
    });

    dispatch({
      type: "GET_CREATIVE",
      payload: res.data,
    });
  }catch(error) {
    dispatch({
      type: "DATA_ERROR",
      payload: error,
    });
  }
}

export const updateCreative = (id, dynamic) => async (dispatch) => {
  try{
    const res = await axios({
      method: "PUT",
      url: "/api/update_creative",
      params: {
        id,
        dynamic,
      },
    });

    dispatch({
      type: "UPDATE_CREATIVE",
      payload: res.data,
    });
  }catch(error) {
    dispatch({
      type: "DATA_ERROR",
      payload: error,
    });
  }
}

//set iframe
export const setFrame = (index) => (dispatch) => {
  try{
    dispatch({
      type: "SET_FRAME",
      payload: index,
    });
  }catch(error) {
    dispatch({
      type: "DATA_ERROR",
      payload: error,
    });
  }
}

//increment
export const increment = (count) => (dispatch) => {
  try {
    dispatch({
      type: "INCREMENT",
      payload: count,
    });
  } catch (error) {
    dispatch({
      type: "DATA_ERROR",
      payload: error,
    });
  }
}