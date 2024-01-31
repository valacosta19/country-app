import axios from "axios";

const intance = axios.create({
  baseURL: "https://restcountries.com/v3.1"
})

export default intance