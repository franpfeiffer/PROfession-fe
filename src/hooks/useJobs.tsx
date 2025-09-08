import { useSelector, useDispatch } from "react-redux"
import type { RootState, AppDispatch } from "../store"
import { fetchJobs, fetchJobById, createJob, fetchMyJobs, setFilters } from "../store/slices/jobsSlice"
import type { JobFilters } from "../services/jobs.service"
import type { CreateJobData } from "../types/job.types"

export const useJobs = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { jobs, currentJob, myJobs, myProposals, isLoading, error, pagination, filters } = useSelector(
        (state: RootState) => state.jobs,
    )

    const loadJobs = (filters?: JobFilters) => {
        return dispatch(fetchJobs(filters || {}))
    }

    const loadJobById = (id: string) => {
        return dispatch(fetchJobById(id))
    }

    const createNewJob = (data: CreateJobData) => {
        return dispatch(createJob(data))
    }

    const loadMyJobs = () => {
        return dispatch(fetchMyJobs())
    }

    const updateFilters = (newFilters: JobFilters) => {
        dispatch(setFilters(newFilters))
    }

    return {
        jobs,
        currentJob,
        myJobs,
        myProposals,
        isLoading,
        error,
        pagination,
        filters,
        loadJobs,
        loadJobById,
        createNewJob,
        loadMyJobs,
        updateFilters,
    }
}

