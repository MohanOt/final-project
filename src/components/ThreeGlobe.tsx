import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const ThreeGlobe = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    // Enhanced lighting for realistic Earth
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x10b981, 0.3);
    pointLight.position.set(-5, 0, 5);
    scene.add(pointLight);

    // Create Earth globe with continents
    const geometry = new THREE.SphereGeometry(3.5, 64, 64);
    
    // Main Earth material with Phong shading for depth
    const earthMaterial = new THREE.MeshPhongMaterial({
      color: 0x0a4d3c,
      emissive: 0x062920,
      shininess: 10,
      transparent: true,
      opacity: 0.95,
    });
    const globe = new THREE.Mesh(geometry, earthMaterial);
    scene.add(globe);

    // Glowing atmosphere layer
    const atmosphereGeometry = new THREE.SphereGeometry(3.7, 64, 64);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.15,
      side: THREE.BackSide,
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    globe.add(atmosphere);

    // Add glowing continent outlines
    const wireframeGeometry = new THREE.SphereGeometry(3.52, 32, 32);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const wireframe = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    globe.add(wireframe);

    // Add energy points (data pulse points)
    const pointsGeometry = new THREE.BufferGeometry();
    const pointsCount = 200;
    const positions = new Float32Array(pointsCount * 3);
    
    for (let i = 0; i < pointsCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 3.55;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    
    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0x34d399,
      size: 0.05,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const points = new THREE.Points(pointsGeometry, pointsMaterial);
    globe.add(points);

    // Position camera
    camera.position.z = 10;
    camera.position.y = 0;

    // Mouse interaction
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation loop
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.001;
      
      // Continuous rotation
      globe.rotation.y += 0.001;
      
      // Interactive tilt based on mouse position
      globe.rotation.x = mousePosition.y * 0.1;
      globe.rotation.z = mousePosition.x * 0.05;
      
      // Pulse animation for energy points
      points.rotation.y += 0.002;
      pointsMaterial.opacity = 0.6 + Math.sin(time * 2) * 0.2;
      
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      containerRef.current?.removeChild(renderer.domElement);
      geometry.dispose();
      earthMaterial.dispose();
      atmosphereGeometry.dispose();
      atmosphereMaterial.dispose();
      wireframeGeometry.dispose();
      wireframeMaterial.dispose();
      pointsGeometry.dispose();
      pointsMaterial.dispose();
      renderer.dispose();
    };
  }, [mousePosition]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ opacity: 0.5 }}
    />
  );
};
