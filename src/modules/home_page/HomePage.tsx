export default function HomePage() {
	return (
		<div>
			<section className='hero-section page-px'>
				<div className='avatar'>
					<div className='w-64 rounded-full'>
						<img src='avatar.jpg' alt='avatar' />
					</div>
				</div>
				<div className='pl-24'>
					<div className='text-4xl font-roboto pb-4'>
						<h2>Hi,</h2>
						<h2>
							I'm <span className='text-primary'>Kyle</span>
						</h2>
					</div>
					<p className='text-lg'>
						My name is Kyle. I am a sophomore studying computer science at National Taiwan University (NTU)
						currently. I have a great passion for software-related techniques, including many different
						fields, such as machine learning, system programming, network management, web development, app
						development, and so on, most of them are learned by myself. I like to explore and pick up new
						skills in my free time, trying and facing various challenges.
					</p>
				</div>
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
			</section>
		</div>
	);
}
