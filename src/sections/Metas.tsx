import { ArrowElbowDownRight } from "phosphor-react";
import { alunos } from "./SobreNos";

export const Metas = () => {
  return (
    <div className="w-full h-auto">
      <div className="min-h-[128px] w-full flex justify-center items-center">
        <h1 className="text-5xl font-extrabold">Metas</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {alunos.map((aluno) => (
          <div className="flex flex-col gap-4">
            <span className="w-full">
              <h1 className="capitalize font-bold text-2xl">{aluno.nome}</h1>
            </span>

            <div className="flex flex-col gap-2">
              <b className="text-xl uppercase">
                Gráficos meta dominancia cerebral
              </b>
              <span className="w-full h-auto flex justify-center items-center">
                <img
                  className="w-full h-full object-cover object-center"
                  src={aluno.meta}
                />
              </span>
            </div>

            <ul>
              {aluno.metas_pontos.map((meta) => (
                <li className="flex items-center gap-2 ">
                  <ArrowElbowDownRight weight="fill" />
                  <b className="w-full">{meta}</b>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
