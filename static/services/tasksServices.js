// import { Vue } from "vue";

const createNewTask = async (data) => {
  try {
    const service = "tasks";
    const path = "/tasks";
    const method = "post";
    return await window.$nuxt.$axiosrebulider(service, path, method, data);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createNewTask,
};
