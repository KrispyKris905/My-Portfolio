"use client";
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavBar(){
    const pathname = usePathname();
    return(
        <nav>
            <Link
                href="/projectList"
                className={pathname === "/projectList" ? "active-page" : ""}
            >
                Project List
            </Link>
            <Link
                href="/about"
                className={pathname === "/about" ? "active-page" : ""}
            >
                About Me
            </Link>
        </nav>
    );
}