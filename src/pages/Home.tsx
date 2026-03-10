import "../index.css";
import MultiCardCarousel from "../utils/carousel.tsx";
import PdfModal from "../utils/displayPDF.tsx";
function Home() {
  return (
    <main className="w-screen  flex flex-col items-start">
      <div className=" w-full h-[50vh]  bg-[#FFD3E7]">
        <p className="mt-[4vh] ml-[4vw] font-bold text-lg text-left ">
          {/* your url */}
        </p>
        <div className="mt-[11vh] text-left ml-[5vw] leading-18 text-6xl font-bold">
          <h1 className="">
            {/* Hi,
            <br />
            I'm [name]. */}
          </h1>
        </div>
      </div>
      <div className=" bg-[#FFFFF] w-full h-[80vh]">
        <div className="mt-[10vh] mb-[10vh] text-left ml-[5vw] text-6xl font-bold">
          Recent
          <br />
          Projects
        </div>
        <div className="ml-[5vw]">
          <MultiCardCarousel />
        </div>
      </div>
      <div className=" bg-[#323131] w-full">
        <div className="mt-[10vh] text-[#FFD3E7] text-left ml-[5vw] ">
          <h1 className="text-6xl font-bold mb-[5vh]">Skills + Experience</h1>
          <p className="text-2xl">
            {" "}
            <span className="font-bold">Languages: </span>
            {/* insert languages here */}
          </p>
          <p className="text-2xl mt-[3vh]">
            {" "}
            <span className="font-bold">Frameworks + Libraries: </span>
            {/* insert frameworks/libraries here */}
          </p>
          <p className="text-2xl mt-[3vh]">
            {" "}
            <span className="font-bold">Tools + Platforms: </span>
            {/* insert tools here */}
          </p>
          <br />
          <br />
        </div>
        <div className="ml-[5vw] mb-10">
          <PdfModal />
        </div>
      </div>
    </main>
  );
}

export default Home;
