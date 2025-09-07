import { useEffect } from 'react';

export default function Terms() {
  useEffect(() => {
    document.title = 'Terms & Conditions - ProjectsPlace';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-20">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-card rounded-xl shadow-lg border border-border/50 p-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Terms & Conditions</h1>
          <p className="text-muted-foreground mb-8">Effective Date: 1st April 2025</p>
          
          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            <p>
              Welcome to ProjectsPlace! By accessing or using our platform, you agree to comply with and be bound by the following Terms and Conditions. These terms constitute a legally binding agreement between you (the user/student) and ProjectsPlace. If you do not agree with any part of these terms, please refrain from using our services.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Services Offered</h2>
              <p>ProjectsPlace provides a variety of educational and project-based services, including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Live and Recorded Courses:</strong> Covering topics in software development, AI/ML, data science, UI/UX design, cloud computing, and more.</li>
                <li><strong>Capstone Projects:</strong> Real-world, guided project experiences designed to build your portfolio.</li>
                <li><strong>Mini Projects:</strong> Short, focused projects to strengthen hands-on skills.</li>
                <li><strong>Internships & Mentorship:</strong> Virtual and real-time opportunities to work on industry-relevant problems.</li>
                <li><strong>Career Support:</strong> Resume reviews, interview preparation, and guidance for job placement.</li>
                <li><strong>Certification:</strong> Recognition upon successful completion of projects or courses.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">User Responsibilities</h2>
              <p>By using ProjectsPlace, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate, up-to-date, and complete information during registration and throughout your learning journey.</li>
                <li>Use the platform and its content for personal and educational purposes only.</li>
                <li>Not share course materials, codebases, or credentials with others unless explicitly permitted.</li>
                <li>Communicate respectfully in forums, chat, or mentoring sessions.</li>
                <li>Abide by all applicable laws and avoid any unethical, unlawful, or harmful activities.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Intellectual Property</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All courses, projects, templates, content, and resources provided by ProjectsPlace are protected by copyright laws.</li>
                <li>Materials are intended solely for individual learning. Redistribution, resale, or commercial use is strictly prohibited.</li>
                <li>After successful completion of paid services (e.g., projects/courses), you may use the output (e.g., code/project work) for personal portfolios, with proper attribution to ProjectsPlace where applicable.</li>
                <li>ProjectsPlace retains the rights to any proprietary frameworks, formats, or templates.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Payment Terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment details, pricing, and access duration will be clearly outlined at the time of course/project enrollment.</li>
                <li>Payments must be completed in full before accessing premium content.</li>
                <li>No refunds will be provided for completed or partially completed services unless otherwise stated in a refund policy.</li>
                <li>ProjectsPlace reserves the right to suspend or revoke access due to non-payment or payment disputes.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Confidentiality</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Any personal information, progress data, or private discussions shared with mentors or support staff will be treated as confidential.</li>
                <li>ProjectsPlace will not share your personal data with third parties except where required by law or with your explicit consent.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
              <p>ProjectsPlace shall not be liable for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Indirect or consequential losses, including missed opportunities, income loss, or academic impact.</li>
                <li>Delays or errors caused by internet connectivity issues, third-party tools, or platform maintenance.</li>
                <li>Outcomes of job placement or admissions based on ProjectsPlace certification or portfolio.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Termination</h2>
              <p>ProjectsPlace may suspend or terminate your account if:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You violate these Terms and Conditions.</li>
                <li>There is evidence of academic dishonesty, plagiarism, or platform misuse.</li>
                <li>Payment obligations are not fulfilled.</li>
              </ul>
              <p>Upon termination, any pending fees will remain due, and access to services may be revoked.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Governing Law</h2>
              <p>These Terms & Conditions shall be governed and interpreted in accordance with the laws of India. Any legal disputes will be subject to jurisdiction in the courts of India.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to Terms</h2>
              <p>ProjectsPlace may revise these Terms and Conditions at any time. Updates will be published on our platform, and continued use of the platform signifies your acceptance of the updated terms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p>If you have any questions about these Terms and Conditions, please feel free to contact us:</p>
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