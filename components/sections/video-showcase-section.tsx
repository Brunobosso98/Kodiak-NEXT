"use client";

import { useRef, useEffect, useState } from "react";
// import { motion } from "framer-motion";
import { Play, Pause, Maximize2, Zap, Layers, Monitor, ArrowRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Declaração de tipos para a API do YouTube
declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
    YT?: {
      Player: new (elementId: string, options: any) => YTPlayer;
      PlayerState?: {
        PLAYING: number;
        PAUSED: number;
        ENDED: number;
        BUFFERING: number;
      };
    };
  }
}

interface YTPlayer {
  getPlayerState: () => number;
  addEventListener: (event: string, listener: (event: any) => void) => void;
  removeEventListener: (event: string, listener: (event: any) => void) => void;
  playVideo: () => void;
  pauseVideo: () => void;
  mute: () => void;
  unMute: () => void;
  isMuted: () => boolean;
  destroy: () => void;
}

gsap.registerPlugin(ScrollTrigger);

export function VideoShowcaseSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLIFrameElement>(null);
  const [playerReady, setPlayerReady] = useState(false);
  const playerInstanceRef = useRef<any>(null);

  // Função para carregar a API do YouTube e inicializar o player
  useEffect(() => {
    // ID único para o player
    const playerId = 'kodiak-youtube-player';

    // Adiciona um ID ao iframe para que o YT API possa encontrá-lo
    if (videoRef.current && !videoRef.current.id) {
      videoRef.current.id = playerId;
    }

    // Adiciona a API do YouTube
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Função para inicializar o player quando a API estiver pronta
    const initializePlayer = () => {
      if (!videoRef.current || !window.YT || !window.YT.Player) return;

      try {
        // Cria uma nova instância do player
        const player = new window.YT.Player(playerId, {
          events: {
            'onReady': () => {
              setPlayerReady(true);
              playerInstanceRef.current = player;

              // Verifica o estado inicial do mute
              if (player.isMuted && player.isMuted()) {
                setIsMuted(true);
              }
            },
            'onStateChange': (event: any) => {
              // Atualiza o estado de reprodução com base no estado do player
              if (event.data === window.YT?.PlayerState?.PLAYING) {
                setIsPlaying(true);
              } else if (event.data === window.YT?.PlayerState?.PAUSED ||
                         event.data === window.YT?.PlayerState?.ENDED) {
                setIsPlaying(false);
              }
            }
          }
        });
      } catch (error) {
        console.error('Erro ao inicializar o player do YouTube:', error);
      }
    };

    // Define a função de callback global que o YouTube chamará quando a API estiver pronta
    window.onYouTubeIframeAPIReady = () => {
      initializePlayer();
    };

    // Se a API já estiver carregada, inicializa o player imediatamente
    if (window.YT && window.YT.Player) {
      initializePlayer();
    }

    return () => {
      // Limpa a função global e destrói o player quando o componente for desmontado
      window.onYouTubeIframeAPIReady = undefined;
      if (playerInstanceRef.current && playerInstanceRef.current.destroy) {
        playerInstanceRef.current.destroy();
      }
    };
  }, []);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  // YouTube video ID - será substituído pelo ID real posteriormente
  const videoId = "AQfMdq_NnOY"; // Placeholder - link aleatório

  useEffect(() => {
    if (sectionRef.current && titleRef.current && subtitleRef.current && videoContainerRef.current && featuresRef.current) {
      // Animação do título e subtítulo
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      // Animação do container de vídeo
      gsap.fromTo(
        videoContainerRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 0.4,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none none",
          },
        }
      );

      // Animação dos recursos
      gsap.fromTo(
        featuresRef.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.5,
          delay: 0.6,
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  const handlePlayPause = () => {
    try {
      if (playerInstanceRef.current) {
        // Usa a API do YT Player diretamente
        if (isPlaying) {
          playerInstanceRef.current.pauseVideo();
        } else {
          playerInstanceRef.current.playVideo();

          // Só desmuta se estiver mutado
          if (isMuted) {
            setTimeout(() => {
              playerInstanceRef.current.unMute();
              setIsMuted(false);
            }, 500);
          }
        }

        // O estado será atualizado pelo evento onStateChange
      } else if (videoRef.current) {
        // Fallback para o método antigo se o player não estiver disponível
        const iframe = videoRef.current;
        const player = iframe.contentWindow;

        if (isPlaying) {
          player?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        } else {
          player?.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
          if (isMuted) {
            setTimeout(() => {
              player?.postMessage('{"event":"command","func":"unMute","args":""}', '*');
              setIsMuted(false);
            }, 500);
          }
        }

        setIsPlaying(!isPlaying);
      }
    } catch (error) {
      console.error('Erro ao controlar o vídeo:', error);
    }
  };

  const handleMute = () => {
    try {
      if (playerInstanceRef.current) {
        // Usa a API do YT Player diretamente
        if (isMuted) {
          playerInstanceRef.current.unMute();
        } else {
          playerInstanceRef.current.mute();
        }

        setIsMuted(!isMuted);
      } else if (videoRef.current) {
        // Fallback para o método antigo se o player não estiver disponível
        const iframe = videoRef.current;
        const player = iframe.contentWindow;

        if (isMuted) {
          player?.postMessage('{"event":"command","func":"unMute","args":""}', '*');
        } else {
          player?.postMessage('{"event":"command","func":"mute","args":""}', '*');
        }

        setIsMuted(!isMuted);
      }
    } catch (error) {
      console.error('Erro ao controlar o áudio:', error);
    }
  };

  const features = [
    {
      icon: <Monitor className="h-6 w-6 text-blue-400" />,
      title: "Interface Intuitiva",
      description: "Design moderno e fácil de usar para todos os níveis de usuários"
    },
    {
      icon: <Zap className="h-6 w-6 text-blue-400" />,
      title: "Alta Performance",
      description: "Sistema otimizado para resposta rápida mesmo com grandes volumes de dados"
    },
    {
      icon: <Layers className="h-6 w-6 text-blue-400" />,
      title: "Módulos Integrados",
      description: "Todos os módulos se comunicam perfeitamente para uma gestão completa"
    },
    {
      icon: <Sparkles className="h-6 w-6 text-blue-400" />,
      title: "Tecnologia Avançada",
      description: "Desenvolvido com as mais modernas tecnologias do mercado"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="video-showcase"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-950 via-gray-900 to-indigo-950 w-full"
    >
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-blue-400 to-transparent opacity-5" />

      <div className="absolute top-0 right-0 w-60 h-60 bg-blue-500/30 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-400/20 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      {/* Padrão de grade sutil */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid-pattern opacity-5" />

      <div className="container mx-auto px-4 max-w-full">
        <div className="text-center mb-12 px-4">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white"
          >
            Veja o <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Kodiak</span> em Ação
          </h2>
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto"
          >
            Descubra como nossa plataforma revoluciona a gestão industrial com uma interface moderna e recursos poderosos
          </p>
        </div>

        <div
          ref={videoContainerRef}
          className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.2)] border border-blue-900/30 transform transition-all duration-700 hover:scale-[1.01] hover:shadow-[0_0_70px_rgba(59,130,246,0.3)]"
        >
          {/* Overlay de gradiente */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-black/30 to-transparent z-10 pointer-events-none" />

          {/* Brilho superior */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/80 to-indigo-500/0" />

          {/* Container do vídeo */}
          <div className="relative aspect-video bg-gradient-to-br from-blue-950 to-gray-900 overflow-hidden">
            <iframe
              ref={videoRef}
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&controls=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&origin=${typeof window !== 'undefined' ? encodeURIComponent(window.location.origin) : ''}`}
              title="Kodiak ERP System Showcase"
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>

            {/* Controles personalizados */}
            <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4 flex justify-between items-center z-20 bg-gradient-to-t from-blue-950/70 to-transparent backdrop-blur-[2px] h-[60px] md:h-[70px]">
              <div className="flex items-center gap-4">
                <button
                  onClick={handlePlayPause}
                  className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg shadow-blue-500/30 relative overflow-hidden"
                  disabled={!playerReady}
                >
                  {!playerReady && (
                    <span className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <span className="w-4 h-4 border-2 border-white/80 border-t-transparent rounded-full animate-spin"></span>
                    </span>
                  )}
                  {isPlaying ? (
                    <Pause className="h-4 w-4 md:h-5 md:w-5 text-white" />
                  ) : (
                    <Play className="h-4 w-4 md:h-5 md:w-5 text-white ml-0.5 md:ml-1" />
                  )}
                </button>

                <button
                  onClick={handleMute}
                  className="text-white hover:text-blue-300 transition-colors text-xs md:text-sm"
                  disabled={!playerReady}
                >
                  {isMuted ? "Ativar áudio" : "Desativar áudio"}
                </button>
              </div>

              <a
                href={`https://www.youtube.com/watch?v=${videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 md:gap-2 text-white hover:text-blue-300 transition-colors text-xs md:text-sm"
              >
                <Maximize2 className="h-4 w-4 md:h-5 md:w-5" />
                <span className="hidden sm:inline">Tela cheia</span>
              </a>
            </div>
          </div>
        </div>

        {/* Recursos destacados */}
        <div
          ref={featuresRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-16 w-full"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-blue-950/40 backdrop-blur-sm p-6 rounded-xl border border-blue-900/50 hover:border-blue-400/50 transition-all hover:shadow-lg hover:shadow-blue-500/10 group"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-900/50 flex items-center justify-center mb-4 group-hover:bg-blue-600/30 transition-all shadow-inner">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-blue-200/80">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-16 text-center px-4">
          <a
            target="_blank"
            href="https://wa.me/5519989386246?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Kodiak%20ERP."
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition-all shadow-lg shadow-blue-500/30 transform hover:scale-105 relative overflow-hidden group"
          >
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="relative z-10">
              Agende uma demonstração
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform inline-block ml-1" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
