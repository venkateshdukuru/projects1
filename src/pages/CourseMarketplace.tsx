import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, ShoppingCart, Star, Clock, Users, PlayCircle } from 'lucide-react';

const CourseMarketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [courseLevel, setCourseLevel] = useState('all');

  const technologies = [
    'React', 'JavaScript', 'Python', 'Node.js', 'TypeScript', 'Vue.js',
    'Angular', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Other'
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
      duration: '32 hours',
      lessons: 156,
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
      duration: '28 hours',
      lessons: 142,
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
      duration: '45 hours',
      lessons: 201,
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
      duration: '28 hours',
      lessons: 125,
      image: 'bg-cyan-500/20',
      Syllabus: '/Syllabus/Cybersecurity Fundamentals.pdf' 
    },
    {
      id: 5,
      title: 'Frontend Development with HTML, CSS & JavaScript',
      description: 'Master the building blocks of the web with hands-on projects and interactive layouts.',
      price: 4999,
      originalPrice: 7999,
      level: 'Beginner',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      rating: 4.7,
      students: 72,
      duration: '27 hours',
      lessons: 122,
      image: 'bg-pink-500/20',
      Syllabus: '/Syllabus/Frontend Development with HTML, CSS, JavaScript.pdf' 
    },
    {
      id: 6,
      title: 'Python for Web & Data Applications',
      description: 'Use Python to build Flask web apps and perform data analysis with Pandas and NumPy.',
      price: 5799,
      originalPrice: 8999,
      level: 'Intermediate',
      technologies: ['Python', 'Flask', 'Pandas'],
      rating: 4.7,
      students: 61,
      duration: '32 hours',
      lessons: 141,
      image: 'bg-yellow-600/20',
      Syllabus: '/Syllabus/Python for Web and Data Applications.pdf' 
    },
    {
      id: 7,
      title: 'AI & Machine Learning with Python',
      description: 'Master AI concepts using Python, NumPy, Scikit-learn, and TensorFlow.',
      price: 6999,
      originalPrice: 13999,
      level: 'Advanced',
      technologies: ['Python', 'ML', 'TensorFlow'],
      rating: 4.9,
      students: 52,
      duration: '42 hours',
      lessons: 193,
      image: 'bg-indigo-700/20',
      Syllabus: '/Syllabus/Python for AI & ML.pdf' 
    },
    {
      id: 8,
      title: 'Machine Learning Mastery with Python',
      description: 'Explore supervised and unsupervised learning, regression, and classification models with Python.',
      price: 6499,
      originalPrice: 9999,
      level: 'Intermediate',
      technologies: ['Python', 'Scikit-learn', 'ML'],
      rating: 4.8,
      students: 58,
      duration: '38 hours',
      lessons: 165,
      image: 'bg-green-600/20',
      Syllabus: '/Syllabus/Machine Learning mastery with Python.pdf' 
    },
    {
      id: 9,
      title: 'Artificial Intelligence Foundations',
      description: 'Dive into AI fundamentals, problem-solving, and intelligent agent design with hands-on projects.',
      price: 5499,
      originalPrice: 11499,
      level: 'Advanced',
      technologies: ['AI', 'Python', 'NLP'],
      rating: 4.7,
      students: 54,
      duration: '40 hours',
      lessons: 160,
      image: 'bg-blue-600/20',
      Syllabus: '/Syllabus/Artificial Intelligence Foundations.pdf' 
    },
    {
      id: 10,
      title: 'Prompt Engineering for AI',
      description: 'Learn how to craft high-performing prompts to get the best results from AI models like ChatGPT.',
      price: 4599,
      originalPrice: 7999,
      level: 'Beginner',
      technologies: ['Prompting', 'ChatGPT', 'LLMs'],
      rating: 4.6,
      students: 67,
      duration: '18 hours',
      lessons: 90,
      image: 'bg-orange-600/20',
      Syllabus: '/Syllabus/Prompt Engineering for AI.pdf' 
    },
    {
      id: 11,
      title: 'Generative AI in Practice',
      description: 'Harness the power of Generative AI for images, text, and code using OpenAI and Hugging Face.',
      price: 5799,
      originalPrice: 13499,
      level: 'Advanced',
      technologies: ['GenAI', 'OpenAI', 'Transformers'],
      rating: 4.9,
      students: 49,
      duration: '34 hours',
      lessons: 140,
      image: 'bg-pink-600/20',
      Syllabus: '/Syllabus/Generative AI in Practice.pdf' 
    },
    {
      id: 12,
      title: 'Deep Learning Specialization',
      description: 'Master deep neural networks, CNNs, RNNs, and autoencoders using TensorFlow and Keras.',
      price: 6299,
      originalPrice: 14999,
      level: 'Advanced',
      technologies: ['Deep Learning', 'Keras', 'TensorFlow'],
      rating: 5.0,
      students: 72,
      duration: '50 hours',
      lessons: 210,
      image: 'bg-red-600/20',
      Syllabus: '/Syllabus/Deep Learning Specialization.pdf' 
      
    },

    {
      id: 13,
      title: 'Retrieval-Augmented Generation (RAG)',
      description: 'Build intelligent RAG pipelines for smarter LLM applications using LangChain and VectorDB.',
      price: 5999,
      originalPrice: 11999,
      level: 'Advanced',
      technologies: ['RAG', 'LangChain', 'VectorDB'],
      rating: 4.8,
      students: 41,
      duration: '28 hours',
      lessons: 112,
      image: 'bg-teal-600/20',
      Syllabus: '/Syllabus/Retrieval-Augmented Generation (RAG).pdf' 
    },
    {
      id: 14,
      title: 'Generative AI with LangChain',
      description: 'Build generative AI apps using LangChain including RAG, depoyment and real-world projects.',
      price: 4999,
      originalPrice: 8999,
      level: 'Advanced',
      technologies: ['Generative AI', 'LangChain', 'LLMs'],
      rating: 4.6,
      students: 2967,
      duration: '35 hours',
      lessons: 60,
      instructor: 'Krish Naik',
      image: 'bg-green-500/20'
    },
    {
      id: 15,
      title: 'Generative AI with LangGraph',
      description: 'Hands-on AI agents using LangGraph architecture and graph-based RAG techniques.',
      price: 4999,
      originalPrice: 8999,
      level: 'Advanced',
      technologies: ['AI Agents', 'LangGraph', 'RAG', 'Prompt Engineering'],
      rating: 4.5,
      students: 1567,
      duration: '20 hours',
      lessons: 40,
      instructor: 'Krish Naik',
      image: 'bg-sky-500/20'
    },
    {
      id: 16,
      title: 'Natural Language Processing',
      description: 'Master mordern NLP in Python-transformers, spaCy, Hugging Face and sentiment analysis.',
      price: 4999,
      originalPrice: 8999,
      level: 'Intermediate',
      technologies: ['NLP', 'ML', 'LLMs', 'Text Processing'],
      rating: 4.6,
      students: 2354,
      duration: '15 hours',
      lessons: 50,
      instructor: 'Alice Zhao',
      image: 'bg-pink-500/20'
    },
    {
      id: 17,
      title: 'Latest Industry AI Tools',
      description: 'Crash Course on tools like MLaaS, AutoML systems, GenAI APIs(OpenAI, Vertex AI, etc.).',
      price: 4999,
      originalPrice: 8999,
      level: 'Intermediate',
      technologies: ['Industry AI Tools', 'Cloud AI services', 'AutoML'],
      rating: 4.5,
      students: 500,
      duration: '12 hours',
      lessons: 30,
      instructor: 'someone',
      image: 'bg-purple-500/20'
    },
    {
      id: 18,
      title: 'Postman Testing',
      description: 'API testing with Postman-collections, environments, mock servers, automation.',
      price: 4999,
      originalPrice: 8999,
      level: 'Beginner',
      technologies: ['API Testing', 'Stramline development', 'CI/CD', 'Automation'],
      rating: 4.6,
      students: 2354,
      duration: '12 hours',
      lessons: 50,
      instructor: 'Rahul Shetty',
      image: 'bg-yellow-500/20'
    },
    {
      id: 19,
      title: 'C Programming',
      description: 'Beginner-friendly C bootcamp covering pointers, recursions, arrays, structures.',
      price: 4999,
      originalPrice: 8999,
      level: 'Beginner',
      technologies: ['C Language fundamentals', 'System Programming', 'Pointers'],
      rating: 4.5,
      students: 9876,
      duration: '25 hours',
      lessons: 80,
      instructor: 'Vlad Budnitski',
      image: 'bg-red-500/20'
    },
    {
      id: 20,
      title: 'Java Programming',
      description: 'Comprehensive Java training, upto java 17.',
      price: 4999,
      originalPrice: 8999,
      level: 'Intermediate',
      technologies: ['Application Development', 'OOPs concept', 'Java'],
      rating: 4.7,
      students: 9824,
      duration: '80 hours',
      lessons: 200,
      instructor: 'Alice Zhao',
      image: 'bg-indigo-500/20'
    },
    {
      id: 21,
      title: 'Python Programming',
      description: 'From basics to intermediate - build 10 real-world Python apps and master the language.',
      price: 4999,
      originalPrice: 8999,
      level: 'Beginner',
      technologies: ['Python Fundamentals', 'App Development', 'GUIs', 'Databases'],
      rating: 4.6,
      students: 2354,
      duration: '100 hours',
      lessons: 250,
      instructor: 'Jose Portilla',
      image: 'bg-yellow-500/20'
    },
    {
      id: 22,
      title: 'Data Structures',
      description: 'In-depth coverage of arrays, liked lists, trees, graphs, stacks, queues.',
      price: 4999,
      originalPrice: 8999,
      level: 'Intermediate',
      technologies: ['Programming Foundation', 'Data Structures', 'Algorithms'],
      rating: 4.7,
      students: 7354,
      duration: '45 hours',
      lessons: 120,
      instructor: 'Andrei Neagoie',
      image: 'bg-teal-500/20'
    },
    {
      id: 23,
      title: 'Operating Systems',
      description: 'Explore OS concepts like occurrency, scheduling, memory management, file systems.',
      price: 4999,
      originalPrice: 8999,
      level: 'Intermediate',
      technologies: ['Operating System', 'System Programming'],
      rating: 4.6,
      students: 3254,
      duration: '45 hours',
      lessons: 80,
      instructor: 'Neso Academy',
      image: 'bg-yellow-500/20'
    },
    {
      id: 24,
      title: 'MySQL with Python',
      description: 'Python + MySQL integration - CRUD, analytics, data projects.',
      price: 4999,
      originalPrice: 8999,
      level: 'Intermediate',
      technologies: ['Database Models', 'Python Language', 'Data Science', 'MySQL'],
      rating: 4.6,
      students: 254,
      duration: '25 hours',
      lessons: 40,
      instructor: 'Metla Sudha Sekhar',
      image: 'bg-red-500/20'
    },
    {
      id: 25,
      title: 'FastAPI with Python',
      description: 'Build APIs/web apps using FastAPI and Postgres.',
      price: 4999,
      originalPrice: 8999,
      level: 'Intermediate',
      technologies: ['API Development', 'Python', 'FastAPI', 'Backend'],
      rating: 4.5,
      students: 879,
      duration: '35 hours',
      lessons: 50,
      instructor: 'Sourabh Sinha',
      image: 'bg-purple-500/20'
    },
    {
      id: 26,
      title: 'PostgreSQL with Python',
      description: 'Learn PostgreSQL and web integrationn with Python + hosting on cloud.',
      price: 4999,
      originalPrice: 8999,
      level: 'Intermediate',
      technologies: ['SQL', 'PostgreSQL', 'Python', 'Backend Development'],
      rating: 4.1,
      students: 254,
      duration: '30 hours',
      lessons: 30,
      instructor: 'Lucas Mayrhofer',
      image: 'bg-teal-500/20'
    },
    {
      id: 27,
      title: 'MongoDB with Python',
      description: 'CRUD, authentication, indexing, geospatial queries using MongoDB in Python.',
      price: 4999,
      originalPrice: 8999,
      level: 'Intermediate',
      technologies: ['NoSQL', 'MongoDB', 'Python'],
      rating: 4.1,
      students: 254,
      duration: '25 hours',
      lessons: 25,
      instructor: 'Yasser Abbass',
      image: 'bg-orange-500/20'
    }
  ];

  const handleTechnologyChange = (tech: string, checked: boolean) => {
    if (checked) {
      setSelectedTechnologies([...selectedTechnologies, tech]);
    } else {
      setSelectedTechnologies(selectedTechnologies.filter(t => t !== tech));
    }
  };

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTechnology = selectedTechnologies.length === 0 ||
                              selectedTechnologies.some(tech => course.technologies.includes(tech));
    const matchesLevel = courseLevel === 'all' || course.level.toLowerCase() === courseLevel.toLowerCase();
    
    return matchesSearch && matchesTechnology && matchesLevel;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-500/10 text-green-500 border-green-500/20 text-xs hover:bg-green-500 hover:text-white';
      case 'Intermediate':
        return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20 text-xs hover:bg-yellow-500 hover:text-white';
      case 'Advanced':
        return 'bg-red-500/10 text-red-500 border-red-500/20 text-xs hover:bg-red-500 hover:text-white';
      default:
        return 'bg-muted-500 text-muted-foreground';
    }
  };

  const videoBasedCourses = [
    {
      id: 101,
      title: 'Aptitude',
      description: 'Sharpen numerical and logical reasoning skills fast.',
      price: 4999,
      originalPrice: 8999,
      level: 'Beginner',
      technologies: ['Core Math', 'Logical Puzzles'],
      rating: 4.2,
      students: 1200,
      duration: '10 hours',
      lessons: 50,
      instructor: 'Sarah Khan',
      image: 'bg-red-500/20'
    },
    {
      id: 102,
      title: 'Reasoning',
      description: 'Build pattern recognition and critical thinking abilities.',
      price: 4999,
      originalPrice: 8999,
      level: 'Intermediate',
      technologies: ['Logical Reasoning', 'Puzzles', 'Verbal Tests'],
      rating: 4.3,
      students: 950,
      duration: '12 hours',
      lessons: 60,
      instructor: 'Rohit Verma',
      image: 'bg-teal-500/20'
    },
    {
      id: 103,
      title: 'Deep Learning',
      description: 'Dive into neural networks with hands-on TensorFlow projects.',
      price: 4999,
      originalPrice: 8999,
      level: 'Advanced',
      technologies: ['Python', 'TensorFlow', 'Keras'],
      rating: 4.7,
      students: 5400,
      duration: '40 hours',
      lessons: 180,
      instructor: 'Andrew Ng',
      image: 'bg-cyan-500/20'
    },
    {
      id: 104,
      title: 'Artificial Intelligence',
      description: 'Learn AI fundamentals including search, planning, and agents.',
      price: 4999,
      originalPrice: 8999,
      level: 'Intermediate',
      technologies: ['Python', 'Search Algorithms', 'Reinforcement Learning'],
      rating: 4.5,
      students: 3200,
      duration: '35 hours',
      lessons: 150,
      instructor: 'Peter Norvig',
      image: 'bg-orange-500/20'
    },
    {
      id: 105,
      title: 'Data Science',
      description: 'End-to-end data handling from analysis to visualization.',
      price: 4999,
      originalPrice: 8999,
      level: 'Intermediate',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'SQL'],
      rating: 4.6,
      students: 4800,
      duration: '30 hours',
      lessons: 140,
      instructor: 'Kirill Eremenko',
      image: 'bg-purple-500/20'
    },
    {
      id: 106,
      title: 'Full-Stack Development',
      description: 'Build end-to-end web apps using React and Node.js.',
      price: 4999,
      originalPrice: 8999,
      level: 'Advanced',
      technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
      rating: 4.4,
      students: 3600,
      duration: '45 hours',
      lessons: 200,
      instructor: 'Brad Traversy',
      image: 'bg-pink-500/20'
    },
    {
      id: 107,
      title: 'Machine Learning',
      description: 'Master ML models from regression to ensemble techniques.',
      price: 4999,
      originalPrice: 8999,
      level: 'Advanced',
      technologies: ['Python', 'scikit-learn', 'TensorFlow'],
      rating: 4.5,
      students: 4500,
      duration: '38 hours',
      lessons: 170,
      instructor: 'Sebastian Raschka',
      image: 'bg-blue-500/20'
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6 py-12 px-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            Unlock Your Future with Courses
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Learn from expert instructors at ProjectsPlace and advance your career with high-quality programming courses.</p>
        </div>


        {/* Search and Filters */}
        <div className="space-y-6">
          <div className="grid lg:grid-cols-4 gap-6">
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

            {/* Course Level Filter */}
            <div>
              <Select value={courseLevel} onValueChange={setCourseLevel}>
                <SelectTrigger className="border-border">
                  <SelectValue placeholder="Course Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Results Count */}
            <div className="flex items-center text-muted-foreground">
              {filteredCourses.length} courses found
            </div>
          </div>
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

        {/* Courses Grid */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-foreground">All Courses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="border-border hover:shadow-elegant transition-smooth group">
                <CardHeader className="p-0">
                  <div className={`w-full h-48 rounded-t-lg ${course.image} flex items-center justify-center group-hover:scale-105 transition-smooth relative`}>
                    <PlayCircle className="h-16 w-16 text-white/80" />
                    <div className="absolute top-4 right-4">
                      <Badge className={getLevelColor(course.level)}>
                        {course.level}
                      </Badge>
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

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                      <span>({course.students.toLocaleString()})</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Users className="h-3 w-3" />
                    <span>{course.students.toLocaleString()} students</span>
                    <span>•</span>
                    <span>{course.lessons} lessons</span>
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
                        <Button className="px-3 py-1.5 text-sm bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white hover:brightness-110 transition duration-300 ease-in-out">
                          <ShoppingCart className="h-4 w-4 mr-1" />
                          Enroll Now
                        </Button>

                        <Button asChild className="px-3 py-1.5 text-sm bg-gradient-to-r from-gray-300 via-purple-300 to-purple-500 text-gray-900 hover:scale-105 transition duration-300 ease-in-out">
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
        </div>

         {/* VideoBasedCourses Grid */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-foreground">Video Based Courses</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {videoBasedCourses.map((course) => (
                <Card key={course.id} className="border-border hover:shadow-elegant transition-smooth group">
                  <CardHeader className="p-0">
                    <div className={`w-full h-48 rounded-t-lg ${course.image} flex items-center justify-center group-hover:scale-105 transition-smooth relative`}>
                      <PlayCircle className="h-16 w-16 text-white/80" />
                      <div className="absolute top-4 right-4">
                        <Badge className={getLevelColor(course.level)}>
                          {course.level}
                        </Badge>
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

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span>{course.rating}</span>
                        <span>({course.students.toLocaleString()})</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{course.duration}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Users className="h-3 w-3" />
                      <span>{course.students.toLocaleString()} students</span>
                      <span>•</span>
                      <span>{course.lessons} lessons</span>
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
                          <Button className="px-3 py-1.5 text-sm bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white hover:brightness-110 transition duration-300 ease-in-out">
                            <ShoppingCart className="h-4 w-4 mr-1" />
                            Enroll Now
                          </Button>

                          <Button className="px-3 py-1.5 text-sm bg-gradient-to-r from-gray-300 via-purple-300 to-purple-500 text-gray-900 hover:scale-105 transition duration-300 ease-in-out">
                            Course Syllabus
                          </Button>
                        </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>



            {filteredCourses.length === 0 && (
              <div className="text-center py-16 space-y-4">
                <div className="text-6xl text-muted-foreground/20">📚</div>
                <h3 className="text-xl font-semibold text-foreground">No courses found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search criteria or filters to find more courses.
                </p>
              </div>
            )}

            {/* Instructor CTA */}
            <div className="bg-gradient-secondary rounded-2xl p-8 md:p-12 text-center space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Become an Instructor
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Share your knowledge with thousands of students worldwide through ProjectsPlace. 
                Create courses, earn income, and make a positive impact on the developer community.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                  Start Teaching
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>

        {/* Instructor CTA */}
        <div className="bg-gradient-secondary rounded-2xl p-8 md:p-12 text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">
            Become an Instructor
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Share your knowledge with thousands of students worldwide through ProjectsPlace. 
            Create courses, earn income, and make a positive impact on the developer community .
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
              Start Teaching
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default CourseMarketplace ;