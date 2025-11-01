import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const navLinks = [
    { href: "/", label: "Ana Sayfa" },
    { href: "/kurumsal", label: "Kurumsal" },
    { href: "/urunler", label: "Ürünler" },
    { href: "/cografi-isaret", label: "Coğrafi İşaret" },
    { href: "/galeri", label: "Galeri" },
    { href: "/iletisim", label: "İletişim" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background shadow-lg" : "bg-background/90 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-2 py-1">
            <Leaf className="h-8 w-8 text-primary" data-testid="icon-logo" />
            <span className="font-serif text-xl font-bold text-foreground" data-testid="text-brand">
              MİSPİR GIDA
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant="ghost"
                  className={location === link.href ? "bg-accent" : ""}
                  data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover-elevate active-elevate-2 rounded-md"
            data-testid="button-menu-toggle"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                  <Link href={link.href}>
                    <Button
                      variant="ghost"
                      className={`w-full justify-start ${location === link.href ? "bg-accent" : ""}`}
                      onClick={() => setIsOpen(false)}
                      data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
