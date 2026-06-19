import { useState, type FormEvent } from 'react';
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
import { useAuth } from '../../hooks/useAuth';

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
  const isEntrepreneur = accountType === 'empreendedor';
  const isInvestor = accountType === 'investidor';
  const isPartner = accountType === 'parceiro';
  const content = registerContent[accountType];

  // 1. Estados para os campos do formulário
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    organization: '',
    profileType: '',
    password: '',
    confirmPassword: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const register = useAuth((state) => state.register); // Assumindo que você adicionou register ao hook

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.password || !formData.organization) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    setIsLoading(true);
    try {
      // 2. Monta o payload conforme a estrutura do seu banco
      await register({
        ...formData,
        role: accountType.toUpperCase(),
        accountType: formData.profileType // ex: 'ideia', 'anjo', etc
      });

      onRegisterSuccess();
    } catch (error: any) {
      // Isso mostrará exatamente o que o backend reclamou
      console.error("Detalhes do Erro:", error.response?.data);
      alert("Erro ao criar conta: " + JSON.stringify(error.response?.data?.message || "Erro desconhecido"));
    } finally {
      setIsLoading(false);
    }
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

          <form className="login-form register-form" onSubmit={handleSubmit}>
            <Slides className="auth-field-motion" direction="up" offset={12} delay={0.18}>
              <div className="form-grid">
                <label>
                  Nome completo
                  <span>
                    <User size={17} />
                    <input type="text" name="name" placeholder="Seu nome" autoComplete="name" onChange={handleInputChange} />
                  </span>
                </label>

                <label>
                  Telefone
                  <span>
                    <Phone size={17} />
                    <input type="tel" name="phone" placeholder="+244 900 000 000" autoComplete="tel" onChange={handleInputChange} />
                  </span>
                </label>
              </div>

              <label>
                Email
                <span>
                  <Mail size={17} />
                  <input type="email" name="email" placeholder="seu@email.com" autoComplete="email" onChange={handleInputChange} />
                </span>
              </label>

              <label>
                {content.organizationLabel}
                <span>
                  <Building size={17} />
                  <input type="text" name="organization" placeholder={content.organizationPlaceholder} autoComplete="organization" onChange={handleInputChange} />
                </span>
              </label>

              <label>
                {content.profileLabel}
                <span>
                  <BriefcaseBusiness size={17} />
                  <select defaultValue="" name="profileType" onChange={handleInputChange}>
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
                    <input type="password" name="password" placeholder="Crie uma senha" autoComplete="new-password" onChange={handleInputChange} />
                  </span>
                </label>

                <label>
                  Confirmar senha
                  <span>
                    <Lock size={17} />
                    <input type="password" name="confirmPassword" placeholder="Repita a senha" autoComplete="new-password" onChange={handleInputChange} />
                  </span>
                </label>
              </div>

              <label className="terms-row">
                <input type="checkbox" />
                Aceito os termos de uso e a política de privacidade do Yetu Hub.
              </label>
            </Slides>

            <button className="login-submit" type="submit" disabled={isLoading}>
              {isLoading ? 'Criando...' : `Criar conta como ${content.submitLabel}`}
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
