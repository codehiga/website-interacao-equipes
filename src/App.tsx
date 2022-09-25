import { Lideres } from "./sections/Lideres";
import { Metas } from "./sections/Metas";
import { SobreNos } from "./sections/SobreNos";

export const App = () => {
  return (
    <div className="h-full w-full ">
      <div className="w-full min-h-[256px] bg-slate-900 text-3xl md:text-6xl uppercase font-black flex justify-center items-center flex-col px-4 text-center gap-4">
        <h1>ORGANIZAÇÃO E INTERAÇÃO DE EQUIPES</h1>
        <p>Avaliação 1</p>
      </div>

      <div className="w-full max-w-6xl mx-auto h-full relative px-8 md:px-4 flex flex-col gap-12">
        <SobreNos />
        <Lideres />
        <Metas />

        {/* <span className="left-[-48px] top-[-48px] absolute w-64 h-64 bg-gradient-to-r from-indigo-500 rounded-full opacity-50"></span> */}
      </div>
    </div>
  );
};
