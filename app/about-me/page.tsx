import Image from "next/image";
import { ContentSection } from "@/components/content-section";

export default function AboutMe() {
  return (
    <div>
      <ContentSection>
        <div>
          <h1>{"About Me"}</h1>
          <h6>{`Hi, I’m Cristobal Elizarraraz, welcome to my portfolio! 
              I am a recent Computer Science May 2025 graduate from CSU-Monterey Bay, 
              driven by a passion for building reliable and scalable software systems, 
              and a talent for creative storytelling.`}</h6>
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
        {'alternative theme test'}
      </ContentSection>
    </div>
  );
}