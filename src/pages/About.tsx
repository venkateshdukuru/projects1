import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Target, Lightbulb, Award, Code, TrendingUp, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useRef } from "react";


const About = () => {
  const skills = [
    'React', 'TypeScript', 'Node.js', 'Python', 'JavaScript', 'HTML/CSS',
    'MongoDB', 'PostgreSQL', 'Git', 'Docker', 'AWS', 'Machine Learning', 
    'Artficial Intelligence', 'Generative Ai', 'prompt Engineering', 'RAG'
  ];


  const values = [
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Quality Code',
      description: 'We deliver clean, maintainable, and well-documented code solutions.'
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: 'Innovation',
      description: 'Always exploring cutting-edge technologies and creative solutions.'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Community',
      description: 'Building a supportive ecosystem for developers to learn and grow.'
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Impact',
      description: 'Creating solutions that make a real difference in developers\' lives.'
    }
  ];


const team = [
  {
    name: 'Dukuru Venkatesh',
    role: 'Founder & CEO',
    description: 'Visionary leader with expertise in AI/ML development and product strategy. Passionate about democratizing access to quality code.',
    skills: ['Strategic Planning', 'Generative Development', 'Product Vision', 'Team Leadership'],
    image: 'bg-blue-500/20'
  },
  {
    name: 'Sastha Ganapathi',
    role: 'Full stack Developer',
    description: 'Visionary leader with expertise in full-stack development and product strategy. Passionate about democratizing access to quality code.',
    skills: ['Strategic Planning', 'Full-Stack Development', 'Business Strategy', 'Team Leadership'],
    image: 'bg-blue-500/20'
  },
  {
    name: 'Sanvita Reddy',
    role: 'HR Manager',
    description: 'Dynamic executive driving growth and operational excellence. Expert in scaling tech businesses and building developer communities.',
    skills: ['Business Strategy', 'Operations', 'Community Building', 'Project management'],
    image: 'bg-purple-500/20'
  },
  {
    name: 'Venkata Naga Devaki Patchipulusu ',
    role: 'Full Stack developer',
    description: 'Dynamic executive driving growth and operational excellence. Expert in scaling tech businesses and building developer communities.',
    skills: ['Full stack Developer', 'React', 'JAVA Development', 'Python Development','Typescript'],
    image: 'bg-purple-500/20'
  },
  {
    name: 'Chiranjeevi naidu busala',
    role: 'Frontend developer',
    description: 'Dynamic executive driving growth and operational excellence. Expert in scaling tech businesses and building developer communities.',
    skills: ['Mechnaical Engineer', 'Robotics', 'JAVA Development', 'Clients Engagement'],
    image: 'bg-purple-500/20'
  },
  {
    name: 'Syam Sundar',
    role: 'Backend Developer',
    description: 'Dynamic executive driving growth and operational excellence. Expert in scaling tech businesses and building developer communities.',
    skills: ['Backend Developer', 'Node.js', 'Python Development', 'AI/ML Development'],
    image: 'bg-purple-500/20'
  },
  {
    name: 'Vennela pavuloori',
    role: 'Project Manager',
    description: 'Dynamic executive driving growth and operational excellence. Expert in scaling tech businesses and building developer communities.',
    skills: ['Business Strategy', 'Operations', 'Scrum master', 'Project management'],
    image: 'bg-purple-500/20'
  },
  {
    name: 'Anvitha Adepu',
    role: 'Frontend developer',
    description: 'Dynamic executive driving growth and operational excellence. Expert in scaling tech businesses and building developer communities.',
    skills: ['Html/Css', 'React', 'Python Development', 'JavaScript'],
    image: 'bg-purple-500/20'
  },
  {
    name: 'Dukuru  Venkatesh',
    role: 'AI/ML Engineer',
    description: 'Dynamic executive driving growth and operational excellence. Expert in scaling tech businesses and building developer communities.',
    skills: ['AI/ML Development', 'Data Science', 'Generative AI', 'RAG'],
    image: 'bg-purple-500/20'
  }
];

function TeamCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = window.innerWidth >= 1024 ? 320 : window.innerWidth >= 640 ? 280 : 260;
      const scrollAmount = cardWidth * (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollRef.current.scrollLeft - scrollAmount : scrollRef.current.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>

        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-200 transition hidden sm:block"
          >
            ←
          </button>

          {/* Carousel */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scroll-smooth gap-6 px-10 mx-auto scrollbar-hide"
          >
            {team.map((member, index) => (
              <Card
                key={index}
                className="min-w-[260px] sm:min-w-[280px] lg:min-w-[300px] max-w-[300px] flex-shrink-0 bg-white border border-gray-300 rounded-lg shadow hover:shadow-md transition"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`w-20 h-20 ${member.image} rounded-full mx-auto flex items-center justify-center`}>
                    <div className="text-xl font-bold text-white/80">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <Badge>{member.role}</Badge>
                  <p className="text-sm text-gray-500">{member.description}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-200 transition hidden sm:block"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}


  
  const milestones = [
    {
      year: '2025',
      title: 'Platform Launch',
      description: 'Launched our Projectplace connecting developers with premium code solutions.'
    },
    {
      year: '2025',
      title: 'Community Growth',
      description: 'Reached 100+ successful project in AI/ML and Full Stack Development.'
    },
    {
      year: '2025',
      title: 'Course Platform',
      description: 'Expanded into educational content with expert-led programming courses.'
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-normal py-4 bg-gradient-primary bg-clip-text text-transparent">
            About ProjectsPlace
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            <span className="text-purple-600 font-semibold">ProjectsPlace</span>  is building the future of developer collaboration by connecting talented creators 
            with those who need high-quality code solutions.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At ProjectsPlace, we believe that great code should be accessible to everyone. Our platform democratizes access to 
              premium development solutions, enabling developers to learn, build, and succeed faster than ever before.

            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
            By creating ProjectsPlace as a marketplace where innovation meets practicality, we're transforming how developers a
            pproach complex projects and accelerating the pace of technological advancement.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <Badge className="px-6 py-2 bg-primary/10 text-primary border-primary/20 animate-fade-in hover:bg-primary hover:text-white hover-scale">
                500+ Students
              </Badge>
              <Badge className="px-6 py-2 bg-primary/10 text-primary border-primary/20 animate-fade-in hover:bg-primary hover:text-white hover-scale">
                200+ Projects
              </Badge>
              <Badge className="px-6 py-2 bg-primary/10 text-primary border-primary/20 animate-fade-in hover:bg-primary hover:text-white hover-scale">
                99% Success Rate
              </Badge>
            </div>
          </div>

          
          <div className="space-y-6">
            <div className="w-full h-64 bg-gradient-primary rounded-2xl shadow-glow animate-float flex items-center justify-center">
              <div className="text-6xl font-bold text-primary-foreground">🚀</div>
            </div>
          </div>
        </div>

       <TeamCarousel />

        {/* Values Section */}
        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-center text-foreground">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-border hover:shadow-elegant transition-smooth">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center text-foreground">
            Technologies We Love
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center text-foreground">
            Our Journey
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-4 h-4 bg-primary rounded-full mt-2 animate-glow"></div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-xl font-semibold text-foreground">
                          {milestone.title}
                        </h3>
                        <Badge variant="outline" className="text-xs">
                          {milestone.year}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Impact Section */}
        <div className="bg-gradient-secondary rounded-2xl p-8 md:p-12 text-center space-y-8">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">
              Making an Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every project sold, every course completed, and every developer empowered 
              contributes to a more innovative and collaborative tech ecosystem. 
              We're not just building a marketplace – we're building the future.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 pt-8">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Students Explored</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">₹10L+</div>
              <div className="text-sm text-muted-foreground">Creator Earnings</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Hours Saved Daily</div>
            </div>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-bold text-foreground">
            Looking Forward
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We envision a world where every developer has access to the tools, knowledge, 
            and community they need to build extraordinary things. Join us as we continue 
            to break down barriers and accelerate innovation in the tech industry.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="px-6 py-2 bg-primary/10 text-primary border-primary/20 animate-fade-in hover:bg-primary hover:text-white hover-scale">
              <TrendingUp className="h-4 w-4 mr-2" />
              Scaling Innovation
            </Badge>
            <Badge className="px-6 py-2 bg-primary/10 text-primary border-primary/20 animate-fade-in hover:bg-primary hover:text-white hover-scale">
              <Users className="h-4 w-4 mr-2" />
              Building Community
            </Badge>
            <Badge className="px-6 py-2 bg-primary/10 text-primary border-primary/20 animate-fade-in hover:bg-primary hover:text-white hover-scale">
              <Award className="h-4 w-4 mr-2" />
              Driving Excellence
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};



export default About;



