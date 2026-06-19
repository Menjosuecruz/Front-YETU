import { useState, type FormEvent } from 'react';
import {  Lock, Mail } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export default function LoginForm({onLoginSuccess, accountType }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const login = useAuth((state) => state.login);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      console.log("Tentando logar com:", { email, role: accountType.toUpperCase() });
      await login({ 
        email, 
        password, 
        role: accountType.toUpperCase() 
      });
      
      onLoginSuccess();
    } catch (err: any) {
      console.error("Erro completo:", err);
      setError(err.response?.data?.message || "Erro ao conectar ao servidor. Verifique se o backend está rodando na porta 3000.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
      
      <label>
        Email
        <span>
          <Mail size={17} />
          <input 
            type="email" 
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
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </span>
      </label>

      <button className="login-submit" type="submit" disabled={loading}>
        {loading ? 'Carregando...' : 'Entrar'}
      </button>
    </form>
  );
}