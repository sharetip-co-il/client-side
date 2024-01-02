import Swal from "sweetalert2"
import api from "../api"

const useHttp = () => {

  const handleRequest = async (
    requestFn,
    path,
    data,
    options,
    successText,
    errorText
  ) => {
    try {

      const res = await requestFn(path, data, options)

      if (successText) {
        await Swal.fire({
          title: successText,
          icon: "success",
          confirmButtonText: "אישור",
        })
      }

      return res?.data
    } catch (e) {
      if (errorText && !e?.response?.data?.outputMessage) {
        Swal.fire({
          title: errorText,
          icon: "error",
          confirmButtonText: "אישור",
        })
      }

      throw e
    } finally {
    }
  }

  const createRequest = (requestFn) => {
    return async (
      path,
      data = {},
      options = {},
      useLoader = false,
      successText = null,
      errorText = null
    ) => {
      return handleRequest(
        requestFn,
        path,
        data,
        options,
        useLoader,
        successText,
        errorText
      )
    }
  }

  const get = createRequest(api.get)
  const post = createRequest(api.post)
  const put = createRequest(api.put)
  const remove = createRequest(api.delete)

  return [get, post, put, remove]
}

export default useHttp