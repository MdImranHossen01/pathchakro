import { cn } from "@/lib/utils"
import { Button } from "@/app/(auth)/components/ui/button"

import { FcGoogle } from "react-icons/fc";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
        
       
          <Button variant="outline" type="button">
            <FcGoogle />

            Login with Google
          </Button>
         
    </form>
  )
}
