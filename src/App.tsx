import { useEffect, useState, type JSX } from 'react';
import { useAuth } from './hooks/useAuth';
import { LoadingScreen } from './components/LoadingScreen';
import RegisterForm from './pages/login/register.form';
import LoginForm from './pages/login/login.form';
import ParceiroMarketplace from './pages/parceiro/marketplace';
import InvestidorDashboard from './pages/investidor/dashboard';
import EmpreendedorDashboard from './pages/empreendedor/dashboard';
import LandingPage from './pages/home/landingPage';
import { AccessDenied } from './components/AccessDenied';
// ... seus imports de páginas

// 1. Definições de Tipos e Rotas (externas ao componente para limpar o App)
type View = 'landing' | 'login' | 'register' | 'marketplace' | 'empreendedor-dashboard' | 'investidor-dashboard' | 'parceiro-marketplace';
type AccountType = 'empreendedor' | 'investidor' | 'parceiro';

const routes: Record<View, string> = {
  landing: '/', login: '/login', register: '/register', marketplace: '/marketplace',
  'empreendedor-dashboard': '/empreendedor/dashboard',
  'investidor-dashboard': '/investidor/dashboard',
  'parceiro-marketplace': '/parceiro/marketplace',
};

const getViewFromPath = (pathname: string): View =>
  (Object.keys(routes) as View[]).find(key => routes[key] === pathname) || 'landing';

export default function App() {
  const [view, setView] = useState<View>(() => getViewFromPath(window.location.pathname));
  const [accountType, setAccountType] = useState<AccountType>('empreendedor');

  const { isAuthenticated, isInitialized, setInitialized, user } = useAuth();

  // 2. Efeitos de Inicialização
  useEffect(() => { setInitialized(); }, [setInitialized]);

  useEffect(() => {
    const handlePopState = () => setView(getViewFromPath(window.location.pathname));
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // 3. Funções de Navegação
  const navigateTo = (nextView: View) => {
    window.history.pushState({}, '', routes[nextView]);
    setView(nextView);
  };

  const handleLoginSuccess = () => {
    const dashboardMap: Record<AccountType, View> = {
      empreendedor: 'empreendedor-dashboard',
      investidor: 'investidor-dashboard',
      parceiro: 'parceiro-marketplace'
    };
    navigateTo(dashboardMap[accountType]);
  };

  if (!isInitialized) return <LoadingScreen />;

  // 4. Componente de Proteção (Integrado)
  const ProtectedRoute = ({ children, requiredRole }: { children: JSX.Element, requiredRole: string }) => {
    if (!isAuthenticated) return <LoginForm accountType={accountType} onAccountTypeChange={setAccountType} onLoginSuccess={handleLoginSuccess} onBack={() => navigateTo('landing')} onRegister={() => navigateTo('register')} />;
    // Dentro da sua ProtectedRoute no App.tsx
    const userRole = user?.role?.toUpperCase();
    const required = requiredRole.toUpperCase();


    if (userRole !== required) {
      return <AccessDenied onBack={() => navigateTo('landing')} />;
    }
    return children;
  };

  // 5. Renderização Condicional Limpa
  const renderView = () => {
    switch (view) {
      case 'empreendedor-dashboard':
        return <ProtectedRoute requiredRole="ENTREPRENEUR"><EmpreendedorDashboard /></ProtectedRoute>;
      case 'investidor-dashboard':
        return <ProtectedRoute requiredRole="INVESTOR"><InvestidorDashboard /></ProtectedRoute>;
      case 'parceiro-marketplace':
        return <ProtectedRoute requiredRole="PARTNER"><ParceiroMarketplace /></ProtectedRoute>;
      case 'login':
        return <LoginForm accountType={accountType} onAccountTypeChange={setAccountType} onBack={() => navigateTo('landing')} onRegister={() => navigateTo('register')} onLoginSuccess={handleLoginSuccess} />;
      case 'register':
        return <RegisterForm accountType={accountType} onAccountTypeChange={setAccountType} onBack={() => navigateTo('landing')} onLogin={() => navigateTo('login')} onRegisterSuccess={() => navigateTo('login')} />;
      case 'marketplace':
        return <ParceiroMarketplace showTopbar={false} />;
      default:
        return <LandingPage onLogin={() => navigateTo('login')} onMarketplace={() => navigateTo('marketplace')} onRegister={() => { setAccountType('empreendedor'); navigateTo('register'); }} />;
    }
  };

  return <>{renderView()}</>;
}