import Link from "next/link";
import FadeIn from "react-fade-in";

export default function HomePage() {
  const experiences = [
    {
      position: "Backend Engineer Intern",
      place: "Dcard Taiwan Ltd.",
      time: "Jul. 2023 - Dec. 2023",
      img: "dcard.png",
    },
    {
      position: "Backend Engineer",
      place: "National Taiwan University Office of Academic Affairs",
      time: "Nov. 2022 - Dec. 2023",
      img: "ntu.jpeg",
    },
    {
      position: "Frontend Engineer",
      place: "SUIQUI Co., Ltd.",
      time: "Sep. 2021 - Mar. 2023",
      img: "suiqui.png",
    },
    // {
    //   position: "Wired Network Group Leader",
    //   place: "NTU CSIE Network Administration and System Administration Team",
    //   time: "Mar 2021 - Aug 2022",
    //   img: "ntu.jpeg",
    // },
  ];

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
              I'm currently pursuing a master degree in computer science at{" "}
              <span className="font-semibold text-primary">
                University of California, Berkeley
              </span>{" "}
              . Alongside my studies, I'm also a skilled
              <span className="font-semibold text-primary">
                {" "}
                Full-Stack Web/App Developer{" "}
              </span>
              with a strong focus on backend engineering.
            </p>
            {/* <p className="pt-3 text-lg text-content-mid">
              I have a deep passion for constantly learning and exploring
              different areas of computer science, such as system architecture,
              cloud computing and machine learning (NLP). In my free time, I
              enjoy working on side projects to further improve my skills. Feel
              free to browse some of my{" "}
              <Link href="/projects">
                <span className="font-semibold text-primary link">
                  Recent works
                </span>
              </Link>
              .
            </p> */}
          </div>
        </FadeIn>
      </section>
      <div className="flex flex-col pt-20 pb-24 page-px bg-base-300 lg:flex-row">
        <section className="flex-1">
          <h2 className="text-3xl font-medium font-roboto">Education</h2>
          <div className="flex pt-8">
            <p className="text-3xl leading-none select-none">·</p>
            <div className="flex-1 pl-4">
              <h3 className="text-xl font-semibold">
                University of California, Berkeley
              </h3>
              <h4>M.Eng. in Electrical Engineering and Computer Science</h4>
              <span className="text-sm text-content-light">2024 - 2025</span>
            </div>
          </div>
          <div className="flex pt-8">
            <p className="text-3xl leading-none select-none">·</p>
            <div className="flex-1 pl-4">
              <h3 className="text-xl font-semibold">
                National Taiwan University
              </h3>
              <h4>B.S. in Computer Science and Informational Engineering</h4>
              <span className="text-sm text-content-light">2019 - 2023</span>
              <h4 className="pt-2">Creativity and Entrepreneurship Program</h4>
              <span className="text-sm text-content-light">2022 - 2023</span>
            </div>
          </div>
        </section>
        <section className="flex-1 pt-20 pl-0 lg:pl-10 lg:pt-0">
          <h2 className="text-3xl font-medium font-roboto">Experience</h2>
          <section className="pt-10 space-y-8">
            {experiences.map((exp) => (
              <div className="flex items-center">
                <div className="avatar">
                  <div className="rounded-full w-14">
                    <img src={exp.img} alt="ntu" />
                  </div>
                </div>
                <div className="flex-1 pl-4">
                  <h3 className="text-xl font-semibold">{exp.position}</h3>
                  <h4>{exp.place}</h4>
                  <span className="text-sm text-content-light">{exp.time}</span>
                </div>
              </div>
            ))}
          </section>
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
                English (TOEFL 106), Japanese (N2)
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
