import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f9acfaf0a70241849be7c3eec6636eed",
  },
});
