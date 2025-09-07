import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Calendar, Users, Star } from 'lucide-react';

const Major = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with user authentication, payment processing, inventory management, and admin dashboard. Built with modern technologies and best practices.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API', 'JWT', 'Tailwind CSS'],
      image: 'bg-blue-500/20',
      githubUrl: '#',
      liveUrl: '#',
      date: '2024-06',
      duration: '3 months',
      teamSize: 'Solo',
      status: 'Completed',
      highlights: [
        'Secure payment processing with Stripe',
        'Real-time inventory updates',
        'Responsive design for all devices',
        'Admin panel with analytics'
      ]
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with real-time data visualization, post scheduling, and engagement tracking across multiple platforms.',
      technologies: ['React', 'TypeScript', 'Chart.js', 'Firebase', 'Social Media APIs', 'Material-UI'],
      image: 'bg-purple-500/20',
      githubUrl: '#',
      liveUrl: '#',
      date: '2024-04',
      duration: '2.5 months',
      teamSize: '2 developers',
      status: 'Completed',
      highlights: [
        'Multi-platform integration',
        'Real-time analytics',
        'Automated reporting',
        'Team collaboration features'
      ]
    },
    {
      title: 'Project Management Tool',
      description: 'Comprehensive project management application with task tracking, team collaboration, time logging, and progress visualization.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'Express', 'JWT', 'Chart.js'],
      image: 'bg-green-500/20',
      githubUrl: '#',
      liveUrl: '#',
      date: '2024-08',
      duration: '4 months',
      teamSize: '3 developers',
      status: 'In Progress',
      highlights: [
        'Real-time collaboration',
        'Gantt chart visualization',
        'File sharing system',
        'Role-based permissions'
      ]
    },
    {
      title: 'Learning Management System',
      description: 'Educational platform with course creation, student enrollment, progress tracking, quizzes, and video streaming capabilities.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Video.js', 'Cloudinary', 'Stripe'],
      image: 'bg-orange-500/20',
      githubUrl: '#',
      liveUrl: '#',
      date: '2024-02',
      duration: '3.5 months',
      teamSize: '4 developers',
      status: 'Completed',
      highlights: [
        'Video streaming integration',
        'Interactive quizzes',
        'Progress tracking',
        'Certificate generation'
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'In Progress':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Major Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive applications that demonstrate full-stack development skills, 
            complex problem-solving, and real-world application architecture.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="text-center border-border">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">{projects.length}</div>
              <div className="text-sm text-muted-foreground">Major Projects</div>
            </CardContent>
          </Card>
          <Card className="text-center border-border">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-500 mb-2">
                {projects.filter(p => p.status === 'Completed').length}
              </div>
              <div className="text-sm text-muted-foreground">Completed</div>
            </CardContent>
          </Card>
          <Card className="text-center border-border">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-500 mb-2">
                {Math.round(projects.reduce((acc, p) => acc + parseFloat(p.duration.split(' ')[0]), 0) / projects.length * 10) / 10}
              </div>
              <div className="text-sm text-muted-foreground">Avg Months</div>
            </CardContent>
          </Card>
          <Card className="text-center border-border">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-yellow-500 mb-2">
                {new Set(projects.flatMap(p => p.technologies)).size}
              </div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </CardContent>
          </Card>
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center text-foreground">
            Featured Projects
          </h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-border hover:shadow-elegant transition-smooth">
                <div className="grid lg:grid-cols-3 gap-6 p-6">
                  {/* Project Image/Icon */}
                  <div className="lg:col-span-1">
                    <div className={`w-full h-48 lg:h-full min-h-[200px] rounded-lg ${project.image} flex items-center justify-center`}>
                      <div className="text-6xl font-bold text-white/80">
                        {project.title.split(' ').map(word => word[0]).join('')}
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Details */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <CardTitle className="text-2xl text-foreground">
                          {project.title}
                        </CardTitle>
                        <Badge className={getStatusColor(project.status)}>
                          {project.status}
                        </Badge>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    
                    {/* Project Info */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        {project.date}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Users className="h-4 w-4 mr-2" />
                        {project.teamSize}
                      </div>
                      <div className="text-muted-foreground">
                        Duration: {project.duration}
                      </div>
                    </div>
                    
                    {/* Technologies */}
                    <div className="space-y-3">
                      <div className="text-sm font-medium text-foreground">Technologies Used:</div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Key Highlights */}
                    <div className="space-y-3">
                      <div className="text-sm font-medium text-foreground">Key Features:</div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center text-sm text-muted-foreground">
                            <Star className="h-3 w-3 mr-2 text-primary" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 pt-4">
                      <Button variant="outline" className="flex items-center">
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </Button>
                      <Button className="bg-gradient-primary hover:opacity-90 flex items-center">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Developed */}
        <div className="bg-gradient-secondary rounded-2xl p-8 md:p-12 space-y-8">
          <h2 className="text-3xl font-bold text-center text-foreground">
            Skills Developed
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto">
                <span className="text-primary font-bold text-lg">FS</span>
              </div>
              <h3 className="font-semibold text-foreground">Full-Stack Development</h3>
              <p className="text-sm text-muted-foreground">
                End-to-end application development with modern tech stacks.
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto">
                <span className="text-primary font-bold text-lg">DB</span>
              </div>
              <h3 className="font-semibold text-foreground">Database Design</h3>
              <p className="text-sm text-muted-foreground">
                Schema design, optimization, and data management strategies.
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto">
                <span className="text-primary font-bold text-lg">API</span>
              </div>
              <h3 className="font-semibold text-foreground">API Development</h3>
              <p className="text-sm text-muted-foreground">
                RESTful services, authentication, and third-party integrations.
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto">
                <span className="text-primary font-bold text-lg">PM</span>
              </div>
              <h3 className="font-semibold text-foreground">Project Management</h3>
              <p className="text-sm text-muted-foreground">
                Planning, execution, and delivery of complex software projects.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-gradient-secondary rounded-2xl p-8 md:p-12 text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">
            Get Similar Major Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Interested in getting similar major projects built? These comprehensive applications 
            include full-stack development, database design, and production-ready features.
          </p>
          <div className="text-4xl font-bold text-primary mb-4">₹7,000</div>
          <p className="text-sm text-muted-foreground">Per project • Full-stack application • Production ready • Documentation</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
              Order Major Project
            </Button>
            <Button variant="outline" size="lg">
              Custom Requirements
            </Button>
          </div>
        </div>

        {/* Architecture Approach */}
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-bold text-foreground">
            Architecture & Best Practices
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Each major project follows industry best practices including clean architecture, 
            secure authentication, responsive design, and scalable database design. 
            Code quality and maintainability are always top priorities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="px-4 py-2 bg-primary/10 text-primary border-primary/20">
              Clean Architecture
            </Badge>
            <Badge className="px-4 py-2 bg-primary/10 text-primary border-primary/20">
              Security First
            </Badge>
            <Badge className="px-4 py-2 bg-primary/10 text-primary border-primary/20">
              Scalable Design
            </Badge>
            <Badge className="px-4 py-2 bg-primary/10 text-primary border-primary/20">
              Performance Optimized
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Major;