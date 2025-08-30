import React, { useEffect, useRef } from 'react';

interface AttackMapProps {
  attacks: Array<{
    id: string;
    geo: string;
  }>;
}

export default function AttackMap({ attacks }: AttackMapProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Simple world map simulation (basic rectangle with dots for attacks)
    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#1a202c';
    ctx.fillRect(0, 0, width, height);

    // Draw a simple "world" background
    ctx.fillStyle = '#2d3748';
    ctx.fillRect(width * 0.1, height * 0.1, width * 0.8, height * 0.8);

    // Map attack locations (simplified geo to x,y coordinates)
    const geoToCoords: { [key: string]: [number, number] } = {
      US: [width * 0.4, height * 0.3],
      CN: [width * 0.7, height * 0.6],
      RU: [width * 0.5, height * 0.4],
    };

    attacks.forEach((attack) => {
      const coords = geoToCoords[attack.geo] || [Math.random() * width, Math.random() * height];
      ctx.beginPath();
      ctx.arc(coords[0], coords[1], 5, 0, Math.PI * 2);
      ctx.fillStyle = '#f56565'; // Red dot for attacks
      ctx.fill();
      ctx.closePath();
    });
  }, [attacks]);

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#f0f0f0' }}>Attack Map</h2>
      <canvas
        ref={canvasRef}
        width={600}
        height={400}
        style={{ border: '1px solid #333', borderRadius: '0.5rem', backgroundColor: '#1a202c' }}
      />
    </div>
  );
}