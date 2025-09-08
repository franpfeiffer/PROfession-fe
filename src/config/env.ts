export const ENV = {
    API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080/api",
    SOCKET_URL: process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:8080",
    JWT_SECRET: process.env.JWT_SECRET || "your-jwt-secret",
    MERCADO_PAGO_PUBLIC_KEY: process.env.NEXT_PUBLIC_MERCADO_PAGO_PUBLIC_KEY || "",
    GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
} as const

export const API_ENDPOINTS = {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    REFRESH_TOKEN: "/auth/refresh",
    LOGOUT: "/auth/logout",

    PROFILE: "/users/profile",
    UPDATE_PROFILE: "/users/profile",

    JOBS: "/jobs",
    CREATE_JOB: "/jobs",
    JOB_DETAIL: (id: string) => `/jobs/${id}`,
    APPLY_JOB: (id: string) => `/jobs/${id}/apply`,

    CONVERSATIONS: "/messages/conversations",
    MESSAGES: (conversationId: string) => `/messages/${conversationId}`,
    SEND_MESSAGE: "/messages/send",

    CATEGORIES: "/categories",

    REVIEWS: "/reviews",
    CREATE_REVIEW: "/reviews",
} as const

