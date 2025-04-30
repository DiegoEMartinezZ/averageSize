import axios from "axios";

const API_URL = "http://localhost:8080/api/links";

export const getAllLinksByUserId = async (userId) => {
  const res = await axios.get(`${API_URL}/user/${userId}`);
  return res.data;
};

export const getLinkById = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};

export const createLink = async (link) => {
  const res = await axios.post(API_URL, link);
  return res.data;
};

export const getLinkByShortUrl = async (shortUrl) => {
  const res = await axios.get(`${API_URL}/shortUrl/${shortUrl}`);
  return res.data;
};

export const getAllActiveLinks = async (userId) => {
  const res = await axios.get(`${API_URL}/user/${userId}`);
  return res.data;
};

export const updateLink = async (link) => {
  const res = await axios.put(`${API_URL}/${link.id}/update`, link);
  return res.data;
};

export const deleteLink = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};

export const activateLink = async (id) => {
  const res = axios.post(`${API_URL}/${id}/activate`);
  return res.data;
};

export const generateShortUrl = async (link) => {
  const res = await axios.post(`${API_URL}/generateShortUrl`, link);
  return res.data;
};
