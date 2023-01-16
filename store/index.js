import Vuex from "vuex";
import tasks from "./module/Tasks";
const createStore = () => {
  return new Vuex.Store({
    modules: {
      tasks,
    },
  });
};
export default createStore;