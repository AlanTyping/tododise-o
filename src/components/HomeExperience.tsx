import Link from "next/link";
import { categories, personalizationIdeas, products } from "@/data/storefront";
import { ArrowRight, Check, Sparkles } from "./icons";
import { ProductCard } from "./ProductCard";
import { SectionHeading } from "./SectionHeading";
import { IdeaBanner, OccasionCards, OrderSteps } from "./SharedSections";
import { WhatsAppLink } from "./WhatsAppLink";

function HomeHero() {
  return (
    <section className="home-hero">
      <div className="page-container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Hecho para celebrar</p>
          <h1>Objetos que se<br />convierten en<br /><em>recuerdos.</em></h1>
          <p className="hero-description">Vasos, termos, mates y regalos personalizados para cada momento especial. Diseñamos detalles con intención, para que duren mucho más que un día.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/categorias/vasos">Explorar catálogo <ArrowRight size={16} /></Link>
            <WhatsAppLink className="button-outline" message="Hola, quiero consultar por regalos personalizados.">Consultar por WhatsApp</WhatsAppLink>
          </div>
          <div className="hero-promises"><span><Check size={14} /> Diseño personalizado</span><span><Check size={14} /> Hecho en Argentina</span></div>
        </div>
        <div className="hero-art" role="img" aria-label="Dos vasos ilustrados con frases personalizadas">
          <span className="hero-art-pill">Diseño + emoción</span>
          <div className="hero-art-back" />
          <div className="hero-card hero-card-back"><span className="hero-product-label"><em>para vos</em><small>Todo diseño</small></span></div>
          <div className="hero-card hero-card-front"><span className="hero-product-label">tu momento</span></div>
          <p className="hero-art-caption"><Sparkles size={14} /> Cada pieza tiene una historia</p>
        </div>
      </div>
    </section>
  );
}

function CategoryGrid() {
  return (
    <section className="category-section page-container">
      <SectionHeading eyebrow="Elegí tu próxima historia" title="Encontrá lo que buscás" aside={<Link href="/categorias/vasos" className="text-link">Ver todas las categorías <ArrowRight size={14} /></Link>} />
      <div className="category-grid">
        {categories.map((category, index) => (
          <Link href={`/categorias/${category.slug}`} className={`category-tile category-tone-${index + 1}`} key={category.slug}>
            <span className="category-index">0{index + 1} / 06</span>
            <div><h3>{category.name}</h3><p>{["Para acompañarte todos los días", "Diseño que va con vos", "Regalos pensados de a dos", "Un detalle para recordar", "Celebrá con tu propio estilo", "Tu marca, hecha objeto"][index]}</p></div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function FeaturedProducts() {
  return (
    <section className="featured-section">
      <div className="page-container">
        <SectionHeading eyebrow="Los favoritos" title="Productos destacados" />
        <div className="featured-grid">
          {products.slice(0, 4).map((product) => <ProductCard key={product.slug} product={product} variant="featured" />)}
        </div>
      </div>
    </section>
  );
}

function PersonalizationBanner() {
  return (
    <section className="personalize-banner">
      <div className="page-container personalize-layout">
        <div className="personalize-copy">
          <p className="eyebrow eyebrow-light">Lo hacemos tuyo</p>
          <h2>Todo se puede<br />personalizar.</h2>
          <p>Tu nombre, una frase, una temática, los colores de tu marca. Contanos la idea y la convertimos en un objeto que se siente propio.</p>
          <ul>
            <li><Check size={15} /> Diseños para momentos especiales</li>
            <li><Check size={15} /> Opciones para eventos y empresas</li>
            <li><Check size={15} /> Acompañamiento personalizado</li>
          </ul>
          <Link className="button button-dark" href="/categorias/corporativos">Quiero personalizar <ArrowRight size={15} /></Link>
        </div>
        <div className="personalize-art" aria-label="Tres ideas de diseño personalizable">
          {personalizationIdeas.map((idea, index) => (
            <div className={`personalize-card personalize-card-${index + 1}`} key={idea.title}>
              <div className="personalize-card-art" style={{ "--personalize-tone": idea.tone } as React.CSSProperties}><span>{idea.sample}</span></div>
              <p>{["Nombre & fecha", "Logo corporativo", "Temática especial"][index]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeExperience() {
  return (
    <main>
      <HomeHero />
      <CategoryGrid />
      <FeaturedProducts />
      <PersonalizationBanner />
      <OccasionCards />
      <OrderSteps />
      <IdeaBanner />
    </main>
  );
}
