import axios from "axios";

export const api = axios.create({
  // baseUrl: `${process.env.REACT_APP_API_BASE_URL}`,
  headers: {
    key: "bdkawbkau2121bfab",
  },
});
