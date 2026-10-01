"use client";

import Link from "next/link";
import { useState } from "react";
import type { StorefrontCategory, StorefrontProduct } from "@/data/storefront";
import { products } from "@/data/storefront";
import { ArrowRight, MessageCircle } from "./icons";
import { ProductArt } from "./ProductArt";
import { ProductCard } from "./ProductCard";
import { SectionHeading } from "./SectionHeading";
import { BulkOrderBanner, OccasionCards, OrderSteps } from "./SharedSections";
import { WhatsAppLink } from "./WhatsAppLink";

function CategoryHero({ category }: { category: StorefrontCategory }) {
  return (
    <section className="category-hero" style={{ "--category-tone": category.tone } as React.CSSProperties}>
      <div className="page-container category-hero-layout">
        <div className="category-hero-copy">
          <p className="eyebrow">Colección para compartir</p>
          <h1>{category.eyebrow}<br /><em>{category.secondLine}</em></h1>
          <p>{category.description}</p>
          <WhatsAppLink className="button-dark" message={`Hola, quiero consultar por ${category.name.toLowerCase()} personalizados.`}>Consultar por WhatsApp <ArrowRight size={15} /></WhatsAppLink>
        </div>
        <div className="category-hero-art" role="img" aria-label="Tres vasos personalizados con distintos diseños">
          {["Mica", "Equipo", "Olivia"].map((name, index) => <div key={name} className={`category-vessel category-vessel-${index + 1}`}><span>{name}</span></div>)}
          <p>Hecho para vos</p>
        </div>
      </div>
    </section>
  );
}

function FeaturedEdition({ product }: { product: StorefrontProduct }) {
  return (
    <section className="featured-edition">
      <div className="featured-edition-art"><ProductArt label="Tu marca" tone="#df806d" /><ProductArt label="Premium" tone="#f1e2d8" compact /><span className="edition-label">Edición destacada / 01</span></div>
      <div className="featured-edition-copy">
        <p className="eyebrow">El favorito de la colección</p>
        <h2>Vaso Térmico Premium Personalizado</h2>
        <p>Mantené tu bebida a la temperatura justa y llevá tu identidad a donde vayas. Un regalo útil, elegante y hecho especialmente para vos.</p>
        <div className="edition-price"><strong>{product.price}</strong><span>500 ml · acero inoxidable</span></div>
        <Link href={`/productos/${product.slug}`} className="button button-primary">Consultar este vaso <MessageCircle size={15} /></Link>
      </div>
    </section>
  );
}

const filterAliases: Record<string, string> = {
  "Vasos térmicos": "termic",
  "Vasos de vidrio": "vidrio",
  "Vasos con tapa": "tapa",
  Cumpleaños: "cumple",
  "Acero inoxidable": "inox",
  Regalos: "personalizado",
  Kits: "kit",
  Sets: "set",
  Botellas: "botella",
  Empresas: "corporativo",
  Eventos: "cumple",
};

function normalize(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

export function CategoryExperience({ category }: { category: StorefrontCategory }) {
  const [active, setActive] = useState("Todos");
  const baseProducts = category.slug === "vasos" ? products.slice(0, 9) : products.filter((product) => product.category === category.slug);
  const allProducts = baseProducts.length > 0 ? baseProducts : products.slice(0, 6);
  const filterTerm = normalize(filterAliases[active] ?? active);
  const visibleProducts = active === "Todos"
    ? allProducts
    : allProducts.filter((product) => normalize(`${product.name} ${product.category}`).includes(filterTerm));
  const filters = ["Todos", ...category.filters];

  return (
    <main>
      <CategoryHero category={category} />
      <section className="category-discovery page-container">
        <SectionHeading eyebrow="Encontrá tu estilo" title="Una forma para cada idea" aside={<p className="section-note">Todos nuestros productos se pueden adaptar a tu historia, tu marca o tu celebración.</p>} />
        <div className="filter-pills" role="group" aria-label={`Filtrar ${category.name.toLowerCase()}`}>
          {filters.map((filter) => <button type="button" key={filter} className={`filter-pill${active === filter ? " is-active" : ""}`} aria-pressed={active === filter} onClick={() => setActive(filter)}>{filter}</button>)}
        </div>
        <FeaturedEdition product={products[0]} />
      </section>
      <section className="collection-section page-container">
        <SectionHeading eyebrow="La colección completa" title="Elegí tu próximo favorito" aside={<span className="section-note">{visibleProducts.length} modelos disponibles</span>} />
        {visibleProducts.length ? <div className="catalog-grid" aria-live="polite">{visibleProducts.map((product) => <ProductCard key={product.slug} product={product} />)}</div> : <p className="empty-results" role="status">No encontramos productos con ese filtro. Probá otra categoría.</p>}
      </section>
      <OrderSteps category={category.name.toLowerCase()} />
      <OccasionCards compact />
      <BulkOrderBanner />
      <section className="related-category page-container"><div><p className="eyebrow">También te puede gustar</p><h2>Seguí explorando</h2></div><div className="related-category-links"><Link href="/categorias/termos">Termos</Link><Link href="/categorias/mates">Mates</Link><Link href="/categorias/combos">Combos</Link><Link href="/categorias/souvenirs">Souvenirs</Link></div></section>
    </main>
  );
}
