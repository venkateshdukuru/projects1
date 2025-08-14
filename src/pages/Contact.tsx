import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          }
        ]);

      if (error) {
        throw error;
      }

      toast({
        title: "Message sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: 'contact@projectsplace.in',
      link: 'mailto:contact@projectsplace.in'
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: 'Phone',
      value: '+91 6300982015',
      link: 'tel:+916300982015'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: 'Location',
      value: 'Chennai, India',
      link: null
    }
  ];


  return (
    <div className="min-h-screen pt-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind? Want to collaborate with ProjectsPlace? Or just want to say hello? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-border shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="border-border focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="border-border focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hello..."
                    rows={6}
                    required
                    className="border-border focus:border-primary resize-none"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-foreground hover:text-primary transition-smooth"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-foreground">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>


            {/* Availability */}
            <Card className="border-border bg-gradient-secondary">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-glow"></div>
                  <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                    Available for new projects
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  I'm currently available for freelance work and new opportunities. 
                  Let's discuss your project and see how we can work together.
                </p>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="border-border">
              <CardContent className="p-6 text-center space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  Quick Response
                </h3>
                <p className="text-muted-foreground">
                  We typically respond to messages within 24 hours. For urgent matters, 
                  feel free to reach out via phone or email.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center text-foreground">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-border">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-lg font-semibold text-foreground">
                  What's your typical response time?
                </h3>
                <p className="text-muted-foreground">
                  We aim to respond to all messages within 24 hours. For project inquiries, 
                  we'll provide a detailed response within 48 hours.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-lg font-semibold text-foreground">
                  Do you work on freelance projects?
                </h3>
                <p className="text-muted-foreground">
                  Yes! We're available for freelance web development projects, 
                  consulting, and collaboration opportunities through ProjectsPlace.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-lg font-semibold text-foreground">
                  What technologies do you specialize in?
                </h3>
                <p className="text-muted-foreground">
                  We specialize in React, TypeScript, Node.js, and modern web technologies. 
                  Check out ProjectsPlace for examples of our work.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-lg font-semibold text-foreground">
                  Are you open to mentoring?
                </h3>
                <p className="text-muted-foreground">
                  Absolutely! We enjoy helping others learn programming and 
                  advance their careers. Feel free to reach out to discuss mentoring opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
