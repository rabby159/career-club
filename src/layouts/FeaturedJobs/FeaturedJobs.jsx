import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [])


  return (
    <div className="my-20">
      <div className="flex justify-center text-center">
        <div>
          <h1 className="text-5xl font-extrabold">Featured Jobs</h1>
          <p className="mt-5">
            Explore thousands of job opportunities with all the information you
            need. Its your future.
          </p>
        </div>
      </div>
      <div>
        {
            jobs.map(job => <Job key={job.id} job={job}></Job>)
        }
      </div>
      <div></div>
    </div>
  );
};

export default FeaturedJobs;
