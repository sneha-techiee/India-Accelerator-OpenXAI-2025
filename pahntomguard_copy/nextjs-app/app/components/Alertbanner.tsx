import React from 'react';

interface AlertBannerProps {
  threatLevel: string;
}

export default function AlertBanner({ threatLevel }: AlertBannerProps) {
  const getAlertMessage = (level: string) => {
    switch (level) {
      case 'High':
        return 'Critical Threat Detected! Immediate action required.';
      case 'Medium':
        return 'Moderate Threat Detected. Monitoring in progress.';
      case 'Low':
        return 'System Secure. No immediate threats detected.';
      default:
        return 'System Status Unknown.';
    }
  };

  const getAlertStyle = (level: string) => {
    switch (level) {
      case 'High':
        return { backgroundColor: '#742a2a', color: '#f56565' };
      case 'Medium':
        return { backgroundColor: '#975a16', color: '#ecc94b' };
      case 'Low':
        return { backgroundColor: '#1a4731', color: '#48bb78' };
      default:
        return { backgroundColor: '#4a5568', color: '#e2e8f0' };
    }
  };

  return (
    <div style={{
      ...getAlertStyle(threatLevel),
      padding: '1rem',
      borderRadius: '0.5rem',
      textAlign: 'center',
      fontWeight: 'bold',
      marginBottom: '2rem',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    }}>
      {getAlertMessage(threatLevel)}
    </div>
  );
}