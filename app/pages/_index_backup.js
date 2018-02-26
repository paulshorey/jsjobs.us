// import React from 'react'
// import 'isomorphic-unfetch'

// import Nav from 'components/nav'

// export default class MyPage extends React.Component {
//   static async getInitialProps () {
//     // eslint-disable-next-line no-undef
//     const res = await fetch('http://localhost/api/v1/jobs/all?location=')
//     const json = await res.json()
//     const data = { jobs_count:json.results, jobs:json.data };
//     return data;
//   }
  
//   render () {
//     console.log("\nthis.props", this.props, "\n");
//     var Jobs = [];
//     if (this.props && this.props.jobs) {
//       this.props.jobs.forEach(function(job,i){
//         Jobs.push(
//           <div key={job._id}>
//             <div>{job.text}</div>
//             <sup>{job.location}</sup>
//           </div>
//         );
//       });
//     }

//     return (
//         <div>
//           <Nav />
//           <h2>Index... Count: {this.props.jobs_count}</h2>
//           <div>
//             {Jobs}
//           </div>
//         </div>
//     )
//   }
// }