import React from "react";

const MultiCardCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const cards = [
    {
      image: "https://placehold.co/600x400",
      title: "Project 1",
      description: "Describe your project here.",
    },
    {
      image: "https://placehold.co/600x400",
      title: "Project 2",
      description: "Describe your project here.",
    },
    {
      image: "https://placehold.co/600x400",
      title: "Project 3",
      description: "Describe your project here.",
    },
    {
      image: "https://placehold.co/600x400",
      title: "Project 4",
      description: "Describe your project here.",
    },
    {
      image: "https://placehold.co/600x400",
      title: "Project 5",
      description: "Describe your project here.",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length,
    );
  };
  if (currentIndex > cards.length - 3) {
    console.log(currentIndex);
    setCurrentIndex(0);
    console.log("hi");
  }
  return (
    <div className="mt-2">
      <div className="w-11/12 ">
        <div className="relative">
          <div className="flex space-x-4">
            {cards.slice(currentIndex, currentIndex + 3).map((card, index) => (
              <div
                className="flex-none w-1/3 h-80 p-4 bg-[#323131] rounded-lg shadow-md"
                key={index}
              >
                <img
                  className="w-full h-32 object-cover mb-4 rounded-lg"
                  src={card.image}
                  alt="Card"
                />
                <h3 className="text-lg font-bold text-[#FFD3E7]">
                  {card.title}
                </h3>
                <p className="text-white">{card.description}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-4 relative  bottom-44 ">
            <button
              className="w-6 h-6 rounded-full bg-gray-300  relative right-4"
              onClick={handlePrev}
            >
              &lt;
            </button>
            <button
              className="w-6 h-6 rounded-full bg-gray-300 relative left-10"
              onClick={handleNext}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiCardCarousel;
