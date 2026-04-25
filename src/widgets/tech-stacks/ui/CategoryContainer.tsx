"use client";

import { TechStack } from "@/entities/tech-stacks/types";
import { motion } from "framer-motion";
import { getLevelCount } from "../utils/get-level-count";
import { useCheckMobile } from "@/shared/hooks/useCheckMobile";

interface Props {
  isActive: boolean;
  name: string;
  items: TechStack[];
}

const CategoryContainer = ({ isActive, name, items }: Props) => {
  const isMobile = useCheckMobile();

  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{
        opacity: isActive ? 1 : 0.3,
        scale: isActive ? 1 : 0.95,
      }}
      transition={{ duration: 0.5 }}
      className={`flex-1 w-full sm:w-auto min-w-50 sm:min-w-55 md:min-w-0 rounded-2xl sm:rounded-3xl md:rounded-3xl lg:rounded-4xl xl:rounded-4xl p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-5 xl:gap-6 transition-colors duration-500 ${
        isActive ? "bg-primary/20 border border-primary sm:border-2" : "bg-surface border border-border sm:border-2"
      }`}>
      <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-bold font-playpen tracking-wider text-primary">
        {name}
      </h3>
      
      <div className="flex flex-col gap-2 sm:gap-2.5 md:gap-3 overflow-y-auto max-h-[40vh] sm:max-h-[45vh] md:max-h-[50vh] lg:max-h-none xl:max-h-none">
        {items?.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: isActive ? 1 : 0.5,
              x: isMobile ? 0 : (isActive ? 0 : -20),
            }}
            transition={{
              duration: 0.3,
              delay: isMobile ? 0 : (isActive ? index * 0.05 : 0),
            }}
            className={`flex items-center justify-between p-2 sm:p-3 md:p-3 lg:p-4 xl:p-4 rounded-lg sm:rounded-xl md:rounded-xl transition-colors ${
              isActive ? "bg-surface/80" : "bg-surface/40"
            }`}>
            <span className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg font-medium">
              {item.name.title[0]?.plain_text ?? "Untitled"}
            </span>
            
            <div className="flex gap-0.5 sm:gap-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2 md:h-2 rounded-full ${
                    i < getLevelCount(item.level.status?.name ?? "")
                      ? "bg-primary"
                      : "bg-border"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CategoryContainer;