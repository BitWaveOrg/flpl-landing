"use client";

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import React from "react"

import Link from "next/link"
import {GradientHeading} from "@/components/ui/gradient-heading";

export function NavBar({
  items,
  className,
  activeTab,
}) {
  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6 h-fit flex items-start justify-center w-full",
        className
      )}
    >
      <div className={'invisible xl:visible absolute left-0 ml-12 pt-2 flex items-center h-1/2'}>
        <GradientHeading
          variant="light"
          size='sm'
          weight="bold"
          className={'pb-0'}
        >
          Florentin Pulisca
        </GradientHeading>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex items-center gap-3 bg-background/5 border border-gray-400/40 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = `#${activeTab}` === item.url

          return (
            <Link
              key={item.name}
              href={item.url}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-4 py-4 sm:px-6 sm:py-2 rounded-full transition-colors",
                "text-white/80 hover:text-white",
                isActive && "bg-gray-400/20 text-white"
              )}>
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
}
