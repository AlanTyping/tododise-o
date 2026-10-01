import { notFound } from "next/navigation";
import { CategoryExperience } from "@/components/CategoryExperience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { categories } from "@/data/storefront";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: PageProps<"/categorias/[slug]">) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);
  return { title: category ? `${category.name} personalizados` : "Categorías", description: category?.description };
}

export default async function CategoryPage({ params }: PageProps<"/categorias/[slug]">) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);
  if (!category) notFound();
  return <><Header /><CategoryExperience category={category} /><Footer /></>;
}
