import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building, Calendar, MapPin, ExternalLink, Award, TrendingUp } from 'lucide-react';

const Internship = () => {
  const internships = [
    {
      company: 'TechCorp Solutions',
      position: 'Frontend Developer Intern',
      location: 'San Francisco, CA',
      duration: '3 months',
      period: 'Jun 2024 - Aug 2024',
      type: 'Remote',
      description: 'Developed responsive web applications using React and TypeScript. Collaborated with senior developers on feature implementation and bug fixes.',
      projects: [
        'Built admin dashboard with data visualization',
        'Implemented user authentication system',
        'Optimized application performance by 30%',
        'Created reusable UI component library'
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'Git', 'Jira'],
      achievements: [
        'Exceeded performance goals by 25%',
        'Received "Outstanding Intern" recognition',
        'Led code review sessions for other interns'
      ],
      companyLogo: 'bg-blue-500/20',
      status: 'Completed',
      offer: 'Full-time offer received'
    },
    {
      company: 'StartupHub Inc.',
      position: 'Full Stack Developer Intern',
      location: 'Austin, TX',
      duration: '4 months',
      period: 'Jan 2024 - Apr 2024',
      type: 'Hybrid',
      description: 'Worked on both frontend and backend development for a fintech application. Gained experience in agile development and startup culture.',
      projects: [
        'Developed payment processing integration',
        'Built RESTful APIs with Node.js',
        'Implemented real-time notifications',
        'Created automated testing suite'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io', 'Jest', 'AWS'],
      achievements: [
        'Delivered features ahead of schedule',
        'Improved system reliability by 40%',
        'Mentored 2 junior interns'
      ],
      companyLogo: 'bg-green-500/20',
      status: 'Completed',
      offer: 'Extended for part-time work'
    },
    {
      company: 'DataDriven Analytics',
      position: 'Data Visualization Intern',
      location: 'Seattle, WA',
      duration: '3 months',
      period: 'Sep 2023 - Nov 2023',
      type: 'On-site',
      description: 'Focused on creating interactive dashboards and data visualization tools. Worked closely with data scientists and product managers.',
      projects: [
        'Built interactive dashboard with D3.js',
        'Created data pipeline automation',
        'Developed client reporting system',
        'Implemented A/B testing framework'
      ],
      technologies: ['React', 'D3.js', 'Python', 'PostgreSQL', 'Tableau', 'Docker'],
      achievements: [
        'Reduced report generation time by 60%',
        'Created 15+ interactive visualizations',
        'Presented findings to executive team'
      ],
      companyLogo: 'bg-purple-500/20',
      status: 'Completed',
      offer: 'Letter of recommendation'
    },
    {
      company: 'InnovateLab',
      position: 'Software Development Intern',
      location: 'New York, NY',
      duration: '2 months',
      period: 'Jul 2023 - Aug 2023',
      type: 'Remote',
      description: 'Summer internship focused on mobile app development and API integration. First professional development experience.',
      projects: [
        'Developed mobile app features',
        'Integrated third-party APIs',
        'Wrote technical documentation',
        'Participated in code reviews'
      ],
      technologies: ['React Native', 'JavaScript', 'Firebase', 'REST APIs', 'Git'],
      achievements: [
        'Successfully delivered all assigned tasks',
        'Learned industry best practices',
        'Built professional network'
      ],
      companyLogo: 'bg-orange-500/20',
      status: 'Completed',
      offer: 'Positive feedback and referral'
    }
  ];

  const skills = [
    'Professional Communication',
    'Agile Development',
    'Code Review',
    'Technical Documentation',
    'Team Collaboration',
    'Problem Solving',
    'Time Management',
    'Industry Best Practices'
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Remote':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'On-site':
        return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'Hybrid':
        return 'bg-purple-500/10 text-purple-500 border-purple-500/20';
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
            Internship Experience
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional experience gained through internships at various companies, 
            working on real-world projects and learning industry best practices.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="text-center border-border">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">{internships.length}</div>
              <div className="text-sm text-muted-foreground">Internships</div>
            </CardContent>
          </Card>
          <Card className="text-center border-border">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-500 mb-2">12</div>
              <div className="text-sm text-muted-foreground">Total Months</div>
            </CardContent>
          </Card>
          <Card className="text-center border-border">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-500 mb-2">
                {new Set(internships.flatMap(i => i.technologies)).size}
              </div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </CardContent>
          </Card>
          <Card className="text-center border-border">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-yellow-500 mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </CardContent>
          </Card>
        </div>

        {/* Internships Timeline */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center text-foreground">
            Professional Journey
          </h2>
          <div className="space-y-8">
            {internships.map((internship, index) => (
              <Card key={index} className="border-border hover:shadow-elegant transition-smooth">
                <div className="p-6 space-y-6">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 rounded-xl ${internship.companyLogo} flex items-center justify-center`}>
                        <Building className="h-8 w-8 text-white/80" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-foreground">
                          {internship.position}
                        </CardTitle>
                        <div className="text-lg font-medium text-primary">
                          {internship.company}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className={getTypeColor(internship.type)}>
                        {internship.type}
                      </Badge>
                      <Badge variant="outline" className="border-primary/20 text-primary">
                        {internship.status}
                      </Badge>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {internship.period}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {internship.location}
                    </div>
                    <div className="text-muted-foreground">
                      Duration: {internship.duration}
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {internship.description}
                  </p>

                  {/* Projects */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Key Projects & Contributions:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {internship.projects.map((project, idx) => (
                        <div key={idx} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {project}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {internship.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                    <div className="space-y-2">
                      {internship.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center text-sm text-muted-foreground">
                          <Award className="h-4 w-4 mr-2 text-yellow-500" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Outcome */}
                  <div className="bg-gradient-secondary rounded-lg p-4">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      <span className="font-medium text-foreground">Outcome:</span>
                      <span className="text-muted-foreground">{internship.offer}</span>
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
            Professional Skills Developed
          </h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto">
            Through these internship experiences, I've developed both technical and 
            soft skills that are essential for professional software development.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <Badge 
                key={skill} 
                className="px-4 py-2 bg-primary/10 text-primary border-primary/20"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-gradient-secondary rounded-2xl p-8 md:p-12 text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">
            Get Internship-Level Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Looking for professional-level projects similar to what I worked on during internships? 
            These projects demonstrate industry-standard practices and real-world applications.
          </p>
          <div className="text-4xl font-bold text-primary mb-4">₹4,999</div>
          <p className="text-sm text-muted-foreground">Per project • Industry standard • Professional quality • Complete documentation</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
              Order Internship Project
            </Button>
            <Button variant="outline" size="lg">
              Explore Portfolio
            </Button>
          </div>
        </div>

        {/* Career Impact */}
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-bold text-foreground">
            Career Impact
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            These internship experiences have been invaluable in shaping my career. 
            They've provided real-world context to my technical skills, taught me 
            how to work effectively in teams, and given me insights into different 
            company cultures and development methodologies.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card className="border-border">
              <CardContent className="p-6 text-center space-y-3">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto">
                  <TrendingUp className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="font-semibold text-foreground">Professional Growth</h3>
                <p className="text-sm text-muted-foreground">
                  Developed industry-standard practices and professional communication skills.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border">
              <CardContent className="p-6 text-center space-y-3">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto">
                  <Award className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="font-semibold text-foreground">Technical Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  Gained hands-on experience with enterprise-level technologies and tools.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border">
              <CardContent className="p-6 text-center space-y-3">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto">
                  <Building className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="font-semibold text-foreground">Industry Network</h3>
                <p className="text-sm text-muted-foreground">
                  Built valuable professional relationships and mentorship connections.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internship;