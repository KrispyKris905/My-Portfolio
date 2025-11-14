import Image from "next/image";
import { ContentSection } from "@/components/content-section";
import RecentlyPlayed from '@/components/RecentlyPlayedSpotify';


export default function AboutMe() {
  return (
    <div>
      <ContentSection>
        <div>
          <h1>{"About Me"}</h1>
          <p>{`Hi, I’m Cristobal Elizarraraz, welcome to my portfolio! 
            I am a recent Computer Science May 2025 graduate from CSU-Monterey Bay, 
            driven by a passion for building reliable, scalable, and maintainable software systems, 
            and a talent for creative storytelling. I bring a strong blend of software development expertise, 
            collaborative project experience, and user-focused design skills to teams where adaptability, and problem-solving drive success.`}
            <br/><br/>
            {`During my academic studies, I’ve worked on a variety of collaborative development projects that strengthened both my technical and teamwork skills. 
            From building full-stack web applications with React, Flask, and Spring Boot to developing interactive 3D games in Unity, I’ve gained hands-on experience across multiple programming languages and frameworks. 
            These projects taught me how to design user-focused interfaces, debug and deploy reliable code, and adapt quickly to new tools and technologies. 
            Through internships and academic collaborations, I’ve learned to contribute effectively in agile environments, by balancing independent problem-solving with clear communication and shared goals.`}
          </p>
          <br/><br/>
        </div>
        <Image
          src="/professionalPhoto.JPG"
          width={400}
          height={400}
          alt="Personal headshot"
          className="img-large"
        />
      </ContentSection>

      <ContentSection id="alt">
        <RecentlyPlayed />
      </ContentSection>
    </div>
  );
}