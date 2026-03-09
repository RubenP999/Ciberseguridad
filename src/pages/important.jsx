import React from 'react';

export default function Important() {
  return (
    <>
      <main className="magazine-layout">
        <div className="editorial-banner">
          <div className="banner-left">
            <span>VOL. 1 - NO. 01</span>
            <span>MARZO 2026</span>
          </div>
          <div className="banner-center">
            <span className="liceo-tag">LICEO SAN BENITO - TECNOLOGÍA</span>
          </div>
          <div className="banner-right">
            <span>POR: RUBEN, GARY, FERNANDO</span>
          </div>
        </div>

        <h1 className="main-headline">
          <i className="fa-solid fa-shield-halved"></i> ¿Por qué la Ciberseguridad es el Desafío de nuestra Era?
        </h1>

        <div className="main-hero-image">
          <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1470&auto=format&fit=crop" alt="Seguridad Digital Global" />
          <p className="caption">La interconectividad global exige infraestructuras de defensa robustas.</p>
        </div>

        <div className="article-grid">
            
          <article className="post-card col-span-2 text-cols-2">
            <h2>La Magnitud del Riesgo en la Sociedad Digital</h2>
            <p>
              En un mundo hiperconectado, la ciberseguridad ha dejado de ser una preocupación técnica exclusiva de los departamentos de IT para convertirse en un pilar de la seguridad nacional y la estabilidad económica. La digitalización de servicios esenciales (agua, electricidad, banca, salud) significa que un ataque exitoso puede tener consecuencias devastadoras en el mundo físico.
            </p>
            
            <p className="mt-1">
              Las estadísticas globales muestran un incremento alarmante en la sofisticación de los ataques. Ya no se trata solo de individuos aislados, sino de organizaciones cibercriminales con presupuestos millonarios que operan bajo modelos de "Ransomware as a Service" (RaaS).
            </p>
            
            <ul className="editorial-list mt-1">
              <li><strong>Impacto Económico:</strong> Se estima que el costo global del cibercrimen alcanzará cifras billonarias, afectando el PIB de naciones enteras.</li>
              <li><strong>Seguridad Nacional:</strong> El ciberespacio es ahora el "quinto dominio" de la guerra, junto a la tierra, mar, aire y espacio.</li>
              <li><strong>Privacidad Ciudadana:</strong> La protección de datos personales es un derecho humano fundamental que se ve amenazado por brechas de seguridad masivas.</li>
            </ul>
          </article>

          <article className="post-card col-span-1 border-left-subtle">
            <h2>El Activo más Valioso: Los Datos</h2>
            <p>
              Los datos se han convertido en el "petróleo" del siglo XXI. Desde registros médicos hasta secretos industriales y preferencias de consumo, la información es el objetivo principal de los actores de amenazas.
            </p>
            
            <p className="mt-1">
              La pérdida de integridad o confidencialidad de estos datos no solo conlleva sanciones legales estrictas (como el RGPD), sino que destruye la confianza del consumidor, un activo que toma años construir y segundos destruir.
            </p>

            <div className="inline-image mt-2">
              <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop" alt="Data Center" />
            </div>
          </article>

          <article className="post-card col-span-1 border-top-subtle">
            <div className="cabecera-tarjeta mb-0">
              <i className="fa-solid fa-lightbulb text-accent"></i>
              <h3 className="text-accent" style={{ fontSize: '0.9rem' }}>Dato Curioso</h3>
            </div>
            <p className="mt-1" style={{ fontSize: '0.85rem', color: '#8b949e', borderLeft: '2px solid rgba(254, 74, 73, 0.2)', paddingLeft: '10px' }}>
              ¿Sabías que el primer ataque de ransomware de la historia ocurrió en 1989? Se llamó el troyano de la "Cura del SIDA" (AIDS Trojan) y fue distribuido mediante 20,000 disquetes físicos enviados por correo postal a investigadores de salud en todo el mundo.
            </p>
            
            <div className="cabecera-tarjeta mt-2 mb-0">
              <i className="fa-solid fa-user-shield text-accent"></i>
              <h3 className="text-accent" style={{ fontSize: '0.9rem' }}>El Factor Humano</h3>
            </div>
            <p className="mt-1">
              A pesar de la sofisticación de los firewalls, el eslabón más débil sigue siendo el ser humano. La ingeniería social es la puerta de entrada para más del 80% de los incidentes.
            </p>
          </article>

          <article className="post-card col-span-2 text-cols-2 border-top-subtle">
            <h2>El Desafío de la Inteligencia Artificial</h2>
            
            <p>
              La IA representa un factor disruptivo con una doble cara. Por un lado, la IA generativa y el aprendizaje automático (Machine Learning) permiten a los defensores y a los Centros de Operaciones de Seguridad (SOC) analizar amenazas en tiempo real. Esto facilita:
            </p>
            
            <ul className="editorial-list mt-1">
              <li>Anticipar métodos de ataque.</li>
              <li>Detectar anomalías en milisegundos.</li>
              <li>Automatizar la respuesta ante incidentes a una velocidad que supera la capacidad humana.</li>
            </ul>

            <p className="mt-1">
              Por otro lado, esta misma tecnología ha facilitado el trabajo de los atacantes. Organismos como la OEA advierten que el uso de IA por parte de criminales está permitiendo campañas de engaño (phishing) mucho más realistas y ataques automatizados a gran escala.
            </p> 
            
            <p className="mt-1">
              Ante esta "carrera armamentística" digital, las organizaciones deben abandonar los modelos de seguridad estáticos y adoptar ecosistemas de defensa adaptativos que integren tecnología, procesos humanos y estándares globales de protección.
            </p>
          </article>

        </div> 
      </main>

      <footer>
        <p>&copy; 2026 CiberSeguridad Educativa - Liceo San Benito. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}