import { apiLogin } from "@/apis/auth"
import { useAuthStore } from "@/store/auth"

export const useAuth = () => {
  const login = async (body: any, isSaveLogin?: boolean) => {
    try {
      const data: any = await apiLogin(body)
      const accessToken = data.accessToken
      const options = {
        accessToken: accessToken,
        expires: isSaveLogin ? 60 * 60 * 24 * 7 : null,
        secure: true,
      }
      useAuthStore().setToken(options)
      return data
    } catch (e) {
      console.error(e)
      throw new Error("Login failed")
    }
  }

  const logout = () => {
    useAuthStore().removeToken()
  }

  return {
    login,
    logout
  }
}
