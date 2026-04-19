export default function Metrics() {
  const data = [
    ["9+", "Years Experience"],
    ["11,200+", "Mabl Tests"],
    ["4,500+", "Automated Tests"],
    ["45 min", "Smoke Runtime"],
  ];

  return (
    <section className="grid md:grid-cols-4 gap-5">
      {data.map(([n, t]) => (
        <div key={t} className="rounded-3xl p-6 bg-white/5 border border-white/10">
          <p className="text-4xl font-bold text-cyan-300">{n}</p>
          <p className="text-slate-400 mt-2">{t}</p>
        </div>
      ))}
    </section>
  );
}