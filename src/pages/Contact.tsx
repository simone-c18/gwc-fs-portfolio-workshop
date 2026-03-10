import {Phone, Code, Link, Mail} from 'lucide-react';
function Contact() {
  return(  
   <main className="w-screen flex flex-col items-start">
      <div className="w-full h-screen bg-[#FFD3E7]">
        <p className="mt-[4vh] ml-[4vw] font-bold text-lg text-left">
          {/* your url */}
        </p>
        <div className="mt-[11vh] text-left ml-[5vw] leading-18">
          <h1 className='text-6xl font-bold mb-10'>Contact Me</h1>
          <p className="flex items-center text-3xl gap-2 py-5">
            <Phone/>
            {/* (your phone number */}
          </p>
           <p className="flex items-center text-3xl gap-2 py-5">
            <Mail/>
            {/* your email */}
          </p>
          <p className="flex items-center text-3xl gap-2 py-5">
            <Code/>
            <a
                // href = "[github url]"
                target = "_blank"
                rel="noopener noreferrer"
                className = "underline"
                >
                {/* github url */}
            </a>
          </p>
          <p className="flex items-center text-3xl gap-2 py-5">
            <Link/>
            <a
                // href = "[linkedin url]"
                target = "_blank"
                rel="noopener noreferrer"
                className = "underline"
                >
                {/* linkedin url */}
            </a>
          </p>
        </div>
      </div>
    </main>
 );
}
export default Contact;
