
import React from "react";
import { Whatsapp } from "lucide-react";

const WHATSAPP_PHONE = "+15551234567"; // Replace with your real WhatsApp business number.

export function WhatsAppChatButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_PHONE.replace(/\D/g, "")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed z-50 bottom-6 right-6 
        bg-green-500 hover:bg-green-600 text-white rounded-full 
        p-4 shadow-lg flex items-center justify-center animate-fade-in
        transition-all duration-300 hover:scale-110
      "
      title="Chat with us on WhatsApp"
    >
      <Whatsapp className="w-6 h-6" />
      <span className="sr-only">Chat with us on WhatsApp</span>
    </a>
  );
}
