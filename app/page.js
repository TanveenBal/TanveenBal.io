import Image from "next/image";
import Link from "next/link";

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
      "Created a chess engine with AI algorithms for move prediction and customizable themes for player engagement.",
    link: "/projects/ChessAI",
  },
  {
    id: 3,
    title: "Car Classyfier",
    image: "/Car/Porche911.gif",
    summary:
      "Developed a model predicting car make and model from images with 88.76% accuracy, analyzing 280,000+ images.",
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
      "Built a retro pong game in C++ with Raylib, featuring classic gameplay, CPU opponent AI, and dynamic gameplay.",
    link: "https://github.com/TanveenBal/Unbeatable-Pong",
  },
  {
    id: 6,
    title: "Object Detection Drone",
    image: "/Drone/Drone.jpg",
    summary:
      "Implementing applications of autonomous drone flight in combination with real-time object detection",
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
    <div className="min-h-screen bg-black-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <main className="flex flex-col items-center gap-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-red-500">Tanveen Bal</h1>
          <p className="max-w-3xl text-left text-white">
            I am currently pursuing a Bachelor's degree in Computer Science and Engineering at the University of California, Irvine, with plans to advance into a Master's program in Machine Learning. Alongside my studies, I am continuously refining my skills in full-stack development and exploring cutting-edge domains like AI, cloud systems, embedded solutions, and generative tools. My work bridges innovative technologies to create impactful solutions. Feel free to explore my projects below!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center w-full">
            {projects.map((project) => (
              <Link key={project.id} href={project.link}>
                <div className="group cursor-pointer flex flex-col items-center text-center w-80">
                  <Image
                    className="rounded-lg object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    src={project.image}
                    alt={project.title}
                    width={320}
                    height={240}
                  />
                  <h2 className="mt-4 text-lg text-left font-semibold text-white">{project.title}</h2>
                  <p className="text-sm text-center text-gray-500">{project.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
