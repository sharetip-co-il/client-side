import { RequestType } from "../../const/Globals";
import { useRequest } from "../useRequest";

export const usePaymentTo = () => {
  const reqParams = {
    type: RequestType.POST,
    url: "api/payTo",
  };
  return useRequest(reqParams);
};
