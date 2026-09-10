import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className = "", ...props }: InputProps) => {
  return (
    <input
      className={`
        w-full
        rounded-lg
        border
        border-slate-700
        bg-slate-900
        px-4
        py-2
        text-white
        outline-none
        focus:border-blue-500
        ${className}
      `}
      {...props}
    />
  );
};
