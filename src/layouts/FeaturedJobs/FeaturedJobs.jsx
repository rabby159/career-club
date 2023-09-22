import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mx-4 lg:mx-32 my-10">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className="flex justify-center">
        <div className={dataLength === jobs.length && "hidden"}>
          <button
            onClick={() => setDataLength(jobs.length)}
            className="btn bg-gradient-to-r from-cyan-500 to-blue-500"
          >
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
