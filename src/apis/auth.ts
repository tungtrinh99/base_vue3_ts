/*Declare the list of APIs authentication here*/
import { useApi } from "@/composables/useApi"

export const apiLogin = (body: any) => {
  return useApi<any>("/login").httpPost(body)
}
