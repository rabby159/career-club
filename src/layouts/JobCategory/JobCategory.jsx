import accounts from '../../assets/icons/accounts.png'
import creative from '../../assets/icons/creative.png'
import marketing from '../../assets/icons/marketing.png'
import chip from '../../assets/icons/chip.png'


const JobCategory = () => {
  return (
    <div className="mt-20">
      <div className="flex justify-center text-center">
        <div>
          <h1 className="text-5xl font-extrabold">Job Category List</h1>
          <p className="mt-5">
            Explore thousands of job opportunities with all the information you
            need. Its your future.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-10 mx-10 lg:mx-32'>
        <div  className='bg-slate-300 rounded p-7'>
            <img src={accounts} alt="" />
            <h3 className='mt-5 font-bold'>Account & Finance</h3>
            <p>300 Jobs Available</p>
        </div>
        <div  className='bg-slate-300 rounded p-7'>
            <img src={creative} alt="" />
            <h3 className='mt-5 font-bold'>Creative Design</h3>
            <p>100+ Jobs Available</p>
        </div>
        <div  className='bg-slate-300 rounded p-7'>
            <img src={marketing} alt="" />
            <h3 className='mt-5 font-bold'>Marketing & Sales</h3>
            <p>150 Jobs Available</p>
        </div>
        <div  className='bg-slate-300 rounded p-7'>
            <img src={chip} alt="" />
            <h3 className='mt-5 font-bold'>Engineering Job</h3>
            <p>226 Jobs Available</p>
        </div>
      </div>
    </div>
  );
};

export default JobCategory;
