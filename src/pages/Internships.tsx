"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { MapPin, Clock, Award, Laptop, Building2, Briefcase, Star, Rocket } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

/**
 * Internships.tsx
 *
 * - Keeps the original design and components
 * - Fixes spacing / alignment issues (cards use flex so footers align)
 * - Adds more internship entries (both Live and Project-based)
 * - Improved purchase/enroll modal (payment-method specific fields)
 *
 * Note: Payment is simulated (demo). Integrate a gateway like Stripe or Razorpay for real payments.
 */

export default function Internships() {
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    phone: "",
    resume: null,
    message: "",
    paymentMethod: "UPI",
    upiId: "",
    cardName: "",
    cardLast4: "",
    bankRef: ""
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInternship, setSelectedInternship] = useState<any | null>(null);

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleApplyClick = (internship: any) => {
    setSelectedInternship(internship);
    setFormData((prev: any) => ({
      ...prev,
      paymentMethod: "UPI",
      upiId: "",
      cardName: "",
      cardLast4: "",
      bankRef: ""
    }));
    setIsModalOpen(true);
    // Keep existing name/email if user already typed them (convenience)
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill Name, Email and Phone.");
      return;
    }

    if (formData.paymentMethod === "Card" && (!formData.cardName || !formData.cardLast4)) {
      alert("Please fill card details (demo fields).");
      return;
    }

    if (formData.paymentMethod === "UPI" && !formData.upiId) {
      alert("Please provide your UPI ID.");
      return;
    }

    // Simulated submission - replace with API call / payment gateway integration
    console.log("Purchase payload:", {
      internship: selectedInternship,
      formData
    });

    alert(`✅ Payment simulated: you are enrolled for "${selectedInternship?.title}"`);
    setIsModalOpen(false);
    setSelectedInternship(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      resume: null,
      message: "",
      paymentMethod: "UPI",
      upiId: "",
      cardName: "",
      cardLast4: "",
      bankRef: ""
    });
  };

  // Live internships (more entries added)
  const liveInternships = [
    {
      title: 'AI & Machine Learning Live Internship',
      mode: 'Online',
      duration: '2 Months',
      type: 'Live',
      status: 'Open',
      price: 4999,
      description: 'Work on AI & ML projects with live mentor guidance and interactive sessions.',
      skills: ['Python', 'TensorFlow', 'Machine Learning', 'Data Analysis'],
      level: 'Advanced'
    },
    {
      title: 'Full Stack Web Development Live Program',
      mode: 'Offline',
      duration: '3 Months',
      type: 'Live',
      status: 'Open',
      price: 3999,
      description: 'Build end-to-end web apps in a collaborative, live-learning environment.',
      skills: ['React', 'Node.js', 'MongoDB', 'Express'],
      level: 'Intermediate'
    },
    {
      title: 'Cloud Engineering Live Cohort',
      mode: 'Online',
      duration: '2 Months',
      type: 'Live',
      status: 'Open',
      price: 4499,
      description: 'Hands-on AWS/GCP labs, infra as code, and deployment pipelines with mentor-led sessions.',
      skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      level: 'Intermediate'
    },
    {
      title: 'UI/UX Live Design Sprint',
      mode: 'Online',
      duration: '1 Month',
      type: 'Live',
      status: 'Upcoming',
      price: 2499,
      description: 'Fast-paced live sprint on design systems, research and prototyping.',
      skills: ['Figma', 'Prototyping', 'User Research'],
      level: 'Beginner'
    }
  ];

  // Project-based internships (more entries added)
  const projectInternships = [
    {
      title: 'Data Science Project Internship',
      mode: 'Online',
      duration: '2 Months',
      type: 'Project-Based',
      status: 'Upcoming',
      price: 1999,
      description: 'Hands-on data cleaning, visualization, and model building on real datasets.',
      skills: ['Python', 'Pandas', 'Visualization', 'ML'],
      level: 'Intermediate'
    },
    {
      title: 'Cybersecurity Project Internship',
      mode: 'Offline',
      duration: '1 Month',
      type: 'Project-Based',
      status: 'Open',
      price: 1499,
      description: 'Practical training in security testing and vulnerability assessment.',
      skills: ['Network Security', 'Ethical Hacking', 'Risk Assessment'],
      level: 'Intermediate'
    },
    {
      title: 'Mobile App Project Internship',
      mode: 'Online',
      duration: '2 Months',
      type: 'Project-Based',
      status: 'Open',
      price: 1799,
      description: 'Build and publish a cross-platform mobile app with best practices and CI/CD.',
      skills: ['React Native', 'APIs', 'Testing'],
      level: 'Intermediate'
    },
    {
      title: 'DevOps Project Internship',
      mode: 'Online',
      duration: '1.5 Months',
      type: 'Project-Based',
      status: 'Open',
      price: 1599,
      description: 'Practical project focusing on CI/CD, monitoring, and automation.',
      skills: ['Jenkins', 'Docker', 'Prometheus'],
      level: 'Intermediate'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open':
        return 'bg-green-500/10 text-green-500 border-green-500/20 hover:bg-green-500 hover:text-white';
      case 'Upcoming':
        return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20 hover:bg-yellow-500 hover:text-white';
      case 'Closed':
        return '"bg-red-500/10 text-red-500 border-red-500/20 hover:bg-red-500 hover:text-white"';
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

  const formatPrice = (p: number) => `₹${p.toLocaleString('en-IN')}`;

  const renderCard = (internship: any, index: number) => (
    <Card
      key={index}
      className="border-border hover:shadow-xl hover:scale-[1.02] transition-all duration-300 h-full flex flex-col"
    >
      <CardHeader className="space-y-3">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <Badge className={getStatusColor(internship.status)}>{internship.status}</Badge>
            <span className="text-sm font-medium text-muted-foreground">{internship.type}</span>
          </div>

          <div className="text-right">
            <Badge className={getLevelColor(internship.level)} variant="outline">{internship.level}</Badge>
            <div className="mt-2 text-sm font-semibold text-foreground">{formatPrice(internship.price)}</div>
          </div>
        </div>

        <CardTitle className="text-xl leading-tight">{internship.title}</CardTitle>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col justify-between">
        <div>
          <div className="space-y-3 text-sm text-muted-foreground mb-3">
            <div className="flex items-center">
              {internship.mode === 'Online' ? <Laptop className="h-4 w-4 mr-2" /> : <Building2 className="h-4 w-4 mr-2" />}
              {internship.mode}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" /> {internship.duration}
            </div>
          </div>

          <p className="text-sm leading-relaxed mb-4">{internship.description}</p>

          <div className="space-y-2">
            <div className="text-sm font-medium">Skills Covered:</div>
            <div className="flex flex-wrap gap-2 mt-2">
              {internship.skills.map((skill: string) => (
                <Badge key={skill} variant="secondary" className="text-xs hover:bg-primary hover:text-white transition-colors">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Button
            variant="default"
            size="sm"
            className="w-full"
            onClick={() => handleApplyClick(internship)}
          >
            <Award className="h-4 w-4 mr-2" /> Buy / Enroll {internship.type === 'Live' ? '— Live' : '— Project'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">

        {/* Hero Section */}
        <div className="text-center space-y-6 animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold leading-normal py-4 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Internships & Training
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">

            Explore our online and offline internship programs designed to give you 

            Choose from live or project-based internship programs — enroll and pay securely to start learning.

          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Open Internships', value: [...liveInternships, ...projectInternships].filter(i => i.status === 'Open').length, color: 'text-green-500', icon: Briefcase },
            { label: 'Upcoming', value: [...liveInternships, ...projectInternships].filter(i => i.status === 'Upcoming').length, color: 'text-yellow-500', icon: Rocket },
            { label: 'Closed', value: [...liveInternships, ...projectInternships].filter(i => i.status === 'Closed').length, color: 'text-red-500', icon: MapPin },
            { label: 'Total Internships', value: liveInternships.length + projectInternships.length, color: 'text-primary', icon: Star }
          ].map((stat, index) => (
            <Card key={index} className="text-center border-border hover:shadow-lg transition-transform hover:scale-105">
              <CardContent className="p-6 space-y-2">
                <stat.icon className={`h-6 w-6 mx-auto ${stat.color}`} />
                <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs for Categories */}
        <Tabs defaultValue="live" className="w-full">
          <div className="max-w-3xl mx-auto">
            <TabsList className="grid grid-cols-2 mb-8">
              <TabsTrigger value="live">Live Internships ({liveInternships.length})</TabsTrigger>
              <TabsTrigger value="project">Project-Based ({projectInternships.length})</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="live">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {liveInternships.map(renderCard)}
            </div>
          </TabsContent>

          <TabsContent value="project">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectInternships.map(renderCard)}
            </div>
          </TabsContent>
        </Tabs>

        {/* Philosophy Section */}
        <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-2xl p-8 md:p-12 text-center space-y-6 shadow-lg">
          <h2 className="text-3xl font-bold">Our Internship Approach</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We believe in learning by doing — with real projects, expert mentorship, and industry exposure.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {['Real Projects', 'Expert Mentorship', 'Industry Exposure'].map((item) => (
              <Badge key={item} className="px-4 py-2 bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-white transition-colors">
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Purchase Modal (controlled) */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>
              {selectedInternship ? `Purchase: ${selectedInternship.title}` : "Purchase Internship"}
            </DialogTitle>
          </DialogHeader>

          {selectedInternship ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-3">
                <Input
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

                <div>
                  <label className="text-sm text-muted-foreground">Internship</label>
                  <div className="mt-1 p-3 rounded-md border border-border bg-muted/5 text-sm">
                    <div className="font-medium">{selectedInternship.title}</div>
                    <div className="text-xs text-muted-foreground">{selectedInternship.type} • {selectedInternship.mode} • {selectedInternship.duration}</div>
                    <div className="mt-1 text-sm font-semibold">{formatPrice(selectedInternship.price)}</div>
                  </div>
                </div>

                <div>
                  <label className="text-sm text-muted-foreground">Payment Method</label>
                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-border px-3 py-2 bg-background"
                  >
                    <option value="UPI">UPI</option>
                    <option value="Card">Credit/Debit Card (demo)</option>
                    <option value="NetBanking">Net Banking</option>
                  </select>
                </div>

                {formData.paymentMethod === "UPI" && (
                  <Input
                    name="upiId"
                    placeholder="Your UPI ID (eg. name@bank)"
                    value={formData.upiId}
                    onChange={handleChange}
                    required
                  />
                )}

                {formData.paymentMethod === "Card" && (
                  <>
                    <Input
                      name="cardName"
                      placeholder="Cardholder Name (demo)"
                      value={formData.cardName}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      name="cardLast4"
                      placeholder="Card Last 4 Digits (demo)"
                      value={formData.cardLast4}
                      onChange={handleChange}
                      required
                    />
                  </>
                )}

                {formData.paymentMethod === "NetBanking" && (
                  <Input
                    name="bankRef"
                    placeholder="Bank Reference / Transaction ID (optional)"
                    value={formData.bankRef || ""}
                    onChange={handleChange}
                  />
                )}

                <div>
                  <label className="text-sm text-muted-foreground">Upload Resume (optional)</label>
                  <input
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                    className="mt-1 w-full"
                  />
                </div>

                <Textarea
                  name="message"
                  placeholder="Additional notes (optional)"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <div className="flex gap-3">
                <Button type="submit" className="flex-1">
                  Pay {selectedInternship ? `• ${formatPrice(selectedInternship.price)}` : ""}
                </Button>
                <Button type="button" variant="outline" onClick={() => { setIsModalOpen(false); setSelectedInternship(null); }}>
                  Cancel
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">Note: This demo simulates payment. Integrate a payment gateway (Razorpay/Stripe) to collect real payments.</p>
            </form>
          ) : null}
          
        </DialogContent>
      </Dialog>
    </div>
  );
}
