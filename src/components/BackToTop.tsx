import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const BRAND = "#AE31A6";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Наверх"
      className="fixed right-4 bottom-4 z-[90] flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg transition hover:opacity-90 sm:right-5 sm:bottom-5"
      style={{ backgroundColor: BRAND }}
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );
}
