import axios from "axios";
export const bookApponaiment =
  (name, email, phone, slotid) => async (dispatch) => {
    try {
      dispatch({ type: "APPONAIMENT_CREATE_REQUEST" });

      const obj = {
        name,
        email,
        phone,
        sloats: slotid,
      };
      const { data } = await axios.post(`/post/appointment`, obj);

      dispatch({
        type: "APPONAIMENT_CREATE_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "APPONAIMENT_CREATE_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const UpdateApponaiment =
  (name, email, phone, appid) => async (dispatch) => {
    try {
      dispatch({ type: "APPONAIMENT_UPDATE_REQUEST" });

      const obj = {
        name,
        email,
        phone,
      };
      const { data } = await axios.put(
        `http://localhost:5000/update/appoinment/${appid}`,
        obj
      );

      dispatch({
        type: "APPONAIMENT_UPDATE_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "APPONAIMENT_UPDATE_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
