import axios from "axios";

const Api = {
  addUser: (data: any) => {
    console.log(data);
    return axios({
      url: "/addUser",
      data,
      method: "post"
    });
  },
  searchUser: (data: any) => {
    console.log(data)
    return axios({
      url: "/serachUser",
      data,
      method: "post"
    });
  }
};

export default Api;
