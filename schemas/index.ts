import * as z from "zod";

export const LoginSchema = ({
    email: z.string().email(),
    password: z.string()
 })