import axios from "axios";

export const fetchPhotos = async (query, page) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos/?`, {
    params: {
      client_id: "hhjCiHzv5_9lvhQmtRMXaoeuNP23c8GZAtYjYsl2GEU",
      query,
      page,
    },
  });

  return response.data;
};
