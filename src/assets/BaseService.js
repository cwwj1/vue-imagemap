import axios from "axios";
const BaseService = axios.create({
  responseType: "json",
});

export default BaseService;