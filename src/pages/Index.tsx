import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ShoppingCart, Star, Users, TrendingUp, Award, Zap, Target, Code2, BookOpen, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const stats = [
    { number: '500+', label: 'Active Users' },
    { number: '200+', label: 'Projects Sold' },
    { number: '99%', label: 'Success Rate' },
    { number: '24/7', label: 'Support' }
  ];

  const featuredProjects = [
    {
      title: 'Inventory Management System',
      description: 'Complete inventory tracking system with barcode scanning and reporting.',
      price: 2999,
      technologies: ['React', 'Node.js'],
      rating: 4.5,
      sales: 145,
    },
    {
      title: 'E-commerce Mobile App',
      description: 'Full-featured shopping app for iOS & Android',
      price: ' ₹6999',
      rating: 4.9,
      sales: 156,
      technologies: ['Flutter', 'Firebase']
    },
    {
      title: 'Cryptocurrency Trading Bot',
      description: 'Automated trading with risk management',
      price: ' ₹6999',
      rating: 4.7,
      sales: 98,
      technologies: ['Python', 'API']
    },
    {
      title: 'Weather Prediction ML Model',
      description: 'Advanced weather forecasting using multiple machine learning algorithms.',
      price: '₹4999',
      technologies: ['Python', 'TensorFlow', 'ML'],
      rating: 4.6,
      sales: 189,
    }
  ];

  const featuredCourses = [
    {
      title: 'Complete React Developer Course',
      instructor: 'John Smith',
      price: ' ₹4499',
      originalPrice: ' ₹7499',
      rating: 4.9,
      students: 12547,
      duration: '32 hours'
    },
    {
      title: 'Python for Data Science',
      instructor: 'Sarah Wilson',
      price: ' ₹4499',
      originalPrice: ' ₹7499',
      rating: 4.8,
      students: 8934,
      duration: '28 hours'
    },
    {
      title: 'Machine Learning with TensorFlow',
      instructor: 'Dr. Maria Garcia',
      price: '₹4999',
      originalPrice: ' ₹7999',
      rating: 4.8,
      students: 4567,
      duration: '40 hours'
    },
    {
      title: 'DevOps Engineering Complete',
      instructor: 'James Brown',
      price: ' ₹4999',
      originalPrice: '  ₹7999',
      rating: 4.7,
      students: 3456,
      duration: '35 hours'
    }
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

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
        <div className="max-w-6xl mx-auto text-center space-y-8 relative">
          <div className="space-y-6">
            <Badge className="px-6 py-2 bg-primary/10 text-primary border-primary/20 animate-fade-in hover:bg-primary hover:text-white hover-scale">
              <Sparkles className="h-4 w-4 mr-2" />
              Trusted by many Students
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-normal py-4 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Build Faster with 
              <br />ProjectsPlace
            </h1>
            <h3>🚀 Start learning by doing! </h3>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto animate-fade-in leading-relaxed">
            
            Discover high-quality projects and courses from expert developers at ProjectsPlace. 
            Get production-ready code and accelerate your development journey.
          </p>

          </div>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            <Link to="/projects">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 hover-scale">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Browse Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/courses">
              <Button variant="outline" size="lg" className="hover-scale">
                <BookOpen className="mr-2 h-5 w-5" />
                Explore Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-border hover:shadow-elegant transition-smooth hover-scale">
                <CardContent className="p-6">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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
              <Card key={index} className="border-border hover:shadow-elegant transition-smooth hover-scale text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto text-primary">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
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
              Most popular projects this week
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="border-border hover:shadow-elegant transition-smooth hover-scale group">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-primary">{project.price}</div>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span>{project.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 2).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    {project.sales} sales
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/projects">
              <Button size="lg" variant="outline" className="hover-scale">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Popular Courses
            </h2>
            <p className="text-xl text-muted-foreground">
              Learn from industry experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((course, index) => (
              <Card key={index} className="border-border hover:shadow-elegant transition-smooth hover-scale group">
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="text-xl font-bold text-primary">{course.price}</div>
                      <div className="text-sm text-muted-foreground line-through">
                        {course.originalPrice}
                      </div>
                    </div>
                    <Badge className="bg-red-500/10 text-red-500 border-red-500/20 text-xs hover:bg-red-500 hover:text-white">
                      {Math.round((1 - parseFloat(course.price.replace('₹', '')) / parseFloat(course.originalPrice.replace('₹', ''))) * 100)}% OFF
                    </Badge>

                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-smooth">
                    {course.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground">
                    by {course.instructor}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                    <span>{course.duration}</span>
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    {course.students.toLocaleString()} students
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/courses">
              <Button size="lg" variant="outline" className="hover-scale">
                View All Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10"></div>
        <div className="max-w-4xl mx-auto text-center space-y-8 relative">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Ready to Start Building?
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Join our community of developers and get access to premium projects and courses. 
              Start building amazing applications today.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/projects">
              <Button size="lg" variant="secondary" className="hover-scale">
                <Code2 className="mr-2 h-5 w-5" />
                Browse Projects
              </Button>
            </Link>
            <Link to="/courses">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-primary border-primary hover:bg-primary hover:text-white hover-scale">
                <TrendingUp className="mr-2 h-5 w-5" />
                Start Learning
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;