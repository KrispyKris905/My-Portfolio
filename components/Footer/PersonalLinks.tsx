"use client";
import Image from "next/image"
import Link from "next/link"

//Const controls actual display size
const imageStyle={
    width: "auto",
    height: "50px",
}

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
                    src="/linkedIn-logo.png"
                    title="LinkedIn Profile"
                    width={50}
                    height={50}
                    alt="LinkedIn-Logo"
                    className="img-small"
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
                    width={50}
                    height={50}
                    alt="GitHub-Logo"
                    className="img-small"
                />
            </Link>
        </div>
    );
}