import { Button } from "./_components/ui/button";

const Home = () => {
  return (
    <>
      <div className="m-8 my-8 w-full space-y-8 rounded-lg bg-white p-8">
        {/* Esquerda */}
        <div className="flex w-full items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-slate-500">
              Gestão Geral
            </span>
            <h2 className="text-xl font-semibold">Dashboard</h2>
          </div>
        </div>
        {/* Direita */}
      </div>
    </>
  );
};

export default Home;
