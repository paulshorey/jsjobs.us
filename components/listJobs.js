
import React from 'react'
import Link from 'next/link'

export default class Nav extends React.Component {
    render () {
        // console.log('render ListJobs',this.props);
        var Jobs = [];
        this.props.jobs.forEach(function(job,i){
            Jobs.push(
            <div key={job._id}>
                <p>{job.text}</p>
            </div>
            );
        });
        return (
            <div>
            <Nav />
            <div>
                <p>Found {this.props.jobs_count} results:</p>
                {/* <Link prefetch href='/'><a>Sort normally &raquo;</a></Link> */}
            </div>
            <div>
                
            </div>
            </div>
        )
    }
}