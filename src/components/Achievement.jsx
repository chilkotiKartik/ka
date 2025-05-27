import React, { useRef, useState } from 'react';
import gsap from 'gsap';

const Achievement = () => {
  const [index, setIndex] = useState(0);
  const cursorRef = useRef(null);
  const achievementRef = useRef(null);

  const cursorMove = (e) => {
    const rect = achievementRef.current.getBoundingClientRect();
    const cursor = cursorRef.current;
    const cursorWidth = cursor.offsetWidth;
    const cursorHeight = cursor.offsetHeight;

    gsap.to(cursor, {
      scale: 1.5,
      x: e.clientX - rect.left - cursorWidth / 2 - 760,
      y: e.clientY - rect.top - cursorHeight / 2,
      opacity: 1,
      duration: 0.5,
    });
  };

  const cursorLeave = () => {
    gsap.to(cursorRef.current, {
      opacity: 0,
    });
  };

  const achievements = [
    {
      image: '/Achievement.png',
      text: 'In research we focused on tackling complex problems.',
    },
    {
      image: '/Achievement.png',
      text: 'Our second achievement involves optimizing data structures.',
    },
    {
      image: '/Achievement.png',
      text: 'The third step was enhancing user experience through design.',
    },
    {
      image: '/Achievement.png',
      text: 'We improved algorithm efficiency in the fourth milestone.',
    },
    {
      image: '/Achievement.png',
      text: 'Finally, we ensured cross-platform compatibility in the last phase.',
    },
  ];

  const goToNext = () => {
    if (index < achievements.length - 1) {
      setIndex(index + 1);
    }
  };

  const goToPrevious = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div
      ref={achievementRef}
      id="achievement"
      className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#18181c] via-[#23232a] to-[#18181c] px-2 py-8"
      onMouseMove={cursorMove}
      onMouseLeave={cursorLeave}
    >
      <div
        ref={cursorRef}
        className="rounded-2xl w-5 h-5 bg-white/65 opacity-0 pointer-events-none"
        id="circularCurosr"
      ></div>
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Left: Text (wider) */}
        <div className="flex-[2] flex flex-col justify-center items-start md:items-start w-full">
          <div className="font-extrabold text-transparent text-4xl sm:text-5xl bg-clip-text bg-gradient-to-r from-[#38e6c5] to-[#4f8cff] uppercase tracking-widest mb-8 mt-4 drop-shadow-lg">
            Achievements
          </div>
          <div className="w-full bg-white/10 rounded-3xl shadow-2xl p-8 flex flex-col justify-center items-center md:items-start backdrop-blur-lg border border-white/10">
            <div className="text-3xl sm:text-4xl font-extrabold text-white mb-6 text-left leading-snug drop-shadow-lg">
              {achievements[index].text}
            </div>
            <div className="text-gray-300 text-lg sm:text-xl text-left leading-relaxed">
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
              ab illo inventore veritatis et quasi architecto beatae vitae dicta
              sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt."
            </div>
            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={goToPrevious}
                disabled={index === 0}
                className={`px-6 py-2 rounded-xl font-bold text-lg transition-all duration-300 border-2 border-[#38e6c5] bg-[#23232a] text-white hover:bg-[#38e6c5] hover:text-black shadow-lg ${
                  index === 0
                    ? 'opacity-40 cursor-not-allowed'
                    : 'hover:scale-105'
                }`}
              >
                &#8592; Back
              </button>
              <button
                onClick={goToNext}
                disabled={index === achievements.length - 1}
                className={`px-6 py-2 rounded-xl font-bold text-lg transition-all duration-300 border-2 border-[#4f8cff] bg-[#23232a] text-white hover:bg-[#4f8cff] hover:text-black shadow-lg ${
                  index === achievements.length - 1
                    ? 'opacity-40 cursor-not-allowed'
                    : 'hover:scale-105'
                }`}
              >
                Next &#8594;
              </button>
            </div>
          </div>
        </div>
        {/* Right: Image (narrower) */}
        <div className="flex-1 flex justify-center items-center w-full mt-8 md:mt-0">
          <div className="relative group rounded-3xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-lg transition-all duration-500 hover:scale-105 hover:shadow-blue-500/30 w-full max-w-[320px]">
            <img
              src={achievements[index].image}
              alt="achievement"
              className="w-full h-[220px] sm:h-[320px] object-cover transition-transform duration-500 group-hover:scale-105"
              style={{ borderRadius: '1.5rem' }}
            />
            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-2 bg-[#23232a]/60">
              <div
                className="h-2 bg-gradient-to-r from-[#38e6c5] to-[#4f8cff] rounded-br-2xl transition-all duration-500"
                style={{
                  width: `${((index + 1) / achievements.length) * 100}%`,
                }}
              ></div>
            </div>
            {/* Number */}
            <div className="absolute top-4 left-4 bg-black/60 px-5 py-2 rounded-xl text-white text-2xl font-extrabold shadow-lg">
              0{index + 1}/
              <span className="text-[#38e6c5]">0{achievements.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;