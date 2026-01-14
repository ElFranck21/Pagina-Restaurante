import Header from "./components/Header";

export default function App() {
  const platillos = [
    {
      id: 1,
      nombre: "Tacos al Pastor",
      descripcion: "Deliciosos tacos con carne al pastor, piña y cebolla",
      precio: "$85",
      imagen: "/tacos.jpg"
    },
    {
      id: 2,
      nombre: "Enchiladas Rojas",
      descripcion: "Enchiladas bañadas en salsa roja con queso y crema",
      precio: "$120",
      imagen: "/enchiladas.jpg"
    },
    {
      id: 3,
      nombre: "Pozole Rojo",
      descripcion: "Tradicional pozole con carne de cerdo y maíz cacahuazintle",
      precio: "$150",
      imagen: "/pozole.jpg"
    },
    {
      id: 4,
      nombre: "Chiles Rellenos",
      descripcion: "Chiles poblanos rellenos de queso, capeados y fritos",
      precio: "$110",
      imagen: "/chiles.jpg"
    },
    {
      id: 5,
      nombre: "Mole Poblano",
      descripcion: "Pollo bañado en mole poblano con ajonjolí",
      precio: "$180",
      imagen: "/mole.jpg"
    },
    {
      id: 6,
      nombre: "Cochinita Pibil",
      descripcion: "Carne de cerdo marinada en achiote, cocida en hoja de plátano",
      precio: "$160",
      imagen: "/cochinita.jpg"
    }
  ];

  return (
    <div
    className="min-h-screen bg-cover bg-center bg-fixed"
    style={{
      backgroundImage: "url('/background.jpg')"
    }}
    >
      <div className="min-h-screen bg-black/40 px-6 py-14">
    <Header />
        <div className="max-w-7xl mx-auto">

          <h1 className="text-5xl font-bold text-center mb-16 text-cream text-fuchsia-50">
            Nuestro Menú
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {platillos.map((platillo) => (
              <div
                key={platillo.id}
                className="
                  bg-[#FAF3E0]
                  rounded-2xl
                  overflow-hidden
                  shadow-xl
                  transition-transform duration-300
                  hover:-translate-y-2
                "
              >
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={platillo.imagen}
                    alt={platillo.nombre}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {platillo.nombre}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {platillo.descripcion}
                  </p>
                  <span className="text-3xl font-bold text-amber-700">
                    {platillo.precio}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
