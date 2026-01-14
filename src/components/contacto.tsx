import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

interface ContactForm {
  nombre: string;
  correo: string;
  mensaje: string;
}

const Contacto = () => {
  const [form, setForm] = useState<ContactForm>({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Formulario enviado:", form);
    setEnviado(true);
    setForm({ nombre: "", correo: "", mensaje: "" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f6e7d8] text-[#452921] font-serif">
      
      {/* NAVBAR */}
      <header className="w-full bg-[#212121] px-6 py-4 shadow-lg">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-wide text-[#f6e7d8]">Restaurante</h1>
          <span className="text-sm opacity-80 text-[#f6e7d8]">Contacto</span>
        </nav>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 bg-[#ffffff] rounded-xl overflow-hidden shadow-2xl">
          
          {/* IMAGEN */}
          <div className="hidden md:block">
            <img
              src="https://editorialtelevisa.brightspotcdn.com/58/eb/b537a4714c11890dfba66649ee13/flautas-transformed.jpeg"
              alt="Restaurante"
              className="h-full w-full object-cover"
            />
          </div>

          {/* FORMULARIO */}
          <div className="p-8 bg-[#f6e7d8]">
            <h2 className="text-3xl font-bold mb-2">Contáctanos</h2>
            <p className="opacity-80 mb-6">
              ¿Tienes alguna duda o comentario? Escríbenos.
            </p>

            {enviado && (
              <div className="mb-4 text-sm text-[#f6e7d8] bg-[#610901]/30 px-4 py-2 rounded">
                Mensaje enviado correctamente
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="nombre"
                placeholder="Nombre completo"
                value={form.nombre}
                onChange={handleChange}
                required
                className="w-full rounded-md bg-[#fff] px-3 py-2 text-[#452921] placeholder-[#452921]/50 focus:outline-none focus:ring-2 focus:ring-[#610901]"
              />

              <input
                type="email"
                name="correo"
                placeholder="Correo electrónico"
                value={form.correo}
                onChange={handleChange}
                required
                className="w-full rounded-md bg-[#fff] px-3 py-2 text-[#452921] placeholder-[#452921]/50 focus:outline-none focus:ring-2 focus:ring-[#610901]"
              />

              <textarea
                name="mensaje"
                placeholder="Escribe tu mensaje"
                value={form.mensaje}
                onChange={handleChange}
                rows={4}
                required
                className="w-full rounded-md bg-[#fff] px-3 py-2 text-[#452921] placeholder-[#452921]/50 focus:outline-none focus:ring-2 focus:ring-[#610901] resize-none"
              />

              <button
                type="submit"
                className="w-full rounded-md bg-[#610901] py-2 font-semibold text-[#f6e7d8] hover:brightness-110 transition"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#212121] py-4 text-center text-sm text-[#f6e7d8] opacity-80">
        © 2026 Restaurante — Página de contacto
      </footer>
    </div>
  );
};

export default Contacto;
