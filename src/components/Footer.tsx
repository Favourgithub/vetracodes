import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { SiTiktok, SiInstagram, SiX, SiWhatsapp } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src={logo}
                alt="DesignFlow Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-2xl font-bold">VetraCodes</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Transforming ideas into stunning digital experiences.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Web Design</li>
              <li className="text-sm text-muted-foreground">Mobile App Development</li>
              <li className="text-sm text-muted-foreground">Branding</li>
              <li className="text-sm text-muted-foreground">UI/UX Design</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/2347016527825"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <SiWhatsapp className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://x.com/vetracodes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <SiX className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://instagram.com/vetracodes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <SiInstagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://tiktok.com/@vetracodes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <SiTiktok className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} VetraCodes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;