export const jobsAdd = jobs => ({
	type: "JOBS_ADD",
	jobs: jobs.map ? jobs : []
});
export const jobAdd = job => ({
	type: "JOB_ADD",
	job
});
export const jobStatus = (_id, _status) => ({
	type: "JOB_STATUS",
	_id,
	_status
});
