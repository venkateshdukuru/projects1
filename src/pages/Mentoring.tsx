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
    <div className="min-h-screen pt-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-normal py-4 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            Mentoring & Career Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get personalized guidance from industry experts. Whether you're starting your tech journey 
            or looking to advance your career, we're here to help you succeed.
          </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-white">
            <Star className="h-3 w-3 mr-1" />
            3+ Years Experience
          </Badge>
          
          <Badge className="bg-green-500/10 text-green-500 border-green-500/20 hover:bg-green-500 hover:text-white">
            <CheckCircle className="h-3 w-3 mr-1" />
            Many Students Mentored
          </Badge>
          
          <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20 hover:bg-blue-500 hover:text-white">
            <Target className="h-3 w-3 mr-1" />
            Personalized Approach
          </Badge>
        </div>

        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {mentoringSevices.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
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
                    <Button className="w-full bg-gradient-primary hover:opacity-90">
                      Book Session
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
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
                                  <Input placeholder="Your name" {...field} />
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
                                  <Input type="email" placeholder="your.email@example.com" {...field} />
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
                                  <Input placeholder="+1 (555) 123-4567" {...field} />
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
                                    <SelectTrigger>
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
                                          "pl-3 text-left font-normal",
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
                                      className={cn("p-3 pointer-events-auto")}
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
                                    <SelectTrigger>
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
                                  <SelectTrigger>
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
                                  placeholder="What do you hope to achieve from this mentoring session? What specific areas would you like to focus on?"
                                  rows={4}
                                  {...field}
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
                            className="flex-1"
                          >
                            Cancel
                          </Button>
                          <Button type="submit" className="flex-1 bg-gradient-primary hover:opacity-90">
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
        <div className="bg-gradient-secondary rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto">
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
                    "Recent graduates entering the job market",
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
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                    <FileText className="h-5 w-5 mr-2" />
                    Get Resume Assistance - ₹75
                  </Button>
                </DialogTrigger>
              </Dialog>
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
