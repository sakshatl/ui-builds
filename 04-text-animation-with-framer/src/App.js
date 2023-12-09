import { motion, useAnimate } from 'framer-motion';
import './App.css';


function App() {

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1, // Stagger time between children
      },
    },
  };

  const childVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const [ref, animate] = useAnimate();

  return (
    <div className="App p-6 bg-black h-screen">
      <motion.div 
        className='max-w-5xl mx-auto text-center text-white h-full flex flex-col justify-center items-center'
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.h1 
          className='text-6xl font-bold text-gray-200'
          variants={childVariants}
        >
          Get started with Tailwind CSS
        </motion.h1>
        <motion.p 
          className='text-xl text-gray-400 mt-4'
          variants={childVariants}
        >
          Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.
        </motion.p>
        <motion.button 
          className='text-lg mt-8 px-8 py-4 bg-orange-500 rounded-lg'
          variants={childVariants}
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
}

export default App;
