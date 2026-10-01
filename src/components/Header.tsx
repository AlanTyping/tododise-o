"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, ShoppingBag, X } from "./icons";

const navItems = [
  { label: "Catálogo", href: "/categorias/vasos" },
  { label: "Vasos", href: "/categorias/vasos" },
  { label: "Termos", href: "/categorias/termos" },
  { label: "Souvenirs", href: "/categorias/souvenirs" },
  { label: "Corporativos", href: "/categorias/corporativos" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Todo Diseño & Más, inicio" onClick={() => setMenuOpen(false)}>
          <span className="brand-name">Todo Diseño</span>
          <span className="brand-tag">&amp; MÁS</span>
        </Link>
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav id="main-navigation" className={`main-navigation${menuOpen ? " is-open" : ""}`} aria-label="Navegación principal">
          {navItems.map((item, index) => (
            <Link key={`${item.label}-${index}`} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link className="button button-primary header-catalog" href="/categorias/vasos" onClick={() => setMenuOpen(false)}>
            <ShoppingBag size={15} aria-hidden="true" /> Ver Catálogo
          </Link>
        </nav>
      </div>
    </header>
  );
}
