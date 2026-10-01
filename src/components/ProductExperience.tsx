"use client";

import Link from "next/link";
import { useState } from "react";
import { personalizationIdeas, productColors, products, type StorefrontProduct } from "@/data/storefront";
import { ArrowRight, Heart, MessageCircle, Sparkles } from "./icons";
import { ProductCard } from "./ProductCard";
import { SectionHeading } from "./SectionHeading";
import { whatsappHref } from "@/lib/links";

const tabs = ["Descripción", "Características", "Personalización", "Envío y entrega"];

function ProductTabs() {
  const [active, setActive] = useState(0);
  const tabContents = [
    { title: "Un objeto cotidiano, hecho especial", text: "Una pieza pensada para acompañarte todos los días y guardar esos pequeños momentos que importan. Elegí un color, compartinos tu idea y preparamos un diseño único, con terminaciones cuidadas y una personalización que se siente propia." },
    { title: "Detalles que hacen la diferencia", text: "Diseñado para ser útil, duradero y fácil de llevar. Elegí el tono que más te guste y sumale una personalización con detalles hechos para vos." },
    { title: "Una idea que lleva tu nombre", text: "Podés sumar nombres, iniciales, una fecha, un logo o una frase. Nuestro equipo te acompaña con una propuesta digital antes de producir." },
    { title: "Lo recibís donde estés", text: "Coordinamos entregas en Buenos Aires y envíos a todo el país. Para pedidos de 10 unidades o más, consultanos por opciones y tiempos especiales." },
  ];
  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const current = Number((event.target as HTMLButtonElement).dataset.index ?? active);
    const next = event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : (current + (event.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length;
    setActive(next);
    document.getElementById(`product-tab-${next}`)?.focus();
  };

  return (
    <section className="product-information page-container">
      <div className="product-tabs" role="tablist" aria-label="Información del producto" onKeyDown={onKeyDown}>
        {tabs.map((tab, index) => <button key={tab} id={`product-tab-${index}`} data-index={index} type="button" role="tab" aria-selected={active === index} aria-controls="product-tab-panel" tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)}>{tab}</button>)}
      </div>
      <div id="product-tab-panel" role="tabpanel" aria-labelledby={`product-tab-${active}`} tabIndex={0} className="product-tab-panel">
        <h2>{tabContents[active].title}</h2><p>{tabContents[active].text}</p>
      </div>
    </section>
  );
}

type ProductColor = (typeof productColors)[number];

function ProductGallery({ product, selectedColor, onSelectColor }: { product: StorefrontProduct; selectedColor: ProductColor; onSelectColor: (color: ProductColor) => void }) {
  return (
    <div className="product-gallery">
      <div className="main-product-visual" style={{ "--selected-tone": selectedColor.hex } as React.CSSProperties}>
        <span className="product-badge"><Sparkles size={12} /> Personalizable</span>
        <div className="gallery-tumbler"><span>tu<br />nombre</span></div>
        <span className="main-visual-signature">Todo Diseño &amp; Más</span>
      </div>
      <p className="visual-caption">Vista frontal del {product.name} Personalizado</p>
      <div className="gallery-thumbnails" role="group" aria-label="Variantes de color">
        {productColors.slice(0, 4).map((color) => <button key={color.name} type="button" aria-label={`Ver variante ${color.name}`} aria-pressed={selectedColor.name === color.name} className={`gallery-thumb${selectedColor.name === color.name ? " is-selected" : ""}`} style={{ "--thumb-tone": color.hex } as React.CSSProperties} onClick={() => onSelectColor(color)}><span /></button>)}
      </div>
    </div>
  );
}

function ProductSummary({ product, selectedColor, onSelectColor }: { product: StorefrontProduct; selectedColor: ProductColor; onSelectColor: (color: ProductColor) => void }) {
  const [favorite, setFavorite] = useState(false);
  return (
    <div className="product-summary">
      <p className="eyebrow">{product.category}</p>
      <h1>{product.name}<br />Personalizado</h1>
      <p className="price-consult">Precio a consultar</p>
      <p className="product-description">Ideal para regalar o usar en el día a día. Disponible en distintos colores y con personalización de nombre, frase o diseño.</p>
      <div className="swatch-field">
        <p>Color · <span>{selectedColor.name}</span></p>
        <div className="color-swatches" role="group" aria-label="Elegí un color">
          {productColors.map((color) => <button type="button" key={color.name} className={`color-swatch${selectedColor.name === color.name ? " is-selected" : ""}`} aria-label={color.name} aria-pressed={selectedColor.name === color.name} style={{ "--swatch-color": color.hex } as React.CSSProperties} onClick={() => onSelectColor(color)} />)}
        </div>
      </div>
      <p className="minimum-order"><strong>Pedido mínimo:</strong> 1 unidad. Descuentos desde 10 unidades.</p>
      <a className="button button-whatsapp product-whatsapp" href={whatsappHref(`Hola, quiero consultar por ${product.name} en color ${selectedColor.name}.`)} target="_blank" rel="noreferrer"><MessageCircle size={17} fill="currentColor" /> Consultar por WhatsApp</a>
      <button className={`button button-outline product-favorite${favorite ? " is-favorite" : ""}`} type="button" aria-pressed={favorite} onClick={() => setFavorite((saved) => !saved)}><Heart size={16} fill={favorite ? "currentColor" : "none"} /> {favorite ? "Guardado en favoritos" : "Guardar en favoritos"}</button>
      <p className="reply-note">Te respondemos personalmente y te ayudamos a elegir el diseño ideal.</p>
    </div>
  );
}

function PersonalizationOptions() {
  return (
    <section className="personalization-options page-container">
      <p className="eyebrow">Hecho para vos</p>
      <h2>Opciones de Personalización</h2>
      <p className="personalization-intro">No hay dos historias iguales. Elegí el estilo que más se parezca a la tuya y lo hacemos realidad.</p>
      <div className="personalization-grid">
        {personalizationIdeas.map((idea) => <article className="personalization-option" key={idea.title}><div className="option-visual" style={{ "--option-tone": idea.tone } as React.CSSProperties}><span>{idea.sample}</span></div><div><p className="product-category-label">{idea.label}</p><h3>{idea.title}</h3><p>{idea.copy}</p></div></article>)}
      </div>
    </section>
  );
}

export function ProductExperience({ product }: { product: StorefrontProduct }) {
  const [selectedColor, setSelectedColor] = useState(productColors[0]);
  const related = products.filter((item) => item.slug !== product.slug).slice(0, 4);
  return (
    <main className="product-page">
      <div className="page-container"><nav className="breadcrumbs" aria-label="Ruta de navegación"><Link href="/">Inicio</Link><span>›</span><Link href="/categorias/vasos">Catálogo</Link><span>›</span><Link href={`/categorias/${product.category}`}>{product.category}</Link><span>›</span><span aria-current="page">{product.name} Personalizado</span></nav></div>
      <section className="product-detail page-container">
        <ProductGallery product={product} selectedColor={selectedColor} onSelectColor={setSelectedColor} />
        <ProductSummary product={product} selectedColor={selectedColor} onSelectColor={setSelectedColor} />
      </section>
      <ProductTabs />
      <PersonalizationOptions />
      <section className="related-products page-container">
        <SectionHeading eyebrow="Para seguir mirando" title="También te puede interesar" aside={<Link href="/categorias/vasos" className="text-link">Ver catálogo completo <ArrowRight size={14} /></Link>} />
        <div className="related-grid">{related.map((item) => <ProductCard key={item.slug} product={item} />)}</div>
      </section>
    </main>
  );
}
