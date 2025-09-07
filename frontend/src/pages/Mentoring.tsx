import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { format } from 'date-fns';
import { CalendarIcon, Clock, Users, FileText, Star, CheckCircle, BookOpen, Target } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { cn } from '@/lib/utils';

const bookingSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  session_type: z.string().min(1, 'Session type is required'),
  preferred_date: z.date({
    required_error: 'Please select a date',
  }),
  preferred_time: z.string().min(1, 'Please select a time'),
  experience_level: z.string().min(1, 'Experience level is required'),
  goals: z.string().min(10, 'Please describe your goals (minimum 10 characters)'),
  additional_notes: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const Mentoring = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      session_type: '',
      preferred_time: '',
      experience_level: '',
      goals: '',
      additional_notes: '',
    },
  });

  const onSubmit = async (data: BookingFormData) => {
    try {
      const { error } = await supabase
        .from('session_bookings')
        .insert([
          {
            name: data.name,
            email: data.email,
            phone: data.phone,
            session_type: data.session_type,
            preferred_date: format(data.preferred_date, 'yyyy-MM-dd'),
            preferred_time: data.preferred_time,
            experience_level: data.experience_level,
            goals: data.goals,
            additional_notes: data.additional_notes,
          }
        ]);

      if (error) throw error;

      toast({
        title: "Session booked successfully!",
        description: "We'll contact you within 24 hours to confirm your session.",
      });

      form.reset();
      setIsBookingOpen(false);
    } catch (error) {
      console.error('Error booking session:', error);
      toast({
        title: "Error",
        description: "Failed to book session. Please try again.",
        variant: "destructive"
      });
    }
  };

  const mentoringSevices = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "1:1 Career Mentoring",
      description: "Personalized guidance for your tech career journey",
      price: "₹79/hour",
      features: ["Career roadmap planning", "Skill assessment", "Industry insights", "Goal setting"]
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Technical Mentoring",
      description: "Learn programming languages and frameworks",
      price: "₹69/hour",
      features: ["Code review", "Best practices", "Project guidance", "Technology selection"]
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Resume Building",
      description: "Professional resume and portfolio optimization",
      price: "₹59/session",
      features: ["Resume review", "Portfolio guidance", "Interview prep", "LinkedIn optimization"]
    }
  ];

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM",
    "05:00 PM", "06:00 PM", "07:00 PM"
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold leading-normal py-4 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-md">
            Mentoring & Career Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get personalized guidance from industry experts. Whether you're starting your tech journey 
            or looking to advance your career, we're here to help you succeed.
          </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Badge className="bg-primary/10 text-primary border-primary/20 animate-fade-in hover:bg-primary hover:text-white hover-scale">
            <Star className="h-3 w-3 mr-1" />
            3+ Years Experience
          </Badge>
          
          <Badge className="bg-green-500/10 text-green-500 border-green-500/20 animate-fade-in hover:bg-green-700  hover:text-white hover-scale">
            <CheckCircle className="h-3 w-3 mr-1" />
            Many Students Mentored
          </Badge>
          
          <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20 animate-fade-in hover:bg-blue-700 hover:text-white hover-scale">
            <Target className="h-3 w-3 mr-1" />
            Personalized Approach
          </Badge>
        </div>

        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {mentoringSevices.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-2xl">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 shadow-inner">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <p className="text-muted-foreground">{service.description}</p>
                <div className="text-2xl font-bold text-primary">{service.price}</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-gradient-primary hover:opacity-90 hover:scale-105 transition">
                      Book Session
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-xl animate-fade-in">
                    <DialogHeader>
                      <DialogTitle>Book Your Mentoring Session</DialogTitle>
                      <DialogDescription>
                        Fill out the form below and we'll get back to you within 24 hours to confirm your session.
                      </DialogDescription>
                    </DialogHeader>
                    
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your name" {...field} className="rounded-xl" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="your.email@example.com" {...field} className="rounded-xl" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone (Optional)</FormLabel>
                                <FormControl>
                                  <Input placeholder="+1 (555) 123-4567" {...field} className="rounded-xl" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="session_type"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Session Type</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="rounded-xl">
                                      <SelectValue placeholder="Select session type" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="career">1:1 Career Mentoring</SelectItem>
                                    <SelectItem value="technical">Technical Mentoring</SelectItem>
                                    <SelectItem value="resume">Resume Building</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="preferred_date"
                            render={({ field }) => (
                              <FormItem className="flex flex-col">
                                <FormLabel>Preferred Date</FormLabel>
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <FormControl>
                                      <Button
                                        variant="outline"
                                        className={cn(
                                          "pl-3 text-left font-normal rounded-xl",
                                          !field.value && "text-muted-foreground"
                                        )}
                                      >
                                        {field.value ? (
                                          format(field.value, "PPP")
                                        ) : (
                                          <span>Pick a date</span>
                                        )}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                      </Button>
                                    </FormControl>
                                  </PopoverTrigger>
                                  <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                      mode="single"
                                      selected={field.value}
                                      onSelect={field.onChange}
                                      disabled={(date) =>
                                        date < new Date() || date.getDay() === 0 || date.getDay() === 6
                                      }
                                      initialFocus
                                      className={cn("p-3 pointer-events-auto rounded-xl shadow-lg")}
                                    />
                                  </PopoverContent>
                                </Popover>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="preferred_time"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Preferred Time</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="rounded-xl">
                                      <SelectValue placeholder="Select time" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {timeSlots.map((time) => (
                                      <SelectItem key={time} value={time}>
                                        {time}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="experience_level"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Experience Level</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="rounded-xl">
                                    <SelectValue placeholder="Select your experience level" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                                  <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                                  <SelectItem value="advanced">Advanced (3-5 years)</SelectItem>
                                  <SelectItem value="expert">Expert (5+ years)</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="goals"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Goals & Objectives</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="What do you hope to achieve from this mentoring session?"
                                  rows={4}
                                  {...field}
                                  className="rounded-xl"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="additional_notes"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Additional Notes (Optional)</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Any additional information you'd like to share?"
                                  rows={3}
                                  {...field}
                                  className="rounded-xl"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="flex gap-4">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setIsBookingOpen(false)}
                            className="flex-1 rounded-xl hover:bg-gray-100"
                          >
                            Cancel
                          </Button>
                          <Button type="submit" className="flex-1 bg-gradient-primary hover:opacity-90 rounded-xl hover:scale-105 transition">
                            Book Session
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Resume Building Section */}
        <div className="bg-gradient-secondary rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto shadow-inner">
              <FileText className="h-8 w-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Professional Resume Building Assistance
            </h2>
            <p className="text-lg text-muted-foreground">
              Stand out from the crowd with a professionally crafted resume and portfolio. 
              Our experts will help you showcase your skills and experience effectively.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="text-left space-y-4">
                <h3 className="text-xl font-semibold text-foreground">What's Included:</h3>
                <ul className="space-y-2">
                  {[
                    "Comprehensive resume review and optimization",
                    "ATS-friendly formatting and keyword optimization",
                    "Portfolio website guidance and setup",
                    "LinkedIn profile optimization",
                    "Cover letter template creation",
                    "Interview preparation materials"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="text-left space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Perfect For:</h3>
                <ul className="space-y-2">
                  {[
                    "Undergraduate students preparing for internships or placements",
                    "Career changers transitioning to tech",
                    "Experienced professionals seeking new opportunities",
                    "Freelancers building their online presence",
                    "Anyone looking to improve their professional image"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-muted-foreground">
                      <Target className="h-4 w-4 text-blue-500 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="pt-6">
              <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90 hover:scale-105 transition rounded-xl">
                    <FileText className="h-5 w-5 mr-2" />
                    Get Resume Assistance - ₹75
                  </Button>
                </DialogTrigger>
              </Dialog>
            </div>
          </div>
        </div>
        {/* Career Boost Section */}
<div className="space-y-12 mt-16">
  <div className="text-center space-y-4">
    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
         Boost Your Career with Our Expert Services
    </h2>
    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
      Take the next step with personalized support designed to elevate your professional presence.
    </p>
  </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="grid sm:grid-cols-2 gap-8">
          {[
            {
              icon: "📝",
              title: "01. Resume Building",
              description:
                "Craft a resume that gets noticed. We help you build a professional, tailored resume that highlights your strengths and aligns with industry expectations—whether you're just starting out or aiming for the next big role.",
            },
            {
              icon: "💼",
              title: "02. Portfolio Building",
              description:
                "Showcase your skills with impact. We guide you in creating a strong portfolio that reflects your projects, creativity, and problem-solving abilities—perfect for designers, developers, and creatives.",
            },
            {
              icon: "🌐",
              title: "03. LinkedIn Optimization",
              description:
                "Turn your profile into a personal brand. We help you enhance your LinkedIn profile with keyword-rich content, a strong headline, and a compelling summary to attract recruiters and grow your network.",
            },
            {
              icon: "🎓",
              title: "04. Mentoring",
              description:
                "Personalized guidance for your career path. Get one-on-one mentorship from industry professionals to help you make informed decisions, set career goals, and stay motivated on your journey.",
            },
          ].map((card, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-lg hover:-translate-y-2 transition-all duration-300 rounded-2xl"
            >
              <CardContent className="p-6 flex flex-col justify-between h-full space-y-6">
                <div className="space-y-4 text-center">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto text-2xl shadow-inner bg-gradient-to-r from-primary/10 to-primary/5">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Right Side - Image */}
          <div className="flex justify-center hover:shadow-2xl hover:-translate-y-2 duration-300 rounded-2xl">
            <img 
              src="Logo-uploads/mentoring-2.jpg" 
              alt="Home page courses pic"
              className="max-w-90 h-85 rounded-2xl shadow-lg"
            />
          </div>
      </div>
</div>



        {/* Process Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center text-foreground">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Book Your Session",
                description: "Choose your service and preferred time slot"
              },
              {
                step: "02",
                title: "Get Confirmation",
                description: "We'll confirm your booking within 24 hours"
              },
              {
                step: "03",
                title: "Attend Session",
                description: "Join your personalized 1:1 mentoring session"
              },
              {
                step: "04",
                title: "Follow Up",
                description: "Receive materials and continued support"
              }
            ].map((item, index) => (
              <Card key={index} className="border-border text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6 bg-card rounded-2xl p-8 border border-border">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Ready to Accelerate Your Career?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't let uncertainty hold you back. Get personalized guidance from industry experts 
            and take the next step in your tech journey with confidence.
          </p>
          <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                <Clock className="h-5 w-5 mr-2" />
                Book Your Session Today
              </Button>
            </DialogTrigger>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Mentoring;