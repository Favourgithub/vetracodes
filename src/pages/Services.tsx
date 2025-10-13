import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Palette,
  Code,
  Smartphone,
  ShoppingCart,
  Search,
  Megaphone,
  Layers,
  Workflow,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Web Design",
      description:
        "Beautiful, responsive designs that capture your brand's essence and engage your audience across all devices.",
      features: ["Custom UI/UX", "Responsive Design", "Brand Integration", "Wireframing"],
    },
    {
      icon: Code,
      title: "Web Development",
      description:
        "Robust, scalable web applications built with modern technologies for optimal performance and user experience.",
      features: ["Full-Stack Development", "API Integration", "Performance Optimization", "Maintenance"],
    },
    {
      icon: Smartphone,
      title: "Mobile Design",
      description:
        "Native and cross-platform mobile experiences that deliver seamless functionality on iOS and Android.",
      features: ["iOS & Android", "Cross-Platform", "App UI/UX", "Prototyping"],
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description:
        "Complete e-commerce platforms with secure payment systems and inventory management for online retail success.",
      features: ["Shopping Cart", "Payment Gateway", "Product Management", "Analytics"],
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Improve your search engine rankings and drive organic traffic with our comprehensive SEO strategies.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Content Strategy"],
    },
    // {
    //   icon: Megaphone,
    //   title: "Digital Marketing",
    //   description:
    //     "Strategic marketing campaigns that boost brand awareness and drive conversions across digital channels.",
    //   features: ["Social Media", "Content Marketing", "Email Campaigns", "Analytics"],
    // },
    // {
    //   icon: Layers,
    //   title: "Brand Identity",
    //   description:
    //     "Comprehensive branding solutions that establish a strong, memorable identity for your business.",
    //   features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Marketing Materials"],
    // },
    {
      icon: Workflow,
      title: "Consulting",
      description:
        "Expert guidance on digital strategy, technology stack, and best practices for your online presence.",
      features: ["Strategy Planning", "Tech Consulting", "UX Audit", "Growth Strategy"],
    },
  ];

  const testimonials = [
    {
      quote:
        "Exceptional service from start to finish. VetraCodes delivered a stunning web design that balances aesthetics with performance. Their communication and professionalism made the whole process smooth and enjoyable.",
      author: "James Peterson",
      company: "TechStart Inc.",
    },
    {
      quote:
        "Our new online store is everything we hoped for and more! [Your Agency Name] designed a seamless shopping experience with an intuitive UI/UX that improved our conversion rate. Highly recommend them for any e-commerce project.",
      author: "Lisa Anderson",
      company: "Creative Solutions",
    },
    {
      quote:
        "As a small business, we wanted a web design partner who truly cared about our success.VetraCodes delivered professional, creative, and results-driven. Our traffic and inquiries have grown steadily since launch.",
      author: "Robert Kim",
      company: "Global Ventures",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-background to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h1 className="text-5xl md:text-6xl font-bold">
              Comprehensive Digital Solutions
            </h1>
            <p className="text-xl text-muted-foreground">
              From design to development, marketing to strategy - we offer end-to-end services to help your business succeed online.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary transition-all duration-300 hover-scale animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it - hear from some of our satisfied clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-card border-border animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    {/* <p className="font-semibold">{testimonial.author}</p> */}
                    {/* <p className="text-sm text-muted-foreground">{testimonial.company}</p> */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Elevate Your Digital Presence?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss how our services can help you achieve your business goals.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get in Touch
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;