import React from 'react';

export default function Home() {
  return (
    <>
      <main>
        {/* Sección de Introducción */}
        <section className="paginas">
          <h1>¿Qué es la Ciberseguridad?</h1>
          <p>
            La ciberseguridad es la práctica de proteger sistemas, redes, programas y datos de ataques digitales.
          </p>
        </section>

        {/* Sección de Ramas con Flex-box */}
        <section className="ramas">
          <h2>Ramas Principales</h2>
          <div className="flex-box">
            
            <article className="tarjeta">
              <div className="cabecera-tarjeta">
                <i className="fa-solid fa-server"></i>
                <h3>Seguridad de Redes</h3>
              </div>
              <p>
                Es una de las ramas más tradicionales; se encarga de diseñar infraestructuras protegidas mediante el uso de firewalls, redes privadas virtuales (VPN) y protocolos de comunicación segura para evitar interceptaciones o accesos no deseados.
              </p>
            </article>

            <article className="tarjeta">
              <div className="cabecera-tarjeta">
                <i className="fa-solid fa-cloud"></i>
                <h3>Seguridad en la Nube (Cloud Security)</h3>
              </div>
              <p>
                Debido a la adopción masiva de entornos híbridos y multicloud, esta rama se especializa en la visibilidad de los accesos, la configuración de contenedores y la protección de cargas de trabajo distribuidas.
              </p>
            </article>

            <article className="tarjeta">
              <div className="cabecera-tarjeta">
                <i className="fa-solid fa-user-secret"></i>
                <h3>Ciberseguridad Ofensiva - Hacking Ético</h3>
              </div>
              <p>
                Consiste en emplear las mismas técnicas que los atacantes para realizar pruebas de penetración (pentesting) y simulaciones de adversarios, con el fin de detectar y corregir vulnerabilidades antes de que sean explotadas maliciosamente.
              </p>
            </article>

            <article className="tarjeta">
              <div className="cabecera-tarjeta">
                <i className="fa-solid fa-laptop-code"></i>
                <h3>Seguridad de Aplicaciones y Software</h3>
              </div>
              <p>
                Se enfoca en el ciclo de vida de desarrollo seguro, integrando herramientas de análisis de código (SAST/DAST) para prevenir fallos críticos como la inyección de código o el desbordamiento de búfer.
              </p>
            </article>

            <article className="tarjeta">
              <div className="cabecera-tarjeta">
                <i className="fa-solid fa-magnifying-glass-chart"></i>
                <h3>Informática Forense y Peritaje</h3>
              </div>
              <p>
                Esta rama combina conocimientos técnicos y legales para investigar incidentes tras un ataque. Se encarga de recolectar evidencias digitales con validez judicial, identificar la identidad del atacante y determinar los motivos del crimen.
              </p>
            </article>

            <article className="tarjeta">
              <div className="cabecera-tarjeta">
                <i className="fa-solid fa-file-shield"></i>
                <h3>Gobernanza, Riesgo y Cumplimiento (GRC)</h3>
              </div>
              <p>
                Se centra en la parte administrativa y estratégica, estableciendo políticas de seguridad basadas en marcos internacionales (como ISO 27001 o NIST) y asegurando que la empresa cumpla con las normativas legales de protección de datos.
              </p>
            </article>

            <article className="tarjeta">
              <div className="cabecera-tarjeta">
                <i className="fa-solid fa-id-card-clip"></i>
                <h3>Gestión de Identidades y Accesos (IAM)</h3>
              </div>
              <p>
                Rama dedicada a garantizar que solo las personas autorizadas accedan a los recursos correctos. Utiliza tecnologías de autenticación multifactor (MFA) y principios de privilegio mínimo para reducir la superficie de ataque.
              </p>
            </article>

            <article className="tarjeta">
              <div className="cabecera-tarjeta">
                <i className="fa-solid fa-microchip"></i>
                <h3>Seguridad de Endpoints e IoT</h3>
              </div>
              <p>
                Protege dispositivos finales como laptops, teléfonos móviles y dispositivos inteligentes (sensores, cámaras), que a menudo son los puntos más vulnerables de entrada a una red corporativa.
              </p>
            </article>

          </div>
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <p>&copy; 2026 CiberSeguridad Educativa - Liceo San Benito</p>
        </div>
      </footer>
    </>
  );
}