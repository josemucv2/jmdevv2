import axios from "axios";

export const sendEmail = (body) => {
  return axios.post("http://localhost:3000/send-email", body);
};
