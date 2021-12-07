export const apponaimentCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case "APPONAIMENT_CREATE_REQUEST":
      return {
        loading: true,
      };
    case "APPONAIMENT_CREATE_SUCCESS":
      return {
        loading: false,
        success: true,
        order: action.payload,
      };
    case "APPONAIMENT_CREATE_FAIL":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const apponaimentUpdateReducer = (
  state = { apponaiment: {} },
  action
) => {
  switch (action.type) {
    case "APPONAIMENT_UPDATE_REQUEST":
      return { loading: true };
    case "APPONAIMENT_UPDATE_SUCCESS":
      return { loading: false, success: true, apponaiment: action.payload };
    case "APPONAIMENT_UPDATE_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
