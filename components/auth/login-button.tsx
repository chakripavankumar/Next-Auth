"use client"

import { useRouter } from "next/navigation";


// An interface is a way to describe the shape and properties of an object type
interface LoginButtonProps{
    children: React.ReactNode;
    mode?: "modal" | "redirect",
    asChild?: boolean;
};
// The component takes an object of type LoginButtonProps as a parameter, and destructures it into three variables: children, mode, and asChild
// The component also assigns a default value of "redirect" to the mode variable, in case it is undefined
// The component returns a JSX element, which is a syntax extension that allows you to write HTML-like code in JavaScript
export const LoginButton = ({
    children,
    mode ="redirect",
    asChild
}: LoginButtonProps) => {
    const router = useRouter();
    const onClick = () => {
        router.push("/auth/login")
    };
    if (mode === "modal") {
        return (
            <span>
                TODO: NEED TO
            </span>
        )
    }
    return (
        <span  onClick={onClick} className="cursor-pointer">
{children}
        </span>
    )
}