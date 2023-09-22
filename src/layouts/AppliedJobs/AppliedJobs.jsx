import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/localStorage";
import { useEffect, useState } from "react";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleFilter = filter  => {
        if(filter === 'all'){
            setDisplayJobs(appliedJobs);
        }
        else if(filter === 'remote'){
           const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
           displayJobs(remoteJobs);
        }
        else if(filter === 'onsite'){
           const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
           displayJobs(onsiteJobs);
        }
        
  }

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))

      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);

  return (
    <div>
      <h2 className="text-center mt-28 text-5xl font-extrabold">
        Applied Jobs
      </h2>
      <div className="">
        <select className="select select-info w-full max-w-xs">
          <option disabled selected>
            Filter by
          </option>
          <option onClick={() => handleFilter('all')}>All</option>
          <option onClick={() => handleFilter('remote')}>Remote</option>
          <option onClick={() => handleFilter('onsite')}>Onsite</option>
        </select>
      </div>
      <div>
        {
            displayJobs?.map(appliedJob => <AppliedJob key={appliedJob} appliedJob={appliedJob}></AppliedJob>)
        }
      </div>
    </div>
  );
};

export default AppliedJobs;
