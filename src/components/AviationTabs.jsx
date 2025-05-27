import React, { useState, useEffect, useRef } from "react";

const aviationTabs = [
	{
		title: "JRD TATA DEPT OF AVIATION",
		content: `"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."`,
	},
	{
		title: "TAB 2 TITLE",
		content: "Content for tab 2 goes here.",
	},
	{
		title: "TAB 3 TITLE",
		content: "Content for tab 3 goes here.",
	},
	{
		title: "TAB 4 TITLE",
		content: "Content for tab 4 goes here.",
	},
	{
		title: "TAB 5 TITLE",
		content: "Content for tab 5 goes here.",
	},
];

const TYPING_SPEED = 30; // ms per character

const AviationTabs = () => {
	const [active, setActive] = useState(0);
	const [typedContent, setTypedContent] = useState("");
	const [typingIdx, setTypingIdx] = useState(0);
	const contentRef = useRef(null);

	// Typing effect
	useEffect(() => {
		setTypedContent("");
		setTypingIdx(0);
	}, [active]);

	useEffect(() => {
		if (typingIdx < aviationTabs[active].content.length) {
			const timeout = setTimeout(() => {
				setTypedContent((prev) => prev + aviationTabs[active].content[typingIdx]);
				setTypingIdx((idx) => idx + 1);
			}, TYPING_SPEED);
			return () => clearTimeout(timeout);
		}
	}, [typingIdx, active]);

	// Scroll to content on tab click (especially for mobile)
	useEffect(() => {
		if (contentRef.current) {
			contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	}, [active]);

	return (
		<div className="relative flex justify-center items-center min-h-[90vh] py-2 px-1 overflow-hidden bg-black">
			{/* Subtle dark vignette for depth */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 z-0"
				style={{
					background: "radial-gradient(ellipse at 60% 40%, #222 0%, #000 80%)",
					opacity: 0.7,
					filter: "blur(1.5px)",
				}}
			/>
			{/* Subtle noise overlay */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 z-10"
				style={{
					backgroundImage:
						"url('https://www.transparenttextures.com/patterns/noise.png')",
					opacity: 0.08,
					mixBlendMode: "overlay",
				}}
			/>
			<div className="relative z-20 flex flex-col md:flex-row w-full max-w-[98vw] min-h-[80vh] rounded-3xl shadow-2xl border border-white/10 bg-white/5 backdrop-blur-lg overflow-hidden
      before:content-[''] before:absolute before:inset-0 before:rounded-3xl before:pointer-events-none before:z-10
      before:bg-gradient-to-r before:from-white/10 before:via-transparent before:to-black/30
      ">
				{/* Main Content */}
				<div
					ref={contentRef}
					className="flex-1 flex flex-col justify-center items-center p-3 sm:p-6 md:p-12 bg-white/10 rounded-2xl md:mr-2 mt-2 md:mt-0 relative animate-fadein"
					style={{
						fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
						boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
					}}
				>
					<h2 className="text-2xl sm:text-4xl md:text-6xl font-extrabold mb-4 sm:mb-6 md:mb-8 flex items-center gap-2 sm:gap-4 md:gap-6 font-sans text-white text-center drop-shadow-lg">
						<span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#38e6c5] to-[#4f8cff] shadow-lg animate-pulse">
							<svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
								<path d="M9.75 17L15.25 12L9.75 7V17Z" fill="currentColor"/>
							</svg>
						</span>
						{aviationTabs[active].title}
					</h2>
					<p className="text-gray-100 text-base sm:text-2xl md:text-4xl text-center mt-2 sm:mt-4 md:mt-8 font-sans min-h-[100px] sm:min-h-[120px] transition-all duration-300 cursor-text break-words max-w-3xl animate-fadein-slow">
						{typedContent}
						<span className="inline-block w-2 h-8 align-middle bg-white animate-blink ml-1" />
					</p>
				</div>
				{/* Vertical Tabs on Right (Horizontal on Mobile) */}
				<div className="flex flex-row md:flex-col md:w-56 w-full md:h-auto h-20 bg-transparent md:overflow-y-auto overflow-x-auto scrollbar-thin scrollbar-thumb-[#333] scrollbar-track-transparent z-20">
					{aviationTabs.map((tab, idx) => (
						<button
							key={idx}
							onClick={() => setActive(idx)}
							className={`
              flex-1 group relative md:px-8 px-4 md:py-8 py-4 text-white text-xs sm:text-base md:text-lg font-bold tracking-wide font-sans
              transition-all duration-300 overflow-hidden border-r-0 md:border-r-4 border-b-4 md:border-b-0
              ${active === idx
                ? "bg-gradient-to-r from-[#38e6c5]/80 to-[#4f8cff]/80 text-white border-white scale-105 shadow-xl shadow-blue-500/30 z-20"
                : "bg-[#232323] text-gray-300 border-transparent hover:bg-[#333] hover:text-white"}
            `}
							style={{
								borderTopRightRadius: idx === 0 ? "16px" : 0,
								borderBottomRightRadius:
									idx === aviationTabs.length - 1 && window.innerWidth >= 768
										? "16px"
										: 0,
								borderTopLeftRadius:
									idx === 0 && window.innerWidth < 768 ? "16px" : 0,
								borderBottomLeftRadius:
									idx === aviationTabs.length - 1 && window.innerWidth < 768
										? "16px"
										: 0,
								marginBottom: window.innerWidth >= 768 ? 4 : 0,
								marginRight: window.innerWidth < 768 ? 4 : 0,
								cursor: "pointer",
								minWidth: window.innerWidth < 768 ? "140px" : "auto",
								whiteSpace: "nowrap",
								fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
							}}
						>
							<span
								className={`font-extrabold ${
									active === idx ? "text-white drop-shadow-lg" : "text-gray-400"
								}`}
							>
								{`0${idx + 1}`}
							</span>
							<span className="ml-2 text-xs sm:text-base md:text-lg font-medium font-sans">
								{tab.title}
							</span>
							{active === idx && (
								<span className="absolute top-2 right-2 w-3 h-3 rounded-full bg-gradient-to-br from-[#38e6c5] to-[#4f8cff] shadow-lg animate-pulse"></span>
							)}
						</button>
					))}
				</div>
				{/* Animations */}
				<style>
					{`
            @keyframes blink {
              0%, 100% { opacity: 1; }
              50% { opacity: 0; }
            }
            .animate-blink {
              animation: blink 1s steps(1) infinite;
            }
            .scrollbar-thin {
              scrollbar-width: thin;
            }
            .scrollbar-thumb-[#333]::-webkit-scrollbar-thumb {
              background: #333;
            }
            .scrollbar-track-transparent::-webkit-scrollbar-track {
              background: transparent;
            }
            .scrollbar-thin::-webkit-scrollbar {
              width: 6px;
              height: 6px;
            }
            .animate-fadein {
              animation: fadein 0.7s cubic-bezier(.4,0,.2,1);
            }
            .animate-fadein-slow {
              animation: fadein 1.2s cubic-bezier(.4,0,.2,1);
            }
            @keyframes fadein {
              from { opacity: 0; transform: translateY(20px);}
              to { opacity: 1; transform: none;}
            }
          `}
				</style>
			</div>
		</div>
	);
};

export default AviationTabs;