export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center 
          text-center py-20 bg-gray-900"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Seu lembrete de teleconsulta chegou 📲
      </h2>
      <p className="text-gray-300 mb-6">
        Com apenas um clique, você acessa sua consulta online sem complicação.
      </p>
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <a
          href="https://www.hc.fm.usp.br/hc/portal"
          target="_blank"
          className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 
              rounded-lg shadow-md transition"
        >
          Entrar na Teleconsulta
        </a>
      </div>
    </section>
  );
}
