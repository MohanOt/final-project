export const AdditionalGlobes = () => {
  return (
    <div className="fixed inset-0 -z-15 overflow-hidden pointer-events-none">
      {/* Larger, Brighter Rotating Globe */}
      <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px]">
        <div 
          className="w-full h-full rounded-full bg-gradient-to-br from-emerald-400/40 via-teal-500/35 to-cyan-400/40 blur-3xl animate-spin-slow"
          style={{ 
            boxShadow: '0 0 250px 100px rgba(52, 211, 153, 0.4), 0 0 150px 60px rgba(20, 184, 166, 0.3)',
            animation: 'spin 30s linear infinite'
          }}
        />
        {/* Energy rings */}
        <div 
          className="absolute inset-0 rounded-full bg-gradient-conic from-transparent via-emerald-400/20 to-transparent blur-2xl"
          style={{ animation: 'spin 25s linear infinite reverse' }}
        />
      </div>

      {/* Smaller, Dimmer, Faster Rotating Globe */}
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px]">
        <div 
          className="w-full h-full rounded-full bg-gradient-to-br from-teal-300/25 via-emerald-400/20 to-green-500/25 blur-2xl animate-spin-fast"
          style={{ 
            boxShadow: '0 0 180px 70px rgba(16, 185, 129, 0.25), 0 0 100px 40px rgba(52, 211, 153, 0.2)',
            animation: 'spin 15s linear infinite'
          }}
        />
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:30px_30px]"
          style={{ animation: 'spin 12s linear infinite reverse' }}
        />
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};
