import { useState } from 'react';
import LoginForm from './pages/login/login.form';
import RegisterForm from './pages/login/register.form';
import LandingPage from './pages/home/landingPage';
import EmpreendedorDashboard from './pages/empreendedor/dashboard';

type View = 'landing' | 'login' | 'register';
type AccountType = 'empreendedor' | 'investidor';

export default function App() {
  const [view, setView] = useState<View>('landing');
  const [accountType, setAccountType] = useState<AccountType>('empreendedor');
  const showDashboardOnly = false; // Deixe true para mostrar a dashboard diretamente (para testes).

  if (showDashboardOnly) {
    return <EmpreendedorDashboard />;
  }

  if (view === 'login') {
    return (
      <LoginForm
        accountType={accountType}
        onAccountTypeChange={setAccountType}
        onBack={() => setView('landing')}
        onRegister={() => setView('register')}
      />
    );
  }

  if (view === 'register') {
    return (
      <RegisterForm
        accountType={accountType}
        onAccountTypeChange={setAccountType}
        onBack={() => setView('landing')}
        onLogin={() => setView('login')}
      />
    );
  }

  return (
    <LandingPage
      onLogin={() => setView('login')}
      onRegister={() => {
        setAccountType('empreendedor');
        setView('register');
      }}
    />
  );
}
