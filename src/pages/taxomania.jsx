import React from 'react';

export default function Taxonomia() {
  return (
    <>
      <main className="magazine-layout">
        <div className="editorial-banner">
          <div className="banner-left">
            <span>VOL. 1 - NO. 03</span>
            <span>MARZO 2026</span>
          </div>
          <div className="banner-center">
            <span className="liceo-tag">LICEO SAN BENITO - INVESTIGACIÓN</span>
          </div>
          <div className="banner-right">
            <span>POR: RUBEN, GARY, FERNANDO</span>
          </div>
        </div>

        <h1 className="main-headline">
          <i className="fa-solid fa-bug-slash"></i> 
          Taxonomía Avanzada de Amenazas y Conceptos Críticos
        </h1>

        <div className="main-hero-image">
          <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1470&auto=format&fit=crop" alt="Código malicioso en pantalla matrix" />
          <p className="caption">Si crees que la tecnología puede resolver tus problemas de seguridad, entonces no entiendes los problemas y no entiendes la tecnología</p>
        </div>

        <div className="article-grid">
            
          <article className="post-card feature-article col-span-2 text-cols-2">
            <p>
              Para diseñar estrategias defensivas eficaces y arquitecturas de red resilientes, es indispensable comprender la anatomía de los ciberataques y las herramientas que emplean los actores de amenazas. En ciberseguridad, el uso preciso de la terminología es vital, ya que conceptos como vulnerabilidad, exploit y malware designan riesgos estructurales y métodos de ataque muy específicos.
            </p>
            
            <h2 className="mt-2">1. Vulnerabilidades, Exploits y la Amenaza del "Zero-Day"</h2>
            
            <h3 className="mt-1"><i className="fa-solid fa-door-open text-accent"></i> Vulnerabilidad: La debilidad del sistema</h3>
            <p>
              Una vulnerabilidad es una debilidad técnica, un error de programación o una falla de diseño que crea un "punto débil" en un sistema. Estos fallos pueden ser aprovechados para comprometer la confidencialidad, integridad o disponibilidad de la información.
            </p>
            <p className="mt-1">
              <strong>Identificación Global:</strong> Para gestionar estos riesgos, se utiliza la base de datos NVD (National Vulnerability Database). Cada falla recibe un identificador CVE (Common Vulnerabilities and Exposures), permitiendo aplicar soluciones de forma coordinada.
            </p>

            <h3 className="mt-1"><i className="fa-solid fa-key text-accent"></i> Exploit: La llave maestra</h3>
            <p>
              Un exploit es el fragmento de código o la técnica diseñada específicamente para aprovechar una vulnerabilidad concreta. Es importante notar que el exploit no es el ataque en sí, sino el mecanismo de entrada. Su función es forzar al sistema a ejecutar comandos no autorizados.
            </p>

            <h3 className="mt-1"><i className="fa-solid fa-stopwatch text-accent"></i> Zero-Day: El ataque sin aviso</h3>
            <p>
              Una vulnerabilidad Zero-Day es un fallo crítico que los atacantes descubren antes que el propio fabricante del software. Como el desarrollador desconoce el problema, no existe un parche de seguridad, lo que otorga a los defensores "cero días" de ventaja.
            </p>
          </article>

          <article className="post-card col-span-1 border-left-subtle">
            <h3 className="text-accent">Casos Notables de Zero-Day:</h3>
            <ul className="editorial-list mt-1">
              <li><strong>MOVEit (2023):</strong> Explotado por la banda CLOP para robar datos de agencias gubernamentales.</li>
              <li><strong>Google Chrome (2022-2023):</strong> Utilizado por grupos de espionaje para instalar software espía de forma silenciosa.</li>
              <li><strong>Microsoft Exchange (2021):</strong> Permitió el acceso a buzones de correo de miles de organizaciones.</li>
            </ul>

            <div className="inline-image mt-3">
              <img src="https://images.unsplash.com/photo-1618060932014-4deda4932554?q=80&w=600&auto=format&fit=crop" alt="Servidor vulnerado" />
            </div>
          </article>

          <article className="post-card col-span-1 border-top-subtle">
            <div className="cabecera-tarjeta mb-0">
              <i className="fa-solid fa-lightbulb text-accent"></i>
              <h3 className="text-accent" style={{ fontSize: '0.9rem' }}>El Dato Histórico</h3>
            </div>
            <p className="mt-1" style={{ fontSize: '0.85rem', color: '#8b949e', borderLeft: '2px solid rgba(254, 74, 73, 0.2)', paddingLeft: '10px' }}>
              ¿Sabías que el primer Ransomware de la historia fue creado en 1989 por un biólogo? Conocido como "AIDS Trojan", se distribuyó por correo postal a través de 20,000 disquetes infectados. El rescate exigido era de 189 dólares a un apartado postal en Panamá.
            </p>

            <h2 className="mt-3" style={{ fontSize: '1.1rem' }}><i className="fa-solid fa-truck-medical text-accent"></i> 3. Protocolo de Respuesta</h2>
            <ul className="editorial-list mt-1">
              <li><strong>Aislamiento Inmediato:</strong> Desconectar equipos de la red.</li>
              <li><strong>Clonación Forense:</strong> Crear evidencia legal de los discos.</li>
              <li><strong>Análisis de Variante:</strong> Consultar No More Ransom.</li>
              <li><strong>No Pagar:</strong> No garantiza recuperar datos y financia el crimen.</li>
            </ul>
          </article>

          <article className="post-card col-span-2 text-cols-2 border-top-subtle">
            <h2>2. La Evolución del Malware y el Ransomware</h2>
                        <p>El Malware abarca cualquier programa diseñado para infiltrarse o dañar un sistema sin permiso:</p>
            
            <p className="mt-2"><i className="fa-solid fa-horse-head text-accent"></i> <strong>Troyanos:</strong> Se disfrazan de aplicaciones legítimas para engañar al usuario.</p>
            
            <p className="mt-1"><i className="fa-solid fa-file-arrow-down text-accent"></i> <strong>Droppers:</strong> Archivos aparentemente inofensivos que descargan el software dañino real.</p>
            
            <p className="mt-1"><i className="fa-solid fa-eye text-accent"></i> <strong>Spyware:</strong> Registran cada pulsación del teclado (Keyloggers) para robar contraseñas.</p>
            
            <p className="mt-1"><i className="fa-solid fa-network-wired text-accent"></i> <strong>Botnets:</strong> Redes de dispositivos "zombis" usados para ataques masivos o minería.</p>

            <h3 className="mt-2"><i className="fa-solid fa-skull-crossbones text-accent"></i> Ransomware: El secuestro digital</h3>
            <p>Es la amenaza más crítica actual. Bloquea el acceso a archivos mediante cifrado de grado militar y exige un pago en criptomonedas.</p>
            
            <p className="mt-1"><strong>Doble Extorsión:</strong> Los atacantes primero roban los datos (exfiltración). Si la empresa no paga el descifrado, amenazan con publicar la información privada, causando daños irreparables a la reputación.</p>

            <div className="inline-image mt-2">
              <img src="https://images.unsplash.com/photo-1510511459019-5efa7ae5ca6c?q=80&w=1470&auto=format&fit=crop" alt="Bloqueo de pantalla por Ransomware" />
            </div>
          </article>

        </div> 
      </main>

      <footer>
        <p>&copy; 2026 CiberSeguridad Educativa - Liceo San Benito. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}