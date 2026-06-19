import { Ban } from "lucide-react";

export function AccessDenied({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 text-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-sm w-full">
        <span className="flex items-center justify-center text-red-600 p-2 rounded-full"><Ban/></span>
        <h2 className="text-2xl font-bold text-red-600 mb-2">Acesso Negado</h2>
        <p className="text-gray-600 mb-6">
          Você não tem permissão para acessar esta área específica.
        </p>
        <button 
          onClick={onBack}
          className="w-full bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors font-medium"
        >
          Voltar para onde estava
        </button>
      </div>
    </div>
  );
}