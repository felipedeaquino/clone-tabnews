import Head from 'next/head';
import { useState, useEffect } from 'react';

function Home() {
  const strengths = {
    en: [
      'ETL pipelines and data modeling',
      'Scalable backend APIs',
      'Data systems for critical environments',
      'Modernizing legacy platforms',
    ],
    pt: [
      'Pipelines ETL e modelagem de dados',
      'APIs backend escaláveis',
      'Sistemas de dados para ambientes críticos',
      'Modernização de plataformas legadas',
    ],
  };

const [language, setLanguage] = useState('en-US');

useEffect(() => {
  if (typeof window === 'undefined') return;

  const saved = localStorage.getItem('language');
  if (saved) {
    setLanguage(saved);
    return;
  }

  const locale = (navigator && navigator.language) || 'en';
  const initial = locale.startsWith('pt') ? 'pt-BR' : 'en-US';
  setLanguage(initial);
  try {
    localStorage.setItem('language', initial);
  } catch (e) {
    // ignore storage errors
  }
}, []);

function toggleLanguage() {
  const next = language === 'en-US' ? 'pt-BR' : 'en-US';
  setLanguage(next);
  try {
    localStorage.setItem('language', next);
  } catch (e) {
    // ignore storage errors
  }
}

const content = {
  en: {
    title: "Hi, I'm Felipe.",
    lead: "I design reliable data systems and backend solutions that balance \
            performance, clarity, and long-term maintainability.",
    about: "I bring experience building resilient systems for high-volume \
              environments, with a strong foundation in data engineering, API development, \
              and system refactoring.",
    aboutTitle: "About",
    strengthsTitle: "Core Strengths",
    button: "Connect on LinkedIn",
    eyebrow: "Data Engineer • Backend Developer • ML Enthusiast"
  },
  pt: {
    title: "Olá, eu sou Felipe.",
    lead: "Eu projeto sistemas de dados confiáveis e soluções backend que equilibram \
            desempenho, clareza e manutenibilidade a longo prazo.",
    about: "Tenho experiência em construir sistemas resilientes para ambientes de alto volume, \
            com uma forte fundação em engenharia de dados, desenvolvimento de APIs e refatoração de sistemas.",
    aboutTitle: "Sobre",
    strengthsTitle: "Áreas de Atuação",
    button: "Conecte-se no LinkedIn",
    eyebrow: "Engenheiro de Dados • Desenvolvedor Backend • Entusiasta de ML"
  }
};

  const langKey = language && language.startsWith('pt') ? 'pt' : 'en';

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#07111f" />
      </Head>

      <div className="page">
        <main className="card">
          <div className="card-header">
            <p className="eyebrow">{content[langKey].eyebrow}</p>
            <button
              type="button"
              className="language-toggle"
              onClick={toggleLanguage}
              aria-label="Toggle language"
              title="Toggle language"
            >
              {language === 'en-US' ? 'EN' : 'PT'}
            </button>
          </div>

          <section className="hero">
            <div className="hero-content">
              <h1>{content[langKey].title}</h1>
              <p className="lead">{content[langKey].lead}</p>

              <div className="actions">
                <a
                  href="https://www.linkedin.com/in/felipe-puziol-de-aquino/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {content[langKey].button}
                </a>
              </div>
            </div>

            <div className="photo-rect" role="img" aria-label="Photo">
              <img src="/eu.jpg" alt="Profile" className="profile-photo desktop-photo" />
              <img src="/eu_h.jpg" alt="Profile" className="profile-photo mobile-photo" />
            </div>
          </section>

          <section className="content-grid">
            <article>
              <h2>{content[langKey].aboutTitle}</h2>
              <p>{content[langKey].about}</p>
            </article>

            <article>
              <h2>{content[langKey].strengthsTitle}</h2>
              <ul>
                {(strengths[langKey] || strengths.en).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </section>
        </main>
      </div>

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
          width: min(940px, 55%);
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(18px);
          border-radius: 24px;
          padding: 50px 30px;
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
          max-width: 520px;
        }

        .actions {
          margin-top: 24px;
        }

        .actions a {
          display: inline-block;
          padding: 12px 18px;
          border-radius: 999px;
          background: #7dd3fc;
          color: #06111f;
          text-decoration: none;
          font-weight: 600;

          transition:
            transform .35s ease,
            box-shadow .35s ease,
            background .35s ease;
        }

        .actions a:hover {
          transform: translateY(-4px) scale(1.04);

          background: #9be3ff;

          box-shadow:
            0 10px 30px rgba(125,211,252,.45),
            0 0 18px rgba(125,211,252,.35);
        }

        .actions a:active {
          transform: translateY(-1px) scale(.98);
        }

        .content-grid {
          margin-top: 32px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

        article {
          background: rgba(255,255,255,.04);
          border-radius: 18px;
          padding: 20px;
          border: 1px solid rgba(255,255,255,.08);

          transition:
            transform .35s ease,
            border-color .35s ease,
            background .35s ease,
            box-shadow .35s ease;
        }

        article:hover {
          transform: translateY(-6px);

          background: rgba(125,211,252,.08);

          border-color: rgba(125,211,252,.45);

          box-shadow:
            0 20px 40px rgba(0,0,0,.18),
            0 0 18px rgba(125,211,252,.20);

          backdrop-filter: blur(25px);
        }

        article h2 {
          transition: color .3s ease;
        }

        article:hover h2 {
          color: #7dd3fc;
        }

        article p,
        article li {
          transition: color .3s ease;
        }

        article:hover p,
        article:hover li {
          color: #eef8ff;
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
          .page {
            padding: 0;
            place-items: stretch;
          }

          .card {
            width: 100%;
            min-height: 100dvh;
            padding: 16px 12px 20px;
            border-radius: 0;
          }

          .content-grid {
            grid-template-columns: 1fr;
          }
        }

        .card {
          position: relative;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
          flex-wrap: nowrap;
        }

        .language-toggle {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(15px);
          cursor: pointer;
          transition: 0.3s;
          margin-left: auto;
          flex: 0 0 auto;
        }

        .language-toggle:hover {
          background: rgba(125, 211, 252, 0.12);
          border-color: #7dd3fc;
        }

        .hero {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .hero-content {
          flex: 1;
          min-width: 0;
        }

        .photo-rect {
          width: 160px;
          height: 200px;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.02);
          flex: 0 0 auto;
        }

        .profile-photo {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          background: rgba(6, 17, 31, 0.04);
        }

        .desktop-photo { display: block; }
        .mobile-photo { display: none; }

        @media (max-width: 700px) {
          .hero {
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: stretch;
            justify-content: space-between;
          }

          .hero-content {
            flex: 1 1 auto;
            min-height: 0;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 8px;
          }

          .photo-rect {
            width: min(100%, 220px);
            height: auto;
            aspect-ratio: 4 / 5;
            margin: 0 auto;
            align-self: center;
            border: none;
          }

          .desktop-photo { display: none; }
          .mobile-photo { display: block; height: 100%; object-fit: cover; }

          .card-header {
            flex-wrap: wrap;
            gap: 6px;
            margin-bottom: 8px;
            align-items: center;
          }

          .eyebrow {
            white-space: normal;
            overflow: visible;
            text-overflow: unset;
            margin: 0;
          }

          .language-toggle {
            margin-left: 0;
            margin-top: 0;
          }

          .content-grid {
            gap: 10px;
          }

          .content-grid article {
            aspect-ratio: auto;
            min-height: auto;
            padding: 12px;
          }

          .actions {
            display: flex;
            justify-content: flex-start;
          }

          .actions a {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}

export default Home;
