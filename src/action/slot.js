import axios from "axios";
export const listOfSloats = () => async (dispatch) => {
  try {
    dispatch({ type: "SLOT_LIST_REQUEST" });

    const { data } = await axios.get(`/list/slots`);

    dispatch({
      type: "SLOT_LIST_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "SLOT_LIST_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
