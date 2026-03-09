import React from 'react';

export default function Pilares() {
  return (
    <>
      <main className="magazine-layout">
        <div className="editorial-banner">
          <div className="banner-left">
            <span>VOL. 1 - NO. 02</span>
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
          <i className="fa-solid fa-tower-broadcast"></i> Los Pilares Fundamentales de la Seguridad de la Información
        </h1>

        <div className="main-hero-image">
          <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop" alt="Ciberseguridad Conceptual" />
          <p className="caption">La seguridad no es un producto, es un proceso.</p>
        </div>

        <div className="article-grid">
          
          <article className="post-card col-span-2 text-cols-2">
            <h2>1. La Tríada Clásica: CID</h2>
            <p>
              El diseño y la evaluación de cualquier sistema de seguridad se fundamentan en el modelo teórico conocido como la tríada CID (Confidencialidad, Integridad y Disponibilidad). Este marco, considerado el estándar de oro en la era digital, no solo actúa como un esquema preventivo, sino también como una herramienta de análisis retrospectivo. En la autopsia de un incidente (como un ataque de ransomware), la tríada permite determinar qué controles resistieron y cuáles fallaron, facilitando el aislamiento de los vectores de ataque.
            </p>
            
            <h3 className="mt-2">Confidencialidad</h3>
            <p>
              Este principio asegura que la información sea accesible únicamente para usuarios, procesos o identidades con autorización explícita. Es el pilar fundamental de la privacidad y el cumplimiento regulatorio.
            </p>
            <ul className="editorial-list">
              <li><strong>Ciclo de vida del dato:</strong> La confidencialidad debe garantizarse en tres estados: en reposo (almacenamiento), en tránsito (movimiento por redes) y en uso (procesamiento en memoria/CPU).</li>
              <li><strong>Mecanismos técnicos:</strong> Implementación de controles de acceso basados en roles (RBAC), autenticación multifactor (MFA) y, principalmente, criptografía avanzada.</li>
            </ul>

            <h3 className="mt-2">Integridad</h3>
            <p>
              Es la garantía de que los datos y configuraciones mantienen su exactitud y validez cronológica, permaneciendo libres de alteraciones o destrucciones no autorizadas.
            </p>
            <ul className="editorial-list">
              <li><strong>Origen de fallos:</strong> Puede verse comprometida por ciberataques deliberados (como ataques Man-in-the-Middle) o por errores técnicos y humanos.</li>
              <li><strong>Mecanismos técnicos:</strong> Se emplean funciones hash (resúmenes matemáticos), firmas digitales y sistemas de control de versiones que permiten detectar cualquier modificación a nivel binario.</li>
            </ul>
          </article>

          <article className="post-card col-span-1 border-left-subtle">
            <h2>Disponibilidad</h2>
            <p>
              Garantiza que los sistemas y servicios de misión crítica permanezcan operativos y accesibles según los acuerdos de nivel de servicio (SLA). Su compromiso interrumpe la continuidad del negocio y genera pérdidas económicas críticas.
            </p>
            <ul className="editorial-list">
              <li><strong>Principales amenazas:</strong> Ataques de denegación de servicio distribuido (DDoS) y secuestro de datos (ransomware).</li>
              <li><strong>Mecanismos técnicos:</strong> Redundancia geográfica, balanceo de carga, planes de continuidad del negocio (BCP) y respaldos de datos inmutables.</li>
            </ul>
            <div className="inline-image mt-2">
              <img src="https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=600&auto=format&fit=crop" alt="Servidores y Redundancia" />
            </div>
          </article>

          <article className="post-card col-span-1 border-top-subtle">
            <div className="cabecera-tarjeta mb-0">
              <i className="fa-solid fa-lightbulb text-accent"></i> 
              <h3 className="text-accent" style={{ fontSize: '0.9rem' }}>Dato Curioso</h3>
            </div>
            <p className="mt-1" style={{ fontSize: '0.85rem', color: '#8b949e', borderLeft: '2px solid rgba(254, 74, 73, 0.2)', paddingLeft: '10px' }}>
              ¿Sabías que el primer "bug" informático de la historia fue una polilla real encontrada en un relé de la computadora Harvard Mark II en 1947? La pionera Grace Hopper la pegó en su diario de bitácora, popularizando el término para describir un fallo del sistema.
            </p>
            <div className="inline-image mt-2">
              <img src="https://images.unsplash.com/photo-1639066648921-82d4500abf1a?q=80&w=687&auto=format&fit=crop" alt="Análisis Forense" />
            </div>
          </article>

          <article className="post-card col-span-2 text-cols-2 border-top-subtle">
            <h2>2. Principios Extendidos y Seguridad Transaccional</h2>
            <p>
              Dada la complejidad del comercio y la banca electrónica, el modelo CID se ha expandido para incluir dimensiones legales y lógicas adicionales:
            </p>
            <p className="mt-1">
              <i className="fa-solid fa-fingerprint text-accent"></i> <strong>Autenticidad:</strong> Proceso para verificar de forma inequívoca la identidad digital de un usuario, dispositivo o aplicación, mitigando riesgos de suplantación de identidad (spoofing).
            </p>
            <p className="mt-1">
              <i className="fa-solid fa-signature text-accent"></i> <strong>No Repudio:</strong> Garantía con validez jurídica que impide que un autor niegue su participación en una transacción digital. Se fundamenta en la criptografía asimétrica, vinculando indisolublemente una firma digital con la clave privada del firmante.
            </p>
            <p className="mt-1">
              <i className="fa-solid fa-magnifying-glass-location text-accent"></i> <strong>Trazabilidad y Auditabilidad:</strong> Capacidad de reconstruir cronológicamente los eventos de un sistema. Mediante el uso de herramientas SIEM (gestión de eventos e información de seguridad) potenciadas por inteligencia artificial, los equipos forenses pueden correlacionar registros (logs) para determinar el origen y la magnitud de cualquier brecha de seguridad.
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