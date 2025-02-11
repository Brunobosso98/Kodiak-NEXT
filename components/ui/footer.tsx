import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="relative mt-20 bg-gradient-to-br from-primary/90 via-primary to-blue-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 space-y-3">
            <Link href="/" className="flex items-center">
              <span className="self-center text-2xl font-semibold text-white">Kodiak</span>
            </Link>
            <p className="text-gray-200 max-w-md">
              Transformando a gestão industrial com soluções tecnológicas inovadoras para impulsionar o crescimento do seu negócio.
            </p>
            <div className="mt-8 flex space-x-6">
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 hover:text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 hover:text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 hover:text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">Soluções</h2>
              <ul className="text-gray-200 space-y-4">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">Financeiro</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">Vendas</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">Logística</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">Estoque</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">Empresa</h2>
              <ul className="text-gray-200 space-y-4">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">Sobre nós</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">Carreira</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">Blog</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">Contato</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">Contato</h2>
              <ul className="text-gray-200 space-y-4">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>(11) 9999-9999</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>contato@kodiak.com.br</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>São Paulo, SP</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200/20 sm:mx-auto" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-200 sm:text-center">
            2025 Kodiak. Todos os direitos reservados.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <Link href="#" className="text-gray-200 hover:text-white transition-colors">
              Termos de Uso
            </Link>
            <Link href="#" className="text-gray-200 hover:text-white transition-colors">
              Privacidade
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </footer>
  );
}