'use client';
import { Phone, MessageCircle } from 'lucide-react';
import { SiZalo } from 'react-icons/si';

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Zalo Button */}
      <a 
        href="https://zalo.me/0946884344" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 hover:shadow-xl transition-all"
        title="Chat Zalo"
      >
        <SiZalo className="w-6 h-6" />
      </a>

      {/* Messenger Button */}
      <a 
        href="https://m.me/VetAndPet1907" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 hover:shadow-xl transition-all"
        title="Chat Messenger"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Phone Button */}
      <a 
        href="tel:0946884344" 
        className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 hover:shadow-xl transition-all animate-bounce"
        title="Gọi Hotline"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
