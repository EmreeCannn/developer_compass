import { useState } from 'react';

import {
  FaReddit,
  FaTwitter,
  FaYoutube,
  FaHackerNews,
  FaProductHunt,
  FaAppStoreIos,
  FaGooglePlay,
} from "react-icons/fa";
function App() {
    const icons = [
  { icon: <FaReddit size={48} />, name: "Reddit" },
  { icon: <FaTwitter size={48} />, name: "X" },
  { icon: <FaYoutube size={48} />, name: "YouTube" },
  { icon: <FaHackerNews size={48} />, name: "HN" },
  { icon: <FaProductHunt size={48} />, name: "Product Hunt" },
  
  { icon: <FaAppStoreIos size={48} />, name: "App Store" },
  { icon: <FaGooglePlay size={48} />, name: "Play Store" },
];
  const [email, setEmail] = useState('');
  const [footerEmail, setFooterEmail] = useState('');

  const handleSubmit = (e: React.FormEvent, emailValue: string) => {
    e.preventDefault();
    console.log('Email submitted:', emailValue);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-20 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            Stop Guessing. <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Start Dominating.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            Unlock AI-powered insights for the Creator Economy.
            Our platform analyzes millions of user comments on trending products, turning market noise into your next big opportunity.
          </p>

          <form onSubmit={(e) => handleSubmit(e, email)} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email for early access..."
                className="flex-1 px-6 py-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-white placeholder-gray-500 transition-all"
                required
              />
              <button
                onClick={() => {
    const url = `https://gmail.us1.list-manage.com/subscribe/post?u=9472a6a8359293bd5cb832524&id=0d0eef9233&EMAIL=${email}`;
    window.open(url, "_blank");
  }}
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 font-semibold shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all transform hover:scale-105"
              >
                Get Early Access
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="container mx-auto px-6 py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          From Raw Data to{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Actionable Insights
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 - The Good */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:shadow-2xl hover:shadow-green-500/20 transition-all hover:border-green-500/50 group">
            <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-500/50 group-hover:scale-110 transition-transform">
              <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="lucide lucide-heart-icon w-8 h-8 text-white"
>
  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
</svg>

            </div>
            <h3 className="text-2xl font-bold mb-4 text-green-400">What Customers Love</h3>
            <p className="text-gray-300 leading-relaxed">
              Discover the exact features and addictive game mechanics that players praise in top-charting games.
            </p>
          </div>

          {/* Card 2 - The Bad */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:shadow-2xl hover:shadow-red-500/20 transition-all hover:border-red-500/50 group">
            <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-lg shadow-red-500/50 group-hover:scale-110 transition-transform">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-flame-icon w-8 h-8 text-white"
  >
    <path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" />
  </svg>
</div>
            <h3 className="text-2xl font-bold mb-4 text-red-400">What Customers Hate</h3>
            <p className="text-gray-300 leading-relaxed">
              Pinpoint game-killing bugs, frustrating ad strategies, and boring level designs from real player feedback.
            </p>
          </div>

          {/* Card 3 - The Opportunity */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all hover:border-yellow-500/50 group">
            <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center shadow-lg shadow-yellow-500/50 group-hover:scale-110 transition-transform">
             <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="lucide lucide-lightbulb-icon w-8 h-8 text-white"
>
  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
  <path d="M9 18h6" />
  <path d="M10 22h4" />
</svg>

            </div>
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Market Gaps & Opportunities</h3>
            <p className="text-gray-300 leading-relaxed">
              Our LLM finds untapped feature requests and player desires, giving you the blueprint for your next hit.
            </p>
          </div>
        </div>
      </section>

      {/* Tracked Apps Section */}
      <section className="container mx-auto px-6 py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Your Tracked{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Competitors
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* App 1 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:shadow-2xl hover:shadow-blue-500/20 transition-all hover:border-blue-500/50">
            <div className="w-20 h-20 mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg shadow-blue-500/50">
             <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="lucide lucide-gem-icon w-8 h-8 text-blue-400"
>
  <path d="M10.5 3 8 9l4 13 4-13-2.5-6" />
  <path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z" />
  <path d="M2 9h20" />
</svg>

            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Notion SaaS</h3>
            <p className="text-gray-400 text-sm mb-4">Productivity</p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">8.6K Reviews</span>
              <span className="text-green-400">↑ 12%</span>
            </div>
          </div>

          {/* App 2 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:shadow-2xl hover:shadow-purple-500/20 transition-all hover:border-purple-500/50">
            <div className="w-20 h-20 mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/50">
             <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="lucide lucide-gem-icon w-8 h-8 text-cyan-400"
>
  <path d="M10.5 3 8 9l4 13 4-13-2.5-6" />
  <path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z" />
  <path d="M2 9h20" />
</svg>

            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Strava App</h3>
            <p className="text-gray-400 text-sm mb-4">Fitness</p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">18.2K Reviews</span>
              <span className="text-red-400">↓ 5%</span>
            </div>
          </div>

          {/* App 3 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all hover:border-indigo-500/50">
            <div className="w-20 h-20 mb-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center shadow-lg shadow-indigo-500/50">
              <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="lucide lucide-gem-icon w-8 h-8 text-cyan-400"
>
  <path d="M10.5 3 8 9l4 13 4-13-2.5-6" />
  <path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z" />
  <path d="M2 9h20" />
</svg>

            </div>
            <h3 className="text-xl font-bold mb-2 text-white">PhotoRoom AI</h3>
            <p className="text-gray-400 text-sm mb-4">Photo Editor</p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">12.8K Reviews</span>
              <span className="text-green-400">↑ 23%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Data Sources Section with Scrolling Animation */}
      {/* <section className="container mx-auto px-6 py-24 overflow-hidden">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Powered by Millions of{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Unfiltered Comments
          </span>
        </h2>

        <div className="relative">
          <div className="flex animate-scroll">
            <div className="flex items-center gap-8 pr-8">
              <div className="flex items-center justify-center p-6 bg-gray-800/30 rounded-xl border border-gray-700 min-w-[180px]">
                <span className="text-2xl font-bold text-gray-400">Reddit</span>
              </div>
              <div className="flex items-center justify-center p-6 bg-gray-800/30 rounded-xl border border-gray-700 min-w-[180px]">
                <span className="text-2xl font-bold text-gray-400">X</span>
              </div>
              <div className="flex items-center justify-center p-6 bg-gray-800/30 rounded-xl border border-gray-700 min-w-[180px]">
                <span className="text-2xl font-bold text-gray-400">YouTube</span>
              </div>
              <div className="flex items-center justify-center p-6 bg-gray-800/30 rounded-xl border border-gray-700 min-w-[180px]">
                <span className="text-2xl font-bold text-gray-400">HN</span>
              </div>
              <div className="flex items-center justify-center p-6 bg-gray-800/30 rounded-xl border border-gray-700 min-w-[180px]">
                <span className="text-2xl font-bold text-gray-400">Product Hunt</span>
              </div>
              <div className="flex items-center justify-center p-6 bg-gray-800/30 rounded-xl border border-gray-700 min-w-[180px]">
                <span className="text-2xl font-bold text-gray-400">Capterra</span>
              </div>
              <div className="flex items-center justify-center p-6 bg-gray-800/30 rounded-xl border border-gray-700 min-w-[180px]">
                <span className="text-2xl font-bold text-gray-400">Trustpilot</span>
              </div>
              <div className="flex items-center justify-center p-6 bg-gray-800/30 rounded-xl border border-gray-700 min-w-[180px]">
                <span className="text-2xl font-bold text-gray-400">App Store</span>
              </div>
              <div className="flex items-center justify-center p-6 bg-gray-800/30 rounded-xl border border-gray-700 min-w-[180px]">
                <span className="text-2xl font-bold text-gray-400">Play Store</span>
              </div>
            </div>
            <div className="flex items-center gap-8 pr-8" aria-hidden="true">
              <div className="flex items-center justify-center p-6 bg-gray-800/30 rounded-xl border border-gray-700 min-w-[180px]">
                <span className="text-2xl font-bold text-gray-400">Reddit</span>
              </div>
              <div className="flex items-center justify-center p-6 bg-gray-800/30 rounded-xl border border-gray-700 min-w-[180px]">
                <span className="text-2xl font-bold text-gray-400">X</span>
              </div>
              <div className="flex items-center justify-center p-6 bg-gray-800/30 rounded-xl border border-gray-700 min-w-[180px]">
                <span className="text-2xl font-bold text-gray-400">YouTube</span>
              </div>
              <div className="flex items-center justify-center p-6 bg-gray-800/30 rounded-xl border border-gray-700 min-w-[180px]">
                <span className="text-2xl font-bold text-gray-400">HN</span>
              </div>
              <div className="flex items-center justify-center p-6 bg-gray-800/30 rounded-xl border border-gray-700 min-w-[180px]">
                <span className="text-2xl font-bold text-gray-400">Product Hunt</span>
              </div>
              <div className="flex items-center justify-center p-6 bg-gray-800/30 rounded-xl border border-gray-700 min-w-[180px]">
                <span className="text-2xl font-bold text-gray-400">Capterra</span>
              </div>
              <div className="flex items-center justify-center p-6 bg-gray-800/30 rounded-xl border border-gray-700 min-w-[180px]">
                <span className="text-2xl font-bold text-gray-400">Trustpilot</span>
              </div>
              <div className="flex items-center justify-center p-6 bg-gray-800/30 rounded-xl border border-gray-700 min-w-[180px]">
                <span className="text-2xl font-bold text-gray-400">App Store</span>
              </div>
              <div className="flex items-center justify-center p-6 bg-gray-800/30 rounded-xl border border-gray-700 min-w-[180px]">
                <span className="text-2xl font-bold text-gray-400">Play Store</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="container mx-auto px-6 py-24 overflow-hidden">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Powered by Millions of{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Unfiltered Comments
          </span>
        </h2>

        <div className="relative">
          <div className="flex animate-scroll">
            {/* İlk set */}
            <div className="flex items-center gap-8 pr-8">
              {icons.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center p-6 bg-gray-800/30 rounded-xl border border-gray-700 min-w-[120px] h-[120px]"
                >
                  <div className="text-gray-400">{item.icon}</div>
                </div>
              ))}
            </div>

            {/* İkinci set (scroll efekti için) */}
            <div className="flex items-center gap-8 pr-8" aria-hidden="true">
              {icons.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center p-6 bg-gray-800/30 rounded-xl border border-gray-700 min-w-[120px] h-[120px]"
                >
                  <div className="text-gray-400">{item.icon}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      

      {/* User Comments Section */}
      <section className="container mx-auto px-6 py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Real Player{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Feedback
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Reddit Comment 1 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:shadow-xl hover:shadow-orange-500/10 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-white">u/SaaS_Founder_AU</span>
                  <span className="text-gray-500 text-sm">• 2 days ago</span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  "Is anyone else's integration with the new payment API failing? Getting a constant 403 error. Their support docs are outdated. Help!"
                </p>
                <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                  <span>↑ 342</span>
                  <span>💬 23 replies</span>
                </div>
              </div>
            </div>
          </div>

          {/* Twitter Comment 1 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:shadow-xl hover:shadow-blue-500/10 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-white">@MobileGamer_Alex</span>
                  <span className="text-gray-500 text-sm">• 5h</span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  "Ads are getting way too aggressive. Every 30 seconds? Seriously? I'd rather pay $2.99 upfront than deal with this."
                </p>
                <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                  <span>❤️ 1.2K</span>
                  <span>🔁 234</span>
                  <span>💬 89</span>
                </div>
              </div>
            </div>
          </div>

          {/* Reddit Comment 2 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:shadow-xl hover:shadow-orange-500/10 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-white">u/Gym_guru</span>
                  <span className="text-gray-500 text-sm">• 1 day ago</span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  "This new fitness app has a killer UI, but the subscription model is confusing. A simple one-time purchase option would get them so many more users."
                </p>
                <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                  <span>↑ 567</span>
                  <span>💬 89 replies</span>
                </div>
              </div>
            </div>
          </div>

          {/* Twitter Comment 2 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:shadow-xl hover:shadow-blue-500/10 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-white">@IndieGamer_Fan</span>
                  <span className="text-gray-500 text-sm">• 12h</span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  "Love the new multiplayer mode! Finally something to compete with friends. This is what the game was missing all along 🎮"
                </p>
                <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                  <span>❤️ 2.8K</span>
                  <span>🔁 456</span>
                  <span>💬 128</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Testimonials Section */}
      <section className="container mx-auto px-6 py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Why Developers{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Trust Us
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Testimonial 1 */}
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:shadow-2xl hover:shadow-purple-500/20 transition-all">
            <div className="mb-6">
              <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="lucide lucide-mail-icon w-8 h-8 text-purple-400"
>
  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
  <rect x="2" y="4" width="20" height="16" rx="2" />
</svg>

            </div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed italic">
              "Developer's Compass saved me 10+ hours of manual research this week alone.
              The 'Market Gaps' report is pure gold."
            </p>
            <p className="text-purple-400 font-semibold">- Amelia Wallace, Head of Content @ GrowthSprout</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:shadow-2xl hover:shadow-purple-500/20 transition-all">
            <div className="mb-6">
              <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="lucide lucide-mail-icon w-8 h-8 text-purple-400"
>
  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
  <rect x="2" y="4" width="20" height="16" rx="2" />
</svg>

            </div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed italic">
              "We were stuck in 'analysis paralysis' for our next big feature.
               Developer's Compass crunched thousands of user reviews and pinpointed a key frustration with our competitors.
               That data gave us the confidence to start building.."
            </p>
            <p className="text-blue-400 font-semibold">- Javier Vargas, Co-founder @ ReplyFlow</p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-12 shadow-2xl shadow-purple-500/20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Gain Your{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Unfair Advantage?
            </span>
          </h2>

          <form onSubmit={(e) => handleSubmit(e, footerEmail)} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={footerEmail}
                onChange={(e) => setFooterEmail(e.target.value)}
                placeholder="Enter your email..."
                className="flex-1 px-6 py-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-white placeholder-gray-500 transition-all"
                required
              />
              <button
                         onClick={() => {
    const url = `https://gmail.us1.list-manage.com/subscribe/post?u=9472a6a8359293bd5cb832524&id=0d0eef9233&EMAIL=${email}`;
    window.open(url, "_blank");
  }}
                type="submit"
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 font-semibold shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all transform hover:scale-105"
              >
                Get Early Access Now
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-gray-400">
            <p className="text-sm">
              © 2025 Developer's Compass. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm">
              <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
              <a href="mailto:contact@developerscompass.com" className="hover:text-purple-400 transition-colors">
                contact@developerscompass.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;