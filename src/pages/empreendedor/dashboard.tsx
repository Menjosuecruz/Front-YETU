import { useState } from 'react';

import {
    Bell,
    BookOpen,
    BriefcaseBusiness,
    ChevronLeft,
    ChevronRight,
    FileText,
    Grid2X2,
    Handshake,
    LogOut,
    Search,
    Settings,
    UserRound,
} from 'lucide-react';

type DashboardTab = 'visao-geral' | 'matches' | 'parceiros' | 'aprendizado' | 'relatorios' | 'configuracoes';

const sidebarTabs: Array<{
    id: DashboardTab;
    label: string;
    icon: typeof Grid2X2;
}> = [
    { id: 'visao-geral', label: 'Visão Geral', icon: Grid2X2 },
    { id: 'matches', label: 'Matches', icon: Handshake },
    { id: 'parceiros', label: 'Parceiros', icon: BriefcaseBusiness },
    { id: 'aprendizado', label: 'Aprendizado', icon: BookOpen },
    { id: 'relatorios', label: 'Relatórios', icon: FileText },
    { id: 'configuracoes', label: 'Configurações', icon: Settings },
];

function ComingSoonSection({ title }: { title: string }) {
    return (
        <section className="dashboard-empty-state">
            <h2>{title}</h2>
            <p>Esta área está em desenvolvimento e ficará disponível em breve.</p>
        </section>
    );
}

export default function EmpreendedorDashboard() {
    const [activeTab, setActiveTab] = useState<DashboardTab>('visao-geral');

    return (
        <main className="empreendedor-dashboard">
            <header className="dashboard-header">
                <strong>Hub de Crescimento Colaborativo</strong>

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

                    <nav aria-label="Áreas do empreendedor">
                        {sidebarTabs.map(({ id, label, icon: Icon }) => (
                            <button
                                key={id}
                                type="button"
                                className={`sidebar-nav-item ${activeTab === id ? 'active' : ''}`}
                                onClick={() => setActiveTab(id)}
                            >
                                <Icon size={15} />
                                {label}
                            </button>
                        ))}
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
                    {activeTab === 'visao-geral' && (
                        <>
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
                        </>
                    )}

                    {activeTab === 'matches' && (
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
                    )}

                    {activeTab === 'parceiros' && (
                        <section className="partners-section" id="parceiros">
                            <div className="section-title-row">
                                <h2>Parceiros de Serviços</h2>
                                <a href="#todos-parceiros">Ver todos</a>
                            </div>

                            <div className="partners-grid">
                                <article className="partner-card">
                                    <h3>Contabilidade Prime</h3>
                                    <p>Contabilidade, organização fiscal e fechamento de contas para empresas que precisam manter a operação em dia.</p>
                                    <button type="button">Solicitar Consultoria</button>
                                </article>

                                <article className="partner-card">
                                    <h3>Consultoria Fiscal Expert</h3>
                                    <p>Planejamento tributário, apoio financeiro e orientação para reduzir riscos e melhorar resultados.</p>
                                    <button type="button">Ver Oferta</button>
                                </article>

                                <article className="partner-card">
                                    <h3>Suporte Jurídico Empresarial</h3>
                                    <p>Assessoria em contratos, compliance e estruturação jurídica para proteger o negócio em crescimento.</p>
                                    <button type="button">Entrar em Contato</button>
                                </article>

                                <article className="partner-card">
                                    <h3>Marketing e Crescimento</h3>
                                    <p>Estratégias digitais, captação de clientes e posicionamento de marca para acelerar vendas.</p>
                                    <button type="button">Ver Proposta</button>
                                </article>
                            </div>
                        </section>
                    )}

                    {activeTab === 'aprendizado' && (
                        <section className="learning-section" id="aprendizado">
                            <div className="section-title-row">
                                <h2>Progresso de Aprendizado</h2>

                                <div className="learning-actions">
                                    <button type="button" aria-label="Anterior">
                                        <ChevronLeft size={18} />
                                    </button>
                                    <button type="button" aria-label="Próximo">
                                        <ChevronRight size={18} />
                                    </button>
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
                    )}

                    {activeTab === 'relatorios' && <ComingSoonSection title="Relatórios" />}
                    {activeTab === 'configuracoes' && <ComingSoonSection title="Configurações" />}
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
