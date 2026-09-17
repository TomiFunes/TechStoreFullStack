import { api } from "../../../lib/axios";

export const createOrder = async (total: number) => {
  const response = await api.post("/orders", {
    total,
  });

  return response.data;
};
