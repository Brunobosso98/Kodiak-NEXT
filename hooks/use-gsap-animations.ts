"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGSAPAnimations() {
  useEffect(() => {
    // Hero section animations - otimizado para performance
    const heroTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top center",
        end: "bottom top",
        scrub: false,
      },
    });

    heroTimeline
      .fromTo(
        ".hero-title",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      )
      .fromTo(
        ".hero-description",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      )
      .fromTo(
        ".hero-cta",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
        "-=0.2"
      );

    // Fade In animations - limitado a elementos visíveis para reduzir o DOM
    const fadeElements = gsap.utils.toArray<HTMLElement>(".gsap-fade-in").slice(0, 10);
    fadeElements.forEach((element) => {
      const children = Array.from(element.children).slice(0, 5); // Limitar número de animações
      gsap.fromTo(
        children,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1, // Reduzido para melhorar performance
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none none", // Simplificado
          },
        }
      );
    });

    // Parallax effect - limitado para melhorar performance
    const parallaxElements = gsap.utils.toArray<HTMLElement>(".gsap-parallax").slice(0, 5);
    parallaxElements.forEach((element) => {
      gsap.to(element, {
        y: -30, // Reduzido para melhorar performance
        scale: 1.03, // Reduzido para melhorar performance
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    });

    // Card hover animations - limitado para melhorar performance
    const cardElements = gsap.utils.toArray<HTMLElement>(".gsap-card").slice(0, 8);
    cardElements.forEach((card) => {
      const cardContent = card.querySelector(".card-content");

      if (cardContent) {
        card.addEventListener("mouseenter", () => {
          gsap.to(cardContent, {
            y: -5,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(cardContent, {
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      }
    });

    // Removido animações de floating para melhorar performance

    // Counter animation - limitado para melhorar performance
    const counterElements = gsap.utils.toArray<HTMLElement>(".gsap-counter").slice(0, 4);
    counterElements.forEach((counter) => {
      const target = parseInt(counter.getAttribute("data-target") || "0");
      gsap.to(counter, {
        textContent: target,
        duration: 1.5, // Reduzido para melhorar performance
        ease: "power2.out",
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: counter,
          start: "top 85%",
          toggleActions: "play none none none", // Simplificado
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
}