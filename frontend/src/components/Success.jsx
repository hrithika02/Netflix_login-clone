import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

function Success() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <motion.div
        className="bg-zinc-900 p-10 rounded-2xl shadow-lg text-center max-w-md w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <CheckCircle className="mx-auto text-green-500 w-20 h-20 mb-6" />
        <h1 className="text-3xl font-bold mb-4">
          Successfully Logged In 
        </h1>
        <p className="text-gray-400 mb-6">
          Welcome back! You can now explore your Netflix clone dashboard.
        </p>
        <motion.a
          href="/home"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Continue to Home
        </motion.a>
      </motion.div>
    </div>
  );
}

export default Success;
