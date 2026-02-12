import React, { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";

export default function ValentineProposal() {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 75, y: 0 });
  const [accepted, setAccepted] = useState(false);
  const [noAttempts, setNoAttempts] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

// const noButtonRef = useRef(null);



  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const moveNoButton = () => {
    setNoAttempts(prev => prev + 1);
    const maxX = 400;
    const maxY = 200;
    const randomX = (Math.random() - 0.5) * maxY;
    const randomY = (Math.random() - 0.5) * maxX;
    
    setNoButtonPosition({ x: randomX, y: randomY });
  };

  const handleYes = () => {
    setAccepted(true);
    setShowConfetti(true);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-red-50">
      {/* Custom cursor follower */}
      <div 
        className="fixed w-6 h-6 pointer-events-none z-50 transition-transform duration-200"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
      >
        <div className="w-full h-full rounded-full bg-rose-400/30 blur-sm" />
      </div>

      {/* Animated background layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-radial from-pink-300/40 via-rose-200/20 to-transparent rounded-full blur-3xl animate-float-1" />
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-radial from-red-300/30 via-pink-200/20 to-transparent rounded-full blur-3xl animate-float-2" />
          <div className="absolute bottom-0 left-1/3 w-[700px] h-[700px] bg-gradient-radial from-rose-300/35 via-pink-200/15 to-transparent rounded-full blur-3xl animate-float-3" />
        </div>

        {/* Floating roses SVG */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-slow opacity-20"
            style={{
              left: `${(i * 15) + Math.random() * 10}%`,
              top: `${Math.random() * 80}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${20 + Math.random() * 10}s`,
            }}
          >
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
                    fill="#f43f5e" opacity="0.6"/>
            </svg>
          </div>
        ))}

        {/* Particle effect */}
        {[...Array(30)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-rose-400/40 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
        {!accepted ? (
          <div className="relative">
            {/* Decorative backdrop blur card */}
            <div className="absolute inset-0 bg-white/30 backdrop-blur-2xl rounded-[3rem] transform rotate-1 scale-105" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-pink-100/40 backdrop-blur-2xl rounded-[3rem] transform -rotate-1" />
            
            {/* Main card */}
            <div className="relative bg-white/70 backdrop-blur-3xl rounded-[3rem] shadow-2xl border border-white/60 p-16 max-w-3xl">
              {/* Decorative corner flourishes */}
              <div className="absolute top-8 left-8 w-16 h-16">
                <svg viewBox="0 0 100 100" className="text-rose-400 opacity-40">
                  <path d="M0,50 Q25,25 50,50 T100,50" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M50,0 Q25,25 50,50 T50,100" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div className="absolute top-8 right-8 w-16 h-16 transform rotate-90">
                <svg viewBox="0 0 100 100" className="text-rose-400 opacity-40">
                  <path d="M0,50 Q25,25 50,50 T100,50" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M50,0 Q25,25 50,50 T50,100" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div className="absolute bottom-8 left-8 w-16 h-16 transform -rotate-90">
                <svg viewBox="0 0 100 100" className="text-rose-400 opacity-40">
                  <path d="M0,50 Q25,25 50,50 T100,50" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M50,0 Q25,25 50,50 T50,100" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div className="absolute bottom-8 right-8 w-16 h-16 transform rotate-180">
                <svg viewBox="0 0 100 100" className="text-rose-400 opacity-40">
                  <path d="M0,50 Q25,25 50,50 T100,50" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M50,0 Q25,25 50,50 T50,100" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>

              {/* Heart SVG centerpiece */}
              <div className="flex justify-center mb-12">
                <svg width="120" height="120" viewBox="0 0 24 24" className="animate-pulse-gentle">
                  <defs>
                    <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f43f5e" />
                      <stop offset="50%" stopColor="#fb7185" />
                      <stop offset="100%" stopColor="#f43f5e" />
                    </linearGradient>
                  </defs>
                  <path 
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
                    fill="url(#heartGradient)"
                    className="drop-shadow-lg"
                  />
                </svg>
              </div>

              {/* Typography */}
              <div className="text-center space-y-8 mb-16">
                <h1 className="font-serif text-6xl md:text-7xl font-light text-gray-800 tracking-wide leading-tight">
                  A Question for You
                </h1>
                
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto" />
                
                <p className="font-serif text-5xl md:text-6xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-rose-600 leading-tight">
                 {name || "Darling"} , Will You Be My Valentine?
                </p>
              </div>

              {/* Buttons */}
             <div className="relative min-h-[140px] flex items-center justify-center gap-16">

                <button
                  onClick={handleYes}
                  className="group relative px-16 py-6 rounded-full font-medium text-xl text-white overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-rose-500/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500 bg-size-200 animate-gradient-shift" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-400 via-pink-400 to-rose-400 blur-xl" />
                  </div>
                  <span className="relative z-10 tracking-wide">Yes, I Will</span>
                </button>

              

                <button
                  onMouseEnter={moveNoButton}
                  onTouchStart={(e) => { e.preventDefault(); moveNoButton(); }}
                  className=" px-12 py-5 rounded-full font-medium text-lg text-gray-600 bg-white/80 backdrop-blur-sm border-2 border-gray-200 transition-all duration-300 hover:border-gray-300 hover:bg-white/90"
                  style={{
                    transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                    transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  }}
                >
                  <span className="tracking-wide">Perhaps Not</span>
                </button>
              </div>

              {/* Subtle hint */}
              {noAttempts > 0 && (
                <div className="mt-12 text-center">
                  <p className="font-serif text-lg text-rose-600/80 italic animate-fade-in">
                    {noAttempts === 1 && "That button seems a bit shy..."}
                    {noAttempts === 2 && "It appears to be playing hard to get"}
                    {noAttempts === 3 && "Perhaps fate is trying to tell you something?"}
                    {noAttempts >= 4 && "The universe knows what your heart truly wants..."}
                  </p>
                </div>
              )}
            </div>
          </div>
        ) : (
          // Success state
          <div className="relative">
            <div className="absolute inset-0 bg-white/30 backdrop-blur-2xl rounded-[3rem] transform rotate-1 scale-105" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-pink-100/40 backdrop-blur-2xl rounded-[3rem] transform -rotate-1" />
            
            <div className="relative bg-white/70 backdrop-blur-3xl rounded-[3rem] shadow-2xl border border-white/60 p-20 max-w-3xl text-center animate-scale-in">
              {/* Celebration heart */}
              <div className="mb-12 flex justify-center">
                <svg width="150" height="150" viewBox="0 0 24 24" className="animate-heart-beat">
                  <defs>
                    <linearGradient id="celebrationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f43f5e" />
                      <stop offset="50%" stopColor="#fb7185" />
                      <stop offset="100%" stopColor="#f43f5e" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  <path 
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
                    fill="url(#celebrationGradient)"
                    filter="url(#glow)"
                  />
                </svg>
              </div>

              <h2 className="font-serif text-7xl font-light text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-rose-600 mb-8">
                Love You!
              </h2>

              <div className="w-32 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto mb-8" />

              <p className="font-serif text-3xl text-gray-700 leading-relaxed mb-6">
                My heart is overflowing with joy
              </p>

              <p className="font-serif text-xl text-gray-600 leading-relaxed max-w-xl mx-auto">
                This Valentine's Day will be the beginning of something truly beautiful. 
                I promise to cherish every moment we share together.
              </p>

              <div className="mt-12 flex justify-center gap-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    width="30" 
                    height="30" 
                    viewBox="0 0 24 24"
                    className="animate-bounce-stagger"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <path 
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
                      fill="#f43f5e"
                      opacity="0.7"
                    />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Confetti hearts */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti-fall"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10%',
                animationDelay: `${Math.random() * 0.5}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path 
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
                  fill={`hsl(${Math.random() * 20 + 340}, 80%, 60%)`}
                  opacity="0.8"
                />
              </svg>
            </div>
          ))}
        </div>
      )}

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');

        * {
          font-family: 'Cormorant Garamond', serif;
        }

        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-30px, -30px) scale(1.05); }
          66% { transform: translate(30px, 20px) scale(0.95); }
        }

        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, -20px) scale(0.95); }
          66% { transform: translate(-20px, 30px) scale(1.05); }
        }

        @keyframes float-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-40px, 30px) scale(1.05); }
          66% { transform: translate(20px, -20px) scale(0.95); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.2; }
          50% { transform: translateY(-30px) rotate(180deg); opacity: 0.4; }
        }

        @keyframes particle {
          0%, 100% { transform: translate(0, 0) scale(0); opacity: 0; }
          50% { transform: translate(var(--tx, 20px), var(--ty, -20px)) scale(1); opacity: 0.6; }
        }

        @keyframes pulse-gentle {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes heart-beat {
          0%, 100% { transform: scale(1); }
          10% { transform: scale(1.1); }
          20% { transform: scale(1); }
          30% { transform: scale(1.1); }
          40% { transform: scale(1); }
        }

        @keyframes bounce-stagger {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes confetti-fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }

        .animate-float-1 { animation: float-1 15s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 18s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 20s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow linear infinite; }
        .animate-particle { animation: particle 10s ease-in-out infinite; }
        .animate-pulse-gentle { animation: pulse-gentle 3s ease-in-out infinite; }
        .animate-gradient-shift { animation: gradient-shift 4s ease infinite; }
        .animate-fade-in { animation: fade-in 0.6s ease-out; }
        .animate-scale-in { animation: scale-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .animate-heart-beat { animation: heart-beat 1.5s ease-in-out 2; }
        .animate-bounce-stagger { animation: bounce-stagger 2s ease-in-out infinite; }
        .animate-confetti-fall { animation: confetti-fall linear forwards; }
        
        .bg-size-200 { background-size: 200% 200%; }
        .bg-gradient-radial { background: radial-gradient(circle, var(--tw-gradient-stops)); }
      `}</style>
    </div>
  );
}