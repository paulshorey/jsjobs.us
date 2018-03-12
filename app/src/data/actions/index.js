export const jobsAdd = jobs => ({
	type: "JOBS_ADD",
	jobs: jobs.map ? jobs : []
});
export const jobStatus = (_id, _status) => ({
	type: "JOB_STATUS",
	_id,
	_status
});

export const filterAdd = filter => ({
	type: "FILTER_ADD",
	filter
});
export const filterRemove = filter => ({
	type: "FILTER_REMOVE",
	filter
});
