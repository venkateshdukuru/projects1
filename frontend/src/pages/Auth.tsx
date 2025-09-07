import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, LogIn, UserPlus, Eye, EyeOff } from "lucide-react";

const API_BASE = "http://localhost:3000/api";

export default function Auth() {
  const [isLoading, setIsLoading] = useState(false);
  const [generalError, setGeneralError] = useState(""); // API/general errors
  const [fieldErrors, setFieldErrors] = useState<ErrorType>({}); // per-field errors
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("signin");
  const [otpStep, setOtpStep] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

    // ---------- TYPES ----------
    type FormDataType = {
      fullName: string;
      email: string;
      mobile: string;
      password: string;
      confirmPassword: string;
      otp: string;
      agree: boolean;
    };

    type ErrorType = {
      fullName?: string;
      email?: string;
      mobile?: string;
      password?: string;
      confirmPassword?: string;
      otp?: string;
      agree?: string;
    };

    // ---------- STATES ----------
    const [formData, setFormData] = useState<FormDataType>({
      email: "",
      password: "",
      confirmPassword: "",
      fullName: "",
      mobile: "",
      otp: "",
      agree: false,
    });

    const [passwordStrength, setPasswordStrength] = useState<{
      level: string;
      color: string;
    }>({ level: "", color: "" });

    const { signIn, signUp, user } = useAuth();
    const navigate = useNavigate();
    const { toast } = useToast();

    useEffect(() => {
      document.title = "Authentication - ProjectsPlace";
    }, []);

    // Reset form when switching tabs
    const handleTabChange = (tab: string) => {
      setActiveTab(tab);
      setFormData({
        email: "",
        password: "",
        confirmPassword: "",
        fullName: "",
        mobile: "",
        otp: "",
        agree: false,
      });
      setPasswordStrength({ level: "", color: "" });
      setPasswordError("");
      setFieldErrors({});
      setGeneralError("");
      setOtpStep(false);
    };

    // -------------------
    // PASSWORD VALIDATION
    // -------------------
    const validatePassword = (password: string) => {
      if (password.length < 6) return "Password must be at least 6 characters.";
      if (!/[0-9]/.test(password))
        return "Password must include at least one number.";
      if (!/[!@#$%^&*]/.test(password))
        return "Password must include at least one special character (!@#$%^&*).";
      return "";
    };

    const checkPasswordStrength = (password: string) => {
      let score = 0;
      if (password.length >= 6) score++;
      if (/[0-9]/.test(password)) score++;
      if (/[!@#$%^&*]/.test(password)) score++;
      if (/[A-Z]/.test(password)) score++;

      if (score <= 1) return { level: "Weak", color: "red" };
      if (score === 2) return { level: "Medium", color: "orange" };
      if (score >= 3) return { level: "Strong", color: "green" };
      return { level: "", color: "" };
    };

  
    // -------------------
  // INPUT HANDLER
  // -------------------
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // field-wise validation
    if (name === "password") {
      setPasswordStrength(checkPasswordStrength(value));
      setFieldErrors((prev) => ({
        ...prev,
        password: validatePassword(value),  // store message here
      }));
    } else if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setFieldErrors((prev) => ({
        ...prev,
        email: !emailRegex.test(value)
          ? "Please enter a valid email address"
          : "",
      }));
    } else if (name === "confirmPassword") {
      setFieldErrors((prev) => ({
        ...prev,
        confirmPassword:
          value !== formData.password ? "Passwords do not match" : "",
      }));
    } else {
      setFieldErrors((prev) => ({
        ...prev,
        [name]: value.trim() === "" ? `${name} is required` : "",
      }));
    }
  };


    // -------------------
  // SIGN IN
  // -------------------
  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setGeneralError("");

    try {
      const res = await fetch(`${API_BASE}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // ✅ include cookies/session
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const text = await res.text();
      const data = text ? JSON.parse(text) : {};

      if (!res.ok) {
        // Specific error handling
        if (data.message?.includes("Invalid login credentials")) {
          throw new Error("Invalid email or password. Please check your credentials.");
        } else if (data.message?.includes("Email not confirmed")) {
          throw new Error("Please check your email and click the confirmation link.");
        } else {
          throw new Error(data.message || "Login failed");
        }
      }

      // Success
      toast({
        title: "Welcome back!",
        description: "Successfully signed in to your account.",
      });

      // Example: Save session/user
      // localStorage.setItem("user", JSON.stringify(data.userData));
      navigate("/");

    } catch (err: unknown) {
      if (err instanceof Error) {
        setGeneralError(err.message);
      } else {
        setGeneralError("Something went wrong during login.");
      }
    } finally {
      setIsLoading(false);
    }
  };


  // -------------------
  // SIGN UP (Step 1: Register -> OTP sent)
  // -------------------
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setGeneralError("");

    // validations...
    if (!formData.fullName.trim()) {
      setGeneralError("Please enter your full name.");
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // ✅ send cookies
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
          phone_number: formData.mobile,
        }),
      });

      const text = await res.text();
      const data = text ? JSON.parse(text) : {};

      if (!res.ok) {
        if (data.message?.includes("User already registered")) {
          throw new Error(
            "An account with this email already exists. Please sign in instead."
          );
        } else if (data.message?.includes("Password should be at least")) {
          throw new Error("Password should be at least 6 characters long.");
        } else {
          throw new Error(data.message || "Registration failed");
        }
      }

      toast({
        title: "Account created! 🎉",
        description: "Please check your email for a confirmation link or OTP.",
      });

      setOtpStep(true); // Switch to OTP step
    } catch (err: unknown) {
      if (err instanceof Error) {
        setGeneralError(err.message);
      } else {
        setGeneralError("An unknown error occurred during registration.");
      }
    } finally {
      setIsLoading(false);
    }
  };
  // -------------------
  // VERIFY OTP (Step 2)
  // -------------------
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setGeneralError("");

    try {
      const res = await fetch(`${API_BASE}/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // ✅ send cookies
        body: JSON.stringify({
          email: formData.email,
          otp: formData.otp,
        }),
      });

      const text = await res.text();
      const data = text ? JSON.parse(text) : {};

      if (!res.ok) {
        if (data.message?.includes("Invalid OTP")) {
          throw new Error("The OTP you entered is invalid. Please try again.");
        } else if (data.message?.includes("OTP expired")) {
          throw new Error("Your OTP has expired. Please request a new one.");
        } else {
          throw new Error(data.message || "OTP verification failed");
        }
      }

      toast({
        title: "✅ OTP Verified!",
        description: "Your account has been successfully verified. You can now sign in.",
      });

      handleTabChange("signin"); // Go back to SignIn
    } catch (err: unknown) {
      if (err instanceof Error) {
        setGeneralError(err.message);
      } else {
        setGeneralError("An unknown error occurred during OTP verification.");
      }
    } finally {
      setIsLoading(false);
    }
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-2 sm:p-4">
      <Card className="w-full max-w-sm sm:max-w-md shadow-lg border border-border/50">
        <CardHeader className="text-center px-2 sm:px-6">
          <CardTitle className="text-xl sm:text-2xl font-bold text-foreground">
            ProjectsPlace
          </CardTitle>
          <CardDescription className="text-sm sm:text-base">
            Sign in to your account or create a new one
          </CardDescription>
        </CardHeader>

        <CardContent className="px-2 sm:px-6">
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin" className="flex items-center gap-2">
                <LogIn className="h-4 w-4" />
                Sign In
              </TabsTrigger>
              <TabsTrigger value="signup" className="flex items-center gap-2">
                <UserPlus className="h-4 w-4" />
                Sign Up
              </TabsTrigger>
            </TabsList>

            {generalError && (
              <Alert className="mt-4 border-destructive/50 text-destructive">
                <AlertDescription>{generalError}</AlertDescription>
              </Alert>
            )}

            {/* ---------- SIGN IN ---------- */}
            <TabsContent value="signin">
              <form onSubmit={handleSignIn} className="space-y-4">
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2 relative">
                  <Label>Password</Label>
                  <Input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-9 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    <>
                      <LogIn className="mr-2 h-4 w-4" />
                      Sign In
                    </>
                  )}
                </Button>
              </form>
            </TabsContent>

            {/* ---------- SIGN UP ---------- */}
            <TabsContent value="signup">
              {!otpStep ? (
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div className="space-y-2">
                    <Label>Full Name</Label>
                    <Input
                      name="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                    {fieldErrors.fullName && (
                      <p className="text-red-500 text-sm">{fieldErrors.fullName}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input
                      id="signup-email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    {fieldErrors.email && (
                      <p className="text-red-500 text-sm">{fieldErrors.email}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label>Mobile Number</Label>
                    <Input
                      name="mobile"
                      type="tel"
                      placeholder="Enter your mobile number"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                    />
                    {fieldErrors.mobile && (
                      <p className="text-red-500 text-sm">{fieldErrors.mobile}</p>
                    )}
                  </div>
                  <div className="space-y-2 relative">
                    <Label>Password</Label>
                    <Input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-9 text-gray-500"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>

                    {/* ✅ show validation error */}
                    {fieldErrors.password && (
                      <p className="text-red-500 text-sm mt-1">{fieldErrors.password}</p>
                    )}

                    {/* ✅ strength bar */}
                    {formData.password && (
                      <div className="mt-2">
                        <div
                          className="h-2 rounded"
                          style={{
                            backgroundColor: passwordStrength.color,
                            width:
                              passwordStrength.level === "Weak"
                                ? "33%"
                                : passwordStrength.level === "Medium"
                                ? "66%"
                                : passwordStrength.level === "Strong"
                                ? "100%"
                                : "0%",
                          }}
                        ></div>
                        <p
                          className="text-sm mt-1"
                          style={{ color: passwordStrength.color }}
                        >
                          {passwordStrength.level}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2 relative">
                    <Label>Confirm Password</Label>
                    <Input
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-9 text-gray-500"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                    {fieldErrors.confirmPassword && (
                      <p className="text-red-500 text-sm">
                        {fieldErrors.confirmPassword}
                      </p>
                    )}
                  </div>
                  <div className="flex items-start space-x-2">
                    <input
                      name="agree"
                      type="checkbox"
                      checked={formData.agree}
                      onChange={handleInputChange}
                      className="mt-1"
                      required
                    />
                    <Label className="text-sm">
                      By signing up, you agree to our{" "}
                      <Link to="/terms" className="underline text-primary">
                        Terms & Conditions
                      </Link>{" "}
                      and{" "}
                      <Link to="/privacy" className="underline text-primary">
                        Privacy Policy
                      </Link>
                      .
                    </Label>
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Creating account...
                      </>
                    ) : (
                      <>
                        <UserPlus className="mr-2 h-4 w-4" />
                        Create Account
                      </>
                    )}
                  </Button>
                </form>
              ) : (
                <form onSubmit={handleVerifyOtp} className="space-y-4">
                  <div className="space-y-2">
                    <Label>Enter OTP</Label>
                    <Input
                      name="otp"
                      type="text"
                      placeholder="Enter OTP sent to your email"
                      value={formData.otp}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Verifying...
                      </>
                    ) : (
                      "Verify OTP"
                    )}
                  </Button>
                </form>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
