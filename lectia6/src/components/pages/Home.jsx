import Header from '@/components/layouts/Header';
import SliderSlick from '@/components/layouts/SliderSlick';
import { FaTruck } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <Header />
      <SliderSlick />
        <div className='container h-auto flex flex-col md:flex-row mb-8'>
          <div className='bg-cyan-800 text-white tracking-tight font-extrabold w-full md:w-1/2 flex items-center justify-center text-center py-32 shadow outline-1 hover:bg-white hover:text-cyan-800 transition duration-200'>
            <h2 className='text-xl sm:text-2xl md:text-3xl font-bold'>100% quality and performance</h2>
          </div>
          <div className='bg-cyan-100 text-cyan-700 tracking-tight font-extrabold w-full md:w-1/2 flex items-center justify-center hover:shadow shadow-cyan-100 outline-1 hover:bg-white transition duration-200 p-32'>
            <FaTruck className='text-5xl md:text-6xl' />
          </div>
        </div>
    </div>
  )
}

export default Home
