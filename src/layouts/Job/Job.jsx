/* eslint-disable react/prop-types */

import { CiLocationOn, CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={logo} alt="logo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-extrabold">{job_title}</h2>
          <p>{company_name}</p>
          <div>
            <button className="border px-4 py-1 border-blue-300 text-blue-500 rounded mr-4">
              {remote_or_onsite}
            </button>
            <button className="border px-4 py-1 border-blue-300 text-blue-500 rounded">
              {job_type}
            </button>
          </div>
          <div className="flex gap-5 mt-3">
            <h2 className="flex gap-1">
              <CiLocationOn className="text-2xl"></CiLocationOn>
              {location}
            </h2>

            <h2 className="flex">
              <CiDollar className="text-2xl"></CiDollar>
              {salary}
            </h2>
          </div>
          <div className="card-actions mt-10">
            <Link to={`/job/${id}`}>
              <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
