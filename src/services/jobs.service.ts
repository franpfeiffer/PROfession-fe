import { apiClient } from "./api"
import { API_ENDPOINTS } from "../config/env"
import type { Job, CreateJobData, JobProposal, CreateProposalData } from "../types/job.types"
import type { PaginatedResponse } from "../types/api.types"

export interface JobFilters {
    category?: string
    location?: string
    budgetMin?: number
    budgetMax?: number
    urgency?: string
    page?: number
    limit?: number
}

class JobsService {
    async getJobs(filters: JobFilters = {}): Promise<PaginatedResponse<Job>> {
        const params = new URLSearchParams()

        Object.entries(filters).forEach(([key, value]) => {
            if (value !== undefined && value !== "") {
                params.append(key, value.toString())
            }
        })

        return apiClient.get<PaginatedResponse<Job>>(`${API_ENDPOINTS.JOBS}?${params.toString()}`)
    }

    async getJobById(id: string): Promise<Job> {
        return apiClient.get<Job>(API_ENDPOINTS.JOB_DETAIL(id))
    }

    async createJob(data: CreateJobData): Promise<Job> {
        if (data.images && data.images.length > 0) {
            return apiClient.uploadFiles(API_ENDPOINTS.CREATE_JOB, data.images, {
                title: data.title,
                description: data.description,
                category: data.category,
                budget: data.budget,
                location: data.location,
                urgency: data.urgency,
                deadline: data.deadline,
            })
        }

        return apiClient.post<Job>(API_ENDPOINTS.CREATE_JOB, data)
    }

    async applyToJob(data: CreateProposalData): Promise<JobProposal> {
        return apiClient.post<JobProposal>(API_ENDPOINTS.APPLY_JOB(data.jobId), data)
    }

    async getMyJobs(): Promise<Job[]> {
        return apiClient.get<Job[]>(`${API_ENDPOINTS.JOBS}/my-jobs`)
    }

    async getMyProposals(): Promise<JobProposal[]> {
        return apiClient.get<JobProposal[]>(`${API_ENDPOINTS.JOBS}/my-proposals`)
    }

    async acceptProposal(jobId: string, proposalId: string): Promise<Job> {
        return apiClient.post<Job>(`${API_ENDPOINTS.JOB_DETAIL(jobId)}/accept-proposal`, {
            proposalId,
        })
    }

    async completeJob(jobId: string): Promise<Job> {
        return apiClient.post<Job>(`${API_ENDPOINTS.JOB_DETAIL(jobId)}/complete`)
    }
}

export default new JobsService()

