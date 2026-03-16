import React, { useState, useEffect } from 'react';
import { Sparkles, Image as ImageIcon, Loader2, AlertCircle } from 'lucide-react';
import { generateImage } from './services/gemini';

function App() {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [apiKey, setApiKey] = useState<string>('');
  
  // Quick check for API key in env during development
  useEffect(() => {
    const envKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (envKey) {
      setApiKey(envKey);
    }
  }, []);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    
    if (!apiKey.trim()) {
      setError('Please provide a Google Gemini API Key.');
      return;
    }

    setIsLoading(true);
    setError(null);
    
    try {
      const generatedImage = await generateImage(prompt, apiKey);
      setImageUrl(generatedImage);
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred while generating the image.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white flex items-center justify-center p-4 selection:bg-fuchsia-500/30">
      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* Left Column: Input and Controls */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl relative overflow-hidden">
          {/* Decorative background blurs */}
          <div className="absolute top-[-50px] left-[-50px] w-48 h-48 bg-purple-500/30 rounded-full mix-blend-screen filter blur-3xl opacity-50 pointer-events-none"></div>
          <div className="absolute bottom-[-50px] right-[-50px] w-48 h-48 bg-indigo-500/30 rounded-full mix-blend-screen filter blur-3xl opacity-50 pointer-events-none"></div>

          <div className="relative z-10">
            <h1 className="text-4xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-cyan-400">
              Nano Banana2
            </h1>
            <p className="text-white/60 mb-8 font-medium">✨ Generate stunning images with Google Gemini ✨</p>

            <form onSubmit={handleGenerate} className="space-y-6">
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-white/80 flex items-center gap-2">
                  <span>API Key</span>
                  {!apiKey && import.meta.env.PROD && (
                    <span className="text-xs bg-red-500/20 text-red-300 px-2 py-0.5 rounded-full">Required</span>
                  )}
                </label>
                <input 
                  type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="AIzaSy..."
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50 transition-all font-mono"
                />
                <p className="text-xs text-white/40">Your key is only used locally and never sent to our servers.</p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-white/80">Prompt (提示词)</label>
                <textarea 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="A cinematic shot of a futuristic city with flying cars at sunset, highly detailed..."
                  rows={4}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50 transition-all resize-none"
                />
              </div>

              {error && (
                <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-4 flex items-start gap-3 text-red-200">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <p className="text-sm">{error}</p>
                </div>
              )}

              <button 
                type="submit" 
                disabled={isLoading || !prompt.trim()}
                className="w-full relative group overflow-hidden rounded-xl font-bold text-lg p-[1px] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>
                <div className="relative bg-black/50 backdrop-blur-sm rounded-xl px-6 py-4 flex items-center justify-center gap-3 transition-all group-hover:bg-transparent">
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Generating...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      <span>Generate Image</span>
                    </>
                  )}
                </div>
              </button>
            </form>
          </div>
        </div>

        {/* Right Column: Image Preview */}
        <div className="h-full min-h-[400px] lg:min-h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center relative overflow-hidden group">
          {imageUrl && !isLoading ? (
             <img 
               src={imageUrl} 
               alt="Generated from Gemini" 
               className="w-full h-full object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
             />
          ) : isLoading ? (
             <div className="flex flex-col items-center justify-center gap-4 text-white/50">
               <div className="relative">
                 <div className="w-16 h-16 border-4 border-fuchsia-500/20 rounded-full"></div>
                 <div className="w-16 h-16 border-4 border-fuchsia-500 border-t-transparent rounded-full animate-spin absolute inset-0"></div>
               </div>
               <p className="animate-pulse font-medium">Dreaming up your image...</p>
             </div>
          ) : (
             <div className="flex flex-col items-center justify-center gap-4 text-white/30 text-center">
               <ImageIcon className="w-16 h-16 opacity-50" />
               <p className="max-w-[200px]">Enter a prompt and click generate to see the magic happen.</p>
             </div>
          )}
        </div>
        
      </div>
    </div>
  );
}

export default App;
