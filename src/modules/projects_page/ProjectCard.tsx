import React from "react";
import Image from "next/image";

interface ProjectCardProps {
	title: string;
	content: any;
	image: string;
	link?: string;
}

export default function ProjectCard({ title, content, image, link }: ProjectCardProps) {
	return (
		<div className='card w-80 bg-base-100 shadow-xl'>
			<figure>
				<Image src={image} width={1440 / 4.4} height={789 / 4.4} layout='fixed' />
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>{title}</h2>
				<div className='text-content-light'>{content}</div>
			</div>
		</div>
	);
}
