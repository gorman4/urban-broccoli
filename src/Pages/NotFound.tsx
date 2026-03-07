import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white px-6">
      
      <div className="text-center max-w-lg">
        
        {/* Animated 404 */}
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-9xl font-extrabold tracking-widest drop-shadow-lg"
        >
          404
        </motion.h1>

        {/* Floating Emoji */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-6xl mt-4"
        >
          🚧
        </motion.div>

        <h2 className="text-3xl font-bold mt-6">Page Not Found</h2>

        <p className="text-white/80 mt-3 text-lg">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Button */}
        <div className="mt-8">
          <Link
            to="/"
            className="px-8 py-3 rounded-xl bg-white text-indigo-600 font-semibold shadow-lg hover:scale-105 transition transform duration-200"
          >
            Go Back Home
          </Link>
        </div>

      </div>
    </div>
  );
}