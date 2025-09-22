import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles, Smartphone, MessageSquare, Star, Zap, Shield } from "lucide-react";
import authBgFashion from "@/assets/auth-bg-fashion.jpg";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just navigate to main app
    navigate("/try-on");
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just navigate to main app
    navigate("/try-on");
  };

  const handleMobileLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!otpSent) {
      // Send OTP
      setOtpSent(true);
    } else {
      // Verify OTP and login
      navigate("/try-on");
    }
  };

  const sendOtp = () => {
    if (mobile.length >= 10) {
      setOtpSent(true);
      setCountdown(60); // Start 60 second countdown
    }
  };

  const resendOtp = () => {
    setCountdown(60);
  };

  // Countdown timer effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      {/* Creative fashion background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{backgroundImage: `url(${authBgFashion})`}}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Enhanced Logo and branding */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-3xl card-elegant mb-6 animate-pulse-glow relative">
            <Sparkles className="w-10 h-10 text-gradient-primary" />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <Star className="w-3 h-3 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gradient-hero mb-3">
            AI Virtual Try-On
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            Experience fashion with AI technology
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span>Instant Results</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span>Secure & Private</span>
            </div>
          </div>
        </div>

        <Card className="card-elegant backdrop-blur-sm bg-white/95 border-2 border-white/50">
          <CardHeader className="text-center space-y-4 pb-6">
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-gradient-hero">Welcome Back</CardTitle>
            </div>
            <CardDescription className="text-lg">
              Transform your style with AI-powered virtual try-ons
            </CardDescription>
            <div className="flex items-center justify-center gap-4 pt-2">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99%</div>
                <div className="text-xs text-muted-foreground">Accuracy</div>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1M+</div>
                <div className="text-xs text-muted-foreground">Users</div>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5s</div>
                <div className="text-xs text-muted-foreground">Process</div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="login">Email</TabsTrigger>
                <TabsTrigger value="mobile">Mobile</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login" className="space-y-4 mt-6">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="h-12"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full h-12 btn-gradient-primary text-lg font-semibold"
                  >
                    Sign In
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="mobile" className="space-y-4 mt-6">
                <form onSubmit={handleMobileLogin} className="space-y-4">
                  <div className="space-y-2">
                    <div className="relative">
                      <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        className="h-12 pl-12"
                        required
                        disabled={otpSent}
                      />
                    </div>
                  </div>
                  
                  {!otpSent ? (
                    <Button 
                      type="button"
                      onClick={sendOtp}
                      className="w-full h-12 btn-gradient-primary text-lg font-semibold"
                      disabled={mobile.length < 10}
                    >
                      Send OTP
                    </Button>
                  ) : (
                    <>
                      <div className="space-y-2">
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <Input
                            type="text"
                            placeholder="Enter 6-digit OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="h-12 pl-12"
                            maxLength={6}
                            required
                          />
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Button 
                          type="button"
                          variant="outline"
                          onClick={() => {setOtpSent(false); setOtp(""); setCountdown(0);}}
                          className="flex-1 h-12"
                        >
                          Change Number
                        </Button>
                        <Button 
                          type="submit" 
                          className="flex-1 h-12 btn-gradient-primary text-lg font-semibold"
                          disabled={otp.length < 6}
                        >
                          Verify OTP
                        </Button>
                      </div>
                      <div className="text-center space-y-2">
                        <p className="text-sm text-muted-foreground">
                          OTP sent to {mobile}
                        </p>
                        {countdown > 0 ? (
                          <p className="text-sm text-primary font-medium">
                            Resend OTP in {Math.floor(countdown / 60)}:{(countdown % 60).toString().padStart(2, '0')} min
                          </p>
                        ) : (
                          <Button 
                            type="button"
                            variant="link"
                            onClick={resendOtp}
                            className="text-sm p-0 h-auto"
                          >
                            Resend OTP
                          </Button>
                        )}
                      </div>
                    </>
                  )}
                </form>
              </TabsContent>
              
              <TabsContent value="signup" className="space-y-4 mt-6">
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      type="text"
                      placeholder="Full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="h-12"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="relative">
                      <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        className="h-12 pl-12"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="password"
                      placeholder="Create password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="h-12"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full h-12 btn-gradient-primary text-lg font-semibold"
                  >
                    Create Account
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;