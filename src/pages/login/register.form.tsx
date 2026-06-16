import type { FormEvent } from 'react';
import {
  ArrowLeft,
  BriefcaseBusiness,
  Building,
  Handshake,
  Landmark,
  Lock,
  Mail,
  Phone,
  Rocket,
  User,
} from 'lucide-react';
import { Fade, Slide, Slides } from '../../components/animate-ui/effects';

type AccountType = 'empreendedor' | 'investidor' | 'parceiro';

type RegisterFormProps = {
  accountType: AccountType;
  onAccountTypeChange: (type: AccountType) => void;
  onBack: () => void;
  onLogin: () => void;
  onRegisterSuccess: () => void;
};

const registerContent = {
  empreendedor: {
    intro: 'Prepare seu perfil para captar investimento, mentorias e parceiros estratégicos.',
    organizationLabel: 'Nome da startup',
    organizationPlaceholder: 'Ex: Yetu Labs',
    profileLabel: 'Estágio do negócio',
    submitLabel: 'Empreendedor',
    options: [
      ['ideia', 'Ideia validada'],
      ['mvp', 'MVP em operação'],
      ['tracao', 'Tração inicial'],
      ['escala', 'Em escala'],
    ],
  },
  investidor: {
    intro: 'Crie seu acesso para descobrir startups verificadas e acompanhar oportunidades.',
    organizationLabel: 'Empresa ou fundo',
    organizationPlaceholder: 'Ex: Fundo Atlântico',
    profileLabel: 'Tipo de investidor',
    submitLabel: 'Investidor',
    options: [
      ['anjo', 'Investidor anjo'],
      ['vc', 'Venture capital'],
      ['corporativo', 'Corporate venture'],
      ['institucional', 'Institucional'],
    ],
  },
  parceiro: {
    intro: 'Crie seu acesso para conectar programas, serviços e iniciativas ao ecossistema Yetu Hub.',
    organizationLabel: 'Organização parceira',
    organizationPlaceholder: 'Ex: Incubadora Luanda',
    profileLabel: 'Tipo de parceria',
    submitLabel: 'Parceiro',
    options: [
      ['aceleradora', 'Aceleradora ou incubadora'],
      ['corporativo', 'Empresa corporativa'],
      ['universidade', 'Universidade ou centro de pesquisa'],
      ['servicos', 'Prestador de serviços'],
    ],
  },
} satisfies Record<
  AccountType,
  {
    intro: string;
    organizationLabel: string;
    organizationPlaceholder: string;
    profileLabel: string;
    submitLabel: string;
    options: string[][];
  }
>;

export default function RegisterForm({
  accountType,
  onAccountTypeChange,
  onBack,
  onLogin,
  onRegisterSuccess,
}: RegisterFormProps) {
  const content = registerContent[accountType];
  const isEntrepreneur = accountType === 'empreendedor';
  const isInvestor = accountType === 'investidor';
  const isPartner = accountType === 'parceiro';

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onRegisterSuccess();
  };

  return (
    <main className="login-page animate-ui-auth">
      <Slide className="auth-back-motion" direction="right" offset={14}>
        <button className="back-button animate-ui-auth-back" type="button" onClick={onBack}>
          <ArrowLeft size={18} />
          Voltar para landing
        </button>
      </Slide>

      <Fade className="auth-card-motion" delay={0.08}>
        <section className="login-card register-card animate-ui-auth-card" aria-labelledby="register-title">
          <div className="login-intro">
            <h1 className="loginBrand">Yetu Hub</h1>
            <h3 id="register-title">Criar conta</h3>
            <span>{content.intro}</span>
          </div>

          <div className="account-switch animate-ui-auth-switch" aria-label="Tipo de conta">
            <button
              className={isEntrepreneur ? 'selected' : ''}
              type="button"
              onClick={() => onAccountTypeChange('empreendedor')}
            >
              <Rocket size={16} />
              Empreendedor
            </button>
            <button
              className={isInvestor ? 'selected' : ''}
              type="button"
              onClick={() => onAccountTypeChange('investidor')}
            >
              <Landmark size={16} />
              Investidor
            </button>
            <button
              className={isPartner ? 'selected' : ''}
              type="button"
              onClick={() => onAccountTypeChange('parceiro')}
            >
              <Handshake size={16} />
              Parceiro
            </button>
          </div>

          <form className="login-form register-form animate-ui-auth-fields" onSubmit={handleSubmit}>
            <Slides className="auth-field-motion" direction="up" offset={12} delay={0.18}>
              <div className="form-grid">
                <label>
                  Nome completo
                  <span>
                    <User size={17} />
                    <input type="text" placeholder="Seu nome" autoComplete="name" />
                  </span>
                </label>

                <label>
                  Telefone
                  <span>
                    <Phone size={17} />
                    <input type="tel" placeholder="+244 900 000 000" autoComplete="tel" />
                  </span>
                </label>
              </div>

              <label>
                Email
                <span>
                  <Mail size={17} />
                  <input type="email" placeholder="seu@email.com" autoComplete="email" />
                </span>
              </label>

              <label>
                {content.organizationLabel}
                <span>
                  <Building size={17} />
                  <input type="text" placeholder={content.organizationPlaceholder} autoComplete="organization" />
                </span>
              </label>

              <label>
                {content.profileLabel}
                <span>
                  <BriefcaseBusiness size={17} />
                  <select defaultValue="">
                    <option value="" disabled>
                      Selecione uma opção
                    </option>
                    {content.options.map(([value, label]) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                </span>
              </label>

              <div className="form-grid">
                <label>
                  Senha
                  <span>
                    <Lock size={17} />
                    <input type="password" placeholder="Crie uma senha" autoComplete="new-password" />
                  </span>
                </label>

                <label>
                  Confirmar senha
                  <span>
                    <Lock size={17} />
                    <input type="password" placeholder="Repita a senha" autoComplete="new-password" />
                  </span>
                </label>
              </div>

              <label className="terms-row">
                <input type="checkbox" />
                Aceito os termos de uso e a política de privacidade do Yetu Hub.
              </label>
            </Slides>

            <button className="login-submit" type="submit">
              Criar conta como {content.submitLabel}
            </button>
          </form>

          <p className="signup-note">
            Já tem conta?{' '}
            <button className="inline-action" type="button" onClick={onLogin}>
              Entrar
            </button>
          </p>
        </section>
      </Fade>
    </main>
  );
}
