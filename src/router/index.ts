import { createRouter, createWebHistory } from "vue-router"
import routes from "./routes"
import { useAuthStore } from "@/store/auth"

const publicPaths = ["/login"]

const router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  history: createWebHistory(),
  routes: routes,
})

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()
  const accessToken = authStore.accessToken
  if (!accessToken) {
    if (publicPaths.includes(to?.path)) {
      next()
    } else {
      if (to.name == "home") {
        next("/login")
      } else next(`/login?redirect=${to?.fullPath}`)
    }
    
  } else {
    if (to.name == "login") {
      next("/")
    }
  }
  next()
})

export default router
