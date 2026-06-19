// components/ui/LoadingScreen.tsx
export function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      {/* Aqui você pode usar uma animação CSS ou seu logo animado */}
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4" />
      <span className="text-gray-500 font-medium animate-pulse">Carregando Yetu Hub...</span>
    </div>
  );
}