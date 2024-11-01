import React from "react";
import { Helmet } from "react-helmet";
import {
  personalInfo,
} from "@data/SeoData.json"; // Ensure this path is correct

const Seo = () => {
  return (
    <Helmet>
      <title>{personalInfo.name} | Full Stack Developer Portfolio</title>
      <meta
        name="description"
        content={`Welcome to the portfolio of ${personalInfo.name}, a Software Engineer with expertise in developing full-stack applications using the MERN stack. Explore projects, skills, and experience.`}
      />
      <meta
        name="keywords"
        content={[
          "Full Stack Developer",
          "MERN Stack",
          "Web Developer",
          "JavaScript",
          "Node.js",
          "React.js",
          "Express.js",
          "MongoDB",
          "Frontend Development",
          "Backend Development",
          "UI/UX Design",
          "Responsive Web Design",
          "Web Automation",
          "Data Scraping",
          "Software Engineering",
          "API Integration",
          "Selenium",
          "Docker",
          "Git",
          "Freelancer",
          "Portfolio",
          personalInfo.name,
        ].join(", ")}
      />
      <link rel="canonical" href={personalInfo.portfolio} />

      {/* Open Graph Meta Tags for Facebook and LinkedIn */}
      <meta property="og:title" content={`${personalInfo.name} | Full Stack Developer Portfolio`} />
      <meta property="og:description" content={`Explore the portfolio of ${personalInfo.name}, showcasing expertise in full-stack development and the MERN stack.`} />
      <meta property="og:image" content="./favicon.png" />
      <meta property="og:url" content={personalInfo.portfolio} />
      <meta property="og:type" content="website" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${personalInfo.name} | Full Stack Developer Portfolio`} />
      <meta name="twitter:description" content={`Explore the portfolio of ${personalInfo.name}, showcasing expertise in full-stack development and the MERN stack.`} />
      <meta name="twitter:image" content="./favicon.png" />

      <meta name="x:card" content="summary_large_image" />
      <meta name="x:title" content={`${personalInfo.name} | Full Stack Developer Portfolio`} />
      <meta name="x:description" content={`Explore the portfolio of ${personalInfo.name}, showcasing expertise in full-stack development and the MERN stack.`} />
      <meta name="x:image" content="./favicon.png" />
    </Helmet>
  );
};

export default Seo;
