/* eslint-disable react/prop-types */
import { CiLocationOn, CiDollar } from "react-icons/ci";
const AppliedJob = ({ appliedJob }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = appliedJob;
  return (
    <div>
      <div className=" bg-slate-300 my-10">
        <div className="flex flex-col lg:flex-row p-5 gap-5">
          <img src={logo} className="bg-slate-200 px-5 py-16 rounded-sm" />
          <div>
            <h1 className="text-2xl font-bold">{job_title}</h1>
            <p className="pt-1">{company_name}</p>
            <div className="pt-2">
              <button className="border px-4 py-1 border-blue-500 text-blue-500 rounded mr-4">
                {remote_or_onsite}
              </button>
              <button className="border px-4 py-1 border-blue-500 text-blue-500 rounded">
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
            <div className="mt-5">
              <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJob;
