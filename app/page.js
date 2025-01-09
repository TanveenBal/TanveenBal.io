import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Minesweeper Deep Q Learning",
    image: "/DQN/8x8.gif",
    summary:
      "A reinforcement learning agent trained on 300,000 episodes using Deep-Q Networks to master Minesweeper gameplay.",
    link: "https://github.com/TanveenBal/Minesweeper-Deep-Q-Learning",
  },
  {
    id: 2,
    title: "Chess AI",
    image: "/ChessAI/Themes.gif",
    summary:
      "A chess engine with AI algorithms for move prediction and fully customizable UI with themes and visuals for player engagement.",
    link: "https://github.com/TanveenBal/Chess-AI",
  },
  {
    id: 3,
    title: "Car Classyfier",
    image: "/Car/Porche911.gif",
    summary:
      "A model that can predict a cars make, model, and body style from an image with 88.76% accuracy, analyzing 280,000+ images.",
    link: "https://github.com/TanveenBal/Car-Classyfier",
  },
  {
    id: 4,
    title: "Leksa",
    image: "/Leksa/Leksa.png",
    summary:
      "A food-focused social media app, featuring restaurant recommendations and tailored for college communities.",
    link: "https://www.instagram.com/leksa.ai/",
  },
    {
    id: 5,
    title: "Unbeatable Pong",
    image: "/Pong/Pong.gif",
    summary:
      "A retro pong game in C++ with Raylib, featuring classic gameplay, CPU opponent AI, and dynamic gameplay.",
    link: "https://github.com/TanveenBal/Unbeatable-Pong",
  },
  {
    id: 6,
    title: "Object Detection Drone",
    image: "/Drone/Drone.jpg",
    summary:
      "A cutting-edge drone with a Raspberry Pi neural network chip and AI camera for real-time object detection and autonomous flight across diverse applications.",
    link: "https://www.burkelab.com/2024/11/23/students-build-and-fly-guinness-record-drone/",
  },
  // {
  //   id: 7,
  //   title: "RISC Revolution",
  //   image: "/project5.png",
  //   summary:
  //     "Designed a 32-bit MIPS pipelined processor for FPGA implementation, achieving a 400% throughput increase.",
  //   link: "https://github.com/TanveenBal/MIPS32",
  // },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <main className="flex flex-col items-center gap-8">
          {/* Profile Image */}
          <div className="flex flex-col items-center">
            <Image
              className="rounded-full object-cover border-4 border-blue-500 shadow-lg"
              src="/Profile/Me.jpeg"
              alt="Tanveen Bal"
              width={150}
              height={150}
            />
            <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-blue-500">Tanveen Bal</h1>
          </div>

          {/* About Section */}
          <p className="max-w-3xl text-left text-white">
            I am currently finishing my Bachelors in Computer Science and Engineering degree at the University of California, Irvine, with plans to advance into a Master's program in Machine Learning. I am passionate about software engineering and using machine learning to solve real-world problems. Feel free to explore some of my projects below. 
          </p>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center w-full pb-8">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer flex flex-col items-center text-center w-80 mb-8"
              >
                <Image
                  className="rounded-lg object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                  src={project.image}
                  alt={project.title}
                  width={320}
                  height={240}
                />
                <h2 className="mt-4 text-lg text-left font-semibold text-white">{project.title}</h2>
                <p className="text-sm text-center text-gray-500">{project.summary}</p>
              </a>
            ))}
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center gap-4 py-8 border-t border-gray-700 w-full">
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-700">Contact Me</h2>
            <p className="text-white text-center max-w-lg">
              I'm always excited to connect and collaborate. Feel free to reach out to me through any of the platforms below.
            </p>
            
            <div className="flex flex-row items-center justify-center gap-8 mt-4">
              {/* Email */}
              <a
                href="mailto:tanveenbal@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity flex items-center gap-2 sm:gap-2"
              >
                <span className="text-white hidden sm:inline"> tanveenbal@gmail.com</span>
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
                <span className="text-white hidden sm:inline">linkedin.com/in/tanveenbal</span>
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
                <span className="text-white hidden sm:inline">github.com/tanveenbal</span>
                <Image
                  src="/Icons/github.svg"
                  alt="GitHub Icon"
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

