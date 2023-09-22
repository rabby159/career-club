import user from '../../assets/images/user.png'

const Banner = () => {
  return (
    <section className='bg-slate-300 rounded'>
      <div className='flex flex-col-reverse lg:flex lg:flex-row-reverse items-center '>
        <div className=''>
          <img src={user} alt="" />
        </div>
        <div className=' px-6 lg:px-36 '>
            <h1 className='text-5xl lg:text-[80px] font-extrabold'>One Step <br /> Closer To  Your  <span className='text-sky-500'>Dream Job</span></h1>
            <p className='text-base mt-5'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
            <button className='btn my-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>Get Start</button>
        </div>
        
      </div>
      
    </section>
  );
};

export default Banner;
