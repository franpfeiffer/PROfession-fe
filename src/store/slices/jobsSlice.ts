import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit"
import jobsServiceInstance, { type JobFilters } from "../../services/jobs.service"
import type { Job, CreateJobData, JobProposal } from "../../types/job.types"

interface JobsState {
    jobs: Job[]
    currentJob: Job | null
    myJobs: Job[]
    myProposals: JobProposal[]
    isLoading: boolean
    error: string | null
    pagination: {
        total: number
        page: number
        limit: number
        totalPages: number
    }
    filters: JobFilters
}

const initialState: JobsState = {
    jobs: [],
    currentJob: null,
    myJobs: [],
    myProposals: [],
    isLoading: false,
    error: null,
    pagination: {
        total: 0,
        page: 1,
        limit: 10,
        totalPages: 0,
    },
    filters: {},
}

export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async (filters: JobFilters, { rejectWithValue }) => {
    try {
        return await jobsServiceInstance.getJobs(filters)
    } catch (error: any) {
        return rejectWithValue(error.message)
    }
})

export const fetchJobById = createAsyncThunk("jobs/fetchJobById", async (id: string, { rejectWithValue }) => {
    try {
        return await jobsServiceInstance.getJobById(id)
    } catch (error: any) {
        return rejectWithValue(error.message)
    }
})

export const createJob = createAsyncThunk("jobs/createJob", async (data: CreateJobData, { rejectWithValue }) => {
    try {
        return await jobsServiceInstance.createJob(data)
    } catch (error: any) {
        return rejectWithValue(error.message)
    }
})

export const fetchMyJobs = createAsyncThunk("jobs/fetchMyJobs", async (_, { rejectWithValue }) => {
    try {
        return await jobsServiceInstance.getMyJobs()
    } catch (error: any) {
        return rejectWithValue(error.message)
    }
})

const jobsSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null
        },
        setFilters: (state, action: PayloadAction<JobFilters>) => {
            state.filters = { ...state.filters, ...action.payload }
        },
        clearCurrentJob: (state) => {
            state.currentJob = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchJobs.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(fetchJobs.fulfilled, (state, action) => {
                state.isLoading = false
                state.jobs = action.payload.data
                state.pagination = {
                    total: action.payload.total,
                    page: action.payload.page,
                    limit: action.payload.limit,
                    totalPages: action.payload.totalPages,
                }
            })
            .addCase(fetchJobs.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload as string
            })
            .addCase(fetchJobById.fulfilled, (state, action) => {
                state.currentJob = action.payload
            })
            .addCase(createJob.fulfilled, (state, action) => {
                state.jobs.unshift(action.payload)
                state.myJobs.unshift(action.payload)
            })
            .addCase(fetchMyJobs.fulfilled, (state, action) => {
                state.myJobs = action.payload
            })
    },
})

export const { clearError, setFilters, clearCurrentJob } = jobsSlice.actions
export default jobsSlice.reducer

