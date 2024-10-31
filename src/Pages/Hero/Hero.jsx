
import { BackgroundLines } from "@components/BackgroundLines";
import { TypewriterEffect } from "@components/TypeWriterEffect";
import DATA from '@data/Data.json';
export default function Hero() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full min-h-screen">
      <div
        className="flex flex-col lg:flex-row items-center justify-center gap-12 px-4 w-full max-w-7xl mx-auto"
        id="home"
      >
        <div className="flex-1 text-center lg:text-left">
          <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-3xl lg:text-5xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            {DATA.name}
            <br /> 
            {DATA.jobTitle}
          </h2>
          <p className="max-w-xl mx-auto lg:mx-0 text-sm md:text-lg text-neutral-700 dark:text-neutral-400">
            {DATA.descriptionAboutYourSelf}
          </p>
        </div>
        <TypewriterEffect />
      </div>
    </BackgroundLines>
  );
}
