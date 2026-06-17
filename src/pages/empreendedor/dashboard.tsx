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

type DashboardTab =
    | 'visao-geral'
    | 'matches'
    | 'marketplace'
    | 'parceiros'
    | 'aprendizado'
    | 'perfil'
    | 'relatorios'
    | 'configuracoes';

const sidebarTabs: Array<{
    id: DashboardTab;
    label: string;
    icon: typeof Grid2X2;
}> = [
    { id: 'visao-geral', label: 'Visão Geral', icon: Grid2X2 },
    { id: 'matches', label: 'Matches', icon: Handshake },
    { id: 'marketplace', label: 'Marketplace', icon: BookOpen },
    { id: 'parceiros', label: 'Parceiros', icon: BriefcaseBusiness },
    { id: 'aprendizado', label: 'Aprendizado', icon: BookOpen },
    { id: 'perfil', label: 'Perfil', icon: UserRound },
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

                            <section className="dashboard-tab-summary" aria-label="Resumo das áreas do empreendedor">
                                <button type="button" className="summary-card" onClick={() => setActiveTab('matches')}>
                                    <span>Matches</span>
                                    <strong>3 conexões novas</strong>
                                    <p>Investidores e parceiros com alta compatibilidade para o seu negócio.</p>
                                </button>

                                <button type="button" className="summary-card" onClick={() => setActiveTab('marketplace')}>
                                    <span>Marketplace</span>
                                    <strong>12 negócios e ofertas</strong>
                                    <p>Explore empresas, fornecedores e oportunidades que podem gerar sinergia.</p>
                                </button>

                                <button type="button" className="summary-card" onClick={() => setActiveTab('parceiros')}>
                                    <span>Parceiros</span>
                                    <strong>4 recomendações</strong>
                                    <p>Serviços estratégicos para vendas, jurídico, finanças e operação.</p>
                                </button>

                                <button type="button" className="summary-card" onClick={() => setActiveTab('aprendizado')}>
                                    <span>Aprendizado</span>
                                    <strong>2 módulos em aberto</strong>
                                    <p>Conteúdos para melhorar pitch, gestão financeira e preparação para investimento.</p>
                                </button>

                                <button type="button" className="summary-card" onClick={() => setActiveTab('perfil')}>
                                    <span>Perfil</span>
                                    <strong>85% completo</strong>
                                    <p>Complete dados, plano de negócios e documentação para aumentar visibilidade.</p>
                                </button>

                                <button type="button" className="summary-card" onClick={() => setActiveTab('relatorios')}>
                                    <span>Relatórios</span>
                                    <strong>Performance em breve</strong>
                                    <p>Acompanhe métricas, evolução das conexões e progresso do negócio.</p>
                                </button>

                                <button type="button" className="summary-card" onClick={() => setActiveTab('configuracoes')}>
                                    <span>Configurações</span>
                                    <strong>Preferências da conta</strong>
                                    <p>Ajuste notificações, dados de acesso e preferências da plataforma.</p>
                                </button>
                            </section>
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

                    {activeTab === 'marketplace' && (
                        <section className="marketplace-section" id="marketplace">
                            <div className="section-title-row">
                                <h2>Marketplace de Negócios</h2>
                                <a href="#filtros">Filtrar</a>
                            </div>

                            <div className="business-grid">
                                <article className="business-card">
                                    <span>Negócio em expansão</span>
                                    <h3>AgroLink Angola</h3>
                                    <p>Marketplace agrícola procurando conexões comerciais, parceiros logísticos e fornecedores regionais.</p>
                                    <button type="button">Ver negócio</button>
                                </article>

                                <article className="business-card">
                                    <span>Possível parceiro</span>
                                    <h3>KambaPay</h3>
                                    <p>Fintech com soluções de cobrança que podem apoiar lojas em crescimento e negócios digitais.</p>
                                    <button type="button">Analisar sinergia</button>
                                </article>

                                <article className="business-card">
                                    <span>Fornecedor recomendado</span>
                                    <h3>SolarCasa</h3>
                                    <p>Empresa de energia modular aberta a revendedores, instaladores e canais comerciais locais.</p>
                                    <button type="button">Ver oportunidade</button>
                                </article>
                            </div>
                        </section>
                    )}

                    {activeTab === 'parceiros' && (
                        <section className="partners-section" id="parceiros">
                            <div className="section-title-row">
                                <h2>Parceiros Estratégicos</h2>
                                <a href="#todos-parceiros">Ver todos</a>
                            </div>

                            <div className="partners-highlight">
                                <div>
                                    <span>Recomendado para o seu momento</span>
                                    <strong>Priorize parceiros de vendas, jurídico e operações</strong>
                                </div>
                                <button type="button">Solicitar curadoria</button>
                            </div>

                            <div className="partners-grid">
                                <article className="partner-card">
                                    <span className="partner-category">Fiscal</span>
                                    <h3>Contabilidade Prime</h3>
                                    <p>Contabilidade, organização fiscal e fechamento de contas para empresas que precisam manter a operação em dia.</p>
                                    <button type="button">Solicitar Consultoria</button>
                                </article>

                                <article className="partner-card">
                                    <span className="partner-category">Financeiro</span>
                                    <h3>Consultoria Fiscal Expert</h3>
                                    <p>Planejamento tributário, apoio financeiro e orientação para reduzir riscos e melhorar resultados.</p>
                                    <button type="button">Ver Oferta</button>
                                </article>

                                <article className="partner-card">
                                    <span className="partner-category">Jurídico</span>
                                    <h3>Suporte Jurídico Empresarial</h3>
                                    <p>Assessoria em contratos, compliance e estruturação jurídica para proteger o negócio em crescimento.</p>
                                    <button type="button">Entrar em Contato</button>
                                </article>

                                <article className="partner-card">
                                    <span className="partner-category">Growth</span>
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

                    {activeTab === 'perfil' && (
                        <section className="profile-section" id="perfil">
                            <div className="section-title-row">
                                <h2>Perfil do Empreendedor</h2>
                                <a href="#editar-perfil">Editar</a>
                            </div>

                            <div className="profile-info-grid">
                                <article className="profile-card">
                                    <div className="card-title-row">
                                        <h2>Minha Empresa</h2>
                                        <span>85%</span>
                                    </div>
                                    <p>Loja de Informática com foco em venda, suporte técnico e expansão de e-commerce.</p>
                                </article>

                                <article className="profile-card">
                                    <div className="card-title-row">
                                        <h2>Objetivo atual</h2>
                                    </div>
                                    <p>Captar investimento e parceiros para estoque, marketing e automação comercial.</p>
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
