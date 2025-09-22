export default function Demonstracao() {
  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Demonstração Visual</h3>
          <div className="bg-gray-700 rounded-lg p-6 text-left">
            <p className="mb-2">📅 Lembrete enviado 48h antes da consulta</p>
            <p className="mb-2">📅 Lembrete enviado 24h antes da consulta</p>
            <p className="mb-2">📅 Lembrete enviado 10min antes da consulta</p>
            <p>📅 Lembrete enviado 5min antes da consulta</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-[250px] h-[500px] rounded-3xl overflow-hidden shadow-lg bg-gray-900">
            <video
              src="/src/video/whatsapp-demo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
        </div>
      </div>
      </div>
    </section>
  );
}
