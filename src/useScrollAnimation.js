
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useScrollAnimation(siteRef) {
  useLayoutEffect(() => {
    const site = siteRef.current;

    if (!site) return;

    const ctx = gsap.context(() => {
      // Animation dyal sections mlli kaybano f scroll
      gsap.utils.toArray(".section:not(.hero)").forEach((section) => {
        gsap.fromTo(
          section,
          {
            y: 45,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Animation dyal hero title
      gsap.from(".hero-copy h1", {
        y: 60,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power4.out",
      });

      gsap.from(".hero-copy h2, .hero-description", {
        y: 25,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.5,
        ease: "power3.out",
      });

      // Animation dyal les boutons
      gsap.from(".hero-buttons .button", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        delay: 0.8,
        ease: "power2.out",
      });

      // Animation dyal les project cards
      gsap.from(".project-card", {
        y: 35,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, site);

    return () => ctx.revert();
  }, [siteRef]);
}
