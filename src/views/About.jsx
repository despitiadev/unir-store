import React from 'react';
import '../styles/About.css';

export const About = () => {
    return (
        <div className="about_container">
            <section className="about_header">
                <h1>Acerca de Nosotros</h1>
                <p>Bienvenido a nuestra tienda. Nos dedicamos a ofrecer los mejores productos y servicios para nuestros clientes.</p>
            </section>
            <section className="about_team">
                <h2>Nuestro Equipo</h2>
                <p>Contamos con un equipo altamente capacitado y apasionado por lo que hacemos.</p>
                <div className="team_members">
                    <div className="team_member">
                        {/* <img src="ruta/a/imagen1.jpg" alt="Miembro del Equipo 1" /> */}
                        <p>Jose Alejandro Alvarez Mendoza</p>
                        <pre>Lider del equipo</pre>
                    </div>
                    <div className="team_member">
                        {/* <img src="ruta/a/imagen2.jpg" alt="Miembro del Equipo 2" /> */}
                        <p>Juan Jose Torres Rua</p>
                        <pre>Lider del equipo</pre>
                    </div>
                    <div className="team_member">
                        {/* <img src="ruta/a/imagen2.jpg" alt="Miembro del Equipo 2" /> */}
                        <p>Diego Alexander Espitia Supelano</p>
                        <pre>Lider del equipo</pre>
                    </div>
                </div>
            </section>
            <section className="about_mission">
                <h2>Nuestra Misión</h2>
                <p>Nuestra misión es proporcionar productos de alta calidad y un excelente servicio al cliente para satisfacer las necesidades de nuestros clientes.</p>
            </section>
        </div>
    );
}