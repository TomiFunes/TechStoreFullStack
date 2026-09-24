import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className = "", ...props }: InputProps) => {
  return (
    <input
      className={`
        w-full
        rounded-xl
        border
        border-slate-700
        bg-slate-950
        px-4
        py-3
        text-white
        placeholder:text-slate-500
        outline-none
        transition-all
        duration-300
        focus:border-blue-500
        focus:ring-4  focus:ring-blue-500/20
        ${className}
      `}
      {...props}
    />
  );
};
