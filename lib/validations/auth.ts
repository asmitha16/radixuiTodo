import * as z from "zod" //typecript declaration & validation

export const userAuthSchema = z.object({
  email: z.string().email(),
})
