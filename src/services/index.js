import axios from "axios";

export const sendEmail = (body) => {
  return axios.post("https://send-email-api-eta.vercel.app/send-email", body);
};
