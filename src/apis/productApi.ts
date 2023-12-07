import http from "@/axios/http";
import { API_URL_PRODUCT } from "@/constant/apiConstant";

export const getProductById = (id: string) =>
  http({
    url: API_URL_PRODUCT,
    method: "get",
    params: { id },
  });
