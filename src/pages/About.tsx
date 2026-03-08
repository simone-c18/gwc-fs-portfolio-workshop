import "../index.css";

function About() {
  return (
    <main className="w-screen flex flex-col items-start">
      <div className="w-full h-[50vh] bg-[#FFD3E7]">
        <p className="mt-[4vh] ml-[4vw] font-bold text-lg text-left">
          imani-mcquay.com
        </p>
        <div className="mt-[11vh] text-left ml-[5vw] leading-18 text-6xl font-bold">
          <h1>About Me</h1>
        </div>
      </div>

      <div className="bg-white w-full min-h-[80vh] flex flex-row items-center justify-center gap-16 px-[8vw] py-20">
        <img
          src="src/assets/photo.png"
          alt="Headshot"
          className="w-72 h-72 rounded-md object-cover shrink-0"
        />
        <p className="text-2xl leading-relaxed max-w-2xl">
          Hi, I'm Imani! Write your bio or description here. This text will sit
          to the right of your image and wrap naturally as it gets longer.
        </p>
      </div>

      <div className="bg-[#323131] w-full h-[50vh]">
        <div className="mt-[11vh] text-left ml-[5vw] leading-18 text-6xl font-bold text-[#FFD3E7]">
          <div className="mt-[10vh] text-[#FFD3E7] text-left ml-[5vw] ">
            <h1 className="text-6xl mb-[5vh]">Fun Facts</h1>
            <p className="text-2xl font-normal">
              - I have a pet cat <br></br>- My favorite food is sushi
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
