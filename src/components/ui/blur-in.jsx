"use client";

import { motion } from "framer-motion";
import { Geist } from "next/font/google"

import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal']
});

const BlurIn = ({
  word,
  className,
  variant,
  duration = 1
}) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      transition={{ duration }}
      variants={combinedVariants}
      className={cn(
        "font-display text-center font-bold flex items-center",
        className,
        geist.className
      )}>
      {word}
    </motion.h1>
  );
};

export { BlurIn };
