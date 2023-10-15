import { HttpClient } from "../utils/http";

export const getShipmentTrackStatus = async (trackingNumber) => {
  const res = await HttpClient.get(`shipments/track/${trackingNumber}`);
  return res.data;
};
