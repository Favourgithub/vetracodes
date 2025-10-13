import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles, Palette, Code, Zap, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  const features = [
    {
      icon: Palette,
      title: "Creative Design",
      description: "Stunning visual designs that capture your brand essence and engage your audience.",
    },
    {
      icon: Code,
      title: "Expert Development",
      description: "Clean, efficient code that brings your vision to life with cutting-edge technology.",
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Lightning-fast websites optimized for speed and exceptional user experience.",
    },
    {
      icon: Users,
      title: "User-Centric",
      description: "Designs focused on delivering intuitive experiences that users love.",
    },
    {
      icon: TrendingUp,
      title: "Growth Focused",
      description: "Strategic solutions designed to drive engagement and business growth.",
    },
    {
      icon: Sparkles,
      title: "Modern Solutions",
      description: "Stay ahead with the latest web technologies and design trends.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-accent/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block">
                <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
                  Web Design Agency in Nigeria
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Transform Your{" "}
                <span className="text-gradient">Digital Presence</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                We build exceptional websites that elevate your brand and drive results. From concept to launch, we're your partners in success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 group">
                    Get Started
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button size="lg" variant="outline" className="border-border hover:border-primary">
                    View Our Work
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative animate-fade-in-up">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>
              <img
                src={heroImage}
                alt="Design workspace"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Features
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Why Choose VetraCodes?
            </h2>
            <p className="text-xl text-muted-foreground">
              We help startups and businesses grow online by building fast, SEO-optimized, and mobile-ready websites
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary transition-all duration-300 hover-scale animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's collaborate to create something extraordinary. Get in touch today and let's bring your vision to life.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Start Your Project
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;