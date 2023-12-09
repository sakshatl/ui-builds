import { useState } from "react";
import { motion } from 'framer-motion'

export default function TabList({ tabs, activeIndex, onClick }) {
  const [active, setActive]= useState(activeIndex || 0);

  const handleClick = (item) => {
    let index = tabs.indexOf(item);
    setActive(index);
    onClick({ newActiveIndex: index });
  }

  return (
    <div className="flex gap-4">
      {tabs && tabs.map((item, index) => (
        <div onClick={() => handleClick(item)} key={index} style={{ zIndex: '999' }} className={`text-lg py-2 px-4 relative`}>
          {active === index &&
            <motion.div
              className="bg-blue-500 absolute inset-0"
              style={{ borderRadius: '999px' }}
              layoutId="active-tab-pill"
              // transition={{ duration: 5 }}
            />
          }
          <span className="relative z-10 cursor-pointer">{item}</span>
        </div>
      ))}
    </div>
  )
}

