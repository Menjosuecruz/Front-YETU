import { useState, type FormEvent } from 'react';
import { ArrowLeft, Handshake, Landmark, Lock, Mail, Rocket } from 'lucide-react';
import { Fade, Slide, Slides } from '../../components/animate-ui/effects';
import { useAuth } from '../../hooks/useAuth'; // Importe seu hook criado anteriormente

type AccountType = 'empreendedor' | 'investidor' | 'parceiro';

type LoginFormProps = {
  accountType: AccountType;
  onAccountTypeChange: (type: AccountType) => void;
  onBack: () => void;
  onRegister: () => void;
  onLoginSuccess: () => void;
};

export default function LoginForm({
  accountType,
  onAccountTypeChange,
  onBack,
  onRegister,
  onLoginSuccess,
}: LoginFormProps) {
  // 1. Estados para capturar os inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // 2. Ação de login vinda do seu hook Zustand
  const login = useAuth((state) => state.login);

  const isEntrepreneur = accountType === 'empreendedor';
  const isInvestor = accountType === 'investidor';
  const isPartner = accountType === 'parceiro';

  const introText = {
    empreendedor: 'Acompanhe sua jornada, mentorias e oportunidades de investimento.',
    investidor: 'Analise startups verificadas, relatórios e oportunidades do seu portfólio.',
    parceiro: 'Gerencie conexões, programas e oportunidades estratégicas com o ecossistema.',
  }[accountType];

  const accountLabel = {
    empreendedor: 'Empreendedor',
    investidor: 'Investidor',
    parceiro: 'Parceiro',
  }[accountType];

  // 3. Função de envio real
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      // Conectando com a sua API via Hook
      await login({ email, password, role: accountType.toUpperCase() });
      onLoginSuccess();
    } catch (error) {
      console.error("Erro no login:", error);
      alert("Credenciais inválidas. Verifique os dados.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="login-page animate-ui-auth">
      <Slide className="auth-back-motion" direction="right" offset={14}>
        <button className="back-button animate-ui-auth-back" type="button" onClick={onBack}>
          <ArrowLeft size={18} /> Voltar para landing
        </button>
      </Slide>

      <Fade className="auth-card-motion" delay={0.08}>
        <section className="login-card animate-ui-auth-card" aria-labelledby="login-title">
          <div className="login-intro">
            <h1 className="loginBrand">Yetu Hub</h1>
            <h2 id="login-title">Entre na sua conta</h2>
            <span>{introText}</span>
          </div>

          <div className="account-switch animate-ui-auth-switch">
            {/* Mantive o seu design de botões de troca de conta */}
            <button className={isEntrepreneur ? 'selected' : ''} type="button" onClick={() => onAccountTypeChange('empreendedor')}><Rocket size={16} /> Empreendedor</button>
            <button className={isInvestor ? 'selected' : ''} type="button" onClick={() => onAccountTypeChange('investidor')}><Landmark size={16} /> Investidor</button>
            <button className={isPartner ? 'selected' : ''} type="button" onClick={() => onAccountTypeChange('parceiro')}><Handshake size={16} /> Parceiro</button>
          </div>

          <form className="login-form animate-ui-auth-fields" onSubmit={handleSubmit}>
            <Slides className="auth-field-motion" direction="up" offset={12} delay={0.18}>
              <label>
                Email
                <span>
                  <Mail size={17} />
                  <input 
                    type="email" 
                    placeholder="seu@email.com" 
                    autoComplete="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </span>
              </label>

              <label>
                Senha
                <span>
                  <Lock size={17} />
                  <input 
                    type="password" 
                    placeholder="Digite sua senha" 
                    autoComplete="current-password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </span>
              </label>

              <div className="form-row">
                <label className="remember-row"><input type="checkbox" /> Lembrar-me</label>
                <a href="#recuperar">Esqueci a senha</a>
              </div>
            </Slides>

            <button className="login-submit" type="submit" disabled={isLoading}>
              {isLoading ? 'Entrando...' : `Entrar como ${accountLabel}`}
            </button>
          </form>

          <p className="signup-note">
            Ainda não faz parte do Hub?{' '}
            <button className="inline-action" type="button" onClick={onRegister}>Criar conta</button>
          </p>
        </section>
      </Fade>
    </main>
  );
}