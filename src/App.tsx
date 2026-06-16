import { useEffect, useState } from 'react';
import LoginForm from './pages/login/login.form';
import RegisterForm from './pages/login/register.form';
import LandingPage from './pages/home/landingPage';
import EmpreendedorDashboard from './pages/empreendedor/dashboard';
import InvestidorDashboard from './pages/investidor/dashboard';
import ParceiroMarketplace from './pages/parceiro/marketplace';

type View = 'landing' | 'login' | 'register' | 'empreendedor-dashboard' | 'investidor-dashboard' | 'parceiro-marketplace';
type AccountType = 'empreendedor' | 'investidor' | 'parceiro';

const routes: Record<View, string> = {
  landing: '/',
  login: '/login',
  register: '/register',
  'empreendedor-dashboard': '/empreendedor/dashboard',
  'investidor-dashboard': '/investidor/dashboard',
  'parceiro-marketplace': '/parceiro/marketplace',
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

  if (pathname === routes['parceiro-marketplace']) {
    return 'parceiro-marketplace';
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
    if (type === 'empreendedor') {
      navigateTo('empreendedor-dashboard');
      return;
    }

    if (type === 'investidor') {
      navigateTo('investidor-dashboard');
      return;
    }

    navigateTo('parceiro-marketplace');
  };

  if (view === 'empreendedor-dashboard') {
    return <EmpreendedorDashboard />;
  }

  if (view === 'investidor-dashboard') {
    return <InvestidorDashboard />;
  }

  if (view === 'parceiro-marketplace') {
    return <ParceiroMarketplace />;
  }

  if (view === 'login') {
    return (
      <LoginForm
        accountType={accountType}
        onAccountTypeChange={setAccountType}
        onBack={() => navigateTo('landing')}
        onRegister={() => navigateTo('register')}
        onLoginSuccess={() => openDashboard(accountType)}
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
