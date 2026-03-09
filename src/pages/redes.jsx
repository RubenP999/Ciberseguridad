import React from 'react';

export default function Redes() {
  return (
    <>
      <main className="magazine-layout">
        <div className="editorial-banner">
          <div className="banner-left">
            <span>VOL. 1 - NO. 04</span>
            <span>MAYO 2026</span>
          </div>
          <div className="banner-center">
            <span className="liceo-tag">LICEO SAN BENITO - INVESTIGACIÓN</span>
          </div>
          <div className="banner-right">
            <span>POR: RUBEN, GARY, FERNANDO</span>
          </div>
        </div>

        <h1 className="main-headline">
          <i className="fa-solid fa-users-viewfinder"></i>
          El Factor Humano y la Evolución hacia Zero Trust
        </h1>

        <div className="main-hero-image">
          <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1470&auto=format&fit=crop" alt="Servidores y redes globales" />
          <p className="caption">La seguridad absoluta es una imposibilidad Matemática</p>
        </div>

        <div className="article-grid">
            
          <article className="post-card feature-article col-span-2 text-cols-2">
            <h2>1. El Factor Humano: Ingeniería Social y Fraude</h2>
            <p>
              A medida que las defensas técnicas se vuelven más robustas, los atacantes han centrado su atención en el eslabón más vulnerable: la psicología del usuario.
            </p>
            
            <h3 className="mt-2"><i className="fa-solid fa-mask text-accent"></i> Ingeniería Social y Phishing</h3>
            <p>
              La ingeniería social utiliza la manipulación cognitiva para engañar a las personas y lograr que revelen información sensible o ejecuten acciones maliciosas (como transferencias de fondos).
            </p>
            <ul className="editorial-list">
              <li><strong>Phishing (Pesca de datos):</strong> Es la variante más común. Consiste en el envío de correos que suplantan a entidades de confianza (bancos, mensajería, directivos).</li>
              <li><strong>Tácticas de Manipulación:</strong> Se basan en crear un falso sentido de urgencia o miedo (ej. "cuenta bloqueada").</li>
              <li><strong>Técnicas de Engaño:</strong>
                <ul className="editorial-list-nested">
                  <li><strong>Web Spoofing:</strong> Clonación de sitios web legítimos.</li>
                  <li><strong>Typosquatting:</strong> Registro de dominios con errores ortográficos mínimos (ej. g00gle.com en lugar de google.com).</li>
                </ul>
              </li>
            </ul>

            <h3 className="mt-2"><i className="fa-solid fa-mobile-screen-button text-accent"></i> Variantes Especializadas</h3>
            <ul className="editorial-list">
              <li><strong>Smishing y Vishing:</strong> Fraude a través de SMS y llamadas de voz (usando a menudo IA para clonar voces).</li>
              <li><strong>Browser-in-the-Browser (BitB):</strong> Ventanas emergentes falsas dentro del navegador que simulan ser inicios de sesión legítimos.</li>
              <li><strong>Ataques BEC (Business Email Compromise):</strong> Suplantación de correos de ejecutivos para desviar pagos corporativos.</li>
            </ul>

            <p className="mt-1"><strong>Defensa:</strong> La solución no es solo técnica, sino educativa. Se busca crear un "Firewall Humano" mediante capacitación continua y simulacros de ataque.</p>
          </article>

          <article className="post-card col-span-1 border-left-subtle">
            <div className="dato-sutil">
              <i className="fa-solid fa-lightbulb text-accent"></i>
              <div className="dato-text">
                <strong className="text-accent">Dato Curioso:</strong><br /><br />
                ¿Sabías que el término "Phishing" se acuñó en 1996? Proviene de la combinación de "fishing" (pescar) y "phreaking" (piratería telefónica). Los primeros ataques de este tipo apuntaban a los usuarios de America Online (AOL), utilizando "cebos" por correo para robar sus contraseñas.
              </div>
            </div>

            <div className="inline-image mt-3">
              <img src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=600&auto=format&fit=crop" alt="Usuario frente a una pantalla" />
            </div>
          </article>

          <article className="post-card col-span-1 border-top-subtle">
            <h2>2. Evolución de las Redes: Del Perímetro al Zero Trust</h2>
            <p>El modelo tradicional de seguridad ha quedado obsoleto debido al teletrabajo y al uso masivo de la nube.</p>
            
            <h3 className="mt-2"><i className="fa-brands fa-fort-awesome text-accent"></i> El Colapso del Modelo Perimetral</h3>
            <p>Antiguamente, la seguridad se basaba en el modelo de "Castillo y Foso": se protegía el exterior y se confiaba ciegamente en cualquier persona o dispositivo que estuviera dentro.</p>
            <p className="mt-1"><strong>Limitación:</strong> Una vez que un atacante lograba entrar, podía moverse libremente por toda la red interna (movimiento lateral).</p>
            
            <p className="mt-2"><strong>Herramientas Tradicionales:</strong></p>
            <ul className="editorial-list">
              <li><strong>Firewalls:</strong> Filtran el tráfico basado en reglas rígidas.</li>
              <li><strong>VPN (Redes Privadas Virtuales):</strong> Crean túneles seguros para acceso remoto, pero suelen dar acceso a toda la red.</li>
              <li><strong>IDS/IPS:</strong> Detección (pasivo) y bloqueo (activo) de intrusiones.</li>
            </ul>

            <div className="inline-image mt-2">
              <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=600&auto=format&fit=crop" alt="Conexión de redes" />
            </div>
          </article>

          <article className="post-card col-span-2 text-cols-2 border-top-subtle">
            <h3><i className="fa-solid fa-shield-halved text-accent"></i> Arquitectura de Confianza Cero (Zero Trust)</h3>
                        <p>Formalizada por el estándar NIST SP 800-207, esta filosofía elimina la confianza implícita. Su lema es: "Nunca confíes, siempre verifica".</p>
            
            <p className="mt-2"><strong>Principios Fundamentales:</strong></p>
            <ul className="editorial-list">
              <li><strong>Autenticación Continua:</strong> Se verifica constantemente el riesgo y el contexto.</li>
              <li><strong>Mínimo Privilegio:</strong> Cada usuario solo accede a lo que necesita estrictamente.</li>
              <li><strong>Microsegmentación:</strong> Se divide la red en pequeños perímetros aislados para contener daños.</li>
            </ul>

            <p className="mt-2"><strong>Componentes Lógicos:</strong></p>
            <ul className="editorial-list">
              <li><strong>Motor de Políticas (PE):</strong> El "cerebro" que decide si permite o no un acceso.</li>
              <li><strong>Punto de Cumplimiento (PEP):</strong> El "guardián" que ejecuta la orden del motor.</li>
            </ul>

            <h3 className="mt-3"><i className="fa-solid fa-cloud text-accent"></i> SASE y ZTNA: El Futuro en la Nube</h3>
            <p>Para evitar el "efecto trombón" surgió el modelo SASE (Secure Access Service Edge).</p>
            <ul className="editorial-list mt-1">
              <li><strong>ZTNA (Zero Trust Network Access):</strong> Sustituye a la VPN conectando al usuario directamente con la aplicación.</li>
              <li><strong>CASB y FWaaS:</strong> Llevan el control de seguridad y cortafuegos directamente a la nube.</li>
            </ul>

            <h3 className="mt-3"><i className="fa-solid fa-scale-balanced text-accent"></i> Comparativa de Modelos</h3>
            
            <div className="comparative-grid mt-1">
              <div className="comp-card classic">
                <h4>Red Tradicional (Perímetro)</h4>
                <ul>
                  <li><strong>Confianza:</strong> Implícita para quienes están dentro.</li>
                  <li><strong>Visibilidad:</strong> El usuario ve toda la red interna.</li>
                  <li><strong>Seguridad:</strong> Centrada en el hardware físico.</li>
                  <li><strong>Resiliencia:</strong> Vulnerable al movimiento lateral.</li>
                </ul>
              </div>
              
              <div className="comp-card modern">
                <h4>Zero Trust & SASE</h4>
                <ul>
                  <li><strong>Confianza:</strong> Nula. Se verifica cada acceso siempre.</li>
                  <li><strong>Visibilidad:</strong> El usuario solo ve las aplicaciones autorizadas.</li>
                  <li><strong>Seguridad:</strong> Centrada en la Identidad y la Nube.</li>
                  <li><strong>Resiliencia:</strong> Alta capacidad de aislamiento.</li>
                </ul>
              </div>
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