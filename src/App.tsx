import { useEffect, useState } from 'react';
import LoginForm from './pages/login/login.form';
import RegisterForm from './pages/login/register.form';
import LandingPage from './pages/home/landingPage';
import EmpreendedorDashboard from './pages/empreendedor/dashboard';
import InvestidorDashboard from './pages/investidor/dashboard';

type View = 'landing' | 'login' | 'register' | 'empreendedor-dashboard' | 'investidor-dashboard';
type AccountType = 'empreendedor' | 'investidor';

const routes: Record<View, string> = {
  landing: '/',
  login: '/login',
  register: '/register',
  'empreendedor-dashboard': '/empreendedor/dashboard',
  'investidor-dashboard': '/investidor/dashboard',
};

function getViewFromPath(pathname: string): View {
  if (pathname === routes.login) {
    return 'login';
  }

  if (pathname === routes.register) {
    return 'register';
  }

  if (pathname === routes['empreendedor-dashboard']) {
    return 'empreendedor-dashboard';
  }

  if (pathname === routes['investidor-dashboard']) {
    return 'investidor-dashboard';
  }

  return 'landing';
}

export default function App() {
  const [view, setView] = useState<View>(() => getViewFromPath(window.location.pathname));
  const [accountType, setAccountType] = useState<AccountType>('empreendedor');

  useEffect(() => {
    const handlePopState = () => {
      setView(getViewFromPath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const navigateTo = (nextView: View) => {
    window.history.pushState({}, '', routes[nextView]);
    setView(nextView);
  };

  const openDashboard = (type: AccountType) => {
    navigateTo(type === 'empreendedor' ? 'empreendedor-dashboard' : 'investidor-dashboard');
  };

  if (view === 'empreendedor-dashboard') {
    return <EmpreendedorDashboard />;
  }

  if (view === 'investidor-dashboard') {
    return <InvestidorDashboard />;
  }

  if (view === 'login') {
    return (
      <LoginForm
        accountType={accountType}
        onAccountTypeChange={setAccountType}
        onBack={() => navigateTo('landing')}
        onRegister={() => navigateTo('register')}
      />
    );
  }

  if (view === 'register') {
    return (
      <RegisterForm
        accountType={accountType}
        onAccountTypeChange={setAccountType}
        onBack={() => navigateTo('landing')}
        onLogin={() => navigateTo('login')}
        onRegisterSuccess={() => openDashboard(accountType)}
      />
    );
  }

  return (
    <LandingPage
      onLogin={() => navigateTo('login')}
      onRegister={() => {
        setAccountType('empreendedor');
        navigateTo('register');
      }}
    />
  );
}
