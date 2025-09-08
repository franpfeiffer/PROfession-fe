export interface User {
    id: string
    email: string
    firstName: string
    lastName: string
    phone?: string
    avatar?: string
    userType: "client" | "professional"
    isVerified: boolean
    createdAt: string
    updatedAt: string
}

export interface Professional extends User {
    userType: "professional"
    businessName?: string
    description?: string
    categories: string[]
    location: {
        address: string
        city: string
        province: string
        coordinates: {
            lat: number
            lng: number
        }
    }
    rating: number
    reviewsCount: number
    completedJobs: number
    portfolio: PortfolioItem[]
    isAvailable: boolean
    hourlyRate?: number
}

export interface PortfolioItem {
    id: string
    title: string
    description: string
    images: string[]
    category: string
    completedAt: string
}

export interface AuthUser {
    user: User
    token: string
    refreshToken: string
}

export interface LoginCredentials {
    email: string
    password: string
}

export interface RegisterData {
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string
    userType: "client" | "professional"
}

