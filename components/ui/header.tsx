import { Button } from "./button";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import Link from "next/link";
import { Building2, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    // { name: "Início", href: "#home", sectionId: "home" },
    { name: "Implementação", href: "#implementation", sectionId: "implementation"},
    { name: "Módulos", href: "#modules", sectionId: "modules" },
    { name: "Benefícios", href: "#benefits", sectionId: "benefits" },
    { name: "Blog", href: "#blog", sectionId: "#" },
    { name: "Contato", href: "#contact", sectionId: "contact" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-16 w-16">
            <Image
              src="/kodiak-logo.png"
              alt="Kodiak Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex md:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors duration-300",
                activeSection === item.sectionId
                  ? "text-[#1B1AFF] font-semibold"
                  : "text-gray-700 hover:text-[#101075]"
              )}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(item.href)?.scrollIntoView({
                  behavior: "smooth"
                });
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <a target="_blank" href="https://conttrotech.autosky.cloud">
          <Button 
            variant="ghost" 
            className="hidden md:inline-flex hover:text-prdsimary hover:bg-white/90 transition-all duration-300 border-2 border-[#101075] hover:scale-102"
          >
            Login
          </Button>
          </a>
          <Button 
            className="hidden md:inline-flex bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105"
          >
            Solicitar Demonstração
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-4 pt-10">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-lg font-medium transition-colors duration-300",
                      activeSection === item.sectionId
                        ? "text-primary font-semibold"
                        : "text-gray-700 hover:text-primary"
                    )}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(item.href)?.scrollIntoView({
                        behavior: "smooth"
                      });
                      setIsOpen(false);
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
                <a target="_blank" href="https://conttrotech.autosky.cloud">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start hover:text-primary"
                >
                  Login
                </Button>
                </a>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                >
                  Solicitar Demo
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}