// import axios from "../../utils/request";
import axios from "axios";
const Api = {
  getUserList: (data: any) => {
    return axios({
      url: `/login`,
      data,
      method: "post"
    });
  }
};

export default Api;
