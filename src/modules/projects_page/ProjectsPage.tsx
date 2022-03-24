import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectSection from "./ProjectSection";

export default function ProjectPages() {
	const projects = [
		{
			title: "Japanese Memorizer",
			content: (
				<>
					<p>
						A mobile app to help memorize Japanese vocabulary with flashcards and the spaced repetition
						mechanism.
					</p>
					<p className='pt-3'>
						The app was published on both the App Store and Google Play Store, having{" "}
						<span className='text-primary'>13K+ downloads</span> ,{" "}
						<span className='text-primary'>4.5+ average star rates</span>, and{" "}
						<span className='text-primary'>2.5K+ monthly active users</span>.
					</p>
					<p className='pt-3'>
						The app was designed and developed by myself from scratch using the{" "}
						<span className='text-primary'>Flutter</span> framework. And the web version with React as
						frontend and Google Cloud Function as backend is under development.
					</p>
				</>
			),
			image: "/projects/jp-memorizer.png",
			appstore:
				"https://apps.apple.com/us/app/%E8%83%8C%E6%97%A5%E6%96%87%E7%A5%9E%E5%99%A8-%E6%97%A5%E6%AA%A2%E5%BF%85%E5%82%99%E5%96%AE%E5%AD%97%E6%95%91%E6%98%9F/id1550577799",
			playstore: "https://play.google.com/store/apps/details?id=com.kyle65463.japanese_memorizer",
		},
	];

	const projects2 = [
		{
			title: "Cuby",
			link: "https://kyle65463.github.io/JS-Tetris/",
			content:
				"A timer for rubik's cube inspired by Twisty Timer. Currently available on Play Store and App Store.",
			image: "/projects/cuby.png",
			github: "https://github.com/kyle65463/js-tetris",
		},
		{
			title: "GitHub Repo Viewer",
			link: "https://kyle65463.github.io/JS-Tetris/",
			content: "A simple application that can list GitHub repositories of specific users.",
			image: "/projects/github-viewer.png",
			github: "https://github.com/kyle65463/js-tetris",
		},
		{
			title: "Intersection Managment",
			link: "https://kyle65463.github.io/JS-Tetris/",
			content:
				"A implementation and visualization of different algorithms solving the intersection management problem.",
			image: "/projects/intersection.png",
			github: "https://github.com/kyle65463/js-tetris",
		},
		{
			title: "Dominion",
			link: "https://kyle65463.github.io/JS-Tetris/",
			content: 'A replica of the famous board game "Dominion" using JavaFX and sockets.',
			image: "/projects/dominion.png",
			github: "https://github.com/kyle65463/js-tetris",
		},
		{
			title: "JS Tetris",
			link: "https://kyle65463.github.io/JS-Tetris/",
			content: "A replica of a classic game, Tetris, developed with pure Javascript + HTML canvas.",
			image: "/projects/js-tetris.png",
			github: "https://github.com/kyle65463/js-tetris",
		},
	];
	return (
		<div className='pt-24'>
			{projects.map((project, index) => (
				<ProjectSection {...project} key={index} transparent={index % 2 == 0} />
			))}
			<section className='page-px pt-20 pb-40 bg-base-300'>
				<h2 className='font-roboto text-3xl font-medium pb-6'>Others</h2>
				<div className='grid grid-cols-3 pt-6 gap-y-8'>
					{projects2.map((project, index) => (
						<ProjectCard {...project} key={index} />
					))}
				</div>
			</section>
		</div>
	);
}
