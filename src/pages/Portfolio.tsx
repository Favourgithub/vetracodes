import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import loregoldluxe from "@/assets/portfolio/loregoldluxe.png";
import haventrails from "@/assets/portfolio/haventrails.png";
import skyrise from "@/assets/portfolio/skyrise.png";
import favourport from "@/assets/portfolio/favourport.png";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A modern online store with seamless checkout and inventory management.",
      color: "from-blue-500 to-cyan-500",
      image: loregoldluxe,
      link: "https://loregoldluxe.com",
    },
    {
      title: "Haven Trails",
      category: "Web Development",
      description: "A modern travel discovery website that showcases destinations and itineraries through a clean, responsive design.",
      color: "from-purple-500 to-pink-500",
      image: haventrails,
      link: "https://haventrails.netlify.app/",
    },
    {
      title: "Skyrise",
      category: "Mobile Design",
      description: "Modern real-estate marketing platform that showcases pre-sale condos, townhomes, and new construction homes.",
      color: "from-green-500 to-emerald-500",
      image: skyrise,
      link: "https://skyrisee.netlify.app/",
    },
    {
      title: "Portfolio Website",
      category: "Web Design",
      description: "A clean, modern portfolio site built to highlight personal projects, skills, and professional background.",
      color: "from-orange-500 to-red-500",
      image: favourport,
      link: "https://favourport.netlify.app/",
    },
    // {
    //   title: "Blog Website",
    //   category: "Mobile Development",
    //   description: "Comprehensive fitness app with workout plans and progress tracking.",
    //   color: "from-indigo-500 to-blue-500",
    //   link: "#",
    // },
    // {
    //   title: "Corporate Rebrand",
    //   category: "Branding",
    //   description: "Complete brand identity overhaul for a growing tech company.",
    //   color: "from-pink-500 to-rose-500",
    //   link: "#",
    // },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-background to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Portfolio
            </span>
            <h1 className="text-5xl md:text-6xl font-bold">
              Our Latest Work
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our portfolio of successful projects that showcase our expertise in creating exceptional digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 ">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group bg-card border-border hover:border-primary transition-all duration-300 overflow-hidden hover-scale animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`h-48 sm:h-72 relative overflow-hidden`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="bg-white text-black hover:bg-white/90"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        View Project
                      </a>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Projects Delivered", value: "100+" },
              { label: "Client Satisfaction", value: "98%" },
              { label: "Industry Awards", value: "10+" },
              { label: "Years Experience", value: "5+" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center space-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Want to Create Something Amazing?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's collaborate on your next project and bring your vision to life.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <a href="/contact">Start Your Project</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;