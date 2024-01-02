import axios from "axios";

const useHttpWrapper = () => {
  const doGet = async ({ path, data: params }) => {
    try {
      const response = await axios.get(path, { params });
      // Handle the response as needed
      console.log(response.data);
      return response.data;
    } catch (error) {
      // Handle the error as needed
      console.error(error);
      throw error;
    }
  };

  const doPost = async ({ path, data }) => {
    try {
      console.log("path, data", path, data);
      const response = await axios.post(path, data);
        // Handle the response as needed
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      // Handle the error as needed
      console.error(error);
      throw error;
    }
  };

  const doPut = async ({ path, data }) => {
    try {
      const response = await axios.put(path, data);
      // Handle the response as needed
      console.log(response.data);
      return response.data;
    } catch (error) {
      // Handle the error as needed
      console.error(error);
      throw error;
    }
  };

  const doDelete = async ({ path, data }) => {
    try {
      const response = await axios.delete(path, { data });
      // Handle the response as needed
      console.log(response.data);
      return response.data;
    } catch (error) {
      // Handle the error as needed
      console.error(error);
      throw error;
    }
  };

  return { doGet, doPost, doPut, doDelete };
};

export default useHttpWrapper;
