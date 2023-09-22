import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollarCircle, AiOutlineContainer, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utility/localStorage";



const JobDetails = () => {
  const jobs = useLoaderData();

  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
//   console.log(job);

  const handleApplyJobs = () =>{
    saveJobApplication(idInt);
    toast.success('Apply Successful')
}

  return (
    <div className="container mx-auto">
      <h2 className="text-center mt-28 text-5xl font-extrabold">
        Job Details
      </h2>
      <div className="grid gap-7 lg:grid-cols-4 mx-2 my-10">
        <div className="lg:col-span-3">
          <h3 className="py-5">
            <span className="text-xl font-bold">Job Description:</span>{" "}
            {job.job_description}
          </h3>
          <h3>
            <span className="text-xl font-bold">Job Responsibility:</span>{" "}
            {job.job_responsibility}
          </h3>
          <h3 className="text-xl font-bold pt-5">Educational Requirements:</h3>
          <h3>{job.educational_requirements}</h3>
          <h3 className="text-xl font-bold pt-5">Experiences:</h3>
          <h3>{job.experiences}</h3>
        </div>
        <div className="bg-slate-300 p-7 rounded-md">
            <h2 className="border-b-2  pb-4 font-semibold">Job Details</h2>
            <h2 className="pt-5 flex gap-2 items-center"><AiOutlineDollarCircle></AiOutlineDollarCircle><span className="font-semibold">Salary:</span> {job.salary}</h2>
            <h2 className="pt-3 flex gap-2 items-center"><AiOutlineContainer></AiOutlineContainer><span className="font-semibold">Job Title:</span> {job.job_title}</h2>

            <h2 className="border-b-2  py-4">Contact Information</h2>
            <h2 className="pt-5 flex gap-2 items-center"><AiOutlinePhone></AiOutlinePhone><span className="font-semibold">Phone:</span>{job.contact_information.phone}</h2>
            <h2 className="pt-3 flex gap-2 items-center"><AiOutlineMail></AiOutlineMail><span className="font-semibold">Email:</span> {job.contact_information.email}</h2>
            <h2 className="pt-3 flex gap-2 "><CiLocationOn className="text-2xl"></CiLocationOn><span className="font-semibold">Address:</span> {job.contact_information.address}</h2>

            <button onClick={handleApplyJobs} className="btn bg-gradient-to-r from-cyan-500 to-blue-500 w-full mt-5 text-white">Apply Now</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
