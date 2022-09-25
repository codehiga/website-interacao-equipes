import { Play } from "phosphor-react";
import BARACK_PHOTO from "../assets/images/BARACK_OBAMA_PHOTO.png";
import MARK_PHOTO from "../assets/images/MARK_ZUCKERBERG_PHOTO.png";

export const Lideres = () => {
  const lideres = [
    {
      nome: "Mark Zuckerberg",
      descricao: `Um exemplo de liderança transformacional. Liderança transformacional é um modelo de gestão em que os líderes engajam e motivam seus colaboradores, incentivando-os a inovar e a contribuir com a empresa.
      É um tipo de liderança que constrói um forte vínculo com a cultura organizacional e assume um papel de exemplo perante os funcionários .
      `,
      foto: MARK_PHOTO,
    },
    {
      nome: "Barack Obama",
      descricao: `No cargo da presidência, é notório que ele possuía características fundamentais de um líder: a empatia e a capacidade de influenciar.
      A aptidão para se colocar no lugar do outro e de conduzir as pessoas a acreditarem em suas ideias, são atributos que formam um combo fundamental para a construção de um líder e, consequentemente, para a construção de uma boa gestão.
      `,
      foto: BARACK_PHOTO,
    },
  ];

  return (
    <div className="w-full h-full">
      <div className="min-h-[128px] w-full flex justify-center items-center">
        <h1 className="text-5xl font-extrabold">Lideres</h1>
      </div>
      <div className="w-full h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {lideres.map((lider) => (
            <div className="w-full h-full flex flex-col gap-4">
              <div className="w-full h-[300px]">
                <img
                  className="rounded-md w-full h-full object-cover object-top"
                  src={lider.foto}
                  alt=""
                />
              </div>
              <span className="w-full flex items-center gap-2">
                <Play weight="fill" />
                <h1 className="capitalize font-bold text-2xl">{lider.nome}</h1>
              </span>
              <p>{lider.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
