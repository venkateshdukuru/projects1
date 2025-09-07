import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Target, Lightbulb, Award, Code, TrendingUp, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useRef } from "react";


const About = () => {
  const skills = [
    'React', 'TypeScript', 'Node.js', 'Python', 'JavaScript', 'HTML/CSS',
    'MongoDB', 'PostgreSQL', 'Github', 'Docker', 'AWS', 'Machine Learning', 
    'Artficial Intelligence', 'Generative Ai', 'prompt Engineering', 'RAG', 'Computer Vision', 'NLP'
  ];


  const values = [
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Quality Learning',
      description: 'We provide real-world, project-based learning experiences with clean, maintanable and industry-ready solutions.'
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: 'Innovation',
      description: 'We stay ahead of the curve by exploring the latest technologies and creative ways to solve problems.'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Community',
      description: 'We are building a global network where students, developers and mentors learn, collaborate and grow together.'
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Impact',
      description: 'We create internships, courses and projects that genuinely transform careers and open doors to new oppurtunities.'
    }
  ];


const team = [
  // {
  //   name: 'Dukuru Venkatesh',
  //   role: 'Founder & CEO',
  //   description: 'Visionary leader with expertise in AI/ML development and product strategy. Passionate about democratizing access to quality code.',
  //   skills: ['Strategic Planning', 'Product Vision', 'Roadmapping', 'Leadership ', 'Team Building', 'Fundraising', 'Innovation in AI/ML Solutions'],
  //   image: 'bg-blue-500/20'
  // },
  {
    name: 'Sastha Ganapathi',
    role: 'Co - Founder',
    description: 'Builds scalable, end-to-end web applications and drives product innovation with expertise across front-end and backend technologies',
    skills: ['Strategic Planning', 'Full-Stack Development', 'Business Strategy', 'Team Leadership'],
    image: 'bg-blue-500/20'
  },
  {
    name: 'Sanvita Reddy',
    role: 'HR Manager',
    description: 'Leads talent acquisition, HR operations and employee emgagement to build strong, motivated teams in a tech-driven environment.',
    skills: ['Business Strategy', 'Operations', 'Community Building', 'Project management'],
    image: 'bg-purple-500/20'
  },
  {
    name: 'Vennela pavuloori',
    role: 'Project Manager',
    description: 'Manages projects from concept to delivery, ensuring timely execution using Agile and Scrum practices.',
    skills: ['Business Strategy', 'Operations', 'Scrum master', 'Project management'],
    image: 'bg-purple-500/20'
  },
  {
    name: 'Anvitha Adepu',
    role: 'Frontend developer',
    description: 'Designs and develops interactive, accessible and high-performance web applications.',
    skills: ['HTML/CSS', 'React', 'Python Development', 'JavaScript'],
    image: 'bg-purple-500/20'
  },
  {
    name: 'Syam Sundar',
    role: 'Backend Developer',
    description: 'Specializes in secure, scalable backend systems, API integration and database optimization.',
    skills: ['Backend Developer', 'Node.js', 'Python Development', 'AI/ML Development'],
    image: 'bg-purple-500/20'
  },
  {
    name: 'Venkata Naga Devaki Patchipulusu ',
    role: 'Full Stack developer',
    description: 'Develops responsive, high-performance web solutions with expertise in React, Java, Python and Typescript',
    skills: ['Full stack Developer', 'React', 'JAVA Development', 'Typescript'],
    image: 'bg-purple-500/20'
  },
  {
    name: 'Chiranjeevi Naidu Busala',
    role: 'Business Development Executive',
    description: 'Drives business growth by identifying opportunities, building client relationships, and developing strategic partnerships.',
    skills: ['Client Engagement', 'Sales Strategy', 'Market Research', 'Partnership Development'],
    image: 'bg-purple-500/20'

  },
  {
    name: 'Praven',
    role: 'UI/UX Design Intern',
    description: 'Designs intuitive user interfaces and engaging user experiences by combining creativity with usability best practices.',
    skills: ['Prototyping', 'Figma', 'Adobe XD', 'Design Systems'],
    image: 'bg-purple-500/20'

  },
  {
    name: 'Satish',
    role: 'Full stack developer intern',
    description: 'Specializes in secure, scalable backend systems, API integration and database optimization.',
    skills: ['Backend Developer', 'Node.js', 'Next.js', 'React'],
    image: 'bg-purple-500/20'
  },
  {
    name: 'Chandaru s ',
    role: 'Full Stack developer',
    description: 'Develops responsive, high-performance web solutions with expertise in React, Node.js, Mongodb and Typescript',
    skills: ['Full stack Developer', 'React', 'Node.js', 'Typescript'],
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
      description: 'Introduced ProjectsPlace to connect students and developers with hands-on projects, internships and premium code solutions.'
    },
    {
      year: '2025',
      title: 'Community Growth',
      description: 'Successfully completed 100+ real-world projects in AI/ML, Full Stack Development and emerging technologies.'
    },
    {
      year: '2025',
      title: 'Learning Expansion',
      description: 'Launched industry-led courses and internship programs to equip learners with skills that match market demand.'
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
            <span className="text-purple-600 font-semibold">ProjectsPlace</span>  is dedicated to helping students gain real-world skills through high quality projects, expert-led courses
            and industry-relevant internships -- empowering them to become confident, job-ready professionals.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At <span className="text-purple-600 font-semibold">ProjectsPlace</span> , we believe that practical skills and quality learning should be accessible to every student. our platform offers a unique
              blend of premium projects, expert-led courses and industry-focussed internships -- helping learners build, apply and showcase their skills.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
            By creating ProjectsPlace as a space where innovation meets experience, we're transforming how students and aspiring professionals
            approach real-world challenges and accelerating their ourney towards career success
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <Badge className="px-6 py-2 bg-primary/10 text-primary border-primary/20 animate-fade-in hover:bg-primary hover:text-white hover-scale">
                500+ Students
              </Badge>
              <Badge className="px-6 py-2 bg-primary/10 text-primary border-primary/20 animate-fade-in hover:bg-primary hover:text-white hover-scale">
                200+ Projects
              </Badge>
              <Badge className="px-6 py-2 bg-primary/10 text-primary border-primary/20 animate-fade-in hover:bg-primary hover:text-white hover-scale">
                100% Success Rate
              </Badge>
            </div>
          </div>

          
          <div className="space-y-6">
            <div className="w-full h-90 bg-gradient-primary rounded-2xl shadow-glow animate-float flex items-center justify-center overflow-hidden">
              <img 
                src="Logo-uploads/Aboutus-1.png" 
                alt="Rocket" 
                className="w-full h-full object-cover rounded-2xl"
              />            
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
            Technologies We Work With
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
        <div className="bg-gradient-secondary rounded-2xl p-8 md:p-12 text-center space-y-8overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('')" }}
      >
          <div className="space-y-4">
            <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">
              Our Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every project built, every internship completed and every student upskilled adds to a more innovative tech ecosystem.
              We're not just a platform - we're a launchpad for careers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 pt-8">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Students Empowered</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">Industry Internships Delivered</div>
            </div>
             <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">25+</div>
              <div className="text-sm text-muted-foreground">Industry Experts</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">200+</div>
              <div className="text-sm text-muted-foreground">Projects Completed by Students</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Placement Success in Partner Programs</div>
            </div>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-bold text-foreground">
            Looking Ahead
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We envision a future where Every Student has access to the tools, knowledge and mentorship they need to innovate and succeed
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
              Driving Careers
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};



export default About;



