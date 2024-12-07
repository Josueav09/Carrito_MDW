// import { useEffect } from "react";

// function HomePage() {
//   useEffect(() => {
//     // Redirige al enlace externo
//     window.location.href = "https://josueav09.github.io/LandingPage_MDW/";
//   }, []);

//   return (
//     <div>
//       <h1>Redirigiendo a la página principal...</h1>
//     </div>
//   );
// }

// export default HomePage;

// function HomePage() {
//   return (
//     <div>
//       <h1>Bienvenido a HomePage</h1>
//       <p>
//         Visita nuestra página principal aquí:{" "}
//         <a href="https://josueav09.github.io/LandingPage_MDW/" target="_blank" rel="noopener noreferrer">
//           LandingPage_MDW
//         </a>
//       </p>
//     </div>
//   );
// }

// export default HomePage;

import React, { useEffect } from "react";

function HomePage() {
  useEffect(() => {
    // Estilos globales para el body
    document.body.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    document.body.style.backgroundColor = "#ffe4e1";
    document.body.style.color = "#333";
  }, []);

  return (
    <div>
      {/* Encabezado */}
      <header style={{ backgroundColor: "#ff69b4", padding: "20px", textAlign: "center", color: "#fff" }}>
        <h1>Bienvenido a HomePage</h1>
      </header>

      {/* Contenido */}
      <div style={{ padding: "20px", backgroundColor: "#fff", textAlign: "center" }}>
        <h2 style={{ color: "#ff1493", fontWeight: "bold", fontSize: "24px" }}>Visita nuestra página principal</h2>
        <p style={{ color: "#333", fontSize: "18px" }}>
          Encuentra más información y explora nuestra plataforma aquí:{" "}
          <a
            href="https://josueav09.github.io/LandingPage_MDW/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#ff1493", textDecoration: "none", fontWeight: "bold" }}
          >
            LandingPage_MDW
          </a>
        </p>
      </div>


    </div>
  );
}

export default HomePage;
