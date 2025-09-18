import { motion } from "framer-motion";
import { GraduationCap, Users, Shield } from "lucide-react";

export default function LandingPage() {
  const roles = [
    {
      title: "Student",
      icon: <GraduationCap className="w-10 h-10 text-blue-500" />,
      desc: "Access courses, track progress, and get mentorship.",
      link: "/Student_Login_Portal.html", // Student Login Portal
      color: "from-blue-100 to-blue-50",
    },
    {
      title: "Mentor",
      icon: <Users className="w-10 h-10 text-green-500" />,
      desc: "Guide students, share resources, and monitor growth.",
      link: "/Mentor_Login_Portal.html", // Mentor Login Portal
      color: "from-green-100 to-green-50",
    },
    {
      title: "Guardian",
      icon: <Shield className="w-10 h-10 text-purple-500" />,
      desc: "Stay informed about student performance and progress.",
      link: "/Guardian_Login_Portal.html", // Guardian Login Portal
      color: "from-purple-100 to-purple-50",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-purple-100">
      <header className="text-center mt-16 mb-10 px-6">
        <h1 className="text-5xl font-extrabold text-gray-800">
          Empowering <span className="text-blue-600">Learning</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Choose your role and begin your journey today
        </p>
      </header>

      <main className="flex-grow flex items-center justify-center">
        <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl p-6">
          {roles.map((role, idx) => (
            <motion.a
              href={role.link}
              key={idx}
              whileHover={{ scale: 1.07, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center justify-center 
                          bg-gradient-to-br ${role.color} 
                          shadow-xl rounded-3xl p-10 text-center 
                          cursor-pointer transition hover:shadow-2xl`}
            >
              {role.icon}
              <h2 className="mt-4 text-2xl font-semibold text-gray-800">
                {role.title}
              </h2>
              <p className="mt-2 text-gray-600">{role.desc}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
              >
                Get Started
              </motion.button>
            </motion.a>
          ))}
        </div>
      </main>

      <footer className="mt-16 py-6 text-center text-gray-500 text-sm border-t">
        © 2025 EduConnect ·{" "}
        <a href="/about" className="hover:underline">About</a> ·
        <a href="/contact" className="hover:underline ml-2">Contact</a> ·
        <a href="/privacy" className="hover:underline ml-2">Privacy</a>
      </footer>
    </div>
  );
}
