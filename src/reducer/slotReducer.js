export const slotListReducer = (state = { sloats: [] }, action) => {
  switch (action.type) {
    case "SLOT_LIST_REQUEST":
      return { loading: true, sloats: [] };
    case "SLOT_LIST_SUCCESS":
      return {
        loading: false,
        sloats: action.payload,
      };
    case "SLOT_LIST_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
