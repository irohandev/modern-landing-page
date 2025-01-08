"use client";

import { useState, useEffect } from "react";
import BrandSlide from "@/components/BrandSlide";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import ProductCard from "@/components/ProductCard";
import ProductShowcase from "@/components/ProductShowcase";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      setCirclePosition((prevPosition) => {
        const dx = (mousePosition.x - prevPosition.x) * 0.2; // Slightly faster movement
        const dy = (mousePosition.y - prevPosition.y) * 0.2; // Slightly faster movement

        return {
          x: prevPosition.x + dx,
          y: prevPosition.y + dy,
        };
      });

      requestAnimationFrame(animate); // Continues the animation
    };

    requestAnimationFrame(animate); // Starts the animation loop

  }, [mousePosition]);

  return (
    <div className="relative">
      {/* Mouse-following blur circle */}
      <div
        className="pointer-events-none fixed h-16 w-16 rounded-full bg-violet-500 blur-lg opacity-50"
        style={{
          top: circlePosition.y - 32,
          left: circlePosition.x - 32,
        }}
      ></div>

      {/* Components */}
      <Header />
      <Hero />
      <BrandSlide />
      <ProductShowcase />
      <ProductCard />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
