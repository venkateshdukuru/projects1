import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, ShoppingCart, Star, ExternalLink } from 'lucide-react';
import CustomProjectDialog from '@/components/CustomProjectDialog';
import PricingDialog from '@/components/PricingDialog';

const ProjectMarketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [selectedProjectType, setSelectedProjectType] = useState<string>('All');

  const technologies = [
    'AI', 'ML', 'DL', 'Python', 'React', 'Flutter', 'Firebase', 
    'Full Stack', 'Java', 'SQL', 'Node.js', 'MongoDB', 'TensorFlow', 
    'PyTorch', 'Generative AI', 'Computer Vision', 'NLP', 'Other'
  ];

  const projectTypes = ['All', 'Internship', 'Mini Project', 'Major Project'];

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Resume Builder',
      description: 'A smart resume builder that suggests improvements using machine learning.',
      price: 7999,
      technologies: ['AI', 'ML', 'Python'],
      rating: 4.8,
      sales: 43,
      image: '/Projects-page/resume-1.png',
      type: 'Major Project'
    },
    {
      id: 2,
      title: 'E-commerce Mobile App',
      description: 'A fully functional e-commerce application for iOS and Android built with Flutter.',
      price: 7999,
      technologies: ['Flutter', 'Firebase', 'Full Stack'],
      rating: 4.9,
      sales: 35,
      image: '/Projects-page/ecommerce-2.png',
      type: 'Major Project'
    },
    {
      id: 3,
      title: 'Library Management System',
      description: 'A desktop application for managing library books, members, and loans.',
      price: 2999,
      technologies: ['Java', 'SQL', 'Swing', 'JDBC'],
      rating: 4.6,
      sales: 29,
      image: '/Projects-page/Library-3.png',
      type: 'Mini Project'
    },
    {
      id: 4,
      title: 'Data Science Analytics Project',
      description: 'Analysis of customer churn using Python, Pandas, and Scikit-learn.',
      price: 4999,
      technologies: ['Python', 'ML'],
      rating: 4.7,
      sales: 35,
      image: '/Projects-page/dataanal-4.jpg',
      type: 'Internship'
    },
    {
      id: 5,
      title: 'React Dashboard with Analytics',
      description: 'Modern admin dashboard with real-time analytics and data visualization.',
      price: 7999,
      technologies: ['React', 'Node.js', 'MongoDB'],
      rating: 4.8,
      sales: 37,
      image: '/Projects-page/react-5.png',
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
      image: '/Projects-page/firebase-6.jpg',
      type: 'Mini Project'
    },
    {
      id: 7,
      title: 'Full Stack Social Media Platform',
      description: 'Complete social media application with posts, comments, and user profiles.',
      price: 7999,
      technologies: ['React', 'Node.js', 'MongoDB', 'Full Stack'],
      rating: 4.9,
      sales: 45,
      image: '/Projects-page/fulls-7.jpg',
      type: 'Major Project'
    },
    {
      id: 8,
      title: 'AI Image Recognition System',
      description: 'Machine learning model for image classification and object detection.',
      price: 4999,
      technologies: ['AI', 'Python', 'ML', 'Computer Vision'],
      rating: 4.6,
      sales: 23,
      image: '/Projects-page/recognition-8.jpg',
      type: 'Internship'
    },
    {
      id: 9,
      title: 'Cryptocurrency Trading Bot',
      description: 'Automated trading bot with technical analysis and risk management features.',
      price: 7999,
      technologies: ['Python', 'ML'],
      rating: 4.7,
      sales: 48,
      image: '/Projects-page/crypto-9.jpg',
      type: 'Major Project'
    },
    {
      id: 10,
      title: 'Video Streaming Platform',
      description: 'Netflix-like streaming platform with user subscriptions and content management.',
      price: 7999,
      technologies: ['React', 'Node.js', 'Full Stack'],
      rating: 4.9,
      sales: 37,
      image: '/Projects-page/video-10.jpg',
      type: 'Major Project'
    },
    {
      id: 11,
      title: 'Inventory Management System',
      description: 'Complete inventory tracking system with barcode scanning and reporting.',
      price: 2999,
      technologies: ['React', 'Node.js'],
      rating: 4.5,
      sales: 45,
      image: '/Projects-page/inventory-11.jpg',
      type: 'Mini Project'
    },
    {
      id: 12,
      title: 'Weather Prediction ML Model',
      description: 'Advanced weather forecasting using multiple machine learning algorithms.',
      price: 4999,
      technologies: ['Python', 'TensorFlow', 'ML'],
      rating: 4.6,
      sales: 89,
      image: '/Projects-page/weather-12.png',
      type: 'Internship'
    },
    {
      id: 13,
      title: 'GPT-3 Powered Chatbot',
      description: 'Intelligent conversational AI using OpenAI GPT-3 for customer support.',
      price: 7999,
      technologies: ['Generative AI', 'Python', 'NLP'],
      rating: 4.9,
      sales: 28,
      image: '/Projects-page/Gpt3-13.png',
      type: 'Major Project'
    },
    {
      id: 14,
      title: 'Deep Learning Face Recognition',
      description: 'Real-time face detection and recognition system using CNN architectures.',
      price: 4999,
      technologies: ['DL', 'Python', 'TensorFlow', 'Computer Vision'],
      rating: 4.7,
      sales: 56,
      image: '/Projects-page/face-14.jpg',
      type: 'Internship'
    },
    {
      id: 15,
      title: 'AI Content Generator',
      description: 'Automated blog post and article generation using transformer models.',
      price: 7999,
      technologies: ['Generative AI', 'PyTorch', 'NLP'],
      rating: 4.8,
      sales: 34,
      image: '/Projects-page/content-15.jpg',
      type: 'Major Project'
    },
    {
      id: 16,
      title: 'Neural Style Transfer App',
      description: 'Transform photos into artistic styles using deep neural networks.',
      price: 2999,
      technologies: ['DL', 'Python', 'Computer Vision'],
      rating: 4.6,
      sales: 18,
      image: '/Projects-page/neural-16.jpeg',
      type: 'Mini Project'
    },
    {
      id: 17,
      title: 'Sentiment Analysis Tool',
      description: 'Real-time social media sentiment analysis using BERT and transformers.',
      price: 4999,
      technologies: ['NLP', 'Python', 'ML'],
      rating: 4.5,
      sales: 37,
      image: '/Projects-page/sentiana-17.png',
      type: 'Internship'
    },
    {
      id: 18,
      title: 'Voice Clone AI System',
      description: 'Clone and synthesize human voice using deep learning models.',
      price: 7999,
      technologies: ['DL', 'Generative AI', 'Python'],
      rating: 4.9,
      sales: 59,
      image: '/Projects-page/voice-clone-18.png',
      type: 'Major Project'
    },
    {
      id: 19,
      title: 'Object Detection Mobile App',
      description: 'Real-time object detection and classification on mobile devices.',
      price: 2999,
      technologies: ['Computer Vision', 'Flutter', 'TensorFlow'],
      rating: 4.4,
      sales: 48,
      image: '/Projects-page/obj-detect-19.png',
      type: 'Mini Project'
    },
    {
      id: 20,
      title: 'AI Music Composer',
      description: 'Generate original music compositions using recurrent neural networks.',
      price: 7999,
      technologies: ['DL', 'Generative AI', 'Python'],
      rating: 4.7,
      sales: 23,
      image: '/Projects-page/ai-music-20.jpeg',
      type: 'Major Project'
    },
 

    {
    id: 21,
    title: 'Responsive Portfolio Website',
    description: 'Create a personal portfolio website with responsive layout using HTML, CSS, and JavaScript.',
    price: 1999,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    rating: 4.5,
    sales: 58,
    image: '/Projects-page/portfolio-21.jpg',
    type: 'Mini Project'
  },
  {
    id: 22,
    title: 'E-Commerce Web Application',
    description: 'A full-stack shopping site with cart, payment integration, and admin dashboard.',
    price: 4999,
    technologies: ['React', 'Node.js', 'MongoDB'],
    rating: 4.8,
    sales: 93,
    image: '/Projects-page/ecommerce-22.jpg',
    type: 'Major Project'
  },
  {
    id: 23,
    title: 'Internship on Frontend Web Development',
    description: 'Develop UI components and responsive designs using React and Tailwind CSS.',
    price: 3999,
    technologies: ['React', 'Tailwind CSS', 'JavaScript'],
    rating: 4.6,
    sales: 56,
    image: '/Projects-page/internship-23.png',
    type: 'Internship'
  },
  {
    id: 24,
    title: 'Real-Time Chat App',
    description: 'Build a web-based real-time chat application using WebSocket.',
    price: 2999,
    technologies: ['Node.js', 'Socket.io', 'Express'],
    rating: 4.4,
    sales: 64,
    image: '/Projects-page/realtime-24.jpg',
    type: 'Mini Project'
  },
  {
    id: 25,
    title: 'Job Portal Web App',
    description: 'A web application where users can post and apply for jobs with search and filter.',
    price: 7999,
    technologies: ['MERN Stack', 'JWT', 'REST API'],
    rating: 4.9,
    sales: 42,
    image: '/Projects-page/job-25.jpeg',
    type: 'Major Project'
  }, 
  {
    id: 26,
    title: 'Online Banking System',
    description: 'A secure online banking platform with login, fund transfer, and transaction history.',
    price: 7999,
    technologies: ['Java', 'Spring Boot', 'MySQL'],
    rating: 4.8,
    sales: 33,
    image: '/Projects-page/banking-26.jpg',
    type: 'Major Project'
  },
  {
    id: 27,
    title: 'Java Internship on Backend Development',
    description: 'Develop RESTful APIs and integrate them with databases using Spring Boot.',
    price: 3999,
    technologies: ['Java', 'Spring Boot', 'Hibernate'],
    rating: 4.7,
    sales: 45,
    image: '/Projects-page/java-27.jpeg',
    type: 'Internship'
  },
  {
    id: 28,
    title: 'Student Record Management',
    description: 'Console-based Java application for CRUD operations on student records.',
    price: 1999,
    technologies: ['Core Java', 'Collections', 'File Handling'],
    rating: 4.3,
    sales: 78,
    image: '/Projects-page/student-rec-28.jpg',
    type: 'Mini Project'
  },
  {
    id: 29,
    title: 'Hospital Management System',
    description: 'An advanced system to manage patients, doctors, appointments, and billing.',
    price: 7999,
    technologies: ['Java', 'Spring MVC', 'MySQL'],
    rating: 4.9,
    sales: 29,
    image: '/Projects-page/hospital-29.jpg',
    type: 'Major Project'
  },
  {
    id: 30,
      title: 'Fire Detection Using CNN',
      description: 'Real-time fire detection using image classification with Convolutional Neural Networks.',
      price: 5499,
      technologies: ['Python', 'Keras', 'OpenCV'],
      rating: 4.8,
      sales: 27,
      image: '/Projects-page/fire-30.jpg',
      type: 'Internship'
  },
  {
    id: 31,
    title: 'Java Web App for Feedback Analysis',
    description: 'Collect and analyze customer feedback with sentiment scoring.',
    price: 4799,
    technologies: ['Spring Boot', 'Thymeleaf', 'MySQL', 'NLTK'],
    rating: 4.5,
    sales: 32,
    image: '/Projects-page/javaweb-31.jpg',
    type: 'Internship'
  },
  {
    id: 32,
    title: 'Student Attendance Tracker',
    description: 'Web app to record and manage student attendance with admin and teacher login.',
    price: 4999,
    technologies: ['HTML', 'CSS', 'JS', 'Python', 'Flask', 'SQLite'],
    rating: 4.6,
    sales: 52,
    image: '/Projects-page/attendance-32.jpg',
    type: 'Major Project'
  },
  {
    id: 33,
    title: 'Job Application Portal',
    description: 'Online job listing and applying system with role-based login for admin and users.',
    price: 5999,
    technologies: ['HTML', 'CSS', 'JS', 'Java', 'Spring Boot', 'MySQL'],
    rating: 4.8,
    sales: 47,
    image: '/Projects-page/jobportal-33.png',
    type: 'Major Project'
  },
  {
    id: 34,
    title: 'Online Quiz System',
    description: 'Timed quiz system with auto-scoring and question bank for different subjects.',
    price: 4999,
    technologies: ['HTML', 'CSS', 'JS', 'Python', 'Django', 'MongoDB'],
    rating: 4.7,
    sales: 38,
    image: '/Projects-page/quiz-34.jpg',
    type: 'Major Project'
  },
  {
    id: 35,
    title: 'Patient Record Management System',
    description: 'Manage patient history, prescriptions, and appointments securely.',
    price: 6999,
    technologies: ['HTML', 'CSS', 'JS', 'Java', 'Spring Boot', 'PostgreSQL'],
    rating: 4.9,
    sales: 29,
    image: '/Projects-page/patient-35.jpg',
    type: 'Major Project'
  },
  {
    id: 36,
    title: 'Event Registration Portal',
    description: 'Create and manage events with real-time attendee registration and dashboard.',
    price: 3999,
    technologies: ['HTML', 'CSS', 'JS', 'Python', 'Flask', 'MySQL'],
    rating: 4.5,
    sales: 44,
    image: '/Projects-page/event-36.jpg',
    type: 'Mini Project'
  },
  {
    id: 37,
    title: 'Leave Management System',
    description: 'Submit, approve, and track leaves for employees and students with roles.',
    price: 5999,
    technologies: ['HTML', 'CSS', 'JS', 'Java', 'Spring Boot', 'MongoDB'],
    rating: 4.6,
    sales: 36,
    image: '/Projects-page/leave-37.jpg',
    type: 'Major Project'
  },
  {
    id: 38,
    title: 'Feedback Collection System',
    description: 'Collect and manage feedback from users for different products or services.',
    price: 3999,
    technologies: ['HTML', 'CSS', 'JS', 'Python', 'Django', 'SQLite'],
    rating: 4.4,
    sales: 41,
    image: '/Projects-page/feedback-38.jpg',
    type: 'Mini Project'
  }


 ];

  const handleTechnologyChange = (tech: string, checked: boolean) => {
    if (checked) {
      setSelectedTechnologies([...selectedTechnologies, tech]);
    } else {
      setSelectedTechnologies(selectedTechnologies.filter(t => t !== tech));
    }
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTechnology = selectedTechnologies.length === 0 ||
                             selectedTechnologies.some(tech => project.technologies.includes(tech));
    const matchesType = selectedProjectType === 'All' || project.type === selectedProjectType;
    
    return matchesSearch && matchesTechnology && matchesType;
  });

  // Removed type color function as project types are no longer used

  return (
    <div className="min-h-screen pt-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-normal py-4 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Buy, and explore the best AI, ML, DL and development projects. Find inspiration or your next masterpiece.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="space-y-6">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Search Bar */}
            <div className="lg:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name or technology"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-border focus:border-primary"
              />
            </div>

            {/* Results Count */}
            <div className="flex items-center text-muted-foreground">
              {filteredProjects.length} projects found
            </div>
          </div>

          {/* Project Type Filter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Project Type</h3>
            <Select value={selectedProjectType} onValueChange={setSelectedProjectType}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Select project type" />
              </SelectTrigger>
              <SelectContent>
                {projectTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Technology Filters */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {technologies.map((tech) => (
                <div key={tech} className="flex items-center space-x-2">
                  <Checkbox
                    id={tech}
                    checked={selectedTechnologies.includes(tech)}
                    onCheckedChange={(checked) => handleTechnologyChange(tech, checked as boolean)}
                    className="border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  />
                  <label
                    htmlFor={tech}
                    className="text-sm text-foreground cursor-pointer hover:text-primary transition-smooth"
                  >
                    {tech}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-foreground">All Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="border-border hover:shadow-elegant transition-smooth group">
                <CardHeader className="p-0">
                  <div className={"w-full h-48 rounded-t-lg overflow-hidden relative group"}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />                    
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

          {filteredProjects.length === 0 && (
            <div className="text-center py-16 space-y-4">
              <div className="text-6xl text-muted-foreground/20">🔍</div>
              <h3 className="text-xl font-semibold text-foreground">No projects found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria or filters to find more projects.
              </p>
            </div>
          )}
        </div>

        {/* Custom Project CTA */}
        <div className="bg-gradient-secondary rounded-2xl p-8 md:p-12 text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">
            Need a Custom Project?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Can't find what you're looking for? Get a custom project built specifically for your needs. 
            Our expert developers will create the perfect solution for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CustomProjectDialog>
              <Button size="lg" className="bg-gradient-primary hover:opacity-85">
                Request Custom Project
              </Button>
            </CustomProjectDialog>
            <PricingDialog>
              <Button variant="outline" size="lg">
                View Pricing
              </Button>
            </PricingDialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectMarketplace;