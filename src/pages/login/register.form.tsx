import type { FormEvent } from 'react';
import {
  ArrowLeft,
  BriefcaseBusiness,
  Building,
  Landmark,
  Lock,
  Mail,
  Phone,
  Rocket,
  User,
} from 'lucide-react';
import { Fade, Slide, Slides } from '../../components/animate-ui/effects';

type AccountType = 'empreendedor' | 'investidor';

type RegisterFormProps = {
  accountType: AccountType;
  onAccountTypeChange: (type: AccountType) => void;
  onBack: () => void;
  onLogin: () => void;
  onRegisterSuccess: () => void;
};

export default function RegisterForm({
  accountType,
  onAccountTypeChange,
  onBack,
  onLogin,
  onRegisterSuccess,
}: RegisterFormProps) {
  const isEntrepreneur = accountType === 'empreendedor';
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
          <span>
            {isEntrepreneur
              ? 'Prepare seu perfil para captar investimento, mentorias e parceiros estratégicos.'
              : 'Crie seu acesso para descobrir startups verificadas e acompanhar oportunidades.'}
          </span>
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
            className={!isEntrepreneur ? 'selected' : ''}
            type="button"
            onClick={() => onAccountTypeChange('investidor')}
          >
            <Landmark size={16} />
            Investidor
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
              {isEntrepreneur ? 'Nome da startup' : 'Empresa ou fundo'}
              <span>
                <Building size={17} />
                <input
                  type="text"
                  placeholder={isEntrepreneur ? 'Ex: Yetu Labs' : 'Ex: Fundo Atlântico'}
                  autoComplete="organization"
                />
              </span>
            </label>

            <label>
              {isEntrepreneur ? 'Estágio do negócio' : 'Tipo de investidor'}
              <span>
                <BriefcaseBusiness size={17} />
                <select defaultValue="">
                  <option value="" disabled>
                    Selecione uma opção
                  </option>
                  {isEntrepreneur ? (
                    <>
                      <option value="ideia">Ideia validada</option>
                      <option value="mvp">MVP em operação</option>
                      <option value="tracao">Tração inicial</option>
                      <option value="escala">Em escala</option>
                    </>
                  ) : (
                    <>
                      <option value="anjo">Investidor anjo</option>
                      <option value="vc">Venture capital</option>
                      <option value="corporativo">Corporate venture</option>
                      <option value="institucional">Institucional</option>
                    </>
                  )}
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
            Criar conta como {isEntrepreneur ? 'Empreendedor' : 'Investidor'}
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
