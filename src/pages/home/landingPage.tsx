import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Building2,
  Cpu,
  GraduationCap,
  Handshake,
  Landmark,
  Rocket,
  Shield,
  TrendingUp,
} from 'lucide-react';
import { Slide, Slides } from '../../components/animate-ui/effects';

type LandingPageProps = {
  onLogin: () => void;
  onMarketplace: () => void;
  onRegister: () => void;
};

export default function LandingPage({ onLogin, onMarketplace, onRegister }: LandingPageProps) {
  return (
    <main className="landing-shell">
      <header className="site-header animate-ui-navbar">
        <Slide className="brand-slot" direction="down" offset={12} delay={0.08}>
          <a className="brand" href="#home" aria-label="Yetu Hub">
            Yetu Hub
          </a>
        </Slide>

        <nav className="main-nav animate-ui-tabs" aria-label="Navegação principal">
          <Slides className="nav-motion-item" direction="down" offset={10} delay={0.14}>
            <a className="is-active" href="#empreendedores">
              Empreendedores
            </a>
            <a href="#investidores">Investidores</a>
          </Slides>
        </nav>

        <div className="header-actions">
          <button className="link-button" type="button" onClick={onLogin}>
            Entrar
          </button>
          <button className="primary-button compact" type="button" onClick={onRegister}>
            Cadastrar
          </button>
        </div>
      </header>

      <section id="home" className="hero-section">
        <div className="hero-copy">
          <span className="trust-badge">
            <BadgeCheck size={13} />
            Ecossistema Verificado
          </span>

          <h1>
            Onde o crescimento encontra o <strong>investimento certo</strong>
          </h1>

          <p>
            Conectamos startups promissoras a investidores estratégicos e parceiros corporativos
            através de uma plataforma segura, transparente e movida por dados.
          </p>

          <div className="hero-actions">
            <button className="primary-button" type="button" onClick={onRegister}>
              Começar Jornada
              <ArrowRight size={16} />
            </button>
            <a className="secondary-button" href="#investidores">
              Ver Oportunidades
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Painel de investimento em crescimento">
          <div className="dashboard-card">
            <div className="dashboard-window">
              <div className="window-bar">
                <span />
                <span />
                <span />
              </div>
              <div className="metric-column">
                <strong>261%</strong>
                <span>Tração</span>
                <i />
                <i />
              </div>
              <div className="chart-stage">
                <div className="grid-lines" />
                <div className="bar b1" />
                <div className="bar b2" />
                <div className="bar b3" />
                <div className="bar b4" />
                <div className="bar b5" />
                <svg viewBox="0 0 260 140" role="img" aria-hidden="true">
                  <path d="M8 112 C58 94 74 82 112 86 C154 90 176 42 246 22" />
                  <path d="M232 20 L248 20 L248 36" />
                </svg>
                <div className="figure person-one" />
                <div className="figure person-two" />
                <div className="figure person-three" />
              </div>
            </div>
          </div>

          <div className="floating-roi">
            <div>
              <span>Growth Green</span>
              <TrendingUp size={15} />
            </div>
            <strong>+124% ROI</strong>
            <p>Média de crescimento das startups do Hub no último semestre.</p>
          </div>
        </div>
      </section>

      <section className="section-block centered">
        <h2>Três pilares de sucesso</h2>
        <p>Soluções sob medida para cada ator do ecossistema.</p>

        <div className="pillar-grid">
          <article id="empreendedores" className="pillar-card">
            <span className="icon-bubble blue">
              <Rocket size={18} />
            </span>
            <h3>Empreendedores</h3>
            <p>
              Acesse capital inteligente, mentorias de alto nível e ferramentas para escalar seu
              negócio com segurança.
            </p>
            <ul>
              <li>Fundraising Simplificado</li>
              <li>Mentoria com Experts</li>
            </ul>
            <a href="#login" onClick={onRegister}>
              Saiba mais
              <ArrowRight size={13} />
            </a>
          </article>

          <article id="investidores" className="pillar-card highlighted">
            <span className="icon-bubble green">
              <Landmark size={18} />
            </span>
            <h3>Investidores</h3>
            <p>
              Encontre oportunidades verificadas e gerencie seu portfólio com transparência total e
              relatórios em tempo real.
            </p>
            <ul>
              <li>Due Diligence Assistida</li>
              <li>Relatórios de Performance</li>
            </ul>
            <a href="#login" onClick={onLogin}>
              Explorar Portfólio
              <ArrowRight size={13} />
            </a>
          </article>

          <article id="marketplace" className="pillar-card">
            <span className="icon-bubble purple">
              <Handshake size={18} />
            </span>
            <h3>Marketplace</h3>
            <p>
              Encontre parceiros, serviços estratégicos e oportunidades de negócio para acelerar o crescimento da sua empresa.
            </p>
            <ul>
              <li>Parceiros Verificados</li>
              <li>Oportunidades de Negócio</li>
            </ul>
            <a
              href="/marketplace"
              onClick={(event) => {
                event.preventDefault();
                onMarketplace();
              }}
            >
              Explorar Marketplace
              <ArrowRight size={13} />
            </a>
          </article>
        </div>
      </section>

      <section className="section-block technology-section">
        <div className="section-heading">
          <h2>Tecnologia que impulsiona confiança</h2>
          <p>Ferramentas avançadas para garantir o melhor match.</p>
        </div>

        <div className="tech-grid">
          <article className="ai-card">
            <Cpu className="ghost-icon" size={104} />
            <div>
              <h3>AI-powered Matching</h3>
              <p>
                Nosso algoritmo analisa mais de 50 pontos de dados para conectar startups a
                investidores que realmente compartilham da mesma visão.
              </p>
            </div>
          </article>

          <article className="learning-card">
            <span className="icon-bubble green">
              <GraduationCap size={18} />
            </span>
            <h3>Learning Hub</h3>
            <p>
              Conteúdo exclusivo e trilhas de verificação para preparar empreendedores para o
              próximo nível.
            </p>
            <div className="member-row">
              <span />
              <span />
              <span />
              <strong>+400</strong>
            </div>
            <small>Membros ativos este mês</small>
          </article>

          <article className="report-card">
            <div className="small-card-title">
              <h3>Relatórios de Transparência</h3>
              <BarChart3 size={15} />
            </div>
            <p>
              Dados auditáveis de dashboards em tempo real para acompanhar a evolução de cada aporte
              e KPI de crescimento.
            </p>
            <div className="progress-track">
              <span />
            </div>
            <div className="progress-label">
              <small>Meta Alcançada</small>
              <small>75%</small>
            </div>
          </article>

          <article className="verified-card">
            <span className="seal">
              <BadgeCheck size={28} />
            </span>
            <div>
              <h3>Selo Hub Verificado</h3>
              <p>
                Aumente suas chances de investimento em até 3x com nosso processo seguro de due
                diligence prévia.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="partners-strip" aria-label="Parceiros">
        <span>Apoiado por líderes de mercado</span>
        <div>
          <p>
            <Building2 size={18} />
            AcademiaHM
          </p>
          <p>
            <Landmark size={18} />
            LuxPartners
          </p>
          <p>
            <BarChart3 size={18} />
            AdReach
          </p>
          <p>
            <Shield size={18} />
            SecureFin
          </p>
          <p>
            <TrendingUp size={18} />
            DataFlow
          </p>
        </div>
      </section>

      <section className="final-cta">
        <div className="cta-panel">
          <h2>Pronto para transformar o futuro?</h2>
          <p>
            Junte-se a centenas de empresas e investidores que já estão co-criando o próximo
            capítulo da inovação global.
          </p>
          <div>
            <button className="green-button" type="button" onClick={onRegister}>
              Fazer Parte do Hub
            </button>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-grid">
          <div>
            <h3>Hub de Crescimento</h3>
            <p>Plataforma líder em matchmaking estratégico para investimentos e inovação corporativa.</p>
          </div>
          <div>
            <h4>Plataforma</h4>
            <a href="#home">Como funciona</a>
            <a href="#empreendedores">Para Startups</a>
            <a href="#investidores">Para Investidores</a>
          </div>
          <div>
            <h4>Recursos</h4>
            <a href="#home">Learning Hub</a>
            <a href="#home">Blog & News</a>
            <a href="#home">FAQ</a>
          </div>
          <div>
            <h4>Legal</h4>
            <a href="#home">Privacidade</a>
            <a href="#home">Termos de Uso</a>
            <a href="#home">Contato</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Hub de Crescimento Colaborativo. Todos os direitos reservados.</span>
          <div>
            <span>@</span>
            <span>in</span>
            <span>◎</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
