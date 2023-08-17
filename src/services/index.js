import axios from "axios";

export const sendEmail = (body) => {
  return axios.post(`${process.env.REACT_APP_API}/send-email`, body);
};
