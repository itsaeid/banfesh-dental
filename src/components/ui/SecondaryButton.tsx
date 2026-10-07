"use client";
import { ArrowUpLeft } from "lucide-react";

interface PrimaryButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function SecondaryButton({ text, onClick, className = "", type = "button", disabled = false }: PrimaryButtonProps) {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`btn-secondary py-3 group ${className}`}>
      <span>{text}</span>
      
        <ArrowUpLeft className="rounded-full bg-primary-700 p-1 text-white transition-transform duration-300 group-hover:-rotate-45" size={28} strokeWidth={1.7} />
      
    </button>
  );
}
