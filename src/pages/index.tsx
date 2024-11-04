import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen text-center p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h1 className="text-4xl text-primary mb-4">Welcome to the Haunted Restaurant</h1>
      <p className="mb-6">Experience eerie delights and spooky dishes!</p>
      <Link href="/menu" className="text-primary underline">
        Explore Our Spooky Menu
      </Link>
    </motion.div>
  );
}
