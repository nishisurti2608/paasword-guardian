
import { LuBrain } from "react-icons/lu";
import { Md123 } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { PiPasswordDuotone } from "react-icons/pi";

import { IoLockClosed } from "react-icons/io5";





import { MdAbc } from "react-icons/md";

function App() {
  
  return (
    <>
    <main className="bg-[#fcfbf8] items-center  h-screen flex flex-col justify-center">
    <p className="text-[#020917] w-1/2 text-6xl font- font-semibold text-center">Your Personal <span className="text-[#4b73ff]">Credential Guard</span></p>
    <p className="text-[#65748b] w-1/3 text-center text-xl font-medium mt-4 mb-3">Every password checked, every weakness spotted your personal security scanner that never sleeps.</p>
    
    <div className="flex justify-between items-center">
      <div className="flex items-center justify-between mt-6">
    <MdAbc  className="size-18 m-8 bg-gray-200 border-2 rounded-2xl border-gray-300 text-gray-500" />
    <Md123 className="size-18 m-4 bg-gray-200 border-2 rounded-2xl border-gray-300 text-gray-500" />
    <FaArrowRight   className="size-7 m-4 text-gray-500" />
     </div>
    
    <div className="relative flex h-32 w-32 items-center justify-center group cursor-pointer">
        <span className="relative flex h-16 w-16 items-center justify-center group cursor-pointer mt-6">
        <span className="absolute h-32 w-32 rounded-full bg-gray-200 opacity-30"></span>
        <span className="absolute h-28 w-28 rounded-full bg-blue-300 opacity-40"></span>
        <span className="absolute h-24 w-24 rounded-full bg-blue-400 opacity-50"></span>
        <span className="absolute h-full w-full rounded-full bg-blue-400 opacity-75 group-hover:animate-ping"></span>

    
        <span className="relative inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#4b73ff] text-white">
          <LuBrain className="size-6 text-white" />
          
        </span>
        
      </span>
      </div>
      <div className="flex items-center justify-between mt-6">
      <FaArrowRight   className="size-7 m-4 text-gray-500" />
   
   
  

      <PiPasswordDuotone className="size-18 m-4 bg-gray-200 border-2 rounded-2xl border-gray-300 text-gray-500 " />
      <IoLockClosed className="size-18 m-4  p-3 bg-gray-200 border-2 rounded-2xl border-gray-300 text-[#4b73ff]" />
     </div>
  
    </div>
    <button className="text-white bg-[#10172A] px-8 py-3 rounded-4xl  my-20 ml-8">Check Now</button> 
    </main>

    
    </>
  )
}

export default App
