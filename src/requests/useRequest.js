import { RequestType } from "../const/Globals";
import useHttpWrapper from "./useHttpWrapper";

export const useRequest = ({
  url,
  type = RequestType.GET,
  params: defaultParams,
}) => {
  const { doGet, doPost, doPut, doDelete } = useHttpWrapper();

  const doRequest = ({ params = defaultParams } = {}) => {
    let req = {
      path: "http://localhost:4000/"+url,
      data: { ...params },
    };
    return getRequestFunction(type, req);
  };

  const getRequestFunction = (requestType, requestData) => {
    switch (requestType) {
      case RequestType.GET:
        return doGet(requestData);

      case RequestType.POST:
        return doPost(requestData);

      case RequestType.PUT:
        return doPut(requestData);

      case RequestType.DELETE:
        return doDelete(requestData);

      default:
        return null;
    }
  };

  return { doRequest };
};
