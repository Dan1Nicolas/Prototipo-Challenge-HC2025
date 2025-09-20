import CardIntegrantes from "./CardIntegrante";

const integrantes = [
  {
    nome: "Daniel Nicolas Leoterio",
    rm: "562186",
    turma: "1TDSPV",
    foto: "https://dummyimage.com/150x150/319795/ffffff&text=Daniel"
  },
  {
    nome: "Ana Carolina Pereira Fontes",
    rm: "67890",
    turma: "1TDSPV",
    foto: "https://dummyimage.com/150x150/319795/ffffff&text=Carolina"
  },
  {
    nome: "Matheus Moya de Oliveira",
    rm: "54321",
    turma: "1TDSPV",
    foto: "https://dummyimage.com/150x150/319795/ffffff&text=Matheus"
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
