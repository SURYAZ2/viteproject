import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "debc4248a8ba4033b017f4b499c3be36",
  },
});
