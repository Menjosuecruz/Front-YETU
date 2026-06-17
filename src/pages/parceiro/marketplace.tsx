import { Bell, Search, Settings, UserRound } from 'lucide-react';
export default function ParceiroMarketplace() {
    return (
        <main className="marketplace-page">
            <header className="marketplace-topbar">
                <strong>Yetu Hub Marketplace</strong>

                <div className="marketplace-topbar-actions">
                    <div className="marketplace-topbar-search">
                        <input type="search" placeholder="Pesquisar no marketplace..." />
                        <Search size={16} />
                    </div>

                    <button type="button" aria-label="Notificações">
                        <Bell size={17} />
                    </button>

                    <button type="button" aria-label="Configurações">
                        <Settings size={17} />
                    </button>

                    <span className="marketplace-avatar">
                        <UserRound size={17} />
                    </span>
                </div>
            </header>
            <header className="marketplace-header">
                <div>
                    <h1>Benefícios Exclusivos para Membros do Hub</h1>
                    <p>
                        Acesse condições especiais, descontos e consultorias gratuitas com os parceiros estratégicos que ajudam a escalar o seu negócio.
                    </p>
                </div>

                <input type="search" placeholder="Buscar parceiro ou serviço..." />
            </header>

            <section className="marketplace-filters" aria-label="Categorias do marketplace">
                <button className="active" type="button">Todos</button>
                <button type="button">Jurídico</button>
                <button type="button">Marketing</button>
                <button type="button">Contabilidade</button>
                <button type="button">Software SaaS</button>
            </section>

            <section className="marketplace-section-heading">
                <h2>Parceiros em Destaque</h2>
                <p>Serviços, benefícios e soluções estratégicas disponíveis para membros do Hub.</p>
            </section>

            <section className="marketplace-content">
                <article className="featured-benefit-card">
                    <div className="benefit-image large" />

                    <div className="benefit-info">
                        <span className="benefit-category">Software SaaS</span>
                        <h2>SaaS CRM Premium</h2>
                        <p>
                            Ganhe consultoria de vendas, automação de funil e relatórios em tempo real. A plataforma ideal para escalar sua operação comercial com inteligência de dados.
                        </p>

                        <div className="benefit-highlight">
                            <strong>3 meses grátis</strong>
                            <span>Válido para novos assinantes do Hub de Crescimento.</span>
                        </div>

                        <button type="button">Resgatar Benefício</button>
                    </div>
                </article>

                <article className="benefit-card">
                    <div className="benefit-card-header">
                        <span className="benefit-icon">⚖</span>
                        <span className="benefit-badge">Premium</span>
                    </div>

                    <h3>Contabilidade Digital</h3>
                    <p>Contabilidade & Fiscal</p>

                    <div className="benefit-highlight small">
                        <strong>20% de desconto</strong>
                    </div>

                    <button type="button">Ver detalhes</button>
                </article>

                <article className="benefit-card">
                    <div className="benefit-card-header">
                        <span className="benefit-icon">§</span>
                    </div>

                    <h3>Consultoria Jurídica</h3>
                    <p>Revisão contratual e societária</p>

                    <div className="benefit-highlight small">
                        <strong>Primeira reunião gratuita</strong>
                    </div>

                    <button type="button">Ver detalhes</button>
                </article>

                <article className="benefit-card">
                    <div className="benefit-image small" />

                    <h3>Agência Growth Pro</h3>
                    <p>Marketing Digital</p>

                    <span className="benefit-description">
                        Auditoria gratuita da estratégia paga e SEO para membros ativos.
                    </span>

                    <button type="button">Saber mais</button>
                </article>

                <article className="benefit-card">
                    <div className="benefit-card-header">
                        <span className="benefit-icon">☁</span>
                    </div>

                    <h3>Cloud Infrastructure</h3>
                    <p>Software SaaS</p>

                    <span className="benefit-description">
                        Créditos de infraestrutura para startups early-stage.
                    </span>

                    <button type="button">Saber mais</button>
                </article>

                <article className="benefit-card">
                    <div className="benefit-card-header">
                        <span className="benefit-icon">💳</span>
                    </div>

                    <h3>Gateway de Pagamentos</h3>
                    <p>Fintech</p>

                    <span className="benefit-description">
                        Taxas mais competitivas em pagamentos online.
                    </span>

                    <button type="button">Saber mais</button>
                </article>
            </section>

            <section className="business-opportunities">
                <div className="marketplace-section-heading">
                    <h2>Oportunidades de Negócio</h2>
                    <p>Conexões abertas para parceiros que desejam oferecer serviços, soluções ou colaboração estratégica.</p>
                </div>

                <div className="opportunities-list">
                    <article className="business-opportunity-card">
                        <span>Startup em crescimento</span>
                        <h3>Loja de Informática João</h3>
                        <p>Busca parceiro para expansão de e-commerce, automação comercial e suporte técnico recorrente.</p>

                        <div>
                            <strong>Necessidade</strong>
                            <small>Marketing, tecnologia e operações</small>
                        </div>

                        <button type="button">Ver oportunidade</button>
                    </article>

                    <article className="business-opportunity-card">
                        <span>Programa corporativo</span>
                        <h3>Hub Retail Angola</h3>
                        <p>Procura consultorias e fornecedores para apoiar pequenos negócios no setor de varejo.</p>

                        <div>
                            <strong>Perfil ideal</strong>
                            <small>Jurídico, contabilidade e formação</small>
                        </div>

                        <button type="button">Ver oportunidade</button>
                    </article>

                    <article className="business-opportunity-card">
                        <span>Parceria estratégica</span>
                        <h3>Fintech Pagamentos+</h3>
                        <p>Aberta a parceiros que possam integrar soluções de pagamento, onboarding e suporte ao cliente.</p>

                        <div>
                            <strong>Objetivo</strong>
                            <small>Integração comercial e tecnológica</small>
                        </div>

                        <button type="button">Ver oportunidade</button>
                    </article>
                </div>
            </section>

            <section className="partner-cta">
                <div>
                    <h2>Quer se tornar um parceiro?</h2>
                    <p>
                        Exponha seus serviços para uma rede qualificada de investidores e fundadores.
                        Cadastre sua solução e conecte-se com empresas em crescimento.
                    </p>
                </div>

                <button type="button">Seja um Sponsor</button>
            </section>
            <footer className="marketplace-footer">
                <div>
                    <h3>Hub</h3>
                    <p>O maior ecossistema de crescimento colaborativo da América Latina.</p>
                </div>

                <nav>
                    <div>
                        <h4>Categorias</h4>
                        <a href="#juridico">Jurídico</a>
                        <a href="#marketing">Marketing</a>
                        <a href="#software">Software</a>
                    </div>

                    <div>
                        <h4>Institucional</h4>
                        <a href="#termos">Termos de Uso</a>
                        <a href="#privacidade">Privacidade</a>
                        <a href="#faq">FAQ</a>
                    </div>

                    <div>
                        <h4>Contato</h4>
                        <p>suporte@hubcrescimento.com.br</p>
                        <p>0800 123 4567</p>
                    </div>
                </nav>

                <span>© 2024 Hub de Crescimento Colaborativo. Todos os direitos reservados.</span>
            </footer>
        </main>
    );
}
