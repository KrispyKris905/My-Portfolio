import { Hero } from "@/components/hero";
import Image from "next/image"
import Link from "next/link";



export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="responsive-flex"> 
          <div>
            <h1>{"h1 text test"}</h1>
            <h3>{"h3 text test"}</h3>
          </div>
          <Image
            src="/professionalPhoto.jpg"
            width={400}
            height={400}
            alt="Personal headshot"
            style={{borderRadius:"1rem",}}
          />
        </div>
      </div>

      <div id="alt">
        {'alternative theme test'}  
      </div>
    </div>
  );
}