import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "./assets/logo.png"; // Ensure logo.png is in src/assets
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faSun,
  faMoon,
  faMobileAlt,
  faDatabase,
  faChartLine,
  faUserTie,
  faCloud,
  faTable,
  faCode,
  faShoppingCart,
  faCashRegister,
  faCreditCard,
  faBoxes,
  faUsers,
  faChartPie,
  faUserShield,
  faFileAlt,
  faReceipt,
  faFileInvoiceDollar,
  faUsersCog,
  faShieldAlt,
  faMapMarkerAlt,
  faShareAlt,
  faCheckCircle,
  faCheck,
  faUserCog,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp as fabWhatsapp,
  faFacebookF as fabFacebookF,
  faInstagram as fabInstagram,
  faTwitter as fabTwitter,
} from "@fortawesome/free-brands-svg-icons";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFabOpen, setIsFabOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Theme setup
    document.documentElement.classList.add(`${theme}-theme`);
    localStorage.setItem("theme", theme);

    // Scroll event for nav
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("light-theme");
    document.documentElement.classList.toggle("dark-theme");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "" : "hidden";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "";
  };

  const toggleFab = () => {
    setIsFabOpen(!isFabOpen);
  };

  const handleOutsideClick = (e) => {
    if (
      isMenuOpen &&
      !e.target.closest(".modal-menu") &&
      !e.target.closest(".hamburger")
    ) {
      closeMenu();
    }
    if (isFabOpen && !e.target.closest(".fab-container")) {
      setIsFabOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isMenuOpen, isFabOpen]);

  return (
    <div className="app">
      <nav className={isScrolled ? "scrolled" : ""}>
        <div className="nav-content">
          <a href="#inicio" className="logo">
            <img src={logo} alt="Visonixro Logo" className="nav-logo" />
            <span>VISONIXRO</span>
          </a>
          <ul className="nav-links">
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#servicios">Servicios</a>
            </li>
            <li>
              <a href="#proyectos">Proyectos</a>
            </li>
            <li>
              <a href="#about">Nosotros</a>
            </li>
            <li>
              <a href="#tecnologias">Tecnologías</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
            <li>
              <button className="theme-toggle" onClick={toggleTheme}>
                <FontAwesomeIcon icon={theme === "light" ? faSun : faMoon} />
                Tema
              </button>
            </li>
          </ul>
          <button
            className="hamburger"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
        </div>
      </nav>

      <div className={`modal-menu ${isMenuOpen ? "active" : ""}`}>
        <button
          className="close-menu"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <ul>
          <li>
            <a href="#inicio" className="modal-link" onClick={closeMenu}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#servicios" className="modal-link" onClick={closeMenu}>
              Servicios
            </a>
          </li>
          <li>
            <a href="#proyectos" className="modal-link" onClick={closeMenu}>
              Proyectos
            </a>
          </li>
          <li>
            <a href="#about" className="modal-link" onClick={closeMenu}>
              Nosotros
            </a>
          </li>
          <li>
            <a href="#tecnologias" className="modal-link" onClick={closeMenu}>
              Tecnologías
            </a>
          </li>
          <li>
            <a href="#contacto" className="modal-link" onClick={closeMenu}>
              Contacto
            </a>
          </li>
          <li>
            <button className="theme-toggle" onClick={toggleTheme}>
              <FontAwesomeIcon icon={theme === "light" ? faSun : faMoon} />
              Tema
            </button>
          </li>
        </ul>
      </div>

      <header id="inicio">
        <div className="hero-content" data-aos="fade-up">
          <h1>Transformamos tu Negocio con AppSheet</h1>
          <p>
            Soluciones digitales personalizadas desde Roatán, Islas de la Bahía,
            Honduras
          </p>
          <a href="https://wa.me/50488632788" className="cta-button">
            <FontAwesomeIcon icon={fabWhatsapp} />
            Contactar ahora
          </a>
        </div>
        <div className="hero-overlay"></div>
      </header>

      <section id="servicios" className="services">
        <h2 data-aos="fade-up">Nuestros Servicios</h2>
        <div className="services-grid">
          <div className="service-card" data-aos="fade-up">
            <FontAwesomeIcon icon={faMobileAlt} className="service-icon" />
            <h3>Apps Móviles Personalizadas</h3>
            <p>
              Desarrollo de aplicaciones móviles empresariales con AppSheet,
              perfectamente adaptadas a tus necesidades específicas.
            </p>
          </div>
          <div className="service-card" data-aos="fade-up" data-aos-delay="200">
            <FontAwesomeIcon icon={faDatabase} className="service-icon" />
            <h3>Gestión de Datos</h3>
            <p>
              Sistemas inteligentes para administrar tu información empresarial
              con seguridad y eficiencia.
            </p>
          </div>
          <div className="service-card" data-aos="fade-up" data-aos-delay="400">
            <FontAwesomeIcon icon={faChartLine} className="service-icon" />
            <h3>Automatización</h3>
            <p>
              Automatización de procesos empresariales para maximizar la
              productividad y minimizar errores.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <h2 data-aos="fade-up">Sobre Nosotros</h2>
        <div className="about-content">
          <div className="about-text" data-aos="fade-right">
            <h3>Innovación desde el Caribe</h3>
            <p>
              Ubicados en el paraíso tropical de Roatán, Islas de la Bahía,
              Honduras, Visonixro es líder en desarrollo de soluciones AppSheet
              para empresas en toda América Latina.
            </p>
            <div className="ceo-info">
              <div className="ceo-details">
                <FontAwesomeIcon icon={faUserTie} />
                <h4>Miguel Angel Romero</h4>
                <p>CEO y Fundador</p>
                <p>"Transformando negocios a través de la tecnología"</p>
              </div>
            </div>
          </div>
          <div className="about-image" data-aos="fade-left">
            <img src={logo} alt="Roatan" />
          </div>
        </div>
      </section>

      <section id="tecnologias" className="technologies">
        <h2 data-aos="fade-up">Nuestras Tecnologías</h2>
        <div className="tech-grid">
          <div className="tech-card" data-aos="fade-up">
            <FontAwesomeIcon icon={faCloud} className="tech-icon" />
            <h3>Google Cloud Platform</h3>
            <p>Infraestructura robusta y escalable para tus aplicaciones</p>
          </div>
          <div className="tech-card" data-aos="fade-up" data-aos-delay="200">
            <FontAwesomeIcon icon={faTable} className="tech-icon" />
            <h3>Google Sheets</h3>
            <p>Gestión de datos flexible y familiar</p>
          </div>
          <div className="tech-card" data-aos="fade-up" data-aos-delay="400">
            <FontAwesomeIcon icon={faCode} className="tech-icon" />
            <h3>AppSheet</h3>
            <p>Plataforma líder en desarrollo no-code</p>
          </div>
        </div>
      </section>

      <section id="proyectos" className="projects">
        <h2 data-aos="fade-up">Proyectos Destacados</h2>
        <div className="project-grid">
          <div className="project-card" data-aos="fade-up">
            <div className="project-image">
              <img
                src="https://thumbs.dreamstime.com/b/concepto-de-sistema-administraci%C3%B3n-inventarios-inteligente-administrador-inventario-mediante-tablet-digital-que-muestra-la-343953741.jpg"
                alt="Sistema de Inventario"
              />
            </div>
            <h3>Sistema de Inventario</h3>
            <p>Control total de inventario con seguimiento en tiempo real</p>
            <ul className="project-features">
              <li>Seguimiento en tiempo real</li>
              <li>Alertas automáticas</li>
              <li>Reportes personalizados</li>
            </ul>
          </div>
          <div className="project-card" data-aos="fade-up" data-aos-delay="200">
            <div className="project-image">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="CRM Empresarial"
              />
            </div>
            <h3>CRM Empresarial</h3>
            <p>Gestión integral de relaciones con clientes</p>
            <ul className="project-features">
              <li>Seguimiento de ventas</li>
              <li>Gestión de contactos</li>
              <li>Automatización de marketing</li>
            </ul>
          </div>
          <div className="project-card" data-aos="fade-up" data-aos-delay="400">
            <div className="project-image">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="Dashboard Analítico"
              />
            </div>
            <h3>Dashboard Analítico</h3>
            <p>Visualización de datos en tiempo real</p>
            <ul className="project-features">
              <li>Métricas en tiempo real</li>
              <li>Gráficos interactivos</li>
              <li>Exportación de reportes</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="testimonios" className="testimonials">
        <h2 data-aos="fade-up">Lo que dicen nuestros clientes</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card" data-aos="fade-up">
            <div className="testimonial-content">
              <p>
                "Visonixro transformó completamente la manera en que manejamos
                nuestro inventario. ¡Increíble servicio!"
              </p>
              <div className="testimonial-author">
                <h4>Carlos Mendoza</h4>
                <p>Gerente de Operaciones</p>
              </div>
            </div>
          </div>
          <div
            className="testimonial-card"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="testimonial-content">
              <p>
                "La aplicación de CRM que desarrollaron superó todas nuestras
                expectativas. El equipo es muy profesional."
              </p>
              <div className="testimonial-author">
                <h4>Ana Martínez</h4>
                <p>Directora Comercial</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="beneficios" className="benefits">
        <h2 data-aos="fade-up">Solución Integral para tu Negocio</h2>
        <div className="benefits-intro" data-aos="fade-up">
          <h3>¡Optimiza tu negocio con nuestra plataforma inteligente!</h3>
          <p>
            Una solución integral, eficiente y accesible para gestionar ventas,
            inventarios, créditos y finanzas, todo en un solo lugar.
          </p>
        </div>
        <div className="benefits-grid">
          <div className="benefit-card" data-aos="fade-up">
            <div className="benefit-icon">
              <FontAwesomeIcon icon={faShoppingCart} />
            </div>
            <h3>Gestión de Ventas</h3>
            <ul className="feature-list">
              <li>
                <strong>Ventas al Contado y a Crédito:</strong>
                <p>
                  Simplifica cada transacción, sin importar el método de pago.
                </p>
              </li>
              <li>
                <strong>Consumidor Final:</strong>
                <p>Realiza ventas directas de forma rápida y precisa.</p>
              </li>
              <li>
                <strong>Facturación Dinámica:</strong>
                <p>
                  Emite facturas con múltiples formas de pago registradas en una
                  sola venta.
                </p>
              </li>
              <li>
                <strong>Guardado de Pedidos:</strong>
                <p>Guarda ventas pendientes para facturación posterior.</p>
              </li>
            </ul>
          </div>
          <div className="benefit-card" data-aos="fade-up" data-aos-delay="200">
            <div className="benefit-icon">
              <FontAwesomeIcon icon={faCashRegister} />
            </div>
            <h3>Cortes de Caja y Finanzas</h3>
            <ul className="feature-list">
              <li>
                <strong>Menú Financiero:</strong>
                <p>Accede fácilmente a tus informes clave.</p>
              </li>
              <li>
                <strong>Gastos y Ventas en Tiempo Real:</strong>
                <p>Controla el flujo diario de dinero.</p>
              </li>
              <li>
                <strong>Gestión Completa:</strong>
                <p>
                  Monitorea ventas, gastos, créditos y más desde un solo panel.
                </p>
              </li>
            </ul>
          </div>
          <div className="benefit-card" data-aos="fade-up" data-aos-delay="400">
            <div className="benefit-icon">
              <FontAwesomeIcon icon={faCreditCard} />
            </div>
            <h3>Gestión de Créditos</h3>
            <ul className="feature-list">
              <li>
                <strong>Seguimiento de Pagos:</strong>
                <p>Visualiza saldos pendientes y controla los vencimientos.</p>
              </li>
              <li>
                <strong>Clientes a Crédito:</strong>
                <p>
                  Administra créditos con plazos personalizados definidos por el
                  administrador.
                </p>
              </li>
              <li>
                <strong>Reportes Detallados:</strong>
                <p>
                  Conoce el estado financiero de cada cliente y sus movimientos.
                </p>
              </li>
            </ul>
          </div>
          <div className="benefit-card" data-aos="fade-up">
            <div className="benefit-icon">
              <FontAwesomeIcon icon={faBoxes} />
            </div>
            <h3>Gestión de Inventario</h3>
            <ul className="feature-list">
              <li>
                <strong>Control de Entradas y Salidas:</strong>
                <p>Registros automáticos y actualizaciones al instante.</p>
              </li>
              <li>
                <strong>Notificación de Bajo Stock:</strong>
                <p>Asegura la reposición oportuna de productos.</p>
              </li>
              <li>
                <strong>Módulo de Inventario Dedicado:</strong>
                <p>Control total por usuario asignado.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="prestamistas" className="lenders">
        <div className="lenders-header" data-aos="fade-up">
          <h2>Plataforma Integral para Prestamistas</h2>
          <div className="lenders-intro">
            <h3>Optimiza la gestión de tu negocio financiero</h3>
            <p>
              Nuestra plataforma está diseñada para facilitar el manejo de
              créditos, clientes y cobranzas con herramientas avanzadas y una
              interfaz intuitiva.
            </p>
          </div>
        </div>
        <div className="lenders-grid">
          <div className="lender-card" data-aos="fade-right">
            <div className="lender-icon">
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <h3>Gestión Eficiente de Clientes</h3>
            <ul className="lender-features">
              <li>
                <FontAwesomeIcon icon={faCheckCircle} />
                <span>
                  Registro y control de clientes con historial detallado
                </span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} />
                <span>Segmentación y seguimiento de cuentas en mora</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} />
                <span>
                  Ubicación de domicilios con Google Maps para verificación y
                  cobro
                </span>
              </li>
            </ul>
          </div>
          <div className="lender-card" data-aos="fade-up">
            <div className="lender-icon">
              <FontAwesomeIcon icon={faChartPie} />
            </div>
            <h3>Control Total de Finanzas</h3>
            <ul className="lender-features">
              <li>
                <FontAwesomeIcon icon={faCheckCircle} />
                <span>Emisión de cotizaciones y solicitudes en segundos</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} />
                <span>Cálculo de pagos con interés simple o compuesto</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} />
                <span>Balances financieros automáticos</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} />
                <span>
                  Control de recibos de efectivo de cobradores de campo
                </span>
              </li>
            </ul>
          </div>
          <div className="lender-card" data-aos="fade-left">
            <div className="lender-icon">
              <FontAwesomeIcon icon={faUserShield} />
            </div>
            <h3>Administración de Personal</h3>
            <div className="roles-grid">
              <div className="role-item">
                <FontAwesomeIcon icon={faUserTie} />
                <h4>Cobrador</h4>
                <p>Seguimiento de pagos y clientes</p>
              </div>
              <div className="role-item">
                <FontAwesomeIcon icon={faCashRegister} />
                <h4>Cajero/Vendedor</h4>
                <p>Gestión de ingresos y egresos</p>
              </div>
              <div className="role-item">
                <FontAwesomeIcon icon={faUserCog} />
                <h4>Administrador</h4>
                <p>Supervisión avanzada</p>
              </div>
            </div>
            <p className="role-extra">
              Gestión de comisiones para vendedores y cobradores
            </p>
          </div>
        </div>
        <div className="documents-section" data-aos="fade-up">
          <div className="documents-header">
            <FontAwesomeIcon icon={faFileAlt} />
            <h3>Documentación y Reportes</h3>
          </div>
          <div className="documents-grid">
            <div className="document-item">
              <FontAwesomeIcon icon={faReceipt} />
              <p>Impresión de recibos de pago</p>
            </div>
            <div className="document-item">
              <FontAwesomeIcon icon={faFileInvoiceDollar} />
              <p>Generación de estados de cuenta</p>
            </div>
          </div>
        </div>
        <div className="lenders-cta" data-aos="fade-up">
          <h3>¿Listo para optimizar tu negocio financiero?</h3>
          <p>
            Descubre cómo nuestra plataforma puede transformar tu gestión de
            préstamos
          </p>
          <a href="https://wa.me/50488632788" className="cta-button">
            <FontAwesomeIcon icon={fabWhatsapp} />
            Solicita una demostración
          </a>
        </div>
      </section>

      <section id="sistema" className="system-features">
        <h2 data-aos="fade-up">Sistema Profesional y Seguro</h2>
        <div className="features-container">
          <div className="system-card" data-aos="fade-up">
            <div className="system-icon">
              <FontAwesomeIcon icon={faUsersCog} />
            </div>
            <h3>Estructura Modular</h3>
            <ul className="system-list">
              <li>
                <FontAwesomeIcon icon={faCheck} /> 3 usuarios de caja
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} /> 1 administrador
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} /> 1 usuario de inventario
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} /> 1 contador
              </li>
            </ul>
          </div>
          <div className="system-card" data-aos="fade-up" data-aos-delay="200">
            <div className="system-icon">
              <FontAwesomeIcon icon={faChartLine} />
            </div>
            <h3>Reportes Financieros Completos</h3>
            <ul className="system-list">
              <li>
                <FontAwesomeIcon icon={faCheck} /> Libros Diario y Mayor
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} /> Reportes de ventas y compras
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} /> Control de gastos
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} /> Estado de resultados
              </li>
            </ul>
          </div>
          <div className="system-card" data-aos="fade-up" data-aos-delay="400">
            <div className="system-icon">
              <FontAwesomeIcon icon={faShieldAlt} />
            </div>
            <h3>Seguridad y Confiabilidad</h3>
            <ul className="system-list">
              <li>
                <FontAwesomeIcon icon={faCheck} /> Protección de datos
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} /> Respaldos automáticos
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} /> Control de accesos
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} /> Auditoría de cambios
              </li>
            </ul>
          </div>
        </div>
        <div className="system-cta" data-aos="fade-up">
          <h3>
            Confía en un sistema completo, diseñado para que tengas el control
            total de tu negocio
          </h3>
          <p>
            La tranquilidad de que todo fluye de forma ordenada y profesional.
          </p>
          <a href="https://wa.me/50488632788" className="cta-button">
            <FontAwesomeIcon icon={fabWhatsapp} />
            Solicita una demostración
          </a>
        </div>
      </section>

      <section id="contacto" className="contact">
        <h2 data-aos="fade-up">Contacta con Nosotros</h2>
        <div className="contact-content">
          <div className="contact-info" data-aos="fade-right">
            <h3>¿Listo para transformar tu negocio?</h3>
            <p>
              Desde nuestra sede en Roatán, Islas de la Bahía, Honduras,
              ofrecemos soluciones tecnológicas de primer nivel para toda
              América Latina.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <p>Roatán, Islas de la Bahía, Honduras</p>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={fabWhatsapp} />
                <p>+504 8863-2788</p>
              </div>
            </div>
            <a href="https://wa.me/50488632788" className="whatsapp-button">
              <FontAwesomeIcon icon={fabWhatsapp} />
              Chatear en WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <div className="footer-info">
            <div className="footer-logo">VISONIXRO</div>
            <p>Soluciones AppSheet Profesionales</p>
            <p>Roatán, Islas de la Bahía, Honduras</p>
          </div>
          <div className="footer-links">
            <h4>Enlaces Rápidos</h4>
            <a href="#inicio">Inicio</a>
            <a href="#servicios">Servicios</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#about">Nosotros</a>
            <a href="#tecnologias">Tecnologías</a>
            <a href="#contacto">Contacto</a>
          </div>
          <div className="footer-links">
            <h4>Servicios</h4>
            <a href="#servicios">Apps Móviles</a>
            <a href="#servicios">Gestión de Datos</a>
            <a href="#servicios">Automatización</a>
            <a href="#servicios">Consultoría</a>
          </div>
          <div className="footer-contact">
            <h4>Contacto</h4>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Roatán, Islas de la
              Bahía
            </p>
            <p>
              <FontAwesomeIcon icon={fabWhatsapp} /> +504 8863-2788
            </p>
            <div className="social-links">
              <a href="https://wa.me/50488632788">
                <FontAwesomeIcon icon={fabWhatsapp} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Visonixro. Todos los derechos reservados.</p>
        </div>
      </footer>

      <div className="fab-container" data-aos="fade-up">
        <button
          className="fab-main"
          onClick={toggleFab}
          aria-label="Toggle social media links"
          aria-expanded={isFabOpen}
        >
          <FontAwesomeIcon icon={faShareAlt} />
        </button>
        <div className={`fab-menu ${isFabOpen ? "active" : ""}`}>
          <a
            href="https://wa.me/50488632788"
            className="fab-item"
            target="_blank"
            title="WhatsApp"
          >
            <FontAwesomeIcon icon={fabWhatsapp} />
          </a>
          <a
            href="https://www.facebook.com/share/1FcnVQfbyP/"
            className="fab-item"
            target="_blank"
            title="Facebook"
          >
            <FontAwesomeIcon icon={fabFacebookF} />
          </a>
          <a
            href="https://www.instagram.com/visonixro?igsh=Z3hubWpwdzRpeDhm"
            className="fab-item"
            target="_blank"
            title="Instagram"
          >
            <FontAwesomeIcon icon={fabInstagram} />
          </a>
          <a
            href="https://x.com/ViSonixRo?t=uu5YQRmeTqZaGKuWjp8Mzg&s=09"
            className="fab-item"
            target="_blank"
            title="X"
          >
            <FontAwesomeIcon icon={fabTwitter} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
