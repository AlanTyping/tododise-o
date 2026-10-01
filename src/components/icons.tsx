import {
  ArrowRight,
  Check,
  ChevronDown,
  Heart,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Palette,
  Phone,
  ShoppingBag,
  Sparkles,
  Star,
  Tag,
  Truck,
  Users,
  X,
  Gift,
  type LucideIcon,
} from "lucide-react";

export {
  ArrowRight,
  Check,
  ChevronDown,
  Heart,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Palette,
  Phone,
  ShoppingBag,
  Sparkles,
  Star,
  Tag,
  Truck,
  Users,
  X,
  Gift,
};

export function StepIcon({ name, size = 19 }: { name: string; size?: number }) {
  const iconMap: Record<string, LucideIcon> = {
    message: MessageCircle,
    palette: Palette,
    check: Check,
    truck: Truck,
    gift: Gift,
    star: Star,
    users: Users,
    tag: Tag,
  };
  const Icon = iconMap[name] ?? Sparkles;
  return <Icon aria-hidden="true" size={size} strokeWidth={1.6} />;
}
