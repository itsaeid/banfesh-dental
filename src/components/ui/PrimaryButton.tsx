"use client";
import { ArrowUpLeft } from "lucide-react";

interface PrimaryButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function PrimaryButton({ text, onClick, className = "", type = "button", disabled = false }: PrimaryButtonProps) {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`btn-primary py-3 group ${className}`}>
      <span>{text}</span>
      
        <ArrowUpLeft className="rounded-full bg-white text-primary-900 transition-transform p-1 duration-300 group-hover:-rotate-45" size={28} strokeWidth={1.7} />
      
    </button>
  );
}
