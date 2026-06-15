import { 
    Bell, 
    Search, 
    UserRound, 
    Grid2X2, 
    Handshake, 
    BookOpen, 
    FileText, 
    Settings, 
    LogOut } from 'lucide-react'

    export default function InvestidorDashboard() {

  return (

    <main className="investidor-dashboard">
      <aside className="dashboard-sidebar">
        <div className="sidebar-company">
          <span className="sidebar-icon">
            <UserRound size={17} />
          </span>
          <div>
            <strong>Maria Silva</strong>
            <span>Investidora</span>
          </div>
        </div>

        <nav>
          <a className="active" href="#visao-geral">
            <Grid2X2 size={15} /> Visão Geral
          </a>
          <a href="#matches">
            <Handshake size={15} /> Matches
          </a>
          <a href="#portfolio">
            <FileText size={15} /> Portfólio
          </a>
          <a href="#explorar">
            <BookOpen size={15} /> Explorar Oportunidades
          </a>
          <a href="#preferencias">
            <Settings size={15} /> Preferências
          </a>
        </nav>

        <div className="sidebar-footer">
          <a href="#suporte">
            <UserRound size={14} /> Suporte
          </a>
          <a href="#sair">
            <LogOut size={14} /> Sair
          </a>
        </div>
      </aside>

      <section className="dashboard-content">
        <header className="dashboard-header">
          <div>
            <h1>Painel do Investidor</h1>
            <p>Veja suas oportunidades e o próximo match.</p>
          </div>

          <div className="header-actions">
            <button type="button" aria-label="Buscar">
              <Search size={18} />
            </button>
            <button type="button" aria-label="Notificações">
              <Bell size={18} />
            </button>
          </div>
        </header>

        <div className="overview-cards">
          <article className="card">
            <strong>R$ 480k</strong>
            <p>Patrimônio Alocado</p>
          </article>
          <article className="card">
            <strong>06</strong>
            <p>Startups Ativas</p>
          </article>
          <article className="card">
            <strong>Loja do João</strong>
            <p>Próximo Match</p>
          </article>
        </div>

        <section className="preferences-section">
          <div className="section-header">
            <strong>Suas Preferências</strong>
            <button type="button">Editar</button>
          </div>

          <div className="preferences-list">
            <div>
              <strong>Setores</strong>
              <span>Tech & Commerce</span>
            </div>
            <div>
              <strong>Ticket Médio</strong>
              <span>R$ 20k - R$ 100k</span>
            </div>
            <div>
              <strong>Região</strong>
              <span>Brasil (Nacional)</span>
            </div>
          </div>
        </section>

        <section className="matches-section">
          <div className="section-header">
            <strong>Oportunidades de Match</strong>
            <button type="button">Ver todos</button>
          </div>

          <article className="match-card">
            <div className="match-card-top">
              <span>Empresa Verificada</span>
              <strong>85% MATCH</strong>
            </div>
            <h2>Loja de Informática do João</h2>
            <p>Expansão de infraestrutura para e-commerce e nova unidade física em polo tecnológico.</p>
            <div className="match-details">
              <span>Necessidade: R$ 80.000</span>
              <span>ROI: 18% a.a.</span>
              <span>Equity: 5% - 8%</span>
            </div>
            <div className="match-actions">
              <button type="button">Interesse em Investir</button>
              <button type="button">Ver Detalhes</button>
            </div>
          </article>
        </section>
      </section>
    </main>
  )
}
