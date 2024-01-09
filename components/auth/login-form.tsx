"use client"
import { useForm } from "react-hook-form";
import * as z from "zod";
import { LoginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import {
     Form, FormControl,FormField,FormItem,FormLabel,FormMessage
 } from '@/components/ui/form'

import { CardWrapper } from "./card-wrapper"

export const LoginForm = () => {
    const form = useForm <z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
             email: "",
            password: "",
        }
    })
    
    return (
        <CardWrapper
            headerLabel="welcome back"
            backButtonLabel="Don't have an account"
            backButtonHref="/auth/register"
            showSocial
        >
            Login form!
        </CardWrapper>
    )
}