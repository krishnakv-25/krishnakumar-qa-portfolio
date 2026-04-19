export default function Hero() {
  return (
    <header className="rounded-3xl bg-white/5 border border-white/10 p-8 md:p-12 shadow-2xl">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <div>
          <div className="inline-block px-4 py-2 rounded-full bg-cyan-400/10 text-cyan-300 text-sm mb-5">
            Open to Test Lead / QA Automation Opportunities
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Krishnakumar V
          </h1>

          <p className="text-xl text-slate-300 mt-4">
            Senior Test Lead | QA Automation | AI-Driven Quality Engineering
          </p>

          <p className="mt-4 text-cyan-300 text-lg">
            9+ Years • Selenium • Java • Mabl • CI/CD • Retail
          </p>

          <p className="mt-6 text-slate-400 leading-7">
            Led 11,200+ test migration initiatives, optimized release quality,
            and scaled enterprise automation programs across retail platforms.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="/krishnakumar-qa-portfolio/resume.pdf"
              className="px-6 py-3 rounded-2xl bg-cyan-400 text-slate-950 font-bold hover:scale-105 transition"
            >
              Download Resume
            </a>

            <a
              href="mailto:krishnakumarvkkv6@gmail.com"
              className="px-6 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <div className="relative">
            <img src="/krishnakumar-qa-portfolio/profile.jpg" alt="Krishnakumar V"
              className="w-72 h-72 object-cover rounded-3xl border border-white/10 shadow-2xl"
            />


            <div className="absolute -bottom-4 -left-4 px-4 py-2 rounded-2xl bg-slate-900 border border-white/10 text-cyan-300 text-sm">
              11,200+ Tests Delivered
            </div>

            <div className="absolute -top-4 -right-4 px-4 py-2 rounded-2xl bg-slate-900 border border-white/10 text-cyan-300 text-sm">
              9+ Years Experience
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}