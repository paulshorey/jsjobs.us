const jobs = (state = [], action) => {
	switch (action.type) {
		case "JOB_ADD":
			return [Object.assign({}, action.job), ...state];
		case "JOBS_ADD":
			return action.jobs;
		case "JOB_STATUS":
			return state.map(job => (job._id === action._id ? { ...job, status: action._status } : job));
		default:
			return state;
	}
};

export default jobs;
