import { ArrowLeft, Landmark, Lock, Mail, Rocket } from 'lucide-react';
import { Fade, Slide, Slides } from '../../components/animate-ui/effects';

type AccountType = 'empreendedor' | 'investidor';

type LoginFormProps = {
  accountType: AccountType;
  onAccountTypeChange: (type: AccountType) => void;
  onBack: () => void;
  onRegister: () => void;
};

export default function LoginForm({ accountType, onAccountTypeChange, onBack, onRegister }: LoginFormProps) {
  const isEntrepreneur = accountType === 'empreendedor';

  return (
    <main className="login-page animate-ui-auth">
      <Slide className="auth-back-motion" direction="right" offset={14}>
        <button className="back-button animate-ui-auth-back" type="button" onClick={onBack}>
          <ArrowLeft size={18} />
          Voltar para landing
        </button>
      </Slide>

      <Fade className="auth-card-motion" delay={0.08}>
        <section className="login-card animate-ui-auth-card" aria-labelledby="login-title">
        <div className="login-intro">
          <h1 className="loginBrand">
            Yetu Hub
          </h1>
          <h2 id="login-title">Entre na sua conta</h2>
          <span>
            {isEntrepreneur
              ? 'Acompanhe sua jornada, mentorias e oportunidades de investimento.'
              : 'Analise startups verificadas, relatórios e oportunidades do seu portfólio.'}
          </span>
        </div>

        <div className="account-switch animate-ui-auth-switch" aria-label="Tipo de login">
          <button
            className={isEntrepreneur ? 'selected' : ''}
            type="button"
            onClick={() => onAccountTypeChange('empreendedor')}
          >
            <Rocket size={16} />
            Empreendedor
          </button>
          <button
            className={!isEntrepreneur ? 'selected' : ''}
            type="button"
            onClick={() => onAccountTypeChange('investidor')}
          >
            <Landmark size={16} />
            Investidor
          </button>
        </div>

        <form className="login-form animate-ui-auth-fields">
          <Slides className="auth-field-motion" direction="up" offset={12} delay={0.18}>
            <label>
              Email
              <span>
                <Mail size={17} />
                <input type="email" placeholder="seu@email.com" autoComplete="email" />
              </span>
            </label>

            <label>
              Senha
              <span>
                <Lock size={17} />
                <input type="password" placeholder="Digite sua senha" autoComplete="current-password" />
              </span>
            </label>

            <div className="form-row">
              <label className="remember-row">
                <input type="checkbox" />
                Lembrar-me
              </label>
              <a href="#recuperar">Esqueci a senha</a>
            </div>
          </Slides>

          <button className="login-submit" type="submit">
            Entrar como {isEntrepreneur ? 'Empreendedor' : 'Investidor'}
          </button>
        </form>

        <p className="signup-note">
          Ainda não faz parte do Hub?{' '}
          <button className="inline-action" type="button" onClick={onRegister}>
            Criar conta
          </button>
        </p>
        </section>
      </Fade>
    </main>
  );
}
