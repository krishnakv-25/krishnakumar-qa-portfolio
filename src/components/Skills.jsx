export default function Skills() {
  return (
    <section
      id="skills"
      className="rounded-3xl bg-white/5 border border-white/10 p-8"
    >
      <h2 className="text-3xl font-bold mb-6">Skills</h2>

      <div className="grid md:grid-cols-3 gap-6 text-slate-300">
        <div>
          <h3 className="text-cyan-300 font-semibold mb-2">Automation</h3>
          Selenium, Java, TestNG, JUnit, Mabl
        </div>

        <div>
          <h3 className="text-cyan-300 font-semibold mb-2">DevOps</h3>
          Jenkins, Git, CI/CD, Maven, BrowserStack
        </div>

        <div>
          <h3 className="text-cyan-300 font-semibold mb-2">API / Data</h3>
          Postman, SQL, ETL, BigQuery, Validation
        </div>
      </div>
    </section>
  );
}