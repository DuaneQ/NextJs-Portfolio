import Link from "next/link";
import React from "react";
import { Github, Home, Linkedin, NotebookText, Palette, Phone, User } from "lucide-react";
import ResponsiveComponent from "../ResponsiveComponent";
import clsx from "clsx";

const getIcon = (icon) => {
    switch (icon) {
        case "home":
            return <Home className="w-full h-auto" strokeWidth={1.5} />;
        case "about":
            return <User className="w-full h-auto" strokeWidth={1.5} />;
        case "projects":
            return <Palette className="w-full h-auto" strokeWidth={1.5} />;
        case "contact":
            return <Phone className="w-full h-auto" strokeWidth={1.5} />;
        case "github":
            return <Github className="w-full h-auto" strokeWidth={1.5} />;
        case "linkedin":
            return <Linkedin className="w-full h-auto" strokeWidth={1.5} />;
        case "resume":
            return <NotebookText className="w-full h-auto" strokeWidth={1.5} />;
        default:
            return <Home className="w-full h-auto" strokeWidth={1.5} />;
    }
};

const NavButton = ({ x, y, label, link, icon, newTab, labelDirection = "right" }) => {
    return (
        <ResponsiveComponent>
            {({ size }) => {
                return size && size >= 480 ? (
                    // Circular layout for larger screens
                    <div
                        className="absolute cursor-pointer z-50"
                        style={{ transform: `translate(${x}px, ${y}px)` }}
                    >
                        <Link
                            href={link}
                            target={newTab ? "_blank" : "_self"}
                            className="text-foreground group rounded-full flex items-center justify-center custom-bg"
                            aria-label={label}
                            name={label}
                        >
                            <span className="relative w-14 h-14 p-4 hover:text-accent">
                                {getIcon(icon)}

                                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />

                                <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
                                    {label}
                                </span>
                            </span>
                        </Link>
                    </div>
                ) : (
                    // Stacked layout for smaller screens
                    <div className="w-fit cursor-pointer z-50">
                        <Link
                            href={link}
                            target={newTab ? "_blank" : "_self"}
                            className="text-foreground group rounded-full flex items-center justify-center custom-bg"
                            aria-label={label}
                            name={label}
                        >
                            <span className="relative w-10 h-10 xs:w-14 xs:h-14 p-2.5 xs:p-4 hover:text-accent">
                                {getIcon(icon)}

                                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />

                                <span
                                    className={clsx(
                                        "absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap",
                                        labelDirection === "left" ? "right-full left-auto" : ""
                                    )}
                                >
                                    {label}
                                </span>
                            </span>
                        </Link>
                    </div>
                );
            }}
        </ResponsiveComponent>
    );
};

export default NavButton;