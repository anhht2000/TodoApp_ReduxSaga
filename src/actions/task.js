import { FAIL_DATA, FETCH_DATA, SUCCESS_DATA } from "../constants/task";
import taskApi from "../api/taskApi";
import { toast } from "react-toastify";

const getDataTaskFromApi = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_DATA });
    const data = await taskApi.getAll();
    console.log(data);
    dispatch({ type: SUCCESS_DATA, payload: data });
  } catch (error) {
    toast.dark("🦄 Wow so easy!");
    dispatch({ type: FAIL_DATA, payload: error });
  }
};
export default getDataTaskFromApi;
