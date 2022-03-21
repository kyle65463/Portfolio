import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import FadeIn from "react-fade-in";

export default function HomePage() {
	return (
		<div className='pt-24'>
			<section className='hero-section page-px pt-20 pb-24'>
				<FadeIn>
					<div>
						<div className='avatar'>
							<div className='w-64 rounded-full'>
								<img src='avatar.jpg' alt='avatar' />
							</div>
						</div>
						<div className='flex justify-center pt-4'>
							<div className='contact-icon'>
								<div>
									<img src='icons/facebook.png' alt='skill-icon' />
								</div>
							</div>
							<div className='contact-icon'>
								<div>
									<img src='icons/github-sm.png' alt='skill-icon' />
								</div>
							</div>
							<div className='contact-icon'>
								<div>
									<img src='icons/mail.png' alt='skill-icon' />
								</div>
							</div>
						</div>
					</div>
				</FadeIn>
				<FadeIn delay={350}>
					<div className='pl-24 pb-6'>
						<div className='text-4xl font-roboto pb-4'>
							<h2>
								Hi, I'm <span className='text-primary font-medium'>Kyle</span>
							</h2>
						</div>
						<p className='text-lg'>
							I'm a student studying computer science in National Taiwan University (NTU) currently, and a
							<span className='text-primary font-semibold'> full-stack web/app developer </span>
							as well.
						</p>
						<p className='text-lg pt-4'>
							I like to explore and pick up new skills, and do side projects in my spare time, you can
							check out some of my{" "}
							<Link href='/projects'>
								<span className='text-primary font-semibold link'>recent works</span>
							</Link>
							.
						</p>
					</div>
				</FadeIn>
			</section>
			<div className='flex page-px pt-20 pb-24 bg-base-300'>
				<section className='flex-1'>
					<h2 className='font-roboto text-3xl font-medium'>Education</h2>
					<div className='flex pt-10 items-center'>
						<div className='avatar'>
							<div className='w-14 rounded-full'>
								<img src='ntu.jpeg' alt='ntu' />
							</div>
						</div>
						<div className='pl-4 flex-1'>
							<h3 className='text-xl font-semibold'>National Taiwan University</h3>
							<h4>Bachelor of Computer Science and Informational Engineering</h4>
							<span className='text-content-light text-sm'>2019 - 2023 (expected)</span>
						</div>
					</div>
				</section>
				<section className='flex-1 pl-10'>
					<h2 className='font-roboto text-3xl font-medium'>Experience</h2>
					<div className='pt-10'>
						<div className='flex'>
							<p className='pr-3 text-3xl leading-none select-none'>·</p>
							<div>
								<h3 className='text-xl font-semibold'>Full-Stack Engineer Intern</h3>
								<h4>SUIQUI Co.,Ltd.</h4>
								<span className='text-content-light text-sm'>Sep 2021 - now</span>
							</div>
						</div>
						<div className='flex pt-6'>
							<p className='pr-3 text-3xl leading-none select-none'>·</p>
							<div>
								<h3 className='text-xl font-semibold'>Wired Network Group Leader</h3>
								<h4>NTU CSIE Network Administration and System Administration Team</h4>
								<span className='text-content-light text-sm'>Mar 2021 - now</span>
							</div>
						</div>
					</div>
				</section>
			</div>
			<section className='page-px pt-20 pb-24'>
				<h2 className='font-roboto text-3xl font-medium pb-10'>Skills</h2>
				<div className='grid grid-cols-3 gap-x-6'>
					<div className='card bg-base-300'>
						<div className='card-body'>
							<h2 className='card-title'>Programming Languages</h2>
							<p className='text-content-light'>JavaScript/TypeScript, Python, C/C++, Java, Dart</p>
						</div>
					</div>
					<div className='card bg-base-300'>
						<div className='card-body'>
							<h2 className='card-title'>Web Development</h2>
							<p className='text-content-light'>HTML/CSS, React, Next, TailwindCSS, SASS</p>
						</div>
					</div>
					<div className='card bg-base-300'>
						<div className='card-body'>
							<h2 className='card-title'>Others</h2>
							<p className='text-content-light'>Flutter, Ionic, GCP, Firebase, Git</p>
							<p className='text-content-light'>English (TOEIC 945), Japanese (N2)</p>
						</div>
					</div>
				</div>
				<div className='flex justify-center pt-10'>
					<div className='skill-icon'>
						<div>
							<img src='skills/js.png' alt='skill-icon' />
						</div>
					</div>
					<div className='skill-icon'>
						<div>
							<img src='skills/ts.png' alt='skill-icon' />
						</div>
					</div>
					<div className='skill-icon'>
						<div>
							<img src='skills/python.png' alt='skill-icon' />
						</div>
					</div>
					<div className='skill-icon'>
						<div>
							<img src='skills/flutter.png' alt='skill-icon' />
						</div>
					</div>
					<div className='skill-icon'>
						<div>
							<img src='skills/firebase.png' alt='skill-icon' />
						</div>
					</div>
					<div className='skill-icon'>
						<div>
							<img src='skills/gcp.png' alt='skill-icon' />
						</div>
					</div>
					<div className='skill-icon'>
						<div>
							<img src='skills/git.png' alt='skill-icon' />
						</div>
					</div>
					<div className='skill-icon'>
						<div>
							<img src='skills/react.png' alt='skill-icon' />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
