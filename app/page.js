import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Minesweeper Deep Q Learning",
    image: "/16x30.gif",
    summary:
      "A reinforcement learning agent trained on 300,000 episodes using Deep-Q Networks to master Minesweeper gameplay.",
    link: "https://github.com/TanveenBal/Minesweeper-Deep-Q-Learning",
  },
  {
    id: 2,
    title: "Chess AI",
    image: "/Game.gif",
    summary:
      "A chess engine with AI algorithms for move prediction and fully customizable UI with themes and visuals for player engagement.",
    link: "https://github.com/TanveenBal/Chess-AI",
  },
  {
    id: 3,
    title: "Car Classyfier",
    image: "/Porche911.gif",
    summary:
      "A model that can predict a cars make, model, and body style from an image with 88.76% accuracy, analyzing 280,000+ images.",
    link: "https://github.com/TanveenBal/Car-Classyfier",
  },
  {
    id: 4,
    title: "Leksa",
    image: "/Leksa.png",
    summary:
      "A food-focused social media app, featuring restaurant recommendations and tailored for college communities.",
    link: "https://www.instagram.com/leksa.ai/",
  },
  {
    id: 5,
    title: "Unbeatable Pong",
    image: "/Pong.gif",
    summary:
      "A retro pong game in C++ with Raylib, featuring classic gameplay, CPU opponent AI, and dynamic gameplay.",
    link: "https://github.com/TanveenBal/Unbeatable-Pong",
  },
  {
    id: 6,
    title: "Object Detection Drone",
    image: "/Drone.jpg",
    summary:
      "A cutting-edge drone with a Raspberry Pi neural network chip and AI camera for real-time object detection and autonomous flight across diverse applications.",
    link: "https://www.burkelab.com/2024/11/23/students-build-and-fly-guinness-record-drone/",
  },
    // {
    // id: 7,
    // title: "Siminsights Internship",
    // image: "/Siminsights.gif",
    // summary:
    //   "Developing AI-powered immersive scenarios with LLMs and XR, using HyperSkill for the 3D content generation in education and training.",
    // link: "https://www.siminsights.com/",
  // },
  // {
  //   id: 8,
  //   title: "RISC Revolution",
  //   image: "/project5.png",
  //   summary:
  //     "Designed a 32-bit MIPS pipelined processor for FPGA implementation, achieving a 400% throughput increase.",
  //   link: "https://github.com/TanveenBal/MIPS32",
  // },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#3a4269] to-[#000000] font-custom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <main className="flex flex-col items-center gap-8">
          {/* Profile Section */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            {/* Profile Image */}
            <div className="w-full flex justify-center sm:justify-start">
              <Image
                className="rounded-full object-cover border-transparent shadow-[0px_0px_25px_10px_rgba(255,255,255,0.4)]"
                src="/Me.png"
                alt="Tanveen Bal"
                width={215}
                height={215}
              />
            </div>
            {/* About Section */}
            <div className="max-w-3xl text-center sm:text-left">
              <h1 className="mt-4 text-3xl sm:text-4xl text-[#ffffff]">Tanveen Bal</h1>
              <p className="mt-4 text-[#d1d5db] text-lg">
                I am currently finishing my Bachelors in Computer Science and Engineering degree at the University of California, Irvine, with plans to advance into a Master's program in Machine Learning. I am passionate about software engineering and using machine learning to solve real-world problems. Feel free to explore some of my projects below.
              </p>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center w-full pb-8 gap-8">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer flex flex-col items-center text-center w-80 mb-8 from-[#111111] to-[#000000] rounded-lg p-4 transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#3b82f6] hover:text-white"
              >
                <Image
                  className="rounded-lg object-cover transition-transform duration-300 ease-in-out"
                  src={project.image}
                  alt={project.title}
                  width={320}
                  height={240}
                />
                <h2 className="mt-4 text-lg text-white">{project.title}</h2>
                <p className="text-sm text-gray-300">{project.summary}</p>
              </a>
            ))}
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center gap-4 py-8 border-t border-[#334155] w-full">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#3b82f6]">Contact Me</h2>
            <p className="text-[#d1d5db] text-center max-w-lg">
              I'm always excited to connect and collaborate. Feel free to reach out to me through any of the platforms below, or download my resume to learn more about my experience and skills.
            </p>
            
            <div className="flex flex-row items-center justify-center gap-8 mt-4">
              {/* Email */}
              <a
                href="mailto:tanveenbal@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity flex items-center gap-2 sm:gap-2"
              >
                <span className="text-[#3b82f6] hidden sm:inline"> tanveenbal@gmail.com</span>
                <Image
                  src="/Icons/mail.svg"
                  alt="Email Icon"
                  width={20}
                  height={20}
                />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/tanveenbal/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity flex items-center gap-2 sm:gap-2"
              >
                <span className="text-[#3b82f6] hidden sm:inline">linkedin.com/in/tanveenbal</span>
                <Image
                  src="/Icons/linkedin.svg"
                  alt="LinkedIn Icon"
                  width={20}
                  height={20}
                />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/tanveenbal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity flex items-center gap-2 sm:gap-2"
              >
                <span className="text-[#3b82f6] hidden sm:inline">github.com/tanveenbal</span>
                <Image
                  src="/Icons/github.svg"
                  alt="GitHub Icon"
                  width={20}
                  height={20}
                />
              </a>
              {/* Resume */}
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity flex items-center gap-2 sm:gap-2"
              >
                <span className="text-[#3b82f6] hidden sm:inline">Download Resume</span>
                <Image
                  src="/Icons/download.svg"
                  alt="Resume Icon"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}