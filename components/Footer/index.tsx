"use client";
import Links from "./PersonalLinks"
import {ThemeSwitcher} from "@/components/theme-switcher";

export default function Footer(props: any){
    return(
        <footer>
            {props.name}
            <Links/>
            <h5 >{"Change Theme: "}<ThemeSwitcher/></h5>
        </footer>
    );
}