import React from "react";
import Image from "next/image";

interface ProjectSectionProps {
	title: string;
	content: any;
	image: string;
	transparent: boolean;
	link?: string;
	appstore?: string;
	playstore?: string;
	github?: string;
}

export default function projectSection({
	title,
	content,
	image,
	transparent,
	link,
	appstore,
	playstore,
	github,
}: ProjectSectionProps) {
	const bgColor = transparent ? "bg-transparent" : "bg-base-300";
	const imageSize = 180;

	const appStoreIcon = (
		<a target='_blank' href={appstore}>
			<div className='avatar'>
				<div className='w-20 rounded-full'>
					<img src='/icons/appstore.png' alt='appstore' />
				</div>
			</div>
		</a>
	);
	const playStoreIcon = (
		<a target='_blank' href={playstore}>
			<div className='avatar'>
				<div className='w-20 rounded-full'>
					<img src='/icons/playstore.png' alt='playstore' />
				</div>
			</div>
		</a>
	);
	const githubIcon = (
		<a target='_blank' href={github}>
			<div className='avatar'>
				<div className='w-7 rounded-full'>
					<img src='/icons/github-sm.png' alt='github' />
				</div>
			</div>
		</a>
	);

	const displayImage = (
		<div className='flex md:flex-col md:justify-center items-center'>
			<div className={`pb-3 ${link ? "transform hover:scale-105 cursor-pointer" : ""} md:w-auto`}>
				<a href={link}>
					<Image
						src={image}
						width={imageSize}
						height={imageSize}
						layout='fixed'
						className='rounded-xl w-12'
					/>
				</a>
			</div>
			<div className='flex flex-col pl-7 md:pl-0 items-center '>
				{appstore ? appStoreIcon : <></>}
				{playstore ? playStoreIcon : <></>}
				{github ? githubIcon : <></>}
			</div>
		</div>
	);

	return (
		<div className={`${bgColor} page-px pt-20 pb-24`}>
			<div
				className={`flex md:items-center pb-8 ${
					transparent ? "flex-col" : "flex-col-reverse"
				} md:flex-row justify-between`}
			>
				{transparent ? <div className='md:pr-12'> {displayImage}</div> : <></>}
				<div>
					<h2 className={`text-xl md:text-4xl font-bold pb-5`}>{title}</h2>
					<p className={`text-content-light text-sm md:text-lg transition-all duration-500 ease-in-out`}>
						{content}
					</p>
				</div>
				{transparent ? <></> : <div className='md:pl-12'> {displayImage}</div>}
			</div>
		</div>
	);
}
