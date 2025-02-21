"use client";

import { Button } from './button';
import { FaWhatsapp } from 'react-icons/fa';

export function WhatsApp() {

  return (
    <div className="fixed bottom-4 left-4 z-50">
        <Button
          className="h-14 w-14 rounded-full bg-green-600 p-0 hover:bg-green-700"
          onClick={() => window.open('https://wa.me/5519989386246?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Kodiak%20ERP.', '_blank')}
        >
          <FaWhatsapp className="h-8 w-8 text-white" />
        </Button>
    </div>
  )}
