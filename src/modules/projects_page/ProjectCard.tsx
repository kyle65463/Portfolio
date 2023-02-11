import React from "react";
import Image from "next/image";

interface ProjectCardProps {
	title: string;
	content: any;
	image: string;
	github?: string;
	link?: string;
	demo?: string;
}

export default function ProjectCard({ title, content, image, link, demo, github }: ProjectCardProps) {
	return (
		<div className='shadow-md card bg-base-100'>
			<figure>
				<Image src={image} width={1440 / 4.4} height={789 / 4.4} layout='fixed' />
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>
					{github ? <a href={github} target='_blank'>
						{title}
					</a> : title}
				</h2>
				<div className='text-content-mid'>{content}</div>
				<div className='justify-end card-actions'>
					{link && (
						<a className='h-10 px-5 text-white btn btn-primary btn-sm' href={link} target='_blank'>
							Link
						</a>
					)}
					{demo && (
						<a className='h-10 px-5 text-white btn btn-accent btn-sm' href={demo} target='_blank'>
							Demo
						</a>
					)}
				</div>
			</div>
		</div>
	);
}
