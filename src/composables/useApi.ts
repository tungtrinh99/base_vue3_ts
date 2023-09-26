import api from "@/plugins/axios"

export function useApi<T>(url: string) {
  const httpGet = async (params?: any) => {
    try {
      const response = await api.get<T>(url, params)
      return response
    } catch (err: any) {
      throw new Error(err.message || "Error custome message")
    }
  }
  const httpPost = async (data: any) => {
    try {
      const response = await api.post<T>(url, data)
      return response
    } catch (err: any) {
      throw new Error(err.message || "Error custome message")
    }
  }
  const httpPut = async (data: any, params?: any) => {
    try {
      const response = await api.put<T>(url, data, params)
      return response
    } catch (err: any) {
      throw new Error(err.message || "Error custome message")
    }
  }
  const httpDelete = async (params?: any) => {
    try {
      const response = await api.delete<T>(url, params)
      return response
    } catch (err: any) {
      throw new Error(err.message || "Error custome message")
    }
  }

  return {
    httpGet,
    httpPost,
    httpPut,
    httpDelete,
  }
}
