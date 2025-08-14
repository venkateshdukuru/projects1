import { useEffect } from 'react';
import { X } from 'lucide-react';

export default function Licensing() {
  useEffect(() => {
    document.title = 'Licensing - ProjectsPlace';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-20">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-card rounded-xl shadow-lg border border-border/50 p-8">
        
          <h1 className="text-4xl font-bold text-foreground mb-2">Licensing</h1>
          <p className="text-muted-foreground mb-8">Effective Date: 17 April 2025</p>
          
          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            <p>
              This Licensing Agreement outlines the terms under which ProjectsPlace grants you access to our educational content, courses, projects, and related materials. By accessing our platform, you agree to abide by these licensing terms.
            </p>
            <X className="absolute top-4 right-4 h-5 w-5 cursor-pointer text-muted-foreground hover:text-foreground" />

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Content License</h2>
              
              <h3 className="text-xl font-medium text-foreground mb-2">Educational Content</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>All courses, tutorials, and educational materials are licensed for personal, non-commercial use only</li>
                <li>You may access and view content for your own learning and skill development</li>
                <li>Content cannot be reproduced, distributed, or shared without explicit written permission</li>
                <li>Reverse engineering, decompiling, or attempting to extract source materials is prohibited</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mb-2 mt-4">Project Templates and Code</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Starter templates and boilerplate code are provided under MIT License unless otherwise specified</li>
                <li>You may use, modify, and distribute code created during paid projects for your portfolio</li>
                <li>Attribution to ProjectsPlace is appreciated but not required for completed project work</li>
                <li>Proprietary frameworks and tools remain under ProjectsPlace ownership</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">User-Generated Content</h2>
              
              <h3 className="text-xl font-medium text-foreground mb-2">Your Projects and Submissions</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>You retain ownership of original code and content you create</li>
                <li>You grant ProjectsPlace a non-exclusive license to use your work for educational purposes</li>
                <li>Your projects may be featured as examples with your permission</li>
                <li>You are responsible for ensuring your submissions don't infringe third-party rights</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mb-2 mt-4">Portfolio Rights</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>You may showcase completed projects in your professional portfolio</li>
                <li>Include ProjectsPlace in acknowledgments when presenting project work</li>
                <li>Use certificates and credentials for job applications and professional profiles</li>
                <li>Share project URLs and demos with potential employers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Licenses</h2>
              <p>Our platform incorporates various third-party tools and libraries:</p>
              
              <h3 className="text-xl font-medium text-foreground mb-2">Open Source Components</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>React, TypeScript, and related frameworks (MIT License)</li>
                <li>UI component libraries and design systems</li>
                <li>Development tools and build systems</li>
                <li>Database and cloud service integrations</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mb-2 mt-4">Commercial Tools</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Premium APIs and services used in projects</li>
                <li>Design software and prototyping tools</li>
                <li>Cloud hosting and deployment platforms</li>
                <li>Analytics and monitoring services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Certification and Credentials</h2>
              
              <h3 className="text-xl font-medium text-foreground mb-2">Digital Certificates</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Certificates are issued upon successful completion of courses or projects</li>
                <li>Certificates may be shared on professional networks (LinkedIn, GitHub, etc.)</li>
                <li>ProjectsPlace retains the right to verify certificate authenticity</li>
                <li>Fraudulent use of certificates may result in account termination</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mb-2 mt-4">Skills Verification</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Skill assessments and project evaluations are proprietary to ProjectsPlace</li>
                <li>Results may be shared with prospective employers with your consent</li>
                <li>Assessment criteria and rubrics are confidential</li>
                <li>You may request detailed feedback on your performance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Restrictions and Prohibited Uses</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sharing login credentials or accessing content through multiple accounts</li>
                <li>Downloading, recording, or redistributing course videos and materials</li>
                <li>Using ProjectsPlace content for commercial training or educational purposes</li>
                <li>Creating derivative educational products based on our content</li>
                <li>Reverse engineering our platform or assessment algorithms</li>
                <li>Violating intellectual property rights of third-party content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">License Termination</h2>
              <p>This license may be terminated if:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You violate any terms of this licensing agreement</li>
                <li>Your ProjectsPlace account is suspended or terminated</li>
                <li>You fail to comply with payment obligations</li>
                <li>You engage in fraudulent or unethical behavior</li>
              </ul>
              <p>Upon termination, you must cease using all ProjectsPlace content and materials, though completed project work remains yours to use.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p>For licensing inquiries, permissions, or clarifications, please contact us:</p>
              <div className="bg-muted/50 p-4 rounded-lg mt-4">
                <p>📧 Email: contact@projectsplace.in</p>
                <p>📞 Phone: +91 6300982015</p>
                <p>📝 Subject Line: "Licensing Inquiry - [Your Specific Question]"</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
    
  );
}