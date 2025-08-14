import { useEffect } from 'react';

export default function Cookies() {
  useEffect(() => {
    document.title = 'Cookies Policy - ProjectsPlace';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-20">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-card rounded-xl shadow-lg border border-border/50 p-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Cookies Policy</h1>
          <p className="text-muted-foreground mb-8">Effective Date: 16 Feb 2025</p>
          
          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            <p>
              This Cookies Policy explains how ProjectsPlace uses cookies and similar technologies when you visit our platform. It describes what these technologies are, why we use them, and your rights to control our use of them.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">What Are Cookies?</h2>
              <p>
                Cookies are small text files that are stored on your device when you visit a website. They help websites remember information about your visit, such as your preferred language and other settings, which can make your next visit easier and the site more useful to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-medium text-foreground mb-2">Essential Cookies</h3>
              <p>These cookies are necessary for the website to function properly and cannot be disabled:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Authentication cookies to keep you logged in</li>
                <li>Security cookies to prevent fraud and protect your data</li>
                <li>Session cookies to maintain your preferences during your visit</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mb-2 mt-4">Functional Cookies</h3>
              <p>These cookies enhance functionality and personalization:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Theme preferences (dark/light mode)</li>
                <li>Language settings</li>
                <li>Course progress tracking</li>
                <li>User interface customizations</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mb-2 mt-4">Analytics Cookies</h3>
              <p>These cookies help us understand how you use our platform:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Page views and user interactions</li>
                <li>Platform performance and error tracking</li>
                <li>Popular courses and features</li>
                <li>User journey and behavior patterns</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mb-2 mt-4">Marketing Cookies</h3>
              <p>These cookies are used to show relevant content and advertisements:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personalized course recommendations</li>
                <li>Targeted educational content</li>
                <li>Social media integration</li>
                <li>Third-party advertising (when applicable)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Cookies</h2>
              <p>We may use third-party services that set their own cookies:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                <li><strong>Payment Processors:</strong> For secure payment processing</li>
                <li><strong>Video Platforms:</strong> For embedded course videos</li>
                <li><strong>Social Media:</strong> For social sharing and authentication</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Managing Cookies</h2>
              <p>You have several options to manage cookies:</p>
              
              <h3 className="text-xl font-medium text-foreground mb-2">Browser Settings</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Most browsers allow you to view, delete, and block cookies</li>
                <li>You can set your browser to notify you when cookies are being set</li>
                <li>You can choose to accept or reject cookies on a case-by-case basis</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mb-2 mt-4">Platform Settings</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Adjust your preferences in your account settings</li>
                <li>Opt-out of analytics tracking (where available)</li>
                <li>Manage marketing and personalization preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Impact of Disabling Cookies</h2>
              <p>If you choose to disable cookies, please note that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Some features of the platform may not work properly</li>
                <li>You may need to re-enter information more frequently</li>
                <li>Personalized recommendations may not be available</li>
                <li>Your learning progress tracking may be affected</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Cookie Retention</h2>
              <p>Different cookies have different retention periods:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Remain for a specified period (typically 30 days to 2 years)</li>
                <li><strong>Authentication Cookies:</strong> Expire when you log out or after a period of inactivity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Updates to This Policy</h2>
              <p>We may update this Cookies Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p>If you have any questions about our use of cookies, please contact us:</p>
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