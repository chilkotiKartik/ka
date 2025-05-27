import React from "react";

const demoEvents = [
	{
		title: "Aviation Tech Expo 2025",
		date: "June 15, 2025",
		location: "Mumbai, India",
		description:
			"A showcase of the latest in aviation technology, featuring keynote speakers from the industry.",
	},
	{
		title: "Drone Racing Championship",
		date: "July 10, 2025",
		location: "Bangalore, India",
		description:
			"Exciting drone races with teams from across the country. Open for all enthusiasts!",
	},
	{
		title: "Women in Aerospace Summit",
		date: "August 5, 2025",
		location: "Delhi, India",
		description:
			"A summit celebrating women leaders and innovators in the aerospace sector.",
	},
];

const EventsPageComponent = () => (
	<div className="flex flex-col items-center min-h-[90vh] py-8 px-2 bg-[#18181c]">
		<h1 className="text-4xl md:text-5xl font-extrabold text-white mb-8">
			Events
		</h1>
		<div className="flex flex-col gap-8 w-full max-w-4xl mx-auto">
			{demoEvents.map((event, idx) => (
				<div
					key={idx}
					className="bg-[#232323] rounded-2xl shadow-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between hover:scale-[1.01] transition-transform duration-300 border-l-4 border-gradient-to-b from-[#38e6c5] to-[#4f8cff] w-full"
				>
					<div>
						<h3 className="text-2xl font-bold text-white mb-2">
							{event.title}
						</h3>
						<div className="text-sm text-gray-400 mb-1">
							{event.date} &mdash; {event.location}
						</div>
						<p className="text-gray-200 mb-4">{event.description}</p>
					</div>
					<button className="self-start md:self-center mt-2 md:mt-0 px-6 py-3 bg-gradient-to-r from-[#38e6c5] to-[#4f8cff] text-white rounded-lg font-semibold shadow hover:opacity-90 transition">
						Register
					</button>
				</div>
			))}
		</div>
		<div className="w-full flex justify-end max-w-6xl mt-10">
			<button
				className="px-6 py-3 bg-gradient-to-r from-[#4f8cff] to-[#38e6c5] text-white rounded-xl font-bold shadow-lg hover:scale-105 transition"
				onClick={() => (window.location.href = "/next-page")} // Replace with your routing logic
			>
				Next &rarr;
			</button>
		</div>
		{/* Footer */}
		<footer className="w-full mt-10 bg-gradient-to-r from-[#18181c] via-[#23232a] to-[#18181c] border-t border-white/10 py-6 md:py-10 flex flex-col items-center shadow-inner">
			<div className="max-w-6xl w-full flex flex-col md:flex-row justify-between items-center px-2 md:px-4 gap-4 md:gap-8">
				{/* Logo & Brand */}
				<div className="flex flex-col items-center md:items-start w-full md:w-auto mb-3 md:mb-0">
					<div className="flex items-center gap-2 mb-1">
						<span className="text-xl md:text-2xl font-extrabold text-[#38e6c5] tracking-widest">
							AVASYA
						</span>
						<span className="ml-2 px-2 py-1 bg-[#38e6c5]/10 text-xs rounded-lg text-[#38e6c5] font-semibold tracking-wide">
							Events
						</span>
					</div>
					<div className="text-gray-400 text-xs md:text-sm text-center md:text-left">
						Defining Research. Innovation.
					</div>
				</div>
				{/* Navigation */}
				<div className="flex flex-row md:flex-row gap-3 md:gap-8 items-center w-full md:w-auto mb-3 md:mb-0 justify-center">
					<a
						href="/about"
						className="text-white hover:text-[#38e6c5] font-medium transition text-sm md:text-base"
					>
						About
					</a>
					<a
						href="/events"
						className="text-white hover:text-[#38e6c5] font-medium transition text-sm md:text-base"
					>
						Events
					</a>
					<a
						href="/contact"
						className="text-white hover:text-[#38e6c5] font-medium transition text-sm md:text-base"
					>
						Contact
					</a>
				</div>
				{/* Socials */}
				<div className="flex gap-4 md:gap-6 w-full md:w-auto justify-center md:justify-end">
					<a
						href="https://twitter.com/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Twitter"
						className="group"
					>
						<svg
							className="w-5 h-5 md:w-7 md:h-7 fill-[#38e6c5] group-hover:scale-110 group-hover:fill-[#4f8cff] transition"
							viewBox="0 0 24 24"
						>
							<path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.916 4.916 0 0 0 16.616 3c-2.72 0-4.924 2.206-4.924 4.924 0 .386.044.763.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965c-.423.724-.666 1.562-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.868 9.868 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z" />
						</svg>
					</a>
					<a
						href="https://linkedin.com/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn"
						className="group"
					>
						<svg
							className="w-5 h-5 md:w-7 md:h-7 fill-[#38e6c5] group-hover:scale-110 group-hover:fill-[#4f8cff] transition"
							viewBox="0 0 24 24"
						>
							<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
						</svg>
					</a>
				</div>
			</div>
			<div className="text-xs text-gray-500 mt-4 tracking-wide text-center w-full">
				Designed &amp; Developed by{" "}
				<span className="text-[#38e6c5] font-semibold">karzo</span>
			</div>
		</footer>
	</div>
);

export default EventsPageComponent;