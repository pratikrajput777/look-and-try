import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles, Camera, Upload, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
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

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo and branding */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl card-elegant mb-4 animate-pulse-glow">
            <Sparkles className="w-8 h-8 text-gradient-primary" />
          </div>
          <h1 className="text-3xl font-bold text-gradient-hero mb-2">
            AI Virtual Try-On
          </h1>
          <p className="text-muted-foreground">
            Experience fashion with AI technology
          </p>
        </div>

        <Card className="card-elegant backdrop-blur-sm bg-white/90">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Welcome</CardTitle>
            <CardDescription className="text-center">
              Sign in to start your virtual fashion journey
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
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

        {/* Features preview */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-white rounded-lg card-elegant flex items-center justify-center mx-auto mb-2">
              <Camera className="w-6 h-6 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">Camera</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-white rounded-lg card-elegant flex items-center justify-center mx-auto mb-2">
              <Upload className="w-6 h-6 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">Upload</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-white rounded-lg card-elegant flex items-center justify-center mx-auto mb-2">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">All Ages</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;