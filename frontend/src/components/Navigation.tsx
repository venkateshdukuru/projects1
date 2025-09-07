import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, LogOut, User, Shield, ChevronDown } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // mobile toggle
  const location = useLocation();
  const { user, userRole, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  const getUserInitials = (email: string) => {
    return email.substring(0, 2).toUpperCase();
  };

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="Logo-uploads\\Projectsplace-logo.jpeg"
              alt="ProjectsPlace Logo"
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-foreground">
              ProjectsPlace
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActivePath('/') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              HOME
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActivePath('/about') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              ABOUT US
            </Link>

            {/* Services dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`flex items-center text-sm font-medium transition-colors hover:text-primary ${
                    ['/projects', '/mentoring'].includes(location.pathname)
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  }`}
                >
                  SERVICES <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/projects">Projects</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/mentoring">Mentoring</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/courses"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActivePath('/courses') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              COURSES
            </Link>
            <Link
              to="/internships"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActivePath('/internships') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              INTERNSHIPS
            </Link>
            <Link
              to="/blogs"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActivePath('/blogs') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              BLOGS
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActivePath('/contact') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              CONTACT US
            </Link>
          </div>

          {/* Auth Section (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {getUserInitials(user.email || '')}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{user.email}</span>
                    {userRole === 'admin' && (
                      <Shield className="h-4 w-4 text-primary" />
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium">{user.email}</p>
                      <p className="text-xs text-muted-foreground capitalize">
                        {userRole || 'user'}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/auth">
                <Button>
                  <User className="mr-2 h-4 w-4" />
                  Sign In
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-colors hover:text-primary ${
                    isActivePath('/') ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  HOME
                </Link>
                <Link
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-colors hover:text-primary ${
                    isActivePath('/about') ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  ABOUT US
                </Link>

                {/* Services expandable */}
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`flex items-center text-lg font-medium transition-colors hover:text-primary ${
                    ['/projects', '/mentoring'].includes(location.pathname)
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  }`}
                >
                  SERVICES <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isServicesOpen && (
                  <div className="ml-4 flex flex-col space-y-2">
                    <Link
                      to="/projects"
                      onClick={() => setIsOpen(false)}
                      className="text-base text-muted-foreground hover:text-primary"
                    >
                      Projects
                    </Link>
                    <Link
                      to="/mentoring"
                      onClick={() => setIsOpen(false)}
                      className="text-base text-muted-foreground hover:text-primary"
                    >
                      Mentoring
                    </Link>
                  </div>
                )}

                <Link
                  to="/courses"
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-colors hover:text-primary ${
                    isActivePath('/courses') ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  COURSES
                </Link>
                <Link
                  to="/internships"
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-colors hover:text-primary ${
                    isActivePath('/internships') ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  INTERNSHIPS
                </Link>
                <Link
                  to="/blogs"
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-colors hover:text-primary ${
                    isActivePath('/blogs') ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  BLOGS
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-colors hover:text-primary ${
                    isActivePath('/contact') ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  CONTACT US
                </Link>
              </div>

              {/* Mobile Auth Section */}
              <div className="pt-4 border-t border-border">
                {user ? (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {getUserInitials(user.email || '')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{user.email}</p>
                        <p className="text-xs text-muted-foreground capitalize flex items-center">
                          {userRole || 'user'}
                          {userRole === 'admin' && (
                            <Shield className="h-3 w-3 ml-1 text-primary" />
                          )}
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        handleSignOut();
                        setIsOpen(false);
                      }}
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </Button>
                  </div>
                ) : (
                  <Link to="/auth" onClick={() => setIsOpen(false)}>
                    <Button className="w-full">
                      <User className="mr-2 h-4 w-4" />
                      Sign In
                    </Button>
                  </Link>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
