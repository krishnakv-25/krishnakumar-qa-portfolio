export default function Experience() {
  return (
    <section
      id="experience"
      className="rounded-3xl bg-white/5 border border-white/10 p-8"
    >
      <h2 className="text-3xl font-bold mb-6">Experience</h2>

      <div className="space-y-8 text-slate-300">
        <div>
          <h3 className="text-xl font-semibold text-cyan-300">
            Wipro — Test Lead
          </h3>
          <p className="text-slate-400 mb-2">Retail / eCommerce Domain</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Led migration of 11,200+ tests into Mabl in 6 months.</li>
            <li>Managed automation governance across multiple vendors.</li>
            <li>Introduced AI workflows using GitHub Copilot + MCP.</li>
            <li>Owned planning, reporting, quality metrics and delivery.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-cyan-300">
            Senior Test Engineer
          </h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>Built Selenium Java framework using Maven/TestNG.</li>
            <li>Automated 4,500+ regression scenarios.</li>
            <li>Reduced smoke execution from 8 hours to 45 mins.</li>
            <li>Integrated BrowserStack, Jenkins and CI/CD pipelines.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}