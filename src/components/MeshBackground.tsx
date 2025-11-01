export const MeshBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Large Background Sphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px]">
        <div className="w-full h-full rounded-full bg-gradient-radial opacity-30 blur-3xl animate-mesh-move" />
      </div>

      {/* Smaller Foreground Sphere */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px]">
        <div className="w-full h-full rounded-full bg-cyber/20 blur-2xl animate-pulse-glow animate-mesh-move" 
             style={{ animationDelay: '2s', animationDuration: '12s' }} />
      </div>

      {/* Additional ambient light */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-ocean/10 to-transparent" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
    </div>
  );
};
