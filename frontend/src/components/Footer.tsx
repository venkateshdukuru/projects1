import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { name: 'Home', href: '/' },
        { name: 'About us', href: '/About' },
        { name: 'Projects', href: '/projects' },
        { name: 'Courses', href: '/courses' },
        { name: 'Internships', href: '/Internships' },
        { name: 'Mentoring', href: '/Mentoring' },
        { name: 'Blogs', href: '/blogs' },
        { name: 'Contact us', href: '/contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Terms & Conditions', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Cookies', href: '/cookies' },
        { name: 'Licensing', href: '/licensing' },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <Instagram className="h-5 w-5" />,
      label: 'Instagram',
      url: 'https://www.instagram.com/projectsplace.in/',
      color: 'hover:text-pink-500',
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/company/projectsplace/about/',
      color: 'hover:text-blue-600',
    },
    {
      icon: <Facebook className="h-5 w-5" />,
      label: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61578643090555',
      color: 'hover:text-blue-500',
    },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">ProjectsPlace</h3>
            <p className="text-sm text-muted-foreground">
              Premium code solutions and expert-led courses for developers worldwide.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-muted-foreground transition-smooth ${social.color}`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a
                href="mailto:contact@projectsplace.in"
                className="hover:text-primary transition-colors block"
              >
                contact@projectsplace.in
              </a>
              <a
                href="tel:+916300982015"
                className="hover:text-primary transition-colors block"
              >
                +91 6300982015
              </a>
              <a
                href="https://www.google.com/maps?q=Chennai,India"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors block"
              >
                Chennai, India
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border flex justify-center">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} ProjectsPlace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
