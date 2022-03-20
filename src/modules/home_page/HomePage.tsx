export default function HomePage() {
	return (
		<div>
			<section className='hero-section page-px'>
				<div className='avatar'>
					<div className='w-60 rounded-full'>
						<img src='avatar.jpg' alt='avatar' />
					</div>
				</div>
				<div className='pl-10'>
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
			<div className='flex page-px py-14 bg-base-300'>
				<section className='flex-1'>
					<h2 className='font-roboto text-3xl font-medium'>EDUCATION</h2>
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
					<h2 className='font-roboto text-3xl font-medium'>EXPERIENCE</h2>
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
		</div>
	);
}
