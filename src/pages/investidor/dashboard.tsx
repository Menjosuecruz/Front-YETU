import './dashboard.css';
import { useState } from 'react';
import {
  AlertCircle,
  BarChart3,
  Bell,
  BookOpen,
  FileText,
  Grid2X2,
  Handshake,
  LogOut,
  MessageCircle,
  Plus,
  Search,
  Settings,
  UserRound,
} from 'lucide-react';

type DashboardTab =
  | 'visao-geral'
  | 'matches'
  | 'portfolio'
  | 'oportunidades'
  | 'preferencias'
  | 'mensagens'
  | 'relatorios';

const tabs = [
  { id: 'visao-geral', label: 'Visão Geral', icon: Grid2X2 },
  { id: 'matches', label: 'Matches', icon: Handshake },
  { id: 'portfolio', label: 'Portfólio', icon: FileText },
  { id: 'oportunidades', label: 'Oportunidades', icon: BookOpen },
  { id: 'preferencias', label: 'Preferências', icon: Settings },
  { id: 'mensagens', label: 'Mensagens', icon: MessageCircle },
  { id: 'relatorios', label: 'Relatórios', icon: BarChart3 },
] satisfies Array<{ id: DashboardTab; label: string; icon: typeof Grid2X2 }>;

const matches = [
  {
    name: 'Loja de Informática do João',
    description: 'Expansão de infraestrutura para e-commerce e nova unidade física em polo tecnológico.',
    match: '85% MATCH',
    need: '80,000kz',
    roi: '18% a.a.',
    equity: '5% - 8%',
    primary: true,
  },
  {
    name: 'Gourmet Tech Soluções',
    description: 'SaaS para gestão de restaurantes com operação validada em Luanda.',
    match: '72% MATCH',
    need: '45,000kz',
    roi: '16% a.a.',
    equity: '3% - 6%',
    primary: false,
  },
];

const opportunities = [
  {
    name: 'AgroLink Angola',
    sector: 'Agrotech',
    stage: 'MVP em operação',
    description: 'Marketplace que conecta produtores rurais a compradores urbanos com logística integrada.',
    need: '120,000kz',
    roi: '20% a.a.',
    equity: '6% - 10%',
  },
  {
    name: 'Saúde Fácil',
    sector: 'Healthtech',
    stage: 'Tração inicial',
    description: 'Plataforma de marcação de consultas e teleorientação para clínicas independentes.',
    need: '95,000kz',
    roi: '17% a.a.',
    equity: '4% - 7%',
  },
  {
    name: 'EducaPro Hub',
    sector: 'Edtech',
    stage: 'Ideia validada',
    description: 'Formação profissional online focada em competências digitais para jovens talentos.',
    need: '60,000kz',
    roi: '14% a.a.',
    equity: '5% - 9%',
  },
];

function MatchCard({ match }: { match: (typeof matches)[number] }) {
  return (
    <article className="match-card">
      <div className="match-header">
        <div className="match-badges">
          <span className="badge verified">Empresa Verificada</span>
          <strong className="badge match-badge">{match.match}</strong>
        </div>
      </div>
      <h2>{match.name}</h2>
      <p>{match.description}</p>
      <div className="match-details">
        <div>
          <small>Necessidade</small>
          <span>{match.need}</span>
        </div>
        <div>
          <small>ROI esperado</small>
          <span>{match.roi}</span>
        </div>
        <div>
          <small>Equity</small>
          <span>{match.equity}</span>
        </div>
      </div>
      <div className="match-actions">
        <button type="button" className={match.primary ? 'btn-primary' : 'btn-secondary'}>
          Interesse em Investir
        </button>
        <button type="button" className="btn-secondary">
          Ver Detalhes
        </button>
      </div>
    </article>
  );
}

function ComingSoon({ title }: { title: string }) {
  return (
    <section className="coming-soon-panel">
      <span>
        <AlertCircle size={18} />
      </span>
      <h2>{title}</h2>
      <p>Esta área está em desenvolvimento e ficará disponível em breve.</p>
    </section>
  );
}

