import { useState } from "react";

const PdfModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-[#FFD3E7] text-[#323131] hover:bg-[#fdb2da] "
      >
        View my Resume!
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
          <div className="relative bg-white w-11/12 md:w-3/4 h-5/6 rounded-lg shadow-lg">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-2xl"
            >
              ✕
            </button>

            <iframe
              src="/fakeResume.pdf"
              className="w-full h-full rounded-b-lg"
              title="PDF Viewer"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PdfModal;
