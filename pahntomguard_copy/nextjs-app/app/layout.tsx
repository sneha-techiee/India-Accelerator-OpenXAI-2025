import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Phantom Guard - AI-Powered Honeypot System',
  description: 'Real-time cybersecurity threat detection and analysis platform',
  keywords: ['cybersecurity', 'honeypot', 'ai', 'threat-detection', 'security'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <div className="min-h-screen bg-gray-950 text-gray-100">
          {/* Header */}
          <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-gray-900 font-bold text-lg">🛡️</span>
                  </div>
                  <div>
                    <h1 className="text-xl font-bold text-white">Phantom Guard</h1>
                    <p className="text-xs text-gray-400">AI-Powered Security</p>
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full pulse-animation"></div>
                    <span className="text-sm text-gray-300">System Active</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    {new Date().toLocaleTimeString()}
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="container mx-auto px-4 py-6">
            {children}
          </main>

          {/* Footer */}
          <footer className="border-t border-gray-800 bg-gray-900/30 mt-12">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span>© 2024 Phantom Guard</span>
                  <span>•</span>
                  <span>Built for India Accelerator OpenXAI 2025</span>
                </div>
                
                <div className="flex items-center space-x-4 mt-4 md:mt-0">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-400">Honeypots Active</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full pulse-animation"></div>
                    <span className="text-yellow-400">AI Monitoring</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-blue-400">Real-time Analysis</span>
                  </div>
                </div>
              </div>
              
              {/* Hackathon Info */}
              <div className="mt-4 pt-4 border-t border-gray-800">
                <div className="text-center text-xs text-gray-500">
                  🚀 Hackathon Project - Built in 4 hours - Demonstrating AI-powered cybersecurity innovation
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}