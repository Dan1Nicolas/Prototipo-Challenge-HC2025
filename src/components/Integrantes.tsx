import CardIntegrantes from "./CardIntegrante";

const integrantes = [
  {
    nome: "Daniel Nicolas Leoterio",
    rm: "562186",
    turma: "1TDSPV",
    foto: "/image/Daniel.jpg"
  },
  {
    nome: "Ana Carolina Pereira Fontes",
    rm: "562145",
    turma: "1TDSPV",
    foto: "/image/Carol.jpg"
  },
  {
    nome: "Matheus Moya de Oliveira",
    rm: "562822",
    turma: "1TDSPV",
    foto: "/image/Matheus.jpg"
  }
];

export default function Integrantes() {
  return (
    <section id="integrantes" className="py-16 bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-10">Integrantes</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {integrantes.map((item, index) => (
            <CardIntegrantes key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
