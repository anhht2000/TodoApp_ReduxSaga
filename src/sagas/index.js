import {
  call,
  delay,
  fork,
  put,
  select,
  take,
  takeLatest,
} from "redux-saga/effects";
import taskApi from "../api/taskApi";
import { FAIL_DATA, FETCH_DATA, SUCCESS_DATA } from "../constants/task";
import { v4 as uuidv4 } from "uuid";

export default function* rootSaga() {
  try {
    yield fork(watchGetListTask); // cach nay cu roi, bay gio dung takeLastest
    yield takeLatest("FILTER_DATA", handleFilter);
    yield takeLatest("ADD_TASK", addTask);
    yield takeLatest("UPDATE_TASK", updateTask);
    yield takeLatest("DELETE_TASK", deleteTask);
  } catch (error) {
    console.log(error);
  }
}
function* deleteTask({ payload }) {
  try {
    const data = yield call(taskApi.deleteTask, payload.id);
    yield put({ type: "DELETE_TASK_SUCCESS", payload: payload });
  } catch (error) {
    console.log(error);
  }
}
function* updateTask({ payload }) {
  try {
    const dataPut = yield call(taskApi.putTask, payload.id, payload);
    yield put({ type: "UPDATE_TASK_SUCCESS", payload: payload });
    // const data = yield call(taskApi.getAll);
    // yield put({ type: SUCCESS_DATA, payload: data });
  } catch (error) {
    console.log(error);
  }
}
//
function* addTask({ payload }) {
  const { description, title } = payload;
  const newTask = {
    completed: false,
    description,
    title,
    id: uuidv4(),
  };
  yield call(taskApi.postTask, newTask);
  yield put({ type: "ADD_TASK_SUCCESS", payload: newTask });
}
function* handleFilter({ payload }) {
  const data = yield select((state) => state.task.data);
  const filterData = data.filter((value) => {
    return value.title.toLowerCase().includes(payload.keyword.toLowerCase());
  });
  yield put({ type: "FILTER_DATA_SUCCESS", payload: filterData });
}
function* watchGetListTask() {
  try {
    yield take(FETCH_DATA);
    console.log("saga fetch");

    const data = yield call(taskApi.getAll);
    yield put({ type: SUCCESS_DATA, payload: data });
  } catch (error) {
    yield put({ type: FAIL_DATA, payload: error });
  }
}
