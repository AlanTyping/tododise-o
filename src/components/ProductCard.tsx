import Link from "next/link";
import { categories, type StorefrontProduct } from "@/data/storefront";
import { ArrowRight } from "./icons";
import { StockPhoto } from "./StockPhoto";

export function ProductCard({ product, variant = "catalog" }: { product: StorefrontProduct; variant?: "catalog" | "featured" }) {
  const categoryLabel = categories.find((category) => category.slug === product.category)?.name ?? product.category;
  return (
    <article className={`product-card product-card-${variant}`}>
      <Link className="product-image" href={`/productos/${product.slug}`} aria-label={`Ver ${product.name}`} style={{ "--product-tone": product.accent } as React.CSSProperties}>
        <StockPhoto src={product.image} alt={product.imageAlt} name={product.name} accent={product.accent} position={product.imagePosition} />
        {variant === "featured" ? <span className="product-badge">Personalizable</span> : null}
      </Link>
      <div className="product-card-info">
        <p className="product-category-label">{categoryLabel}</p>
        <Link href={`/productos/${product.slug}`} className="product-name">{product.name}{variant === "featured" ? " Personalizado" : ""}</Link>
        {variant === "featured" ? <p className="product-custom-note">Nombre + frase</p> : null}
        <div className="product-card-bottom">
          <span>{product.price ?? "Consultar precio"}</span>
          <Link className="product-arrow" href={`/productos/${product.slug}`} aria-label={`Ver detalle de ${product.name}`}><ArrowRight size={17} /></Link>
        </div>
      </div>
    </article>
  );
}
