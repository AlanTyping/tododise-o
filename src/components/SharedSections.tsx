import Link from "next/link";
import { occasions, orderSteps } from "@/data/storefront";
import { StepIcon } from "./icons";
import { SectionHeading } from "./SectionHeading";
import { WhatsAppLink } from "./WhatsAppLink";

export function OrderSteps({ category = "tu regalo único" }: { category?: string }) {
  return (
    <section id="como-comprar" className="order-section page-container">
      <div className="order-intro">
        <h2>Cómo pedir {category}</h2>
        <p>Desde la primera idea hasta que llega a tus manos, nos ocupamos de cada detalle.</p>
      </div>
      <div className="order-steps">
        {orderSteps.map((step, index) => (
          <article className="order-step" key={step.title}>
            <div className="step-top"><span className="step-number">0{index + 1}</span><span className="step-icon"><StepIcon name={step.icon} size={19} /></span></div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
      <Link className="button button-dark order-button" href="/categorias/vasos">Ver catálogo y empezar <span aria-hidden="true">→</span></Link>
    </section>
  );
}

export function OccasionCards({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`occasion-section${compact ? " occasion-section-compact" : ""}`}>
      <div className="page-container">
        <SectionHeading eyebrow="Momentos para compartir" title="Para cada celebración" />
        <div className="occasion-grid">
          {occasions.map((occasion) => (
            <article className="occasion-card" key={occasion.title}>
              <span className="occasion-icon"><StepIcon name={occasion.icon} size={19} /></span>
              <h3>{occasion.title}</h3>
              <p>{occasion.text}</p>
              {compact ? <Link href="/categorias/souvenirs">Consultar <span aria-hidden="true">›</span></Link> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IdeaBanner() {
  return (
    <section className="idea-wrap page-container">
      <div className="idea-banner">
        <div><p className="eyebrow">Hablemos de tu idea</p><h2>¿Tenés una idea en mente?<br />Te ayudamos a hacerla realidad.</h2></div>
        <WhatsAppLink className="button-whatsapp" message="Hola, tengo una idea para personalizar y me gustaría recibir asesoramiento.">Consultar por WhatsApp</WhatsAppLink>
      </div>
    </section>
  );
}

export function BulkOrderBanner() {
  return (
    <section className="bulk-banner">
      <div className="page-container bulk-inner">
        <div><p className="eyebrow eyebrow-light">Pedidos especiales</p><h2>¿Necesitás vasos en cantidad?</h2><p>Hacemos pedidos corporativos y para eventos.</p></div>
        <WhatsAppLink className="button-light" message="Hola, quisiera consultar por un pedido de vasos en cantidad.">Hablar por WhatsApp</WhatsAppLink>
      </div>
    </section>
  );
}
