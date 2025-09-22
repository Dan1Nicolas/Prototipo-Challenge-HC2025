import type { cardIntegrantes } from "../interface/CardTypes";

export default function CardIntegrantes({nome, rm, turma, foto}:cardIntegrantes) {
  return (
    <>
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <img
          src={foto}
          alt="Integrante"
          className="w-32 h-32 rounded-full object-cover object-[0_30%] mx-auto"
        />
        <h4 className="text-xl font-semibold">{nome}</h4>
        <p className="text-gray-400">RM: {rm}</p>
        <p className="text-gray-400">Turma: {turma}</p>
      </div>  
    </>
  );
}
