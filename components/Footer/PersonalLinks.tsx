"use client";
import Image from "next/image"
import Link from "next/link"

//Const controls actual display size
const imageStyle={
    width: "auto",
    height: "50px",
}
//Const only meant for image optimization(lower value will result in lower image quality)
const imageWxH=100

export default function PersonalLinks(){
    return(
        <div id="links">

            <Link
                href="https://www.linkedin.com/in/cristobal-elizarraraz-rios-150b9b260"
                target="_blank"
                rel="noopener noreferrer"
                style={{ cursor: 'pointer' }}
            >
                <Image
                    src="/LinkedIn-Logo.png"
                    title="LinkedIn Profile"
                    width={imageWxH}
                    height={imageWxH}
                    alt="LinkedIn-Logo"
                    style={imageStyle}
                />
            </Link>

            <Link
                href="https://github.com/KrispyKris905"
                title="Github Profile"
                target="_blank"
                rel="noopener noreferrer"
                style={{ cursor: 'pointer' }}
            >
                <Image
                    src="/GitHub-Logo.png"
                    width={imageWxH}
                    height={imageWxH}
                    alt="GitHub-Logo"
                    style={imageStyle}
                />
            </Link>
        </div>
    );
}