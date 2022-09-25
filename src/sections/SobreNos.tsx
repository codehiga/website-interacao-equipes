import EDU from "../assets/images/EDU.jpg";
import HIGA from "../assets/images/HIGA.jpg";
import RAFA from "../assets/images/RAFA.jpg";

import EDU_DOMINANCIA from "../assets/images/EDU_DOMINANCIA_CEREBRAL_ATUAL.png";
import RAFA_DOMINANCIA from "../assets/images/RAFA_DOMINANCIA_CEREBRAL_ATUAL.png";

import EDU_DOMINANCIA_META from "../assets/images/EDU_DOMINANCIA_CEREBRAL_META.png";
import RAFA_DOMINANCIA_META from "../assets/images/RAFA_DOMINANCIA_CEREBRAL_META.png";

import EDU_AUDIO from "../assets/audios/EDU_AUDIO.mp3";
import RAFA_AUDIO from "../assets/audios/RAFA_AUDIO.mp3";

export const alunos = [
  {
    nome: "eduardo pereira",
    foto: EDU,
    texto: `“O Eduardo sempre foi uma pessoa bem tranquila, no quesito de
    serviços e trabalhos sempre foi uma pessoa bem ativa e mostrando seu
    lado de liderança, sempre motivando os colegas e amigos, uma pessoa
    muito comunicativa e inteligente, acredito que todos que o conhecem
    passam a gostar dele por conta da sua simpatia e carisma. Sua
    disciplina e comprometimento naquilo que gosta é muito interessante,
    sempre buscando o mais alto nível.”`,
    audio: EDU_AUDIO,
    dominancia: EDU_DOMINANCIA,
    meta: EDU_DOMINANCIA_META,
    metas_pontos: [
      "Me tornar uma pessoa mais sentimental",
      "Ser mais organizado",
      "Trabalhar mais em grupo",
      "Planejar melhor meus objetivos",
    ],
  },
  {
    nome: "henrique higa",
    foto: HIGA,
    texto: `"O Higa é uma pessoa que não apresenta muitas características de liderança apesar de chamar a responsabilidade de alguns trabalhos para ele, ele é uma pessoa que se comunica muito bem e consegue passar a linha de raciocínio para que todos que o ouvem, entendam. O comprometimento dele é de se admirar, quando ele gosta do assunto, ninguém tira o foco e a motivação dele para realizar a tarefa."
    `,
    audio: RAFA_AUDIO,
    dominancia: EDU_DOMINANCIA_META,
    meta: RAFA_DOMINANCIA,
    metas_pontos: [""],
  },
  {
    nome: "rafael guerino",
    foto: RAFA,
    texto: `"Rafa é uma pessoa muito fácil de lidar, ele trata os assuntos com seriedade e é uma pessoa muito pró-ativa nas tarefas da faculdade e isso facilita muito o trabalho em grupo. Ele não busca a liderança na maioria das vezes,mas sua forma de se comunicar sempre faz as pessoas prestarem atenção pela confiança na sua fala."`,
    audio: RAFA_AUDIO,
    dominancia: RAFA_DOMINANCIA,
    meta: RAFA_DOMINANCIA_META,
    metas_pontos: [
      "Ser mais disciplinado",
      "Estudar mais e focar na carreira",
      "Economizar dinheiro e aprender a investir",
      "Fazer cursos específicos e conhecer novas matérias",
    ],
  },
];

export const SobreNos = () => {
  return (
    <div className="w-full h-auto">
      <div className="min-h-[128px] w-full flex justify-center items-center">
        <h1 className="text-5xl font-extrabold">Sobre nós</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {alunos.map((aluno) => (
          <div className="flex flex-col gap-2">
            <div className="flex flex-col w-full h-full gap-3 items-center">
              <span className="w-full relative">
                <img
                  className="w-full rounded-md h-full object-cover"
                  src={aluno.foto}
                  alt=""
                />
                <span className="w-full absolute left-0 px-4 bottom-5 bg-gradient-to-r from-gray-700">
                  <h1 className="capitalize font-bold text-2xl">
                    {aluno.nome}
                  </h1>
                </span>
              </span>

              <span>
                <p className="text-justify">{aluno.texto}</p>
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <b className="text-xl uppercase">Gráficos dominancia cerebral</b>
              <span className="w-full h-auto flex justify-center items-center">
                <img
                  className="w-full h-full object-cover object-center"
                  src={aluno.dominancia}
                />
              </span>
            </div>

            <audio
              controls
              className="w-full"
              // className=" bg-[#0157ff] py-3 rounded-full flex justify-center items-center gap-1"
            >
              <source src={aluno.audio} />
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
};
