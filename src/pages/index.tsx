import Image from "next/image";
import { Github, Linkedin, Twitch, Briefcase, ShieldCheck, Terminal } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111111] text-white font-sans">
      <header className="container mx-auto py-16 flex flex-col items-center text-center">
        <div className="w-32 h-32 relative rounded-full overflow-hidden">
          <Image
            src="/avatar.png"
            alt="Will-Garlens Avatar"
            layout="fill"
            className="object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold mt-6">Hi, I’m Will-Garlens</h1>
        <p className="mt-2 text-lg text-gray-300">
          Computer Science Student @ Brooklyn College • Aspiring SOC Analyst
        </p>
        <div className="flex space-x-4 mt-4">
          <a href="https://github.com/Tohru-art" target="_blank" rel="noreferrer">
            <Github size={22} />
          </a>
          <a href="https://linkedin.com/in/will-garlens-pierre" target="_blank" rel="noreferrer">
            <Linkedin size={22} />
          </a>
          <a href="https://twitch.tv/exciteddarkowl" target="_blank" rel="noreferrer">
            <Twitch size={22} />
          </a>
        </div>
      </header>

      <section className="bg-black py-10">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-300">
            I am focused on a career in cybersecurity, to protect systems from evolving threats. 
            Fluent in three languages and adaptable to diverse challenges, I am eager to bring my determination and technical skills into the cybersecurity field.
          </p>
        </div>
      </section>

      <section className="bg-[#111111] py-10">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-10">
          <div className="bg-neutral-900 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Briefcase size={20} /> Education
            </h3>
            <ol className="relative border-s border-gray-700 ml-4">
              {/* <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                <time className="text-sm text-gray-400">2024 – 2</time>
                <h4 className="text-lg font-semibold text-white">Brooklyn College</h4>
                <p className="text-gray-300 text-sm">B.S. Computer Science</p>
              </li> */}
              <li className="ms-4">
                <div className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                <time className="text-sm text-gray-400">In Progress</time>
                <h4 className="text-lg font-semibold text-white">Western Governors University</h4>
                <p className="text-gray-300 text-sm">B.S. Cybersecurity and Information Assurance</p>
              </li>
            </ol>
          </div>

          <div className="bg-neutral-900 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <ShieldCheck size={20} /> Certifications & Labs
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start justify-between gap-4 bg-gray-800 p-3 rounded-lg">
                <div>
                  <h4 className="text-white font-semibold">Security+</h4>
                  <p className="text-sm text-gray-400">Comptia exam covering core blue team skills</p>
                </div>
                <span className="bg-blue-900 text-xs text-blue-300 px-2 py-0.5 rounded-full whitespace-nowrap">In Progress</span>
              </li>

              <li className="flex items-start justify-between gap-4 bg-gray-800 p-3 rounded-lg">
                <div>
                  <h4 className="text-white font-semibold">Google Cybersecurity Certificate</h4>
                  <p className="text-sm text-gray-400">Covers analyst skills, security tools, ethics, and attack impact</p>
                </div>
                <span className="bg-green-900 text-xs text-green-300 px-2 py-0.5 rounded-full whitespace-nowrap">Completed</span>
              </li>
        
              <li className="flex items-start justify-between gap-4 bg-gray-800 p-3 rounded-lg">
                <div>
                  <h4 className="text-white font-semibold">TryHackMe</h4>
                  <p className="text-sm text-gray-400">Hands-on virtual lab with blue team pathway</p>
                </div>
                <span className="bg-blue-900 text-xs text-blue-300 px-2 py-0.5 rounded-full whitespace-nowrap">Blue Team</span>
              </li>
              <li className="flex items-start justify-between gap-4 bg-gray-800 p-3 rounded-lg">
                <div>
                  <h4 className="text-white font-semibold">Google IT Support</h4>
                  <p className="text-sm text-gray-400">Coursera-backed cert for troubleshooting & support</p>
                </div>
                <span className="bg-green-900 text-xs text-green-300 px-2 py-0.5 rounded-full whitespace-nowrap">Completed</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-black py-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Terminal size={20} /> Skills & Tools
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-zinc-900 to-gray-800 p-6 rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300">
              <h4 className="text-lg font-bold text-white mb-4">Languages</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex justify-between items-center">
                  <span className="font-medium">Java</span>
                  <span className="bg-transparent-900 text-gray-300 text-xs px-2 py-0.5 rounded-full">Basic</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium">Python</span>
                  <span className="bg-trans-900 text-gray-300 text-xs px-2 py-0.5 rounded-full">Beginner</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium">JavaScript</span>
                  <span className="bg-trans-900 text-gray-300 text-xs px-2 py-0.5 rounded-full">Intermediate</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-gray-800 p-6 rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300">
              <h4 className="text-lg font-bold text-white mb-4">Cybersecurity</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex justify-between items-center">
                  <span className="font-medium">Kali Linux</span>
                  <span className="bg-trans-900 text-gray-300 text-xs px-2 py-0.5 rounded-full">Basic</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium">Metasploit</span>
                  <span className="bg-trans-900 text-gray-300 text-xs px-2 py-0.5 rounded-full">Beginner</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium">SIEM Tools</span>
                  <span className="bg-trans-900 text-gray-300 text-xs px-2 py-0.5 rounded-full">Intermediate</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-gray-800 p-6 rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300">
              <h4 className="text-lg font-bold text-white mb-4">Web & Cloud</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex justify-between items-center">
                  <span className="font-medium">React</span>
                  <span className="bg-trans-900 text-gray-300 text-xs px-2 py-0.5 rounded-full">Basic</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium">Tailwind CSS</span>
                  <span className="bg-trans-900 text-gray-300 text-xs px-2 py-0.5 rounded-full">Beginner</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium">AWS EC2</span>
                  <span className="bg-trans-900 text-gray-300 text-xs px-2 py-0.5 rounded-full">Beginner</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
