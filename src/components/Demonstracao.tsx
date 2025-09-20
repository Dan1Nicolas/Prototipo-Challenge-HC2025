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
          <img
            src="https://dummyimage.com/250x500/2d3748/e2e8f0&text=WhatsApp+Mockup"
            alt="Mockup Celular"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
