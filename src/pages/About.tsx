import "../index.css";

function About() {
  return (
    <main className="w-screen flex flex-col items-start">
      <div className="w-full h-[50vh] bg-[#FFD3E7]">
        <p className="mt-[4vh] ml-[4vw] font-bold text-lg text-left">
          {/* //your url */}
        </p>
        <div className="mt-[11vh] text-left ml-[5vw] leading-18 text-6xl font-bold">
          <h1>About Me</h1>
        </div>
      </div>

      <div className="bg-white w-full min-h-[80vh] flex flex-row items-center justify-center gap-16 px-[8vw] py-20">
        {/* insert your headshot here */}
        <img
          src="src/assets/photo.png"
          alt="Headshot"
          className="w-72 h-72 rounded-md object-cover shrink-0"
        />
        <p className="text-2xl leading-relaxed max-w-2xl">
          {/* your blurb */}
        </p>
      </div>
    </main>
  );
}

export default About;
