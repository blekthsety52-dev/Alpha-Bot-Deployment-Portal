import React, { useState } from 'react';
import { packageData } from './packageData';
import { 
  Folder, File as FileIcon, FileText, FileJson, Terminal, 
  ShieldCheck, Download, Server, Activity, Database,
  ChevronRight, ChevronDown, CheckCircle2, AlertCircle,
  Package, Lock, FileCode2, Info, Cpu, HardDrive, MemoryStick
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type FileType = 'json' | 'text' | 'shell' | 'powershell' | 'env' | 'conf' | 'markdown' | 'yaml' | 'javascript';

interface PackageFile {
  path: string;
  type: FileType;
  content: string;
}

export default function App() {
  const [selectedFile, setSelectedFile] = useState<PackageFile | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      setDownloadComplete(true);
      setTimeout(() => setDownloadComplete(false), 3000);
    }, 2000);
  };

  // Group files by directory
  const fileTree = (packageData.files as PackageFile[]).reduce((acc, file) => {
    const parts = file.path.split('/');
    const dir = parts.length > 1 ? parts[0] : 'root';
    if (!acc[dir]) acc[dir] = [];
    acc[dir].push(file);
    return acc;
  }, {} as Record<string, PackageFile[]>);

  const getIconForType = (type: FileType) => {
    switch (type) {
      case 'json': return <FileJson className="w-4 h-4 text-yellow-400" />;
      case 'shell': return <Terminal className="w-4 h-4 text-green-400" />;
      case 'powershell': return <Terminal className="w-4 h-4 text-blue-400" />;
      case 'env': return <Lock className="w-4 h-4 text-red-400" />;
      case 'conf': return <FileCode2 className="w-4 h-4 text-purple-400" />;
      case 'markdown': return <FileText className="w-4 h-4 text-blue-300" />;
      case 'yaml': return <FileCode2 className="w-4 h-4 text-orange-400" />;
      case 'javascript': return <FileCode2 className="w-4 h-4 text-yellow-300" />;
      default: return <FileText className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 font-sans flex flex-col">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#111] px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
            <Package className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-white tracking-tight">Alpha-Bot Deployment Portal</h1>
            <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
              <span className="font-mono bg-white/5 px-1.5 py-0.5 rounded text-emerald-400">V1.0.4-PROD</span>
              <span>Enterprise Release</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Signed & Verified</span>
          </div>
          <button 
            onClick={handleDownload}
            disabled={isDownloading}
            className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isDownloading ? (
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                <Activity className="w-4 h-4" />
              </motion.div>
            ) : downloadComplete ? (
              <CheckCircle2 className="w-4 h-4" />
            ) : (
              <Download className="w-4 h-4" />
            )}
            {isDownloading ? 'Packaging...' : downloadComplete ? 'Downloaded' : 'Download Release'}
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-72 border-r border-white/10 bg-[#111] flex flex-col overflow-y-auto">
          <div className="p-4">
            <button 
              onClick={() => setSelectedFile(null)}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${!selectedFile ? 'bg-emerald-500/10 text-emerald-400' : 'hover:bg-white/5 text-gray-400'}`}
            >
              <Activity className="w-4 h-4" />
              Release Dashboard
            </button>
          </div>
          
          <div className="px-4 pb-4">
            <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">Package Contents</h2>
            <div className="space-y-4">
              {Object.entries(fileTree).map(([dir, files]) => (
                <div key={dir}>
                  <div className="flex items-center gap-2 px-2 py-1.5 text-sm font-medium text-gray-300">
                    <Folder className="w-4 h-4 text-emerald-500/70" />
                    <span className="capitalize">{dir === 'root' ? '/' : dir}</span>
                  </div>
                  <div className="pl-4 mt-1 space-y-0.5">
                    {files.map(file => (
                      <button
                        key={file.path}
                        onClick={() => setSelectedFile(file)}
                        className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-sm transition-colors text-left ${selectedFile?.path === file.path ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'}`}
                      >
                        {getIconForType(file.type)}
                        <span className="truncate">{file.path.split('/').pop()}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-[#0a0a0a] overflow-y-auto relative">
          <AnimatePresence mode="wait">
            {selectedFile ? (
              <motion.div 
                key={selectedFile.path}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="p-6 max-w-5xl mx-auto"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                      {getIconForType(selectedFile.type)}
                    </div>
                    <div>
                      <h2 className="text-lg font-medium text-white">{selectedFile.path}</h2>
                      <p className="text-xs text-gray-500 font-mono">{selectedFile.type.toUpperCase()} File</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      const blob = new Blob([selectedFile.content], { type: 'text/plain' });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = selectedFile.path.split('/').pop() || 'file.txt';
                      a.click();
                      URL.revokeObjectURL(url);
                    }}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white"
                    title="Download File"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="rounded-xl border border-white/10 bg-[#111] overflow-hidden shadow-2xl">
                  <div className="flex items-center px-4 py-2 border-b border-white/10 bg-black/20">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                    </div>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-sm font-mono text-gray-300 leading-relaxed">
                      <code>{selectedFile.content}</code>
                    </pre>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="dashboard"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-8 max-w-6xl mx-auto space-y-8"
              >
                {/* Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-white/10 rounded-2xl p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                      <Server className="w-48 h-48 text-emerald-500" />
                    </div>
                    <div className="relative z-10">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide uppercase mb-4">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Ready for Deployment
                      </div>
                      <h2 className="text-4xl font-semibold text-white tracking-tight mb-4">
                        {packageData.manifest.name}
                      </h2>
                      <p className="text-gray-400 max-w-xl leading-relaxed mb-8">
                        Production-grade deployment package containing compiled binaries, configuration templates, security hardening scripts, and comprehensive documentation for enterprise environments.
                      </p>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <div className="bg-black/40 border border-white/5 rounded-xl p-4">
                          <div className="text-gray-500 text-xs mb-1">Version</div>
                          <div className="text-white font-mono text-sm">{packageData.manifest.version}</div>
                        </div>
                        <div className="bg-black/40 border border-white/5 rounded-xl p-4">
                          <div className="text-gray-500 text-xs mb-1">Build Date</div>
                          <div className="text-white font-mono text-sm">{new Date(packageData.manifest.buildDate).toLocaleDateString()}</div>
                        </div>
                        <div className="bg-black/40 border border-white/5 rounded-xl p-4">
                          <div className="text-gray-500 text-xs mb-1">Target OS</div>
                          <div className="text-white text-sm">Linux / Win / Mac</div>
                        </div>
                        <div className="bg-black/40 border border-white/5 rounded-xl p-4">
                          <div className="text-gray-500 text-xs mb-1">Signature</div>
                          <div className="text-emerald-400 text-sm flex items-center gap-1">
                            <ShieldCheck className="w-3.5 h-3.5" /> Valid
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* System Requirements */}
                  <div className="bg-[#111] border border-white/10 rounded-2xl p-6 flex flex-col">
                    <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                      <Info className="w-5 h-5 text-blue-400" />
                      System Requirements
                    </h3>
                    <div className="space-y-4 flex-1">
                      <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg border border-white/5">
                        <div className="flex items-center gap-3">
                          <Cpu className="w-5 h-5 text-gray-400" />
                          <span className="text-sm text-gray-300">CPU Cores</span>
                        </div>
                        <span className="text-sm font-mono text-white">4+ Cores</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg border border-white/5">
                        <div className="flex items-center gap-3">
                          <MemoryStick className="w-5 h-5 text-gray-400" />
                          <span className="text-sm text-gray-300">RAM</span>
                        </div>
                        <span className="text-sm font-mono text-white">8GB+</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg border border-white/5">
                        <div className="flex items-center gap-3">
                          <HardDrive className="w-5 h-5 text-gray-400" />
                          <span className="text-sm text-gray-300">Storage</span>
                        </div>
                        <span className="text-sm font-mono text-white">50GB SSD</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg border border-white/5">
                        <div className="flex items-center gap-3">
                          <Database className="w-5 h-5 text-gray-400" />
                          <span className="text-sm text-gray-300">Dependencies</span>
                        </div>
                        <span className="text-sm font-mono text-white">PG 14+, Redis</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Checksums */}
                <div className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden">
                  <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-black/20">
                    <h3 className="text-lg font-medium text-white flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-emerald-400" />
                      Artifact Checksums (SHA-256)
                    </h3>
                    <span className="text-xs text-gray-500 font-mono">{Object.keys(packageData.manifest.checksums).length} Artifacts</span>
                  </div>
                  <div className="divide-y divide-white/5 max-h-96 overflow-y-auto">
                    {Object.entries(packageData.manifest.checksums).map(([path, hash]) => (
                      <div key={path} className="px-6 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-white/[0.02] transition-colors">
                        <span className="text-sm text-gray-300 font-medium">{path}</span>
                        <span className="text-xs font-mono text-gray-500 bg-black/40 px-2 py-1 rounded border border-white/5 select-all">{hash}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
