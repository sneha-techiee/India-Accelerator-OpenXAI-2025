'use client'

import { useState, useEffect } from 'react'

// Mock data for hackathon demo
const mockAttacks = [
  { id: 1, source: 'Russia', target: 'SSH', severity: 'high', time: '2024-08-31T10:30:00Z' },
  { id: 2, source: 'China', target: 'HTTP', severity: 'medium', time: '2024-08-31T10:28:00Z' },
  { id: 3, source: 'North Korea', target: 'FTP', severity: 'high', time: '2024-08-31T10:25:00Z' },
  { id: 4, source: 'Iran', target: 'SSH', severity: 'low', time: '2024-08-31T10:20:00Z' },
]

const mockHoneypots = [
  { id: 1, name: 'SSH Honeypot', status: 'active', attacks: 23 },
  { id: 2, name: 'Web Server Trap', status: 'active', attacks: 15 },
  { id: 3, name: 'FTP Honeypot', status: 'active', attacks: 8 },
  { id: 4, name: 'Database Trap', status: 'monitoring', attacks: 3 },
]

export default function PhantomGuardDashboard() {
  const [attacks, setAttacks] = useState(mockAttacks)
  const [honeypots, setHoneypots] = useState(mockHoneypots)
  const [totalAttacks, setTotalAttacks] = useState(49)
  const [activeThreats, setActiveThreats] = useState(12)

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Add random attack simulation
      const sources = ['Russia', 'China', 'North Korea', 'Iran', 'Unknown']
      const targets = ['SSH', 'HTTP', 'FTP', 'Database', 'IoT']
      const severities = ['low', 'medium', 'high']
      
      const newAttack = {
        id: Date.now(),
        source: sources[Math.floor(Math.random() * sources.length)],
        target: targets[Math.floor(Math.random() * targets.length)],
        severity: severities[Math.floor(Math.random() * severities.length)],
        time: new Date().toISOString()
      }

      setAttacks(prev => [newAttack, ...prev.slice(0, 9)]) // Keep latest 10
      setTotalAttacks(prev => prev + 1)
      
      if (newAttack.severity === 'high') {
        setActiveThreats(prev => prev + 1)
      }
    }, 5000) // New attack every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'status-danger'
      case 'medium': return 'status-warning'
      case 'low': return 'status-safe'
      default: return 'status-safe'
    }
  }

  return (
    <div className="min-h-screen cyber-grid">
      {/* Hero Section */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-white mb-2">🛡️ Phantom Guard Dashboard</h1>
        <p className="text-gray-400">AI-Powered Honeypot Security Monitoring</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="card glow-green">
          <h3 className="text-sm text-gray-400 mb-2">Total Attacks Detected</h3>
          <p className="text-2xl font-bold text-green-400">{totalAttacks}</p>
        </div>
        <div className="card glow-red">
          <h3 className="text-sm text-gray-400 mb-2">Active Threats</h3>
          <p className="text-2xl font-bold text-red-400">{activeThreats}</p>
        </div>
        <div className="card glow-yellow">
          <h3 className="text-sm text-gray-400 mb-2">Honeypots Active</h3>
          <p className="text-2xl font-bold text-yellow-400">{honeypots.filter(h => h.status === 'active').length}</p>
        </div>
        <div className="card">
          <h3 className="text-sm text-gray-400 mb-2">AI Analysis Status</h3>
          <p className="text-2xl font-bold text-blue-400">Online</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Attacks */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-white">🎯 Recent Attacks</h2>
            <div className="loading-spinner"></div>
          </div>
          
          <div className="space-y-3">
            {attacks.map((attack) => (
              <div key={attack.id} className="flex items-center justify-between p-3 bg-gray-800 rounded border-l-4 border-red-500">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-white font-medium">{attack.source}</span>
                    <span className="text-gray-400">→</span>
                    <span className="text-gray-300">{attack.target}</span>
                  </div>
                  <p className="text-xs text-gray-400">
                    {new Date(attack.time).toLocaleTimeString()}
                  </p>
                </div>
                <span className={`${getSeverityColor(attack.severity)} pulse-animation`}>
                  {attack.severity.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Honeypot Status */}
        <div className="card">
          <h2 className="text-lg font-bold text-white mb-4">🍯 Honeypot Status</h2>
          
          <div className="space-y-3">
            {honeypots.map((honeypot) => (
              <div key={honeypot.id} className="card hover:glow-green">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium">{honeypot.name}</h3>
                    <p className="text-sm text-gray-400">
                      {honeypot.attacks} attacks captured
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${
                      honeypot.status === 'active' 
                        ? 'bg-green-500 pulse-animation' 
                        : 'bg-yellow-500'
                    }`}></div>
                    <span className={`text-sm ${
                      honeypot.status === 'active' 
                        ? 'text-green-400' 
                        : 'text-yellow-400'
                    }`}>
                      {honeypot.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Threat Map Placeholder */}
      <div className="card mt-6">
        <h2 className="text-lg font-bold text-white mb-4">🗺️ Global Threat Map</h2>
        <div className="h-64 bg-gray-800 rounded flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-2">🌍</div>
            <p className="text-gray-400">Live attack visualization</p>
            <p className="text-sm text-gray-500 mt-2">Tracking {attacks.length} recent threats globally</p>
          </div>
        </div>
      </div>

      {/* AI Analysis Section */}
      <div className="card mt-6 glow-green">
        <h2 className="text-lg font-bold text-white mb-4">🤖 AI Threat Analysis</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">94%</div>
            <p className="text-sm text-gray-400">Detection Accuracy</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">2.3s</div>
            <p className="text-sm text-gray-400">Average Response Time</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">15</div>
            <p className="text-sm text-gray-400">Patterns Identified</p>
          </div>
        </div>
      </div>
    </div>
  )
}