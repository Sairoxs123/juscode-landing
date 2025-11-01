'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'; // Changed from react-router-dom

// Assuming createLog is imported from your utils
// import { createLog } from '@/utils/logs';

// Mock function if you don't have createLog yet
const createLog = (event: string, data?: object) => {
  console.log('Log Event:', event, data);
};

// Type for the mouse object
interface MousePosition {
  x: number | null;
  y: number | null;
  radius: number;
}

const Hero = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const targetText = 'JusCode';
  const particlesRef = useRef<HTMLCanvasElement | null>(null);

  // Get the dashboard URL from environment variables
  const dashboardUrl =
    process.env.NEXT_PUBLIC_DASHBOARD_URL || 'https://dashboard.juscode.com';

  // Typing animation effect
  useEffect(() => {
    if (index < targetText.length) {
      const timeout = setTimeout(() => {
        setText(text + targetText[index]);
        setIndex(index + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      // Blinking cursor effect
      const cursorInterval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500);
      return () => clearInterval(cursorInterval);
    }
  }, [text, index, targetText]);

  // Particle effect
  useEffect(() => {
    if (!particlesRef.current) return;

    const canvas = particlesRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray: Particle[] = [];

    // Mouse position
    const mouse: MousePosition = {
      x: null,
      y: null,
      radius: 150,
    };

    const mouseMoveHandler = (event: MouseEvent) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };
    window.addEventListener('mousemove', mouseMoveHandler);

    // Create particle
    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;

      constructor(
        x: number,
        y: number,
        directionX: number,
        directionY: number,
        size: number,
        color: string
      ) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      // Draw individual particle
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      // Update particle position and interactions
      update() {
        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        // Mouse repulsion
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius + this.size) {
            if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
              this.x += 10;
            }
            if (mouse.x > this.x && this.x > this.size * 10) {
              this.x -= 10;
            }
            if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
              this.y += 10;
            }
            if (mouse.y > this.y && this.y > this.size * 10) {
              this.y -= 10;
            }
          }
        }

        // Move particle
        this.x += this.directionX;
        this.y += this.directionY;

        // Draw particle
        this.draw();
      }
    }

    // Create particle array
    function init() {
      particlesArray = [];
      const numberOfParticles = (canvas.width * canvas.height) / 15000;
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 5 + 1;
        const x =
          Math.random() * (canvas.width - size * 2 - size * 2) + size * 2;
        const y =
          Math.random() * (canvas.height - size * 2 - size * 2) + size * 2;
        const directionX = Math.random() * 2 - 1;
        const directionY = Math.random() * 2 - 1;
        const color = `rgba(0, 0, 0, ${Math.random() * 0.2})`;

        particlesArray.push(
          new Particle(x, y, directionX, directionY, size, color)
        );
      }
    }

    // Connect particles with lines
    function connect() {
      if (!ctx) return;
      const opacityValue = 0.5;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const distance =
            (particlesArray[a].x - particlesArray[b].x) *
              (particlesArray[a].x - particlesArray[b].x) +
            (particlesArray[a].y - particlesArray[b].y) *
              (particlesArray[a].y - particlesArray[b].y);

          if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            ctx.strokeStyle = `rgba(0, 0, 0, ${opacityValue})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    // Animation loop
    let animationFrameId: number;
    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
    }

    // Resize event
    const resizeHandler = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      mouse.radius = 150;
      init();
    };
    window.addEventListener('resize', resizeHandler);

    // Mouse out event
    const mouseOutHandler = () => {
      mouse.x = null;
      mouse.y = null;
    };
    window.addEventListener('mouseout', mouseOutHandler);

    init();
    animate();

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
      window.removeEventListener('resize', resizeHandler);
      window.removeEventListener('mouseout', mouseOutHandler);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-300 to-yellow-400 overflow-hidden">
      {/* Particle background */}
      <canvas ref={particlesRef} className="absolute inset-0 z-0" />

      {/* Animated shapes */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute w-40 h-40 rounded-full bg-yellow-200 opacity-30"
          animate={{
            x: [0, 100, 50, 0],
            y: [0, 50, 100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ left: '10%', top: '20%' }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-yellow-500 opacity-20"
          animate={{
            x: [0, -100, -50, 0],
            y: [0, 100, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ right: '15%', bottom: '15%' }}
        />
        <motion.div
          className="absolute w-32 h-32 rounded-full bg-yellow-600 opacity-10"
          animate={{
            x: [0, 150, 100, 0],
            y: [0, -50, -100, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ right: '30%', top: '30%' }}
        />
      </div>

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-black">
            {text}
            <span
              className={`inline-block w-1 ml-1 h-16 md:h-20 lg:h-24 bg-black ${
                showCursor ? 'opacity-100' : 'opacity-0'
              }`}
            ></span>
          </h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: text.length ? '100%' : 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="h-1 bg-black mt-2 mb-6"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: text.length === targetText.length ? 1 : 0 }}
            transition={{ delay: 2.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-black max-w-xl mx-auto"
          >
            Transform your coding journey with challenges, competitions, and
            quizzes
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: text.length === targetText.length ? 1 : 0,
              y: text.length === targetText.length ? 0 : 20,
            }}
            transition={{ delay: 2.8, duration: 0.8 }}
            className="mt-8"
          >
            <Link
              href={`${dashboardUrl}/signup`} // Changed from 'to' to 'href'
              className="bg-black text-yellow-300 px-8 py-3 rounded-lg text-lg font-bold shadow-lg hover:bg-gray-900 hover:shadow-xl transform transition hover:-translate-y-1 mx-2"
              onClick={() => createLog('homepage_hero_get_started_click')}
            >
              Get Started
            </Link>
            <Link
              href="/#features" // Changed to a Next.js link to an anchor
              className="bg-transparent border-2 border-black text-black px-8 py-3 rounded-lg text-lg font-bold shadow-lg hover:bg-black hover:text-yellow-300 transform transition hover:-translate-y-1 mx-2"
              onClick={() => createLog('homepage_hero_learn_more_click')}
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-black opacity-5" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-black opacity-5 rounded-bl-full" />
    </div>
  );
};

export default Hero;