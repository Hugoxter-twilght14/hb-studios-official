export default function MisionVisionValores() {
  return (
    <section className=" text-white py-16 px-6 max-w-6xl mx-auto rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-12 uppercase">Misión, Visión y Valores</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Misión */}
        <div className="bg-[#262626] p-6 rounded-lg shadow-md hover:scale-105 transition" style={{ boxShadow: "0 0 10px rgba(0,255,255,0.2)" }}>
          <h3 className="text-xl font-semibold mb-3 text-cyan-400">Nuestra Misión</h3>
          <p className="text-gray-300 text-justify">
            "En HBStudios, nuestra misión es transformar ideas en experiencias digitales excepcionales mediante el desarrollo de aplicaciones y juegos innovadores para Android y aplicaciones web. 
            Nos comprometemos a ofrecer soluciones tecnológicas de alta calidad que enriquezcan la vida de nuestros usuarios, sean divertidas, entretenidas y que superen sus expectativas y sobre 
            todo que contribuyan al avance tecnológico de nuestra comunidad."
          </p>
        </div>

        {/* Visión */}
        <div className="bg-[#262626] p-6 rounded-lg shadow-md hover:scale-105 transition" style={{ boxShadow: "0 0 10px rgba(0,255,255,0.2)" }}>
          <h3 className="text-xl font-semibold mb-3 text-cyan-400">Nuestra Visión</h3>
          <p className="text-gray-300 text-justify">
           "Nuestra visión es ser líderes reconocidos a nivel nacional e internacional en el desarrollo de aplicaciones y juegos para Android y el desarrollo de aplicaciones web.
            Aspiramos a ser una referencia en innovación, calidad y satisfacción del usuario, fomentando un entorno donde la creatividad y la tecnología se fusionen para crear 
            productos que marquen la diferencia en la vida de las personas."
          </p>
        </div>

        {/* Valores */}
        <div className="bg-[#262626] p-6 rounded-lg shadow-md hover:scale-105 transition" style={{ boxShadow: "0 0 10px rgba(0,255,255,0.2)" }}>
          <h3 className="text-xl font-semibold mb-3 text-cyan-400">Nuestros Valores</h3>
          <ul className="text-gray-300 list-disc list-inside space-y-1 text-left">
            <li>Innovación: Promovemos la creatividad y la búsqueda constante de nuevas ideas para desarrollar productos únicos y vanguardistas.</li>
            <li>Calidad: Nos esforzamos por ofrecer productos de la más alta calidad, asegurando que cada aplicación y juego cumpla con los más altos estándares de excelencia.</li>
            <li>Pasión: Amamos lo que hacemos y esta pasión se refleja en cada proyecto que emprendemos.</li>
            <li>Integridad: Actuamos con transparencia, ética y responsabilidad en todas nuestras acciones y decisiones.</li>
            <li>Trabajo en Equipo: Fomentamos la colaboración y el respeto mutuo, valorando las contribuciones de cada miembro de nuestro equipo.</li>
            <li>Orientación al Usuario: Ponemos a nuestros usuarios en el centro de todo lo que hacemos, buscando siempre mejorar su experiencia y satisfacción.</li>
            <li>Compromiso: Nos dedicamos a cumplir con nuestras promesas y a superar las expectativas de nuestros clientes y usuarios.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
