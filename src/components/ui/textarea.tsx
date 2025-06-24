import { cn } from "@/lib/utils";
import * as React from "react";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn("w-full p-1 border border-gray-300 rounded-md", className)}
      ref={ref}
      {...props}
    />
  );
});

export default Textarea;
