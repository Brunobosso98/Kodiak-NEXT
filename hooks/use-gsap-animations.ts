"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGSAPAnimations() {
  useEffect(() => {
    // Hero section animations
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

    // Fade In animations for sections with stagger
    gsap.utils.toArray<HTMLElement>(".gsap-fade-in").forEach((element) => {
      const children = element.children;
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
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Parallax effect with scale for images
    gsap.utils.toArray<HTMLElement>(".gsap-parallax").forEach((element) => {
      gsap.to(element, {
        y: -50,
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    });

    // Card hover animations
    gsap.utils.toArray<HTMLElement>(".gsap-card").forEach((card) => {
      const cardContent = card.querySelector(".card-content");
      const cardImage = card.querySelector(".card-image");

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

      if (cardImage) {
        card.addEventListener("mouseenter", () => {
          gsap.to(cardImage, {
            scale: 1.1,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(cardImage, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      }
    });

    // Floating animation for decorative elements
    gsap.utils.toArray<HTMLElement>(".gsap-float").forEach((element) => {
      gsap.to(element, {
        y: "random(-15, 15)",
        rotation: "random(-5, 5)",
        duration: "random(2, 3)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    });

    // Counter animation
    gsap.utils.toArray<HTMLElement>(".gsap-counter").forEach((counter) => {
      const target = parseInt(counter.getAttribute("data-target") || "0");
      gsap.to(counter, {
        textContent: target,
        duration: 2,
        ease: "power2.out",
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: counter,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
}