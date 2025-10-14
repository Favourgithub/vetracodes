import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { Helmet } from "react-helmet-async";

<Helmet>
  <meta property="og:title" content="VetraCodes | Web Development" />
  <meta property="og:description" content="VetraCodes builds responsive, SEO-optimized websites and digital branding for small businesses and startups." />
  <meta name="keywords" content="web development, website design, VetraCodes, portfolio, e-commerce website, React developer, freelance developer"/>
  <meta property="og:image" content={logo} />
  <meta property="og:type" content="website" />
  <meta name="author" content="VetraCodes" />
  <link rel="canonical" href="https://vetracodes.netlify.app/" />
</Helmet>

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
  ];

  return (
    <nav
      aria-label="Main Navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "md:bg-transparent bg-background/95 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src={logo}
                alt="VetraCodes Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-2xl font-bold">VetraCodes</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path ? "text-primary" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button className="bg-primary hover:bg-primary/90" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path ? "text-primary" : "text-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button className="w-full mt-4 bg-primary hover:bg-primary/90" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;