import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Clock, Award, ExternalLink } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: 'Full Stack Web Development',
      provider: 'Tech Academy',
      duration: '6 months',
      status: 'Completed' ,
      description: 'Comprehensive course covering React, Node.js, databases, and deployment strategies.',
      skills: ['React', 'Node.js', 'MongoDB', 'Express', 'REST APIs'],
      certificate: '#',
      level: 'Advanced'
    },
    {
      title: 'JavaScript Algorithms & Data Structures',
      provider: 'CodeCamp',
      duration: '3 months',
      status: 'Completed',
      description: 'Deep dive into algorithms, data structures, and problem-solving techniques.',
      skills: ['JavaScript', 'Algorithms', 'Data Structures', 'Problem Solving'],
      certificate: '#',
      level: 'Intermediate'
    },
    {
      title: 'Cloud Computing with AWS',
      provider: 'Cloud Institute',
      duration: '4 months' ,
      status: 'In Progress',
      description: 'Learning cloud architecture, deployment, and management on AWS platform.',
      skills: ['AWS', 'Cloud Architecture', 'DevOps', 'Docker'],
      certificate: null,
      level: 'Advanced'
    },
    {
      title: 'UI/UX Design Fundamentals',
      provider: 'Design School',
      duration: '2 months',
      status: 'Completed',
      description: 'User-centered design principles, prototyping, and design systems.',
      skills: ['Figma', 'Prototyping', 'User Research', 'Design Systems'],
      certificate: '#',
      level: 'Beginner'
    },
    {
      title: 'Machine Learning Basics',
      provider: 'AI University',
      duration: '5 months',
      status: 'Planned',
      description: 'Introduction to ML algorithms, Python libraries, and practical applications.',
      skills: ['Python', 'TensorFlow', 'Data Analysis', 'Machine Learning'],
      certificate: null ,
      level: 'Intermediate'
    },
    {
      title: 'Cybersecurity Fundamentals',
      provider: 'Security Institute',
      duration: '3 months',
      status: 'Completed',
      description: 'Network security, ethical hacking, and security best practices.',
      skills: ['Network Security', 'Ethical Hacking', 'Risk Assessment'],
      certificate: '#',
      level: 'Intermediate'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'In Progress':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'Planned':
        return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-500/10 text-green-500';
      case 'Intermediate':
        return 'bg-yellow-500/10 text-yellow-500';
      case 'Advanced':
        return 'bg-red-500/10 text-red-500';
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
            Courses & Learning
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey of continuous learning through various courses, certifications, 
            and skill development programs.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="text-center border-border">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">
                {courses.filter(c => c.status === 'Completed').length}
              </div>
              <div className="text-sm text-muted-foreground">Completed</div>
            </CardContent>
          </Card>
          <Card className="text-center border-border">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-500 mb-2">
                {courses.filter(c => c.status === 'In Progress').length}
              </div>
              <div className="text-sm text-muted-foreground">In Progress</div>
            </CardContent>
          </Card>
          <Card className="text-center border-border">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-yellow-500 mb-2">
                {courses.filter(c => c.status === 'Planned').length}
              </div>
              <div className="text-sm text-muted-foreground">Planned</div>
            </CardContent>
          </Card>
          <Card className="text-center border-border">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-foreground mb-2">
                {courses.length}
              </div>
              <div className="text-sm text-muted-foreground">Total Courses</div>
            </CardContent>
          </Card>
        </div>

        {/* Courses Grid */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center text-foreground">
            Course Portfolio
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="border-border hover:shadow-elegant transition-smooth h-full">
                <CardHeader className="space-y-4">
                  <div className="flex justify-between items-start">
                    <Badge className={getStatusColor(course.status)}>
                      {course.status}
                    </Badge>
                    <Badge className={getLevelColor(course.level)} variant="outline">
                      {course.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-foreground line-clamp-2">
                    {course.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <BookOpen className="h-4 w-4 mr-2" />
                      {course.provider}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      {course.duration}
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {course.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="text-sm font-medium text-foreground">Skills Learned:</div>
                    <div className="flex flex-wrap gap-2">
                      {course.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {course.certificate && (
                    <Button variant="outline" size="sm" className="w-full">
                      <Award className="h-4 w-4 mr-2" />
                      View Certificate
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="bg-gradient-secondary rounded-2xl p-8 md:p-12 text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">
            Continuous Learning Philosophy
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I believe that learning never stops in the tech industry. Each course represents 
            not just knowledge gained, but a step forward in my journey to become a better 
            developer and problem solver. I'm always exploring new technologies and 
            methodologies to stay current with industry trends.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Badge className="px-4 py-2 bg-primary/10 text-primary border-primary/20">
              Lifelong Learner
            </Badge>
            <Badge className="px-4 py-2 bg-primary/10 text-primary border-primary/20">
              Growth Mindset
            </Badge>
            <Badge className="px-4 py-2 bg-primary/10 text-primary border-primary/20">
              Hands-on Approach
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses ;