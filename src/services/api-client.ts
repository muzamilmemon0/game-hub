import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "cfcdbc541c274a9e8c32ab63ac236079",
  },
});
