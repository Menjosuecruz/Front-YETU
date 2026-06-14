import {
    Bell,
    BookOpen,
    BriefcaseBusiness,
    FileText,
    Grid2X2,
    Handshake,
    LogOut,
    Search,
    Settings,
    UserRound,
} from 'lucide-react';

export default function EmpreendedorDashboard() {
    return (
        <main className="empreendedor-dashboard">
            <header className="dashboard-header">
                <strong>Hub de Crescimento Colaborativo</strong>

                <nav>
                    <a href="#empreendedores">Empreendedores</a>
                    <a href="#investidores">Investidores</a>
                    <a href="#parceiros">Parceiros</a>
                </nav>

                <div className="dashboard-header-actions">
                    <button type="button" aria-label="Pesquisar">
                        <Search size={17} />
                    </button>
                    <button type="button" aria-label="Notificações">
                        <Bell size={17} />
                    </button>
                    <span className="dashboard-avatar">
                        <UserRound size={17} />
                    </span>
                </div>
            </header>

            <div className="dashboard-layout">
                <aside className="dashboard-sidebar">
                    <div className="sidebar-company">
                        <span className="sidebar-company-icon">
                            <BriefcaseBusiness size={17} />
                        </span>

                        <div>
                            <strong>Minha Empresa</strong>
                            <span>Empreendedor</span>
                        </div>
                    </div>

                    <nav>
                        <a className="active" href="#visao-geral">
                            <Grid2X2 size={15} />
                            Visão Geral
                        </a>
                        <a href="#matches">
                            <Handshake size={15} />
                            Matches
                        </a>
                        <a href="#aprendizado">
                            <BookOpen size={15} />
                            Aprendizado
                        </a>
                        <a href="#relatorios">
                            <FileText size={15} />
                            Relatórios
                        </a>
                        <a href="#configuracoes">
                            <Settings size={15} />
                            Configurações
                        </a>
                    </nav>

                    <div className="sidebar-bottom">
                        <button type="button">Ver Oportunidades</button>

                        <div className="sidebar-support">
                            <a href="#suporte">
                                <UserRound size={14} />
                                Suporte
                            </a>
                            <a href="#sair">
                                <LogOut size={14} />
                                Sair
                            </a>
                        </div>
                    </div>
                </aside>

                <section className="dashboard-content">
                    <div className="dashboard-greeting">
                        <div>
                            <h1>Olá, João!</h1>
                            <p>Sua Loja de Informática está no caminho certo para o crescimento.</p>
                        </div>

                        <span className="verification-badge">Selo Empresa Verificada (Em análise)</span>
                    </div>

                    <div className="dashboard-overview">
                        <section className="profile-card">
                            <div className="card-title-row">
                                <h2>Completude do Perfil</h2>
                                <span>85%</span>
                            </div>

                            <div className="profile-progress">
                                <span />
                            </div>

                            <div className="profile-steps">
                                <span>Dados Básicos</span>
                                <span>Plano de Negócios</span>
                                <span>Documentação Final</span>
                            </div>
                        </section>

                        <aside className="investment-card">
                            <span>Necessidade de Investimento</span>
                            <strong>50,000Kz</strong>
                            <p>Meta para expansão de estoque</p>
                            <button type="button">Editar Detalhes</button>
                        </aside>
                    </div>

                    <section className="matches-section" id="matches">
                        <div className="section-title-row">
                            <h2>Matches Encontrados</h2>
                            <a href="#todos">Ver todos</a>
                        </div>

                        <div className="matches-grid">
                            <article className="match-card">
                                <span className="match-tag investor">Investidor</span>
                                <h3>Maria Silva</h3>
                                <p>Especialista em Varejo Tecnológico</p>
                                <button type="button">Conectar Agora</button>
                            </article>

                            <article className="match-card">
                                <span className="match-tag partner">Parceiro</span>
                                <h3>Agência Pulse Marketing</h3>
                                <p>Growth & Tráfego Pago</p>
                                <button type="button">Ver Proposta</button>
                            </article>

                            <article className="match-card">
                                <span className="match-tag partner">Parceiro</span>
                                <h3>Advocacia Lemos & Associados</h3>
                                <p>Assessoria Jurídica Empresarial</p>
                                <button type="button">Ver Proposta</button>
                            </article>
                        </div>
                    </section>
                    <section className="learning-section" id="aprendizado">
                        <div className="section-title-row">
                            <h2>Progresso de Aprendizado</h2>

                            <div className="learning-actions">
                                <button type="button" aria-label="Anterior">‹</button>
                                <button type="button" aria-label="Próximo">›</button>
                            </div>
                        </div>

                        <div className="learning-grid">
                            <article className="learning-card">
                                <div className="learning-thumbnail blue" />
                                <h3>Preparando seu pitch</h3>
                                <p>Aprenda a apresentar sua startup para investidores.</p>
                            </article>

                            <article className="learning-card">
                                <div className="learning-thumbnail green" />
                                <h3>Gestão financeira</h3>
                                <p>Organize métricas, custos e projeções do seu negócio.</p>
                            </article>

                            <article className="learning-card locked">
                                <div className="learning-thumbnail gray" />
                                <h3>Due diligence</h3>
                                <p>Conteúdo bloqueado até completar o perfil.</p>
                            </article>
                        </div>
                    </section>
                </section>
            </div>
            <footer className="dashboard-footer">
                <span>© 2024 Hub de Crescimento Colaborativo. Todos os direitos reservados.</span>

                <nav>
                    <a href="#privacidade">Privacidade</a>
                    <a href="#termos">Termos de Uso</a>
                    <a href="#contato">Contato</a>
                    <a href="#faq">FAQ</a>
                </nav>
            </footer>
        </main>
    );
}