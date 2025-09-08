import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from "axios"
import Cookies from "js-cookie"
import { ENV, API_ENDPOINTS } from "../config/env"
import type { ApiResponse, ApiError } from "../types/api.types"

class ApiClient {
    private client: AxiosInstance

    constructor() {
        this.client = axios.create({
            baseURL: ENV.API_BASE_URL,
            timeout: 10000,
            headers: {
                "Content-Type": "application/json",
            },
        })

        this.setupInterceptors()
    }

    private setupInterceptors() {
        this.client.interceptors.request.use(
            (config) => {
                const token = Cookies.get("auth_token")
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`
                }
                return config
            },
            (error) => Promise.reject(error),
        )

        this.client.interceptors.response.use(
            (response: AxiosResponse<ApiResponse>) => response,
            async (error) => {
                const originalRequest = error.config

                if (error.response?.status === 401 && !originalRequest._retry) {
                    originalRequest._retry = true

                    try {
                        const refreshToken = Cookies.get("refresh_token")
                        if (refreshToken) {
                            const response = await this.client.post(API_ENDPOINTS.REFRESH_TOKEN, {
                                refreshToken,
                            })

                            const { token } = response.data.data
                            Cookies.set("auth_token", token)

                            return this.client(originalRequest)
                        }
                    } catch (refreshError) {
                        Cookies.remove("auth_token")
                        Cookies.remove("refresh_token")
                        window.location.href = "/login"
                    }
                }

                const apiError: ApiError = {
                    message: error.response?.data?.message || "Error de conexión",
                    status: error.response?.status || 500,
                    errors: error.response?.data?.errors,
                }

                return Promise.reject(apiError)
            },
        )
    }

    async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.client.get<ApiResponse<T>>(url, config)
        return response.data.data
    }

    async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.client.post<ApiResponse<T>>(url, data, config)
        return response.data.data
    }

    async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.client.put<ApiResponse<T>>(url, data, config)
        return response.data.data
    }

    async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.client.delete<ApiResponse<T>>(url, config)
        return response.data.data
    }

    async uploadFiles(url: string, files: File[], additionalData?: Record<string, any>): Promise<any> {
        const formData = new FormData()

        files.forEach((file, index) => {
            formData.append(`files`, file)
        })

        if (additionalData) {
            Object.entries(additionalData).forEach(([key, value]) => {
                formData.append(key, typeof value === "object" ? JSON.stringify(value) : value)
            })
        }

        return this.post(url, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
    }
}

export const apiClient = new ApiClient()

