import { Link } from "@cher1shrxd/loading";
import { ArrowRight } from "lucide-react";

interface Props {
  href: string;
  title: string;
  description: string;
}

const NavigationCard = ({ href, title, description }: Props) => {
  return (
    <Link
      href={href}
      className="group relative bg-surface border border-border sm:border-2 rounded-lg sm:rounded-xl md:rounded-xl p-6 sm:p-8 md:p-9 lg:p-10 xl:p-12 flex flex-col items-start gap-2 sm:gap-3 md:gap-3 lg:gap-4 xl:gap-4 hover:border-primary transition-all duration-300 overflow-hidden">
      <div className="flex items-center justify-between w-full">
        <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold font-playpen">{title}</h3>
        <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-primary transition-transform duration-300 -rotate-45 group-hover:rotate-0" />
      </div>
      <p className="text-text/70 text-sm sm:text-base md:text-base lg:text-lg xl:text-lg">{description}</p>
      <div className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </Link>
  );
};

export default NavigationCard;
