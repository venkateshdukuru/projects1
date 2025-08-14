import { useEffect } from 'react';

export default function Privacy() {
  useEffect(() => {
    document.title = 'Privacy Policy - ProjectsPlace';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-20">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-card rounded-xl shadow-lg border border-border/50 p-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Effective Date: 16 Feb 2025</p>
          
          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            <p>
              At ProjectsPlace, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, store, and protect your data when you use our educational platform and services.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
              <h3 className="text-xl font-medium text-foreground mb-2">Personal Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, email address, and contact information</li>
                <li>Educational background and professional experience</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Profile information and preferences</li>
              </ul>
              
              <h3 className="text-xl font-medium text-foreground mb-2 mt-4">Usage Data</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Course progress and completion data</li>
                <li>Project submissions and code repositories</li>
                <li>Platform usage patterns and interactions</li>
                <li>Device information and IP addresses</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and improve our educational services</li>
                <li>Track your learning progress and provide personalized recommendations</li>
                <li>Communicate with you about courses, projects, and platform updates</li>
                <li>Process payments and manage your account</li>
                <li>Provide technical support and customer service</li>
                <li>Analyze platform usage to enhance user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Sharing and Disclosure</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With your explicit consent</li>
                <li>With service providers who assist in platform operations (under strict confidentiality agreements)</li>
                <li>When required by law or to protect our legal rights</li>
                <li>With potential employers or institutions (only with your explicit permission for job placement services)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>We implement industry-standard security measures to protect your data</li>
                <li>All sensitive data is encrypted in transit and at rest</li>
                <li>Regular security audits and updates are performed</li>
                <li>Access to personal data is restricted to authorized personnel only</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access and update your personal information</li>
                <li>Request deletion of your account and associated data</li>
                <li>Opt-out of marketing communications</li>
                <li>Download your data in a portable format</li>
                <li>Object to certain data processing activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Cookies and Tracking</h2>
              <p>We use cookies and similar technologies to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Remember your preferences and login status</li>
                <li>Analyze platform usage and performance</li>
                <li>Provide personalized content and recommendations</li>
                <li>Ensure platform security and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Retention</h2>
              <p>We retain your personal information for as long as necessary to provide our services and fulfill legal obligations. Course progress and project data may be retained longer for educational continuity and certification purposes.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
              <div className="bg-muted/50 p-4 rounded-lg mt-4">
                <p>📧 Email: contact@projectsplace.in</p>
                <p>📞 Phone: +91 6300982015</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}