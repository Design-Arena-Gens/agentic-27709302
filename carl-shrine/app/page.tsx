export default function Home() {
  const quotes = [
    {
      text: "I don't need instructions to know how to rock!!",
      context: "On being told how to do something"
    },
    {
      text: "If you need anything, you know who to look to. Someone else.",
      context: "Carl's neighborly philosophy"
    },
    {
      text: "You think you're gonna live forever, but you won't. Someone'll kill ya with a knife.",
      context: "Carl's life wisdom"
    },
    {
      text: "Yeah, I got a pool. It's above ground. What of it?",
      context: "Defending his property"
    },
    {
      text: "Tonight... you.",
      context: "The most iconic Carl threat"
    },
    {
      text: "I don't come down to where you work and slap the dick outta your mouth!",
      context: "Classic Carl confrontation"
    },
    {
      text: "My name is Carl, and I got frickin' problems!",
      context: "Living next to the Aqua Teens"
    },
    {
      text: "I want my name to be Spaghetti.",
      context: "Carl's brilliant ideas"
    }
  ];

  const specs = [
    {
      category: "PERSONAL STATS",
      items: [
        { label: "Full Name", value: "Carl Brutananadilewski" },
        { label: "Occupation", value: "Unemployed King" },
        { label: "Residence", value: "New Jersey" },
        { label: "Died", value: "69 Times (but keeps coming back)" }
      ]
    },
    {
      category: "ESSENTIAL INTERESTS",
      items: [
        { label: "Vehicle", value: "Dodge Stealth '2 Wycked'" },
        { label: "Favorite Food", value: "Several dozen chicken wings at once" },
        { label: "Fashion", value: "White tank top, sweatpants, gold chain" },
        { label: "Entertainment", value: "Pornography, sports, classic rock" },
        { label: "Team", value: "New York Giants (diehard fan)" }
      ]
    },
    {
      category: "PERSONALITY TRAITS",
      items: [
        { label: "Temperament", value: "Short-fused, sarcastic, vulgar" },
        { label: "Health Philosophy", value: "Everyone dies young anyway" },
        { label: "Diet Strategy", value: "Dangerous and illegal methods" },
        { label: "Grooming", value: "Poorly maintained balding glory" },
        { label: "Social Skills", value: "Aggressively antisocial" }
      ]
    },
    {
      category: "LEGENDARY POSSESSIONS",
      items: [
        { label: "Above-Ground Pool", value: "The crown jewel of his property" },
        { label: "Gold Chain", value: "Never removed, essential accessory" },
        { label: "Mustache", value: "Glorious and permanent fixture" },
        { label: "Beer Supply", value: "Constantly depleted, constantly restocked" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-700 to-orange-600 text-white">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-cyan-400 rounded-full opacity-20 animate-pulse animation-delay-500"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-400 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 text-center py-16 px-4">
        <h1 className="text-7xl md:text-9xl font-black mb-4 tracking-wider animate-pulse">
          <span className="text-yellow-300 drop-shadow-[0_0_30px_rgba(255,255,0,0.8)]">CARL</span>
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-cyan-300 mb-4 drop-shadow-[0_0_20px_rgba(0,255,255,0.6)]">
          BRUTANANADILEWSKI
        </h2>
        <div className="text-2xl md:text-3xl font-bold text-pink-300 drop-shadow-[0_0_15px_rgba(255,105,180,0.6)]">
          🏆 THE LEGEND OF NEW JERSEY 🏆
        </div>
        <div className="mt-6 text-xl md:text-2xl font-semibold text-white">
          Neighbor • Icon • Legend • Guy with a Pool
        </div>
      </header>

      {/* Image Gallery */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <h3 className="text-5xl font-black text-center mb-12 text-yellow-300 drop-shadow-[0_0_20px_rgba(255,255,0,0.8)]">
          ⚡ GALLERY OF GREATNESS ⚡
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div
              key={num}
              className="relative group overflow-hidden rounded-2xl border-4 border-yellow-400 shadow-[0_0_40px_rgba(255,255,0,0.5)] hover:shadow-[0_0_60px_rgba(255,0,255,0.8)] transition-all duration-300 hover:scale-105 bg-gradient-to-br from-purple-800 to-pink-800"
            >
              <img
                src={`/images/carl-${num}.svg`}
                alt={`Carl Brutananadilewski - Image ${num}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Quotes Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <h3 className="text-5xl font-black text-center mb-12 text-cyan-300 drop-shadow-[0_0_20px_rgba(0,255,255,0.8)]">
          💬 WORDS OF WISDOM 💬
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-900/80 to-pink-900/80 backdrop-blur-sm p-8 rounded-2xl border-4 border-pink-500 shadow-[0_0_30px_rgba(255,20,147,0.5)] hover:shadow-[0_0_50px_rgba(0,255,255,0.7)] transition-all duration-300 hover:scale-105"
            >
              <div className="text-3xl font-black text-yellow-300 mb-4 leading-tight">
                "{quote.text}"
              </div>
              <div className="text-lg text-cyan-200 font-semibold italic">
                — {quote.context}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Specifications Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <h3 className="text-5xl font-black text-center mb-12 text-yellow-300 drop-shadow-[0_0_20px_rgba(255,255,0,0.8)]">
          📊 CARL SPECIFICATIONS 📊
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {specs.map((section, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-orange-900/80 to-red-900/80 backdrop-blur-sm p-8 rounded-2xl border-4 border-yellow-400 shadow-[0_0_30px_rgba(255,165,0,0.5)] hover:shadow-[0_0_50px_rgba(255,255,0,0.7)] transition-all duration-300"
            >
              <h4 className="text-3xl font-black text-cyan-300 mb-6 text-center drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]">
                {section.category}
              </h4>
              <div className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex flex-col sm:flex-row sm:justify-between border-b-2 border-pink-500/50 pb-3"
                  >
                    <span className="text-xl font-bold text-yellow-300 mb-1 sm:mb-0">
                      {item.label}:
                    </span>
                    <span className="text-xl font-semibold text-white text-right">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <h3 className="text-5xl font-black text-center mb-12 text-pink-300 drop-shadow-[0_0_20px_rgba(255,105,180,0.8)]">
          🔥 EPIC CARL FACTS 🔥
        </h3>
        <div className="bg-gradient-to-br from-pink-900/80 to-purple-900/80 backdrop-blur-sm p-10 rounded-2xl border-4 border-cyan-400 shadow-[0_0_40px_rgba(0,255,255,0.6)]">
          <ul className="space-y-6 text-2xl font-bold">
            <li className="flex items-start">
              <span className="text-yellow-300 mr-4 text-4xl">★</span>
              <span className="text-white">
                Carl has died a total of <span className="text-pink-300">69 times</span> throughout Aqua Teen Hunger Force
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-300 mr-4 text-4xl">★</span>
              <span className="text-white">
                According to creator Dave Willis, Carl represents the <span className="text-cyan-300">"basic stereotype of males in general"</span>
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-300 mr-4 text-4xl">★</span>
              <span className="text-white">
                Carl generally dislikes the Aqua Teens and considers them <span className="text-pink-300">freaks</span>, especially Master Shake
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-300 mr-4 text-4xl">★</span>
              <span className="text-white">
                His prized possession is his <span className="text-yellow-300">Dodge Stealth "2 Wycked"</span> sports car
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-300 mr-4 text-4xl">★</span>
              <span className="text-white">
                Carl cares very little about personal health, believing <span className="text-cyan-300">"everyone will die young anyway"</span>
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-300 mr-4 text-4xl">★</span>
              <span className="text-white">
                He has eaten <span className="text-pink-300">several dozen chicken wings, many boxes of candy, and a flash-fried cow</span> in single sittings
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 text-center py-16 px-4 mt-12">
        <div className="text-6xl font-black text-yellow-300 mb-4 drop-shadow-[0_0_30px_rgba(255,255,0,0.9)]">
          🏆 ALL HAIL CARL 🏆
        </div>
        <div className="text-3xl font-bold text-cyan-300 mb-4">
          Aqua Teen Hunger Force Legend
        </div>
        <div className="text-xl text-pink-300">
          A tribute to New Jersey's finest
        </div>
        <div className="mt-8 text-sm text-white/60">
          This shrine is dedicated to the immortal spirit of Carl Brutananadilewski
        </div>
      </footer>
    </div>
  );
}
