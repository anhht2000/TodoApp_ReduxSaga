import { FAIL_DATA, FETCH_DATA, SUCCESS_DATA } from "../constants/task";
const initialValue = {
  isLoading: false,
  data: null,
  err: null,
  // filterdata: null,
};

const taskReducer = function (state = initialValue, action) {
  switch (action.type) {
    case FETCH_DATA:
      console.log("fetch");
      return { ...state, isLoading: true, data: null };
    case SUCCESS_DATA:
      return { ...state, isLoading: false, data: action.payload };
    case FAIL_DATA:
      return { ...state, isLoading: false, err: action.payload };
    case "FILTER_DATA":
      return {
        ...state,
        isLoading: true,
      };
    case "FILTER_DATA_SUCCESS":
      return { ...state, data: action.payload, isLoading: false };
    case "ADD_TASK":
      return { ...state, isLoading: true };
    case "ADD_TASK_SUCCESS":
      return {
        ...state,
        isLoading: false,
        data: [action.payload, ...state.data],
      };
    case "UPDATE_TASK":
      return { ...state, isLoading: true };
    case "UPDATE_TASK_SUCCESS":
      const idUpdate = action.payload.id;
      const index = state.data.findIndex((element) => {
        return element.id === idUpdate;
      });
      const newData = [
        ...state.data.slice(0, index),
        action.payload,
        ...state.data.slice(index + 1),
      ];
      return { ...state, isLoading: false, data: newData };
    case "DELETE_TASK":
      return { ...state, isLoading: true };
    case "DELETE_TASK_SUCCESS":
      const idDelete = action.payload.id;
      const indexD = state.data.findIndex((element) => {
        return element.id === idDelete;
      });
      const newDataD = [
        ...state.data.slice(0, indexD),
        ...state.data.slice(indexD + 1),
      ];
      return { ...state, isLoading: false, data: newDataD };
    default:
      return state;
  }
};
export default taskReducer;
