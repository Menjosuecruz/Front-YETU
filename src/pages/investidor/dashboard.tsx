export default function InvestidorDashboard() {
    return (
        <main className="investidor-dashboard">
            <header className="investor-header">
                <strong>Hub Colaborativo</strong>

                <div className="investor-search">
                    <input type="search" placeholder="Buscar startups..." />
                </div>
            </header>

            <div className="investor-layout">
                <aside className="investor-sidebar">
                    <div className="investor-profile">
                        <strong>Maria Silva</strong>
                        <span>Investidora</span>
                    </div>

                    <nav>
                        <a href="#visao-geral">Visão Geral</a>
                        <a className="active" href="#matches">Matches</a>
                        <a href="#portfolio">Portfólio</a>
                        <a href="#oportunidades">Explorar Oportunidades</a>
                        <a href="#preferencias">Preferências</a>
                        <a href="#mensagens">Mensagens</a>
                        <a href="#relatorios">Relatórios</a>
                    </nav>

                    <div className="investor-sidebar-bottom">
                        <a href="#suporte">Suporte</a>
                        <a href="#sair">Sair</a>
                    </div>
                </aside>

                <section className="investor-content">
                    <h1>Painel do Investidor</h1>
                    <div className="investor-stats">
                        <article className="investor-stat-card">
                            <span>Patrimônio Alocado</span>
                            <strong>480,000Kz</strong>
                            <p>+12.4% este ano</p>
                        </article>

                        <article className="investor-stat-card">
                            <span>Startups Ativas</span>
                            <strong>06</strong>
                            <p>Total: 100% verificadas</p>
                        </article>

                        <article className="investor-stat-card">
                            <span>Próximo Match</span>
                            <strong>Loja do João</strong>
                            <p>85% de compatibilidade</p>
                        </article>
                    </div>
                    <section className="investor-preferences" id="preferencias">
                        <div className="investor-section-title">
                            <h2>Suas Preferências</h2>
                            <a href="#editar-preferencias">Editar</a>
                        </div>

                        <div className="preference-list">
                            <span>Tech & Commerce</span>
                            <span>20,000Kz - 100,000Kz</span>
                            <span>Angola (Nacional)</span>
                        </div>
                    </section>
                </section>
            </div>
        </main>
    );
}