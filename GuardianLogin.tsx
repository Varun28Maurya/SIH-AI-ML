import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";

export default function GuardianLogin() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-purple-200">
      <motion.div
        className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-center text-purple-600 mb-6">
          Guardian Login
        </h1>

        <label className="block mb-4 text-gray-700 font-medium">
          Registered Phone / Email (linked with student)
          <input
            type="text"
            placeholder="Enter your phone or email"
            className="mt-2 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </label>

        <label className="block mb-6 text-gray-700 font-medium relative">
          Password
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="mt-2 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 pr-12"
          />
          <span
            className="absolute right-3 top-[52%] -translate-y-1/2 cursor-pointer text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </span>
        </label>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="w-full bg-purple-600 text-white py-2 rounded-xl shadow hover:bg-purple-700 transition"
        >
          Login
        </motion.button>
      </motion.div>
    </div>
  );
}
