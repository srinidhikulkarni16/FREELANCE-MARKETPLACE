// Services/NewReq.js
import axios from "axios";

const newRequest = axios.create({
  baseURL: "http://localhost:8800/api",
  withCredentials: true, // MUST BE TRUE
});

export default newRequest;