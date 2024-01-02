import { RequestType } from "../../const/Globals";
import { useRequest } from "../useRequest";

export const useContactUs = () => {
  const reqParams = {
    type: RequestType.POST,
    url: "api/contactUs",
  };
  return useRequest(reqParams);
};
