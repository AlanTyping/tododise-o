import type { AnchorHTMLAttributes, ReactNode } from "react";
import { MessageCircle } from "./icons";
import { whatsappHref } from "@/lib/links";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  message: string;
  children: ReactNode;
  icon?: boolean;
};

export function WhatsAppLink({ message, children, icon = true, className = "", ...props }: Props) {
  return (
    <a className={`button ${className}`} href={whatsappHref(message)} target="_blank" rel="noreferrer" {...props}>
      {icon ? <MessageCircle size={16} fill="currentColor" aria-hidden="true" /> : null}
      {children}
    </a>
  );
}
