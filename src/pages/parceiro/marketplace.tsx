import { useState } from 'react';

import {
    BarChart3,
    Bell,
    BookOpen,
    BriefcaseBusiness,
    Grid2X2,
    Handshake,
    LogOut,
    Search,
    Settings,
    UserRound,
} from 'lucide-react';

type ParceiroMarketplaceProps = {
    showTopbar?: boolean;
};

type ParceiroTab = 'visao-geral' | 'negocios' | 'marketplace' | 'conexoes' | 'perfil' | 'relatorios';

const parceiroTabs: Array<{
    id: ParceiroTab;
    label: string;
    icon: typeof Grid2X2;
}> = [
    { id: 'visao-geral', label: 'Visão Geral', icon: Grid2X2 },
    { id: 'negocios', label: 'Negócios que precisam de parceria', icon: Handshake },
    { id: 'marketplace', label: 'Marketplace', icon: BookOpen },
    { id: 'conexoes', label: 'Conexões', icon: BriefcaseBusiness },
    { id: 'perfil', label: 'Perfil', icon: UserRound },
    { id: 'relatorios', label: 'Relatórios', icon: BarChart3 },
];

const partnershipNeeds = [
    {
        tag: 'Startup em crescimento',
        name: 'Loja de Informática João',
        description: 'Busca parceiro para expansão de e-commerce, automação comercial e suporte técnico recorrente.',
        need: 'Marketing, tecnologia e operações',
    },
    {
        tag: 'Programa corporativo',
        name: 'Hub Retail Angola',
        description: 'Procura consultorias e fornecedores para apoiar pequenos negócios no setor de varejo.',
        need: 'Jurídico, contabilidade e formação',
    },
    {
        tag: 'Parceria estratégica',
        name: 'Fintech Pagamentos+',
        description: 'Aberta a parceiros para integração de pagamentos, onboarding e suporte ao cliente.',
        need: 'Integração comercial e tecnológica',
    },
];

const marketplaceBenefits = [
    {
        name: 'SaaS CRM Premium',
        category: 'Software SaaS',
        description: 'Consultoria de vendas, automação de funil e relatórios em tempo real para empresas em crescimento.',
        benefit: '3 meses grátis',
    },
    {
        name: 'Contabilidade Digital',
        category: 'Fiscal',
        description: 'Organização contábil e fiscal para membros do ecossistema que precisam ganhar escala.',
        benefit: '20% de desconto',
    },
    {
        name: 'Agência Growth Pro',
        category: 'Marketing',
        description: 'Auditoria de mídia paga, SEO e posicionamento para negócios com tração comercial.',
        benefit: 'Diagnóstico gratuito',
    },
];

function EmptyPartnerPanel({ title }: { title: string }) {
    return (
        <section className="dashboard-empty-state">
            <h2>{title}</h2>
            <p>Esta área está em desenvolvimento e ficará disponível em breve.</p>
        </section>
    );
}

export default function ParceiroMarketplace({ showTopbar = true }: ParceiroMarketplaceProps) {
    const [activeTab, setActiveTab] = useState<ParceiroTab>('visao-geral');
    const activeLabel = parceiroTabs.find((tab) => tab.id === activeTab)?.label ?? 'Parceiro';

    return (
        <main className="empreendedor-dashboard parceiro-dashboard">
            {showTopbar && (
                <header className="dashboard-header">
                    <strong>Yetu Hub Parceiros</strong>

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
            )}

            <div className="dashboard-layout">
                <aside className="dashboard-sidebar">
                    <div className="sidebar-company">
                        <span className="sidebar-company-icon">
                            <BriefcaseBusiness size={17} />
                        </span>

                        <div>
                            <strong>Yetu Partners</strong>
                            <span>Parceiro</span>
                        </div>
                    </div>

                    <nav aria-label="Áreas do parceiro">
                        {parceiroTabs.map(({ id, label, icon: Icon }) => (
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
                            <a href="#configuracoes">
                                <Settings size={14} />
                                Configurações
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
                            <h1>{activeTab === 'visao-geral' ? 'Painel do Parceiro' : activeLabel}</h1>
                            <p>Gerencie oportunidades de parceria, benefícios e conexões com negócios em crescimento.</p>
                        </div>
                    </div>

                    {activeTab === 'visao-geral' && (
                        <>
                            <div className="overview-cards partner-overview">
                                <article className="card">
                                    <span>Parcerias abertas</span>
                                    <strong>18</strong>
                                    <p>5 com alta compatibilidade</p>
                                </article>
                                <article className="card">
                                    <span>Benefícios ativos</span>
                                    <strong>09</strong>
                                    <p>Serviços publicados no marketplace</p>
                                </article>
                                <article className="card">
                                    <span>Novas conexões</span>
                                    <strong>12</strong>
                                    <p>Últimos 30 dias</p>
                                </article>
                            </div>

                            <section className="partners-highlight">
                                <div>
                                    <span>Próxima melhor ação</span>
                                    <strong>Responder às empresas que precisam de parceria operacional</strong>
                                </div>
                                <button type="button" onClick={() => setActiveTab('negocios')}>
                                    Ver negócios
                                </button>
                            </section>
                        </>
                    )}

                    {activeTab === 'negocios' && (
                        <section className="business-opportunities">
                            <div className="section-title-row">
                                <h2>Negócios que Precisam de Parceria</h2>
                                <a href="#filtros">Filtrar</a>
                            </div>

                            <div className="opportunities-list">
                                {partnershipNeeds.map((item) => (
                                    <article className="business-opportunity-card" key={item.name}>
                                        <span>{item.tag}</span>
                                        <h3>{item.name}</h3>
                                        <p>{item.description}</p>
                                        <div>
                                            <strong>Necessidade</strong>
                                            <small>{item.need}</small>
                                        </div>
                                        <button type="button">Ver oportunidade</button>
                                    </article>
                                ))}
                            </div>
                        </section>
                    )}

                    {activeTab === 'marketplace' && (
                        <section className="marketplace-section">
                            <div className="section-title-row">
                                <h2>Marketplace de Serviços</h2>
                                <a href="#novo-servico">Publicar serviço</a>
                            </div>

                            <div className="business-grid">
                                {marketplaceBenefits.map((item) => (
                                    <article className="business-card" key={item.name}>
                                        <span>{item.category}</span>
                                        <h3>{item.name}</h3>
                                        <p>{item.description}</p>
                                        <strong>{item.benefit}</strong>
                                        <button type="button">Ver detalhe</button>
                                    </article>
                                ))}
                            </div>
                        </section>
                    )}

                    {activeTab === 'conexoes' && <EmptyPartnerPanel title="Conexões" />}

                    {activeTab === 'perfil' && (
                        <section className="profile-section">
                            <div className="section-title-row">
                                <h2>Perfil do Parceiro</h2>
                                <a href="#editar">Editar</a>
                            </div>

                            <div className="profile-info-grid">
                                <article className="profile-card">
                                    <div className="card-title-row">
                                        <h2>Yetu Partners</h2>
                                        <span>Verificado</span>
                                    </div>
                                    <p>Fornecedor estratégico para serviços de tecnologia, growth e operação comercial.</p>
                                </article>
                                <article className="profile-card">
                                    <div className="card-title-row">
                                        <h2>Preferências</h2>
                                    </div>
                                    <p>Busca empresas com tração, necessidades claras e abertura para parceria recorrente.</p>
                                </article>
                            </div>
                        </section>
                    )}

                    {activeTab === 'relatorios' && <EmptyPartnerPanel title="Relatórios" />}
                </section>
            </div>
        </main>
    );
}
