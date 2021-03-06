import Link from "next/link";
import { useRouter } from "next/router";
import FadeIn from "react-fade-in";

export default function HomePage() {
	return (
		<div className='lg:pt-24 pt-12'>
			<section className='flex justify-center page-px pt-20 lg:pb-24 pb-16 flex-col lg:flex-row items-center'>
				<FadeIn>
					<div>
						<div className='avatar'>
							<div className='lg:w-64 w-52 rounded-full'>
								<img src='avatar.jpg' alt='avatar' />
							</div>
						</div>
						<div className='flex justify-center pt-4'>
							<a target='_blank' href='https://www.facebook.com/kyle65643/'>
								<div className='contact-icon'>
									<div>
										<img src='icons/facebook.png' alt='skill-icon' />
									</div>
								</div>
							</a>
							<a target='_blank' href='https://github.com/kyle65463'>
								<div className='contact-icon'>
									<div>
										<img src='icons/github-sm.png' alt='skill-icon' />
									</div>
								</div>
							</a>
							<a target='_blank' href='mailto:kyle65463@gmail.com'>
								<div className='contact-icon'>
									<div>
										<img src='icons/mail.png' alt='skill-icon' />
									</div>
								</div>
							</a>
						</div>
					</div>
				</FadeIn>
				<FadeIn delay={350}>
					<div className='lg:pl-24 pb-6 lg:pt-0 pt-12'>
						<div className='lg:text-4xl text-3xl font-roboto pb-4'>
							<h2>
								Hi, I'm <span className='text-primary font-medium'>Kyle</span>
							</h2>
						</div>
						<p className='text-lg text-content-mid'>
							I'm a student majoring computer science in{" "}
							<span className='text-primary font-semibold'>National Taiwan University</span> (NTU), and a
							<span className='text-primary font-semibold'> Full-Stack Web/App Developer </span>
							as well.
						</p>
						<p className='text-lg pt-3 text-content-mid'>
							I like to explore and pick up new skills, such as machine learning (NLP), computer security
							and network management. I have also completed some side projects using my spare time, you
							can check out my{" "}
							<Link href='/projects'>
								<span className='text-primary font-semibold link'>Recent works</span>
							</Link>
							.
						</p>
					</div>
				</FadeIn>
			</section>
			<div className='flex page-px pt-20 pb-24 bg-base-300 lg:flex-row flex-col'>
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
							<span className='text-content-light text-sm'>2019 - 2023 (Expected)</span>
						</div>
					</div>
				</section>
				<section className='flex-1 lg:pl-10 lg:pt-0 pt-20 pl-0'>
					<h2 className='font-roboto text-3xl font-medium'>Experience</h2>
					<div className='pt-10'>
						<div className='flex'>
							<p className='pr-3 text-3xl leading-none select-none'>??</p>
							<div>
								<h3 className='text-xl font-semibold'>Full-Stack Engineer Intern</h3>
								<h4>SUIQUI Co.,Ltd.</h4>
								<span className='text-content-light text-sm'>Sep 2021 - PRESENT</span>
							</div>
						</div>
						<div className='flex pt-6'>
							<p className='pr-3 text-3xl leading-none select-none'>??</p>
							<div>
								<h3 className='text-xl font-semibold'>Wired Network Group Leader</h3>
								<h4>NTU CSIE Network Administration and System Administration Team</h4>
								<span className='text-content-light text-sm'>Mar 2021 - PRESENT</span>
							</div>
						</div>
					</div>
				</section>
			</div>
			<section className='page-px pt-20 pb-24'>
				<h2 className='font-roboto text-3xl font-medium pb-10'>Skills</h2>
				<div className='grid xl:grid-cols-3 grid-cols-1 gap-x-6 gap-y-4'>
					<div className='card bg-base-300'>
						<div className='card-body'>
							<h2 className='card-title'>Programming Languages</h2>
							<p className='text-content-mid'>JavaScript/TypeScript, Python, C/C++, Java, Dart</p>
						</div>
					</div>
					<div className='card bg-base-300'>
						<div className='card-body'>
							<h2 className='card-title'>Web Development</h2>
							<p className='text-content-mid'>HTML/CSS, React, Next, TailwindCSS, SASS</p>
						</div>
					</div>
					<div className='card bg-base-300'>
						<div className='card-body'>
							<h2 className='card-title'>Others</h2>
							<p className='text-content-mid'>Flutter, Ionic, GCP, Firebase, Git</p>
							<p className='text-content-mid'>English (TOEIC 940), Japanese (N2)</p>
						</div>
					</div>
				</div>
				<div className='flex justify-center pt-10 flex-wrap gap-y-6'>
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
