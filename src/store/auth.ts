import { defineStore } from "pinia"
import { ref, computed } from "vue"
import VueCookies from "vue-cookies"

export const useAuthStore = defineStore("auth", () => {
  const accessToken = ref<string>(VueCookies.get("accessToken") || "")
  const isToken = ref<boolean>(VueCookies.isKey("accessToken"))
  const setToken = (options: any) => {
    VueCookies.set("accessToken", options.accessToken, options.expires, "", "", options.secure)
    accessToken.value = options.accessToken
  }
  const removeToken = () => {
    VueCookies.remove("accessToken")
    accessToken.value = ""
  }
  const isLogin = computed(() => accessToken.value !== "")

  return { accessToken, isToken, setToken, isLogin, removeToken }
})
