import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Award } from "lucide-react";
import teamImage from "@/assets/team-image.jpg";
import tapha from "@/assets/team/tapha.jpg";
import subomi from "@/assets/team/subomi.jpg";
import favour from "@/assets/team/favour.jpg";
import sunkanmi from "@/assets/team/sunkanmi.jpg";

const About = () => {
  const team = [
    {
      name: "Olasubomi Ogunsakin",
      role: "Project Manager",
      bio: "Ensuring seamless execution and client satisfaction on every project.",
      image: subomi,
    },
    {
      name: "Favour Ajayi",
      role: "Lead Developer",
      bio: "Full-stack expert specializing in modern web technologies.",
      image: favour,
    },
    {
      name: "Sunkanmi Akindiya",
      role: "UI/UX Designer",
      bio: "Passionate about creating intuitive and beautiful user experiences.",
      image: sunkanmi,
    },
    {
      name: "Mustapha Oladimeji",
      role: "Creative Director",
      bio: "Expert in branding and creative direction.",
      image: tapha,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-background to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h1 className="text-5xl md:text-6xl font-bold">
              Crafting Digital Excellence Since 2020
            </h1>
            <p className="text-xl text-muted-foreground">
              We're a team of passionate designers, developers, and strategists dedicated to helping businesses thrive in the digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <Card className="bg-card border-border p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
                    <p className="text-muted-foreground">
                      At VetraCodes, our mission is to help businesses grow online through professional web design, UI/UX development, and digital strategy.
                      We craft beautiful, high-performing websites that tell your brand’s story, attract customers, and drive measurable results.
                      Our goal is to make every digital experience intuitive, engaging, and aligned with your business objectives.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-card border-border p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Eye className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
                    <p className="text-muted-foreground">
                      Our vision is to become a leading web design and development agency recognized for building powerful, user-focused digital experiences.
                      We aim to redefine how brands connect with their audiences by combining creative design, modern technology, and data-driven strategy 
                      to deliver lasting impact in the digital world.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-card border-border p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Our Values</h3>
                    <p className="text-muted-foreground">
                      Integrity, creativity, collaboration, and excellence guide everything we do. We believe in building long-term partnerships based on trust and results.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="animate-fade-in-up">
              <img
                src={teamImage}
                alt="Our team"
                className="rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Team
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Meet the Experts
            </h2>
            <p className="text-xl text-muted-foreground">
              A talented group of professionals passionate about creating exceptional digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary transition-all duration-300 hover-scale animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Projects Completed", value: "100+" },
              { label: "Happy Clients", value: "100+" },
              { label: "Team Members", value: "15+" },
              { label: "Awards Won", value: "10+" },
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
    </div>
  );
};

export default About;