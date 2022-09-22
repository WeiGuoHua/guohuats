// import axios from "../../utils/request";
import axios from "axios";
const Api = {
  getUserList: (data: any) => {    
    return axios({
      url: `/api/blog/list`,
      data,
      method: "post"
    });
  },
  addUser: (data: any) => {
    return axios({
      url: "/api/blog/new",
      data,
      method: "post"
    });
  },
  searchUser: (data: any) => {
    return axios({
      url: "/serachUser",
      data,
      method: "post"
    });
  },
  deleteUser: (data: any) => {
    return axios({
      url: "/api/blog/del",
      data,
      method: "post"
    });
  },
  editUser: (data: any) => {
    return axios({
      url: "/api/blog/update",
      data,
      method: "post"
    });
  },
  getUserDetail: (id: string | number) => {
    return axios({
      url: `/api/blog/detail?id=${id}`,
      method: "get",
    });
  }
};

export default Api;
