import axios from "axios";

const API_URL = "http://localhost:8080/api/click";

export const getAllClicks = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const findClicksById = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};

export const findClicksByLinkId = async (linkId) => {
  const res = await axios.get(`${API_URL}/link/${linkId}`);
  return res.data;
};

export const countByLinkIdLink = async (linkId) => {
  const res = await axios.get(`${API_URL}/count/${linkId}`);
  return res.data;
};
