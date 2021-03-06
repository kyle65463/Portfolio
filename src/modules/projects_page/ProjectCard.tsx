import Image from "next/image";
import React from "react";

interface ProjectCardProps {
	title: string;
	content: any;
	image: string;
	github: string;
	link?: string;
	demo?: string;
}

export default function ProjectCard({ title, content, image, link, demo, github }: ProjectCardProps) {
	return (
		<div className='card bg-base-100 shadow-md'>
			<figure>
				<Image src={image} width={1440 / 4.4} height={789 / 4.4} layout='responsive' />
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>
					<a href={github} target='_blank'>
						{title}
					</a>
				</h2>
				<div className='text-content-mid'>{content}</div>
				<div className='card-actions justify-end'>
					{link && (
						<a className='btn btn-primary text-white px-5 btn-sm h-10' href={link} target='_blank'>
							Link
						</a>
					)}
					{demo && (
						<a className='btn btn-accent text-white px-5 btn-sm h-10' href={demo} target='_blank'>
							Demo
						</a>
					)}
				</div>
			</div>
		</div>
	);
}
