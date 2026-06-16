import { 
    Bell, 
    Search, 
    UserRound, 
    Grid2X2, 
    Handshake, 
    BookOpen, 
    FileText, 
    Settings, 
    LogOut,
    MessageCircle,
    BarChart3,
    CheckCircle,
    AlertCircle,
    Plus
} from 'lucide-react'

export default function InvestidorDashboard() {
  return (
    <div className="investidor-dashboard-wrapper">
      <main className="investidor-dashboard">
        <aside className="dashboard-sidebar">
          <div className="sidebar-header">
            <h2>Hub Colaborativo</h2>
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

          <nav className="sidebar-nav">
            <a className="nav-item active" href="#visao-geral">
              <Grid2X2 size={18} /> Visão Geral
            </a>
            <a className="nav-item" href="#matches">
              <Handshake size={18} /> Matches
            </a>
            <a className="nav-item" href="#portfolio">
              <FileText size={18} /> Portfólio
            </a>
            <a className="nav-item" href="#explorar">
              <BookOpen size={18} /> Explorar Oportunidades
            </a>
            <a className="nav-item" href="#preferencias">
              <Settings size={18} /> Preferências
            </a>
            <a className="nav-item" href="#mensagens">
              <MessageCircle size={18} /> Mensagens
            </a>
            <a className="nav-item" href="#relatorios">
              <BarChart3 size={18} /> Relatórios
            </a>
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
              <h1>Painel do Investidor</h1>
            </div>
            <div className="header-search">
              <input type="text" placeholder="Buscar startups..." />
              <Search size={18} />
            </div>
            <button type="button" className="notification-btn" aria-label="Notificações">
              <Bell size={18} />
              <span className="notification-dot"></span>
            </button>
          </header>

          <div className="dashboard-grid">
            <div className="main-content">
              <div className="overview-cards">
                <article className="card">
                  <span>PATRIMÔNIO ALOCADO</span>
                  <strong>480,000kz</strong>
                  <p>📈 +12,4% este ano</p>
                </article>
                <article className="card">
                  <span>STARTUPS ATIVAS</span>
                  <strong>06</strong>
                  <p>⚡ Todas 100% Verificadas</p>
                </article>
                <article className="card">
                  <span>PRÓXIMO MATCH</span>
                  <strong>Loja do João</strong>
                  <p>85% de compatibilidade</p>
                </article>
              </div>

              <section className="preferences-section">
                <div className="section-header">
                  <strong>Suas Preferências</strong>
                  <button type="button" className="edit-btn">✏️ Editar</button>
                </div>
                <div className="preferences-content">
                  <div className="preferences-item">
                    <span className="icon">🏢</span>
                    <div>
                      <strong>Setores</strong>
                      <p>Tech & Commerce</p>
                    </div>
                  </div>
                  <div className="preferences-item">
                    <span className="icon">💰</span>
                    <div>
                      <strong>Ticket Médio</strong>
                      <p>20,000kz - 100,000kz</p>
                    </div>
                  </div>
                  <div className="preferences-item">
                    <span className="icon">📍</span>
                    <div>
                      <strong>Região</strong>
                      <p>Brasil (Nacional)</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="matches-section">
                <div className="section-header">
                  <strong>Oportunidades de Match</strong>
                  <button type="button" className="view-all-btn">Ver todos</button>
                </div>

                <article className="match-card">
                  <div className="match-header">
                    <div className="match-badges">
                      <span className="badge verified">✓ Empresa Verificada</span>
                      <strong className="badge match-badge">85% MATCH</strong>
                    </div>
                  </div>
                  <h2>Loja de Informática do João</h2>
                  <p>Expansão de infraestrutura para e-commerce e nova unidade física em polo tecnológico.</p>
                  <div className="match-details">
                    <div>
                      <small>NECESSIDADE</small>
                      <span>80,000kz</span>
                    </div>
                    <div>
                      <small>ROI ESPERADO</small>
                      <span>18% a.a.</span>
                    </div>
                    <div>
                      <small>EQUITY</small>
                      <span>5% - 8%</span>
                    </div>
                  </div>
                  <div className="match-actions">
                    <button type="button" className="btn-primary">Interesse em Investir</button>
                    <button type="button" className="btn-secondary">Ver Detalhes</button>
                  </div>
                </article>

                <article className="match-card">
                  <div className="match-header">
                    <div className="match-badges">
                      <span className="badge verified">✓ Empresa Verificada</span>
                      <strong className="badge match-badge">72% MATCH</strong>
                    </div>
                  </div>
                  <h2>Gourmet Tech Soluções</h2>
                  <p>SaaS para gestão de restaurantes • Match: 72%</p>
                  <div className="match-details">
                    <div>
                      <small>NECESSIDADE</small>
                      <span>45,000kz</span>
                    </div>
                    <div>
                      <small>ROI ESPERADO</small>
                      <span>16% a.a.</span>
                    </div>
                    <div>
                      <small>EQUITY</small>
                      <span>3% - 6%</span>
                    </div>
                  </div>
                  <div className="match-actions">
                    <button type="button" className="btn-secondary">Interesse em Investir</button>
                    <button type="button" className="btn-secondary">Ver Detalhes</button>
                  </div>
                </article>
              </section>
            </div>

            <aside className="sidebar-right">
              <section className="investment-box">
                <h3>Por que investir aqui?</h3>
                <div className="investment-items">
                  <div className="investment-item">
                    <CheckCircle size={16} />
                    <div>
                      <strong>Status Verificado</strong>
                      <p>Utilize histórico de 48h em financeiro dos fundadores</p>
                    </div>
                  </div>
                  <div className="investment-item">
                    <MessageCircle size={16} />
                    <div>
                      <strong>Sistema de Suporte</strong>
                      <p>Acompanhamos a jornada de crescimento para garantir o êxito sem alocação</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="performance-section">
                <h3>PERFORMANCE GLOBAL</h3>
                <div className="performance-chart">
                  <div className="chart-bar">
                    <div className="bar-item">JAN</div>
                    <div className="bar-item">FEV</div>
                    <div className="bar-item">MAR</div>
                    <div className="bar-item">ABR</div>
                    <div className="bar-item" style={{height: '80%'}}>MAI</div>
                  </div>
                </div>
              </section>

              <section className="help-section">
                <div className="help-icon">❓</div>
                <p>Dúvidas sobre o processo?</p>
                <small>Fale com um consultor de investimentos</small>
                <button type="button" className="chat-btn">Iniciar Chat</button>
              </section>
            </aside>
          </div>
        </section>

        <button className="float-chat-btn" aria-label="Chat">
          <Plus size={24} />
        </button>
      </main>

      <footer className="dashboard-footer">
        <div className="footer-content">
          <div>
            <h3>Hub de Crescimento Colaborativo</h3>
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
              <p>suporte@hubcrescimento.com</p>
              <p>0800 123 4567</p>
            </div>
          </nav>
        </div>
        <p className="copyright">© 2024 Hub de Crescimento Colaborativo. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}
