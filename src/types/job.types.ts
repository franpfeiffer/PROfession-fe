export interface Job {
    id: string
    title: string
    description: string
    category: string
    budget: {
        min: number
        max: number
        currency: "ARS"
    }
    location: {
        address: string
        city: string
        province: string
        coordinates: {
            lat: number
            lng: number
        }
    }
    images: string[]
    urgency: "low" | "medium" | "high"
    status: "open" | "in_progress" | "completed" | "cancelled"
    clientId: string
    client: {
        id: string
        firstName: string
        lastName: string
        avatar?: string
        rating: number
    }
    proposals: JobProposal[]
    selectedProposalId?: string
    createdAt: string
    updatedAt: string
    deadline?: string
}

export interface JobProposal {
    id: string
    jobId: string
    professionalId: string
    professional: {
        id: string
        firstName: string
        lastName: string
        businessName?: string
        avatar?: string
        rating: number
        reviewsCount: number
    }
    message: string
    budget: number
    estimatedDuration: string
    status: "pending" | "accepted" | "rejected"
    createdAt: string
}

export interface CreateJobData {
    title: string
    description: string
    category: string
    budget: {
        min: number
        max: number
    }
    location: {
        address: string
        city: string
        province: string
        coordinates: {
            lat: number
            lng: number
        }
    }
    images?: File[]
    urgency: "low" | "medium" | "high"
    deadline?: string
}

export interface CreateProposalData {
    jobId: string
    message: string
    budget: number
    estimatedDuration: string
}

