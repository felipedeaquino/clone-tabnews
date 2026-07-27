function Home() {
  const strengths = [
    "ETL pipelines and data modeling",
    "Scalable backend APIs",
    "Data systems for critical environments",
    "Modernizing legacy platforms",
  ];

  const stack = [
    "Node.js",
    "AdonisJS",
    "NestJS",
    "PostgreSQL",
    "Python",
    "Docker",
  ];

  return (
    <div className="page">
      <main className="card">
        <section className="hero">
          <p className="eyebrow">Data Engineer • Backend Developer • ML Enthusiast</p>
          <h1>Hi, I’m Felipe.</h1>
          <p className="lead">
            I design reliable data systems and backend solutions that balance
            performance, clarity, and long-term maintainability.
          </p>

          <div className="actions">
            <a href="https://www.linkedin.com/in/felipe-puziol-de-aquino/" target="_blank" rel="noreferrer">
              Connect on LinkedIn
            </a>
          </div>
        </section>

        <section className="content-grid">
          <article>
            <h2>About</h2>
            <p>
              I bring experience building resilient systems for fintech and high-volume
              environments, with a strong foundation in data engineering, API development,
              and system refactoring.
            </p>
          </article>

          <article>
            <h2>Core strengths</h2>
            <ul>
              {strengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="stack">
          <h2>Tech focus</h2>
          <div className="chips">
            {stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>
      </main>

      <style jsx global>{`
        :root {
          color-scheme: dark;
          font-family: Inter, "Segoe UI", sans-serif;
        }

        body {
          margin: 0;
          background: linear-gradient(135deg, #07111f 0%, #132238 100%);
          color: #f5f7fb;
        }

        * {
          box-sizing: border-box;
        }

        .page {
          min-height: 100vh;
          display: grid;
          place-items: center;
          padding: 32px 20px;
        }

        .card {
          width: min(900px, 100%);
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(18px);
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 20px 60px rgba(3, 8, 20, 0.35);
        }

        .eyebrow {
          margin: 0 0 12px;
          font-size: 0.82rem;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #7dd3fc;
        }

        h1 {
          margin: 0;
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.1;
        }

        .lead {
          margin-top: 14px;
          font-size: 1.05rem;
          line-height: 1.7;
          color: #dbe4f0;
          max-width: 680px;
        }

        .actions {
          margin-top: 24px;
        }

        .actions a {
          display: inline-block;
          padding: 10px 16px;
          border-radius: 999px;
          background: #7dd3fc;
          color: #06111f;
          text-decoration: none;
          font-weight: 600;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .actions a:hover {
          transform: translateY(-1px);
          opacity: 0.95;
        }

        .content-grid {
          margin-top: 32px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

        article {
          background: rgba(255, 255, 255, 0.04);
          border-radius: 18px;
          padding: 20px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        h2 {
          margin-top: 0;
          margin-bottom: 10px;
          font-size: 1rem;
          color: #f8fafc;
        }

        p,
        li {
          color: #cbd5e1;
          line-height: 1.7;
        }

        ul {
          padding-left: 18px;
          margin: 0;
        }

        .stack {
          margin-top: 20px;
        }

        .chips {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 10px;
        }

        .chips span {
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(125, 211, 252, 0.14);
          color: #bae6fd;
          border: 1px solid rgba(125, 211, 252, 0.2);
          font-size: 0.94rem;
        }

        @media (max-width: 700px) {
          .card {
            padding: 24px;
          }

          .content-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;