export default function InvestidorDashboard() {
  const [activeTab, setActiveTab] = useState<DashboardTab>('visao-geral');
  const activeTabLabel = tabs.find((tab) => tab.id === activeTab)?.label ?? 'Painel do Investidor';

  return (
    <div className="investidor-dashboard-wrapper">
      <main className="investidor-dashboard">
        <aside className="dashboard-sidebar">
          <div className="sidebar-header">
            <h2>Yetu Hub</h2>
          </div>

          <div className="sidebar-company">
            <div className="sidebar-company-icon">
              <UserRound size={20} />
            </div>
            <div>
              <strong>Maria Silva</strong>
              <span>Investidora</span>
            </div>
          </div>

          <nav className="sidebar-nav" aria-label="Áreas do investidor">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                className={`nav-item ${activeTab === id ? 'active' : ''}`}
                type="button"
                onClick={() => setActiveTab(id)}
              >
                <Icon size={18} /> {label}
              </button>
            ))}
          </nav>

          <div className="sidebar-footer">
            <a className="nav-item" href="#suporte">
              <AlertCircle size={18} /> Suporte
            </a>
            <a className="nav-item" href="#sair">
              <LogOut size={18} /> Sair
            </a>
          </div>
        </aside>

        <section className="dashboard-content">
          <header className="dashboard-header">
            <div>
              <h1>{activeTab === 'visao-geral' ? 'Painel do Investidor' : activeTabLabel}</h1>
            </div>
            <div className="header-search">
              <input type="text" placeholder="Buscar startups..." />
              <Search size={18} />
            </div>
            <button type="button" className="notification-btn" aria-label="Notificações">
              <Bell size={18} />
              <span className="notification-dot" />
            </button>
          </header>

          <div className="dashboard-grid">
            <div className="main-content">
              {activeTab === 'visao-geral' && (
                <section className="tab-panel">
                  <div className="overview-cards">
                    <article className="card">
                      <span>Patrimônio alocado</span>
                      <strong>480,000kz</strong>
                      <p>+12,4% este ano</p>
                    </article>
                    <article className="card">
                      <span>Startups ativas</span>
                      <strong>06</strong>
                      <p>Todas 100% verificadas</p>
                    </article>
                    <article className="card">
                      <span>Próximo match</span>
                      <strong>Loja do João</strong>
                      <p>85% de compatibilidade</p>
                    </article>
                  </div>

                  <section className="preferences-section">
                    <div className="section-header">
                      <strong>Resumo das Preferências</strong>
                      <button type="button" className="edit-btn" onClick={() => setActiveTab('preferencias')}>
                        Editar
                      </button>
                    </div>
                    <div className="preferences-content">
                      <div className="preferences-item">
                        <span className="preference-icon">TC</span>
                        <div>
                          <strong>Setores</strong>
                          <p>Tech & Commerce</p>
                        </div>
                      </div>
                      <div className="preferences-item">
                        <span className="preference-icon">TM</span>
                        <div>
                          <strong>Ticket Médio</strong>
                          <p>20,000kz - 100,000kz</p>
                        </div>
                      </div>
                      <div className="preferences-item">
                        <span className="preference-icon">AO</span>
                        <div>
                          <strong>Região</strong>
                          <p>Angola</p>
                        </div>
                      </div>
                    </div>
                  </section>
                </section>
              )}

              {activeTab === 'matches' && (
                <section className="matches-section tab-panel">
                  <div className="section-header">
                    <strong>Matches Encontrados</strong>
                    <button type="button" className="view-all-btn" onClick={() => setActiveTab('oportunidades')}>
                      Ver oportunidades
                    </button>
                  </div>
                  {matches.map((match) => (
                    <MatchCard key={match.name} match={match} />
                  ))}
                </section>
              )}

              {activeTab === 'oportunidades' && (
                <section className="opportunities-section tab-panel">
                  <div className="section-header">
                    <strong>Startups para Investir</strong>
                    <button type="button" className="view-all-btn">
                      Filtrar
                    </button>
                  </div>

                  <div className="opportunity-grid">
                    {opportunities.map((startup) => (
                      <article className="opportunity-card" key={startup.name}>
                        <div className="opportunity-card-header">
                          <span>{startup.sector}</span>
                          <strong>{startup.stage}</strong>
                        </div>
                        <h2>{startup.name}</h2>
                        <p>{startup.description}</p>
                        <div className="opportunity-metrics">
                          <div>
                            <small>Necessidade</small>
                            <span>{startup.need}</span>
                          </div>
                          <div>
                            <small>ROI</small>
                            <span>{startup.roi}</span>
                          </div>
                          <div>
                            <small>Equity</small>
                            <span>{startup.equity}</span>
                          </div>
                        </div>
                        <button type="button" className="btn-primary">
                          Analisar Investimento
                        </button>
                      </article>
                    ))}
                  </div>
                </section>
              )}

              {activeTab === 'portfolio' && <ComingSoon title="Portfólio" />}
              {activeTab === 'preferencias' && <ComingSoon title="Preferências" />}
              {activeTab === 'mensagens' && <ComingSoon title="Mensagens" />}
              {activeTab === 'relatorios' && <ComingSoon title="Relatórios" />}
            </div>
          </div>
        </section>
        <button className="float-chat-btn" type="button" aria-label="Chat">
          <Plus size={24} />
        </button>
      </main>

      <footer className="dashboard-footer">
        <div className="footer-content">
          <div>
            <h3>Yetu Hub</h3>
            <p>Transformando conexões em capital e sonhos em empresas escaláveis através da transparência e colaboração.</p>
          </div>
          <nav className="footer-nav">
            <div>
              <h4>Links Rápidos</h4>
              <a href="#privacidade">Privacidade</a>
              <a href="#termos">Termos de Uso</a>
              <a href="#faq">FAQ</a>
            </div>
            <div>
              <h4>Contato</h4>
              <p>suporte@yetuhub.com</p>
              <p>0800 123 4567</p>
            </div>
          </nav>
        </div>
        <p className="copyright">© 2025 Yetu Hub. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
