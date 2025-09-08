export interface ApiResponse<T = any> {
    success: boolean
    data: T
    message?: string
    errors?: Record<string, string[]>
}

export interface PaginatedResponse<T> {
    data: T[]
    total: number
    page: number
    limit: number
    totalPages: number
}

export interface ApiError {
    message: string
    status: number
    errors?: Record<string, string[]>
}

