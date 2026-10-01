import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "./icons";
import { whatsappHref } from "@/lib/links";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main page-container">
        <div className="footer-about">
          <Link href="/" className="footer-brand">Todo Diseño<span>&amp; MÁS</span></Link>
          <p>Creamos regalos únicos que cuentan historias. Especialistas en personalización láser y sublimación con calidad premium.</p>
          <div className="social-links" aria-label="Redes sociales">
            <a href="https://instagram.com" aria-label="Instagram"><span className="social-camera" /></a>
            <a href="https://facebook.com" aria-label="Facebook"><span className="social-letter">f</span></a>
            <a href={whatsappHref("Hola, quiero conocer más sobre sus productos.")} aria-label="WhatsApp"><MessageCircle size={17} /></a>
          </div>
        </div>
        <div className="footer-column">
          <h2>Categorías</h2>
          <Link href="/categorias/vasos">Vasos personalizados</Link>
          <Link href="/categorias/termos">Termos &amp; mates</Link>
          <Link href="/categorias/combos">Regalos personalizados</Link>
          <Link href="/categorias/souvenirs">Souvenirs para eventos</Link>
          <Link href="/categorias/corporativos">Regalos empresariales</Link>
        </div>
        <div className="footer-column">
          <h2>Información</h2>
          <Link href="/#como-comprar">Cómo comprar</Link>
          <Link href="/#preguntas">Preguntas frecuentes</Link>
          <Link href="/#nosotros">Sobre nosotros</Link>
          <Link href="/categorias/vasos">Catálogo online</Link>
        </div>
        <div className="footer-column footer-contact">
          <h2>Contacto</h2>
          <p><MapPin size={15} /> Buenos Aires, Argentina</p>
          <a href="tel:+541100000000"><Phone size={15} /> +54 11 0000-0000</a>
          <a href="mailto:hola@tododiseno.com.ar"><Mail size={15} /> hola@tododiseno.com.ar</a>
        </div>
      </div>
      <div className="footer-bottom page-container">
        <span>© 2026 Todo Diseño &amp; Más. Todos los derechos reservados.</span>
        <div><a href="#terminos">Términos y Condiciones</a><a href="#privacidad">Privacidad</a></div>
      </div>
    </footer>
  );
}
