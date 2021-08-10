import configAxios from "./axiosClient";

const taskApi = {
  getAll() {
    const url = "/todos?_limit=5";
    return configAxios.get(url);
  },
  postTask(data) {
    const url = "/todos";
    return configAxios.post(url, data);
  },
  putTask(id, data) {
    const url = "/todos/" + id;
    return configAxios.put(url, data);
  },
  deleteTask(id) {
    const url = "/todos/" + id;
    return configAxios.delete(url);
  },
};
export default taskApi;
