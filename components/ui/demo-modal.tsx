import { useState } from "react";
import { Button } from "./button";
import ModalPortal from "./modalportal"
import { FaWhatsapp } from "react-icons/fa";

interface DemoModalProps {
  onClose: () => void;
}

export default function DemoModal({ onClose }: DemoModalProps) {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    if (!/^\d{10,11}$/.test(phone)) {
      setMessage("Por favor, insira um número válido com DDD.");
      return;
    }

    setLoading(true);
    setMessage("");

    const token = "TESTE"; 
    const apiUrl = "https://chatapi.kodiakerp.com.br/api/messages/send";
    const fullNumber = `55${phone}`;
    const payload = {
      number: fullNumber,
      body: "Quero conhecer a Kodiak!",
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Mensagem enviada com sucesso!");
      } else {
        setMessage(`Erro: ${data.error || "Falha ao enviar mensagem."}`);
      }
    } catch (error) {
      setMessage("Erro ao conectar com o servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ModalPortal>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Overlay para escurecer e desfocar o fundo */}
        <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-md" onClick={onClose}></div>

        {/* Modal */}
        <div className="relative z-10 bg-white p-6 rounded-lg shadow-lg w-96 text-center">
          <h2 className="text-lg font-semibold mb-4">Solicitar Demonstração</h2>
          <p className="text-sm text-gray-600 mb-2">Digite seu número de <span className="text-[#25D366] font-bold">WhatsApp</span> com <span className="font-bold">DDD</span>:</p>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaWhatsapp className="fill-[#25D366] h-6 w-6" />
            </div>
            <input
              type="tel"
              className="w-full pl-12 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="11987654321"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
              maxLength={11}
            />
          </div>
          {message && <p className="text-sm mt-2 text-red-600">{message}</p>}
          <div className="flex justify-end mt-4">
            <Button onClick={onClose} variant="ghost" className="mr-2">Cancelar</Button>
            <Button onClick={sendMessage} disabled={loading} className="bg-primary hover:bg-primary/90">
              {loading ? "Enviando..." : "Enviar"}
            </Button>
          </div>
        </div>
      </div>
    </ModalPortal>
  );
}
