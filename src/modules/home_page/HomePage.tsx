import Link from "next/link";
import FadeIn from "react-fade-in";

export default function HomePage() {
  return (
    <div className="pt-12 lg:pt-24">
      <section className="flex flex-col items-center justify-center pt-20 pb-16 page-px lg:pb-24 lg:flex-row">
        <FadeIn>
          <div>
            <div className="avatar">
              <div className="rounded-full lg:w-64 w-52">
                <img src="avatar.png" alt="avatar" />
              </div>
            </div>
            <div className="flex justify-center pt-4">
              <a target="_blank" href="https://www.facebook.com/kyle65643/">
                <div className="contact-icon">
                  <div>
                    <img src="icons/facebook.png" alt="skill-icon" />
                  </div>
                </div>
              </a>
              <a target="_blank" href="https://github.com/kyle65463">
                <div className="contact-icon">
                  <div>
                    <img src="icons/github-sm.png" alt="skill-icon" />
                  </div>
                </div>
              </a>
              <a target="_blank" href="mailto:kyle65463@gmail.com">
                <div className="contact-icon">
                  <div>
                    <img src="icons/mail.png" alt="skill-icon" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={350}>
          <div className="pt-12 pb-6 lg:pl-24 lg:pt-0">
            <div className="pb-4 text-3xl lg:text-4xl font-roboto">
              <h2>
                Hi, I'm <span className="font-medium text-primary">Kyle</span>
              </h2>
            </div>
            <p className="text-lg text-content-mid">
              I'm currently pursuing a degree in computer science at{" "}
              <span className="font-semibold text-primary">
                National Taiwan University
              </span>{" "}
              (NTU). Alongside my studies, I'm also a skilled
              <span className="font-semibold text-primary">
                {" "}
                Full-Stack Web/App Developer{" "} 
              </span>
              with a strong focus on backend engineering.
            </p>
            <p className="pt-3 text-lg text-content-mid">
              I have a deep passion for constantly learning and exploring
              different areas of computer science, such as machine learning
              (NLP), cloud computing and system architecture. In my free time, I
              enjoy working on side projects to further improve my skills. Feel
              free to browse some of my{" "}
              <Link href="/projects">
                <span className="font-semibold text-primary link">
                  Recent works
                </span>
              </Link>
              .
            </p>
          </div>
        </FadeIn>
      </section>
      <div className="flex flex-col pt-20 pb-24 page-px bg-base-300 lg:flex-row">
        <section className="flex-1">
          <h2 className="text-3xl font-medium font-roboto">Education</h2>
          <div className="flex items-center pt-10">
            <div className="avatar">
              <div className="rounded-full w-14">
                <img src="ntu.jpeg" alt="ntu" />
              </div>
            </div>
            <div className="flex-1 pl-4">
              <h3 className="text-xl font-semibold">
                National Taiwan University
              </h3>
              <h4>
                Bachelor of Computer Science and Informational Engineering
              </h4>
              <span className="text-sm text-content-light">
                2019 - 2023
              </span>
            </div>
          </div>
          <div className="flex items-center pt-8">
            <div className="avatar">
              <div className="rounded-full w-14">
                <img src="ntu.jpeg" alt="ntu" />
              </div>
            </div>
            <div className="flex-1 pl-4">
              <h3 className="text-xl font-semibold">
                National Taiwan University
              </h3>
              <h4>Creativity and Entrepreneurship Program</h4>
              <span className="text-sm text-content-light">
                2022 - 2023 
              </span>
            </div>
          </div>
        </section>
        <section className="flex-1 pt-20 pl-0 lg:pl-10 lg:pt-0">
          <h2 className="text-3xl font-medium font-roboto">Experience</h2>
          <div className="pt-10">
            <div className="flex">
              <p className="pr-3 text-3xl leading-none select-none">·</p>
              <div>
                <h3 className="text-xl font-semibold">
                  Backend Engineer Intern
                </h3>
                <h4>Dcard Taiwan Ltd.</h4>
                <span className="text-sm text-content-light">
                  Jul 2023 - PRESENT
                </span>
              </div>
            </div>
            <div className="flex pt-6">
              <p className="pr-3 text-3xl leading-none select-none">·</p>
              <div>
                <h3 className="text-xl font-semibold">Backend Engineer</h3>
                <h4>National Taiwan University Office of Academic Affairs</h4>
                <span className="text-sm text-content-light">
                  Nov 2022 - PRESENT
                </span>
              </div>
            </div>
            <div className="flex pt-6">
              <p className="pr-3 text-3xl leading-none select-none">·</p>
              <div>
                <h3 className="text-xl font-semibold">
                  Frontend Engineer Intern
                </h3>
                <h4>SUIQUI Co.,Ltd.</h4>
                <span className="text-sm text-content-light">
                  Sep 2021 - Mar 2023
                </span>
              </div>
            </div>
            <div className="flex pt-6">
              <p className="pr-3 text-3xl leading-none select-none">·</p>
              <div>
                <h3 className="text-xl font-semibold">
                  Wired Network Group Leader
                </h3>
                <h4>
                  NTU CSIE Network Administration and System Administration Team
                </h4>
                <span className="text-sm text-content-light">
                  Mar 2021 - Aug 2022
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="pt-20 pb-24 page-px">
        <h2 className="pb-10 text-3xl font-medium font-roboto">Skills</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-4">
          <div className="card bg-base-300">
            <div className="card-body">
              <h2 className="card-title">Programming Languages</h2>
              <p className="text-content-mid">
                Go, JavaScript/TypeScript, Python, C/C++, Dart
              </p>
            </div>
          </div>
          <div className="card bg-base-300">
            <div className="card-body">
              <h2 className="card-title">Web Development</h2>
              <p className="text-content-mid">
                HTML/CSS, Express, React, Next.js, Express, Kubernetes, Postgres
              </p>
            </div>
          </div>
          <div className="card bg-base-300">
            <div className="card-body">
              <h2 className="card-title">Others</h2>
              <p className="text-content-mid">Flutter, GCP, Git</p>
              <p className="text-content-mid">
                English (TOEIC 940), Japanese (N2)
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center pt-10 gap-y-6">
          <div className="skill-icon">
            <div>
              <img src="skills/js.png" alt="skill-icon" />
            </div>
          </div>
          <div className="skill-icon">
            <div>
              <img src="skills/ts.png" alt="skill-icon" />
            </div>
          </div>
          <div className="skill-icon">
            <div>
              <img src="skills/python.png" alt="skill-icon" />
            </div>
          </div>
          <div className="skill-icon">
            <div>
              <img src="skills/flutter.png" alt="skill-icon" />
            </div>
          </div>
          <div className="skill-icon">
            <div>
              <img src="skills/firebase.png" alt="skill-icon" />
            </div>
          </div>
          <div className="skill-icon">
            <div>
              <img src="skills/gcp.png" alt="skill-icon" />
            </div>
          </div>
          <div className="skill-icon">
            <div>
              <img src="skills/git.png" alt="skill-icon" />
            </div>
          </div>
          <div className="skill-icon">
            <div>
              <img src="skills/react.png" alt="skill-icon" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
