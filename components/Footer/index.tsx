"use client";
import Links from "./PersonalLinks"
import {ThemeSwitcher} from "@/components/theme-switcher";
import { HeaderFooterProps } from "@/lib/types"

export default function Footer({ name }: HeaderFooterProps){
    return(
        <footer>
            {name}
            <Links/>
            <h5 >{"Change Theme: "}<ThemeSwitcher/></h5>
        </footer>
    );
}