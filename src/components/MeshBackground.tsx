export const MeshBackground = () => {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      {/* Large Rotating Mesh Sphere - Far Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px]">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-emerald-500/10 via-green-600/5 to-teal-500/10 opacity-20 blur-3xl animate-mesh-move"
             style={{ 
               boxShadow: '0 0 200px 80px rgba(16, 185, 129, 0.15)',
               animation: 'mesh-move 25s ease-in-out infinite'
             }} />
      </div>

      {/* Smaller Vibrant Mesh Sphere - Foreground */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px]">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-teal-400/30 via-emerald-500/25 to-cyan-400/30 blur-2xl animate-pulse-glow" 
             style={{ 
               boxShadow: '0 0 150px 60px rgba(52, 211, 153, 0.3), 0 0 100px 40px rgba(20, 184, 166, 0.2)',
               animation: 'pulse-glow 8s ease-in-out infinite, mesh-move 18s ease-in-out infinite reverse',
               animationDelay: '0s, 2s'
             }} />
        {/* Energy pattern overlay */}
        <div className="absolute inset-0 rounded-full bg-gradient-conic from-transparent via-cyan-400/10 to-transparent blur-xl animate-spin"
             style={{ animationDuration: '20s' }} />
      </div>

      {/* Additional ambient light layers */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-teal-900/10 via-emerald-900/5 to-transparent" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-900/5 to-transparent" />
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"
           style={{ animationDuration: '4s' }} />
      
      {/* Subtle gradient mesh effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(52,211,153,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(20,184,166,0.05),transparent_50%)]" />
    </div>
  );
};
