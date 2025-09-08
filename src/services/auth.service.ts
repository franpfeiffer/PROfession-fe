import Cookies from "js-cookie"
import { apiClient } from "./api"
import { API_ENDPOINTS } from "../config/env"
import type { AuthUser, LoginCredentials, RegisterData, User } from "../types/user.types"

class AuthService {
    async login(credentials: LoginCredentials): Promise<AuthUser> {
        const response = await apiClient.post<AuthUser>(API_ENDPOINTS.LOGIN, credentials)

        Cookies.set("auth_token", response.token, { expires: 7 })
        Cookies.set("refresh_token", response.refreshToken, { expires: 30 })

        return response
    }

    async register(data: RegisterData): Promise<AuthUser> {
        const response = await apiClient.post<AuthUser>(API_ENDPOINTS.REGISTER, data)

        Cookies.set("auth_token", response.token, { expires: 7 })
        Cookies.set("refresh_token", response.refreshToken, { expires: 30 })

        return response
    }

    async logout(): Promise<void> {
        try {
            await apiClient.post(API_ENDPOINTS.LOGOUT)
        } catch (error) {
            console.error("Logout error:", error)
        } finally {
            Cookies.remove("auth_token")
            Cookies.remove("refresh_token")
        }
    }

    async getCurrentUser(): Promise<User> {
        return apiClient.get<User>(API_ENDPOINTS.PROFILE)
    }

    async updateProfile(data: Partial<User>): Promise<User> {
        return apiClient.put<User>(API_ENDPOINTS.UPDATE_PROFILE, data)
    }

    isAuthenticated(): boolean {
        return !!Cookies.get("auth_token")
    }

    getToken(): string | undefined {
        return Cookies.get("auth_token")
    }
}

export default new AuthService()

