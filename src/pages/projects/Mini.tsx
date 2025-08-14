import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Mini = () => {
  const projects = [
    {
      title: 'Weather App',
      description: 'A responsive weather application built with React and OpenWeather API. Features current weather, 5-day forecast, and geolocation support.',
      technologies: ['React', 'JavaScript', 'CSS3', 'API Integration'],
      image: 'bg-blue-500/20',
      githubUrl: '#',
      liveUrl: '#',
      date: '2024-01',
      duration: '1 week'
    },
    {
      title: 'Todo List Manager',
      description: 'A feature-rich todo application with local storage, drag-and-drop functionality, and priority levels.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage'],
      image: 'bg-green-500/20',
      githubUrl: '#',
      liveUrl: '#',
      date: '2024-02',
      duration: '3 days'
    },
    {
      title: 'Password Generator',
      description: 'Secure password generator with customizable length, character sets, and strength indicator.',
      technologies: ['JavaScript', 'CSS3', 'HTML5'],
      image: 'bg-red-500/20',
      githubUrl: '#',
      liveUrl: '#',
      date: '2024-02',
      duration: '2 days'
    },
    {
      title: 'Color Palette Generator',
      description: 'Interactive color palette generator with harmony rules, export options, and accessibility checking.',
      technologies: ['React', 'Color Theory', 'CSS3'],
      image: 'bg-purple-500/20',
      githubUrl: '#',
      liveUrl: '#',
      date: '2024-03',
      duration: '4 days'
    },
    {
      title: 'QR Code Generator',
      description: 'Simple QR code generator that creates QR codes for text, URLs, and contact information.',
      technologies: ['JavaScript', 'QR.js', 'HTML5', 'CSS3'],
      image: 'bg-yellow-500/20',
      githubUrl: '#',
      liveUrl: '#',
      date: '2024-03',
      duration: '2 days'
    },
    {
      title: 'Expense Tracker',
      description: 'Personal expense tracking app with categorization, charts, and monthly summaries.',
      technologies: ['React', 'Chart.js', 'Local Storage'],
      image: 'bg-indigo-500/20',
      githubUrl: '#',
      liveUrl: '#',
      date: '2024-04',
      duration: '1 week'
    },
    {
      title: 'Pomodoro Timer',
      description: 'Productivity timer with customizable work/break intervals, notifications, and statistics tracking.',
      technologies: ['JavaScript', 'Web Audio API', 'CSS3'],
      image: 'bg-orange-500/20',
      githubUrl: '#',
      liveUrl: '#',
      date: '2024-04',
      duration: '3 days'
    },
    {
      title: 'Unit Converter',
      description: 'Multi-unit converter supporting length, weight, temperature, and currency conversions.',
      technologies: ['React', 'API Integration', 'CSS3'],
      image: 'bg-teal-500/20',
      githubUrl: '#',
      liveUrl: '#',
      date: '2024-05',
      duration: '4 days'
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Mini Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Small but mighty projects that showcase specific skills and concepts. 
            Each project was built to learn new technologies and solve practical problems.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="text-center border-border">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">{projects.length}</div>
              <div className="text-sm text-muted-foreground">Total Projects</div>
            </CardContent>
          </Card>
          <Card className="text-center border-border">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-500 mb-2">
                {new Set(projects.flatMap(p => p.technologies)).size}
              </div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </CardContent>
          </Card>
          <Card className="text-center border-border">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-500 mb-2">2024</div>
              <div className="text-sm text-muted-foreground">Year Built</div>
            </CardContent>
          </Card>
          <Card className="text-center border-border">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-yellow-500 mb-2">5</div>
              <div className="text-sm text-muted-foreground">Avg Days</div>
            </CardContent>
          </Card>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center text-foreground">
            Project Showcase
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="border-border hover:shadow-elegant transition-smooth group">
                <CardHeader className="space-y-4">
                  <div className={`w-full h-32 rounded-lg ${project.image} flex items-center justify-center group-hover:scale-105 transition-smooth`}>
                    <div className="text-4xl font-bold text-white/80">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {project.date}
                    </div>
                    <div>Duration: {project.duration}</div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1 bg-gradient-primary hover:opacity-90">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Learning Outcomes */}
        <div className="bg-gradient-secondary rounded-2xl p-8 md:p-12 space-y-8">
          <h2 className="text-3xl font-bold text-center text-foreground">
            What I Learned
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">JS</span>
              </div>
              <h3 className="font-semibold text-foreground">Vanilla JavaScript</h3>
              <p className="text-sm text-muted-foreground">
                Strengthened foundation in core JavaScript concepts and DOM manipulation.
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">API</span>
              </div>
              <h3 className="font-semibold text-foreground">API Integration</h3>
              <p className="text-sm text-muted-foreground">
                Learned to work with external APIs and handle asynchronous operations.
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">UI</span>
              </div>
              <h3 className="font-semibold text-foreground">User Interface</h3>
              <p className="text-sm text-muted-foreground">
                Focused on creating intuitive and responsive user interfaces.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-gradient-secondary rounded-2xl p-8 md:p-12 text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">
            Get Similar Mini Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Want to learn from these mini projects or get similar ones built for your portfolio? 
            Each project comes with complete source code and documentation.
          </p>
          <div className="text-4xl font-bold text-primary mb-4">₹2,999</div>
          <p className="text-sm text-muted-foreground">Per project • Complete source code • Documentation included</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
              Order Mini Project
            </Button>
            <Button variant="outline" size="lg">
              View All Projects
            </Button>
          </div>
        </div>

        {/* Next Steps */}
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-bold text-foreground">
            Ready for Bigger Challenges
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These mini projects laid the foundation for more complex applications. 
            Each one taught me valuable lessons that I've applied to larger projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="px-4 py-2 bg-primary/10 text-primary border-primary/20">
              Problem Solving
            </Badge>
            <Badge className="px-4 py-2 bg-primary/10 text-primary border-primary/20">
              Quick Implementation
            </Badge>
            <Badge className="px-4 py-2 bg-primary/10 text-primary border-primary/20">
              Clean Code
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mini;