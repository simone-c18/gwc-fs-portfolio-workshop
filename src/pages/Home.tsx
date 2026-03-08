import '../index.css'
import MultiCardCarousel from '../utils/carousel.tsx'
function Home() {
  return (
     <main className="w-screen  flex flex-col items-start">
        <div className=" w-full h-[50vh]  bg-[#FFD3E7]">
               <p className="mt-[4vh] ml-[4vw] font-bold text-lg text-left ">imani-mcquay.com</p>
            <div className="mt-[11vh] text-left ml-[5vw] leading-18 text-6xl font-bold">
                <h1 className="">Hi,<br/>I'm Imani.</h1>
            </div>
        </div>
         <div className=" bg-[#FFFFF] w-full h-[80vh]">
            <div className="mt-[10vh] mb-[10vh] text-left ml-[5vw] text-6xl font-bold">
                Recent<br/>Projects
            </div>
            <div className='ml-[5vw]'>
                <MultiCardCarousel />
            </div>
        </div>
         <div className=" bg-[#323131] w-full h-[50vh]">
            <div className="mt-[10vh] text-[#FFD3E7] text-left ml-[5vw] ">
                <h1 className='text-6xl font-bold mb-[5vh]'>Skills + Experience</h1>
                <p className='text-2xl'> <span className='font-bold'>Languages: </span>
                 Python, Java, C, C++, TypeScript, HTML, CSS 
                </p>
                <p className='text-2xl mt-[3vh]'> <span className='font-bold'>Frameworks + Libraries: </span>
                 React, Node.js, Express, TailwindCSS, MongoDB, Ultralytics, YOLO
                </p>
                <p className='text-2xl mt-[3vh]'> <span className='font-bold'>Tools + Platforms: </span>
                 GitHub, VS Code, Jupyter Notebook, Google Colab, AutoGen, Android Studio
                </p>
            </div>
        </div>
     </main>
  )
}

export default Home