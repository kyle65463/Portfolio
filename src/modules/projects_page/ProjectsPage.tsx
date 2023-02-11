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
						<span className='text-primary'>20K+ downloads</span> ,{" "}
						<span className='text-primary'>4.5+ average star rates</span>, {" "}
						<span className='text-primary'>2.8K+ monthly active users</span>, and {" "}
						<span className='text-primary'>100+ monthly active subscriptions</span>.
					</p>
					<p className='pt-3'>
						The app was designed and developed by myself from scratch using the{" "}
						<span className='text-primary'>Flutter</span> framework. I'm currently working on the web
						version with <span className='text-primary'>React</span> and{" "}
						<span className='text-primary'>Express</span>.
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
			title: "Zhiren",
			link: "https://www.zhiren.io/",
			content:
				"A website that helps computer science major freshmen create resumes with ease.",
			image: "/projects/zhiren.png",
		},
		{
			title: "Cuby",
			link: "https://play.google.com/store/apps/details?id=com.kyle65463.cubetimer",
			content:
				"A timer for rubik's cube inspired by Twisty Timer. Currently available on Play Store and App Store.",
			image: "/projects/cuby.png",
			github: "https://github.com/kyle65463/cube-timer",
		},
		{
			title: "GitHub Repo Viewer",
			link: "https://www.githubviewer.kyle65463.com/",
			content: "A simple application that can list GitHub repositories of specific users.",
			image: "/projects/github-viewer.png",
			github: "https://github.com/kyle65463/github-repo-viewer",
		},
		{
			title: "Intersection Managment",
			link: "https://www.intersection.kyle65463.com/",
			content:
				"A implementation and visualization of different algorithms solving the intersection management problem.",
			image: "/projects/intersection.png",
			demo: "https://www.youtube.com/watch?v=eURIXvr2Nec",
			github: "https://github.com/kyle65463/intersection-management",
		},
		{
			title: "Dominion",
			content: 'A replica of the famous board game "Dominion" using JavaFX and sockets.',
			image: "/projects/dominion.png",
			github: "https://github.com/kyle65463/dominion",
			demo: "https://www.youtube.com/watch?v=gHtup-ZRhrU",
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
		<div className='pt-12 lg:pt-24'>
			{projects.map((project, index) => (
				<ProjectSection {...project} key={index} transparent={index % 2 == 0} />
			))}
			<section className='pt-20 pb-40 page-px bg-base-300'>
				<h2 className='pb-6 text-3xl font-medium font-roboto'>Others</h2>
				<div className='grid grid-cols-1 pt-6 4xl:grid-cols-5 3xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-y-8 gap-x-6'>
					{projects2.map((project, index) => (
						<ProjectCard {...project} key={index} />
					))}
				</div>
			</section>
		</div>
	);
}
