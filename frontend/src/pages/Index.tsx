import { Button } from '@/components/ui/button';
import { Card, CardContent ,  CardHeader, CardTitle  } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, ShoppingCart, Briefcase, Rocket, GraduationCap, Star, Users, TrendingUp, Award, Zap, Target, Code2, BookOpen, Sparkles , PlayCircle, ExternalLink  } from 'lucide-react';
import { Link } from 'react-router-dom';
import {useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import useInView from "../hooks/useInView";
import TestimonialsCarousel from "@/components/TestimonialsCarousel"





interface Stat {
  number: number;
  suffix?: string;
  label: string;
}

const Index = () => {


  const stats: Stat[] = [
    { number: 500, suffix: "+", label: "Active Learners" },
    { number: 25, suffix: "+", label: "Industry Experts" },
    { number: 100, suffix: "%", label: "Success Rate" },
    { number: 24, suffix: "/7", label: "Support" },
  ];


const featuredProjects = [
    { id: 2,
      title: 'E-commerce Mobile App',
      description: 'A fully functional e-commerce application for iOS and Android built with Flutter.',
      price: 7999,
      technologies: ['Flutter', 'Firebase', 'Full Stack'],
      rating: 4.9,
      sales: 35,
      image: 'bg-green-500/20',
      type: 'Major Project'
    },
   {
      id: 6,
      title: 'Firebase Chat Application',
      description: 'Real-time chat application with user authentication and message history.',
      price: 2999,
      technologies: ['React', 'Firebase'],
      rating: 4.5,
      sales: 46,
      image: 'bg-teal-500/20',
      type: 'Mini Project'
    },
    {
      id: 10,
      title: 'Video Streaming Platform',
      description: 'Netflix-like streaming platform with user subscriptions and content management.',
      price: 7999,
      technologies: ['React', 'Node.js', 'Full Stack'],
      rating: 4.9,
      sales: 37,
      image: 'bg-red-500/20',
      type: 'Major Project'
    },
    {
      id: 12,
      title: 'Weather Prediction ML Model',
      description: 'Advanced weather forecasting using multiple machine learning algorithms.',
      price: 4999,
      technologies: ['Python', 'TensorFlow', 'ML'],
      rating: 4.6,
      sales: 89,
      image: 'bg-sky-500/20',
      type: 'Internship'
    }
  ];

  const courses = [

    {
      id: 1,
      title: 'Complete React Developer Course',
      description: 'Master React from basics to advanced concepts including hooks, context, and performance optimization.',
      price: 4999,
      originalPrice: 11999,
      level: 'Intermediate',
      technologies: ['React', 'JavaScript', 'TypeScript'],
      rating: 4.9,
      students: 47,
      image: 'bg-blue-500/20',
      Syllabus: '/Syllabus/React Developer.pdf' 
    },
    {
      id: 2,
      title: 'Python for Data Science Bootcamp',
      description: 'Learn Python programming for data analysis, visualization, and machine learning applications.',
      price: 5999,
      originalPrice: 8999,
      level: 'Beginner',
      technologies: ['Python'],
      rating: 4.8,
      students: 34,
      image: 'bg-green-500/20',
      Syllabus: '/Syllabus/React Developer.pdf' 
    },
    {
      id: 3,
      title: 'Full Stack Web Development',
      description: 'Build complete web applications using modern technologies and best practices.',
      price: 7999,
      originalPrice: 15999,
      level: 'Advanced',
      technologies: ['React', 'Frontend', 'MongoDB', 'Backend'],
      rating: 4.9,
      students: 103,
      image: 'bg-purple-500/20',
      Syllabus: '/Syllabus/Full Stack Developer.pdf' 
    },
    {
      id: 4,
      title: 'Cybersecurity Fundamentals',
      description: 'Network security, ethical hacking, and security assessment techniques.',
      price: 6499,
      originalPrice: 9999,
      level: 'Intermediate',
      technologies: ['Security', 'Networking'],
      rating: 4.6,
      students: 39,
      image: 'bg-cyan-500/20',
      Syllabus: '/Syllabus/Cybersecurity Fundamentals.pdf' 
    },
  ];


  const benefits = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Instant Access',
      description: 'Download projects immediately after purchase with lifetime access'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Quality Guaranteed',
      description: 'All projects are tested, documented, and ready for production use'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Learn by Doing',
      description: 'Understand real-world implementations and best practices'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community Support',
      description: 'Join our active community of developers and get help when needed'
    }
  ];

  const roadmap = [
    {
      id: 1,
      title: "1. Register With Us",
      description:"Sign up and connect with our career counsellor, who will guide you through selecting the right course, internship, or project based on your career goals.",
      icon: <CheckCircle className="w-6 h-6 text-white" />,
    },
    {
      id: 2,
      title: "2. Learn Advanced Skills",
      description:"Master industry-relevant courses like AI/ML, Full Stack Development, Cybersecurity, and more — with expert mentorship and live interactive sessions.",
      icon: <BookOpen className="w-6 h-6 text-white" />,
    },
    {
      id: 3,
      title: "3. Work on Live & Industry Projects",
      description:"Gain hands-on experience by working on real client projects and solving actual industry challenges.",
      icon: <Briefcase className="w-6 h-6 text-white" />,
    },
    {
      id: 4,
      title: "4. Internship Experience",
      description:"Enroll in live or project-based internships to apply your skills in a professional environment and build your portfolio.",
      icon: <Users className="w-6 h-6 text-white" />,
    },
    {
      id: 5,
      title: "5. Earn Your Certificates",
      description:"Receive Project Completion, Internship, and Industry Experience certificates to showcase your skills to recruiters.",
      icon: <Award className="w-6 h-6 text-white" />,
    },
    {
      id: 6,
      title: "6. Placement Support",
      description:"Get profile evaluation, resume building, mock interviews, and direct industry referrals from our network of hiring partners.",
      icon: <Rocket className="w-6 h-6 text-white" />,
    },
    {
      id: 7,
      title: "7. Career Success",
      description:"Land your dream job with the confidence, skills, and guidance to succeed.",
      icon: <GraduationCap className="w-6 h-6 text-white" />,
    }
  ];


  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
        <section className="pt-24 pb-20 px-6 relative overflow-hidden">
          <div className="max-w-6xl mx-auto">
            {/* Top centered badge and heading */}
            <div className="flex flex-col items-center mb-16 space-y-4">
              <Badge className="px-6 py-2 bg-primary/10 text-primary border-primary/20 animate-fade-in hover:bg-primary hover:text-white hover-scale flex items-center justify-center">
                <Sparkles className="h-4 w-4 mr-2" />
                Trusted by Students & Professionals
              </Badge>

              <h1 className="text-5xl md:text-6xl font-bold leading-normal py-2 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent text-center">
                Build Your Skills with
                <br />
                ProjectsPlace
              </h1>
            </div>

            {/* Main content: left text and right image */}
            <div className="flex flex-col md:flex-row items-start gap-12">
              {/* Left content */}
              <div className="flex-1 space-y-6 text-left">
                <h2 className="text-lg md:text-2xl font-medium">
                  Learn by building real projects and gaining hands-on experience!
                </h2>

                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-xl animate-fade-in leading-relaxed">
                  At <span className="text-purple-600 font-semibold">ProjectsPlace</span>, we offer industry-ready internships,
                  live courses and premium projects to help you learn, build and get hired faster.
                  Whether you're a student preparing for your first job or a developer enhancing your portfolio,
                  we've got you covered.
                </p>

                {/* Buttons */}
              <div className="flex flex-wrap gap-4 pt-4 justify-center items-center">
                <Link to="/projects">
                  <Button 
                    size="lg" 
                    className="bg-gradient-primary hover:opacity-85 hover-scale"
                  >
                    
                    Browse Projects
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                
                <Link to="/courses">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="text-primary border-primary hover:bg-primary hover:text-white hover-scale"
                  >
                    <TrendingUp className="mr-2 h-5 w-5" />
                    Start Learning
                  </Button>
                </Link>
                </div>
              </div>

              {/* Right side image */}
              <div className="flex-1 hidden md:block">
                <img
                  src="Logo-uploads/Homepage-bg.png"
                  alt="Learning"
                  className="w-full h-auto max-h-[400px] object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        <br></br><br></br>

  
      <section className="py-20 px-4 bg-gradient-to-r from-purple-100 via-pink-50 to-blue-100">
        {/* Stats Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center max-w-6xl mx-auto px-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-8 transform transition duration-300 hover:scale-105"
            >
              <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                <CountUp
                  end={stat.number}
                  duration={2.5}
                  enableScrollSpy
                  scrollSpyDelay={100}
                />
                {stat.suffix && <span>{stat.suffix}</span>}
              </h2>
              <p className="mt-2 text-lg text-gray-700 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

  
{/* Benefits Section */}
<section className="py-20 px-4">
  <div className="max-w-6xl mx-auto space-y-12">
    <div className="text-center space-y-4">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">
        Why Choose ProjectsPlace?
      </h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        Join thousands of developers who trust ProjectsPlace for high-quality code solutions
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {benefits.map((benefit, index) => (
        <Card
          key={index}
          className="border border-border rounded-xl text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 hover:bg-gray-50"
        >
          <CardContent className="p-6 space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto text-primary text-2xl transition duration-300 hover:bg-primary/20 hover:text-primary/80 hover:shadow-md hover:shadow-primary/50">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-semibold text-foreground transition duration-300 hover:text-primary">
              {benefit.title}
            </h3>
            <p className="text-muted-foreground transition duration-300 hover:text-foreground">
              {benefit.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>


     
{/* Roadmap Section */}
<section className="py-16 px-4 bg-gradient-to-r from-purple-100 via-pink-50 to-blue-100 overflow-hidden">
  <div className="max-w-5xl mx-auto space-y-12">
    <div className="text-center space-y-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
        Your Learning Roadmap
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
        Follow these steps to build real skills and launch your career.
      </p>
    </div>

    {/* Vertical Roadmap */}
    <div className="relative flex flex-col items-center">
      {/* Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 via-pink-400 to-blue-500 h-full rounded-full"></div>

      <div className="flex flex-col gap-14 sm:gap-20">
        {roadmap.map((item, index) => {
          const [ref, isVisible] = useInView({ threshold: 0.2 });

          return (
            <div
              key={item.id}
              ref={ref}
              className="relative flex flex-col items-center"
            ><br></br><br></br>
              {/* Icon */}
              <div
                className={`relative z-10 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform duration-700
                ${isVisible ? "scale-110" : "scale-0"}`}
              >
                {item.icon}
              </div>

              {/* Content Card */}
              <div
                className={`mt-4 sm:mt-0 transition-all duration-700 ease-in-out 
                w-full max-w-xs sm:w-72
                text-center sm:text-left
                sm:absolute sm:top-1/2 sm:-translate-y-1/2
                ${index % 2 === 0 ? "sm:left-24" : "sm:right-24 sm:text-right"}
                ${isVisible ? "opacity-100 translate-x-0" : `opacity-0 ${index % 2 === 0 ? "sm:-translate-x-12" : "sm:translate-x-12"}`}`}
              >
                <Card className="border-border shadow-elegant">
                  <CardContent className="p-3 sm:p-4 space-y-2">
                    <h3 className="text-xl font-semibold text-foreground transition duration-300 hover:text-primary">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground transition duration-300 hover:text-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
</section>




      {/* Featured Projects */}
<section className="py-20 px-4 bg-gradient-secondary">
  <div className="max-w-6xl mx-auto space-y-12">
    <div className="text-center space-y-4">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">
        Trending Projects
      </h2>
      <p className="text-xl text-muted-foreground">
        Popular Projets that most of the students Buy this week
      </p>
    </div>

    {/* Projects Grid */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-foreground">All Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="border-border hover:shadow-elegant transition-smooth group">
                <CardHeader className="p-0">
                  <div className={`w-full h-48 rounded-t-lg ${project.image} flex items-center justify-center group-hover:scale-105 transition-smooth`}>
                    <div className="text-6xl font-bold text-white/80">
                      {project.title.split(' ').map(word => word[0]).join('').slice(0, 2)}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span>{project.rating}</span>
                        <span>({project.sales})</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {project.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg text-foreground line-clamp-1">
                      {project.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="text-2xl font-bold text-primary">
                      ₹{project.price}
                    </div>
                    <div className="flex space-x-2">
                      
                      <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                        
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
          <Link to="/projects">
            <Button
              size="lg"
              variant="outline"
              className="transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-purple-50"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

      </div>
      </div>
    </section>


        {/* Internship Section */}
          <section className="py-8 bg-white">
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Impactful Internships
                </h2>
                <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                  Gain real-world experience through our curated internship programs. Choose from a variety of domains to build your skills and kickstart your career. 
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Block 1 */}
                <div className="flex flex-col items-center text-center p-6 rounded-lg border shadow-sm transform transition duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:bg-gray-50">
                  <div className="bg-purple-100 p-4 rounded-full mb-4 text-purple-600 transition duration-300 hover:bg-purple-200 hover:shadow-md hover:shadow-purple-300">
                    {/* Megaphone SVG */}
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 10v4h2l3 5v-14l-3 5h-2zm13.414-6l-5.657 5.657 1.414 1.414 5.657-5.657-1.414-1.414zm2.121 2.121l-5.657 5.657 1.414 1.414 5.657-5.657-1.414-1.414zm-1.415 6.364l-1.414-1.414-1.414 1.414 1.414 1.414 1.414-1.414z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 transition duration-300 hover:text-purple-600">New Project Announcements</h3>
                  <p className="text-sm text-gray-600 transition duration-300 hover:text-gray-800 mt-2">
                    Discover the latest project launches across sectors with complete contact info.
                  </p>
                </div>

                {/* Block 2 */}
                <div className="flex flex-col items-center text-center p-6 rounded-lg border shadow-sm transform transition duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:bg-gray-50">
                  <div className="bg-purple-100 p-4 rounded-full mb-4 text-purple-600 transition duration-300 hover:bg-purple-200 hover:shadow-md hover:shadow-purple-300">
                    {/* Progress SVG */}
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 2v2.07a8.003 8.003 0 0 1 7 7.93h2a10.004 10.004 0 0 0-9-9.93zm-2 0a10.004 10.004 0 0 0-9 9.93h2a8.003 8.003 0 0 1 7-7.93v-2.07zm-7 11h2a6 6 0 0 0 12 0h2a8 8 0 0 1-16 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 transition duration-300 hover:text-purple-600">Ongoing Project Progress</h3>
                  <p className="text-sm text-gray-600 transition duration-300 hover:text-gray-800 mt-2">
                    Track execution progress and milestones to connect at the right time.
                  </p>
                </div>

                {/* Block 3 */}
                <div className="flex flex-col items-center text-center p-6 rounded-lg border shadow-sm transform transition duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:bg-gray-50">
                  <div className="bg-purple-100 p-4 rounded-full mb-4 text-purple-600 transition duration-300 hover:bg-purple-200 hover:shadow-md hover:shadow-purple-300">
                    {/* Contract SVG */}
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4 4h16v2H4V4zm0 4h16v2H4V8zm0 4h10v2H4v-2zm0 4h10v2H4v-2zm12 0h4v4h-4v-4z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 transition duration-300 hover:text-purple-600">Tenders, Contracts, & L1</h3>
                  <p className="text-sm text-gray-600 transition duration-300 hover:text-gray-800 mt-2">
                    Access tenders, awarded contracts, and identify L1 bidders effortlessly.
                  </p>
                </div>
              </div>

              <div className="text-center mt-10">
                <a
                  href="/internships"
                  className="inline-block px-6 py-3 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 
                            rounded-md transform transition duration-300 
                            hover:brightness-110 hover:scale-105 hover:shadow-lg"
                >
                  Get Started »
                </a>
              </div>

            </div>
          </section>


            
        {/* Featured Courses */}
        <section className="py-20 px-4">
          <div className="bg-gradient-secondary rounded-2xl p-8 md:p-12 text-center space-y-6">
            <div className="max-w-6xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Popular Courses
                </h2>
                <p className="text-xl text-muted-foreground">
                  Learn from industry experts
                </p>
              </div>

              {/* Courses Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {courses.map((course) => (
                  <Card
                    key={course.id}
                    className="border-border hover:shadow-elegant transition-smooth group"
                  >
                    <CardHeader className="p-0">
                      <div
                        className={`w-full h-48 rounded-t-lg ${course.image} flex items-center justify-center group-hover:scale-105 transition-smooth relative`}
                      >
                        <PlayCircle className="h-16 w-16 text-white/80" />
                        <div className="absolute top-4 right-4">
                          
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 space-y-4">
                      <div className="space-y-2">
                        <CardTitle className="text-lg text-foreground line-clamp-1">
                          {course.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {course.description}
                        </p>
                      </div>

                      <div className="flex items-center text-sm text-muted-foreground">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                        <span>{course.rating}</span>
                        <span className="ml-1">({course.students.toLocaleString()})</span>
                      </div>

                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Users className="h-3 w-3" />
                        <span>{course.students.toLocaleString()} students</span>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {course.technologies.slice(0, 2).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {course.technologies.length > 2 && (
                          <Badge variant="secondary" className="text-xs">
                            +{course.technologies.length - 2}
                          </Badge>
                        )}
                      </div>

                      <div className="space-y-3 pt-2">
                        <div className="flex items-center space-x-2">
                          <div className="text-2xl font-bold text-primary">
                            ₹{course.price.toLocaleString()}
                          </div>
                          <div className="text-sm text-muted-foreground line-through">
                            ₹{course.originalPrice.toLocaleString()}
                          </div>
                          <Badge className="bg-red-500/10 text-red-500 border-red-500/20 text-xs hover:bg-red-500 hover:text-white">
                          {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                        </Badge>
                        </div>
                        <div className="flex items-center justify-start gap-3 mt-4">
                              <Button className="px-2 py-1.5 text-sm bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white hover:brightness-110 transition duration-300 ease-in-out">
                                <ShoppingCart className="h-4 w-4 mr-1" />
                                Enroll Now
                              </Button>

                              <Button asChild className="px-2 py-1.5 text-sm bg-gradient-to-r from-gray-300 via-purple-300 to-purple-500 text-gray-900 hover:scale-105 transition duration-300 ease-in-out">
                                <a href={course.Syllabus} target="_blank" rel="noopener noreferrer">
                                  Course Syllabus
                                </a>
                              </Button>
                            </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <Link to="/courses">
                  <Button
                    size="lg"
                    variant="outline"
                    className="transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-purple-50"
                  >
                    View All Courses
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

            </div>
          </div>
        </section>

          {/* Monthly Additions Section */}
<section className="py-12 bg-white">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
      Monthly Additions
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {/* Stat Card */}
      <div className="bg-purple-50 p-6 rounded-xl shadow-sm transition transform duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-purple-300/50 hover:bg-purple-100 group flex flex-col items-center">
        <svg className="w-10 h-10 text-purple-600 mb-4 transition-colors duration-300 group-hover:text-purple-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 00-10 10h2a8 8 0 1116 0h2a10 10 0 00-10-10zM4 14h16v2H4v-2zm0 4h10v2H4v-2z" />
        </svg>
        <h3 className="text-2xl font-bold text-black group-hover:text-purple-600 transition duration-300">
          50+
        </h3>
        <p className="text-sm text-gray-600 mt-1 group-hover:text-black transition duration-300">
          Custom Projects, Across Sectors
        </p>
      </div>

      <div className="bg-purple-50 p-6 rounded-xl shadow-sm transition transform duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-purple-300/50 hover:bg-purple-100 group flex flex-col items-center">
        <svg className="w-10 h-10 text-purple-600 mb-4 transition-colors duration-300 group-hover:text-purple-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 2v2.07a8.003 8.003 0 0 1 7 7.93h2a10.004 10.004 0 0 0-9-9.93zm-2 0a10.004 10.004 0 0 0-9 9.93h2a8.003 8.003 0 0 1 7-7.93v-2.07zm-7 11h2a6 6 0 0 0 12 0h2a8 8 0 0 1-16 0z" />
        </svg>
        <h3 className="text-2xl font-bold text-black group-hover:text-purple-600 transition duration-300">
          150+
        </h3>
        <p className="text-sm text-gray-600 mt-1 group-hover:text-black transition duration-300">
          Internships & Course Updates
        </p>
      </div>

      <div className="bg-purple-50 p-6 rounded-xl shadow-sm transition transform duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-purple-300/50 hover:bg-purple-100 group flex flex-col items-center">
        <svg className="w-10 h-10 text-purple-600 mb-4 transition-colors duration-300 group-hover:text-purple-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zm0 7l10 5-10 5-10-5 10-5zm0 7l10 5-10 5-10-5 10-5z" />
        </svg>
        <h3 className="text-2xl font-bold text-black group-hover:text-purple-600 transition duration-300">
          100+
        </h3>
        <p className="text-sm text-gray-600 mt-1 group-hover:text-black transition duration-300">
          Certifications
        </p>
      </div>

      <div className="bg-purple-50 p-6 rounded-xl shadow-sm transition transform duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-purple-300/50 hover:bg-purple-100 group flex flex-col items-center">
        <svg className="w-10 h-10 text-purple-600 mb-4 transition-colors duration-300 group-hover:text-purple-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 4h16v2H4V4zm0 4h16v2H4V8zm0 4h10v2H4v-2zm0 4h10v2H4v-2zm12 0h4v4h-4v-4z" />
        </svg>
        <h3 className="text-2xl font-bold text-black group-hover:text-purple-600 transition duration-300">
          1,000+
        </h3>
        <p className="text-sm text-gray-600 mt-1 group-hover:text-black transition duration-300">
          Upcoming Initiatives
        </p>
      </div>

      <div className="bg-purple-50 p-6 rounded-xl shadow-sm transition transform duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-purple-300/50 hover:bg-purple-100 group flex flex-col items-center">
        <svg className="w-10 h-10 text-purple-600 mb-4 transition-colors duration-300 group-hover:text-purple-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm0 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h6v2H7v-2z" />
        </svg>
        <h3 className="text-2xl font-bold text-black group-hover:text-purple-600 transition duration-300">
          400+
        </h3>
        <p className="text-sm text-gray-600 mt-1 group-hover:text-black transition duration-300">
          Project News
        </p>
      </div>
    </div>
  </div>
</section>


     {/* Certifications Section */}
    <section className="py-20 px-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="max-w-5xl mx-auto text-center space-y-8 relative">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Showcase Your Achievements
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Earn industry-recognized certifications and badges that highlight your skills and expertise.  
            Share them on your profile and stand out in your career journey.
          </p>
        </div>

        {/* Example Certification Badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg flex flex-col items-center w-52 hover:scale-105 transition">
            <img 
              src="/images/cert-react.png" 
              alt="React Certification" 
              className="h-26 w-26 mb-8" 
            />
            <h3 className="text-lg font-semibold text-gray-800">React Developer</h3>
            <p className="text-sm text-gray-600">Certified by ProjectsPlace</p>
          </div>
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg flex flex-col items-center w-52 hover:scale-105 transition">
            <img 
              src="/images/cert-js.png" 
              alt="AI-ML Certification" 
              className="h-26 w-26 mb-" 
            />
            <h3 className="text-lg font-semibold text-gray-800">AI-ML Developer</h3>
            <p className="text-sm text-gray-600">Certified by ProjectsPlace</p>
          </div>
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg flex flex-col items-center w-52 hover:scale-105 transition">
            <img 
              src="/images/cert-python.png" 
              alt="Python Certification" 
              className="h-26 w-26 mb-8" 
            />
            <h3 className="text-lg font-semibold text-gray-800">Python Developer</h3>
            <p className="text-sm text-gray-600">Certified by ProjectsPlace</p>
          </div>
        </div>
         {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {/* <Link to=" ">
            <Button size="lg" variant="secondary" className="hover-scale">
              <Award className="mr-2 h-5 w-5" />
              View Certifications
            </Button>
          </Link> */}
          <Link to="/Auth">
            <Button 
              size="lg" 
              variant="outline" 
              className="text-black border-white hover:bg-white hover:text-purple-600 hover-scale">
              <Star className="mr-2 h-5 w-5" />
              Get Certified
            </Button>
          </Link>
        </div>
      </div>
    </section>

      {/* Testimonials... */}
      <div>
      <TestimonialsCarousel />
    </div>
    </div>
  );
};

export default Index;

