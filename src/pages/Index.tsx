import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Sparkles, 
  Camera, 
  Upload, 
  Users, 
  ArrowRight, 
  Zap, 
  Shield, 
  Smartphone 
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Sparkles,
      title: "AI Powered",
      description: "Advanced computer vision and AI technology"
    },
    {
      icon: Camera,
      title: "Real-time Preview",
      description: "Instant virtual try-on experience"
    },
    {
      icon: Users,
      title: "All Categories",
      description: "Men, Women, Adults, Children clothing"
    },
    {
      icon: Smartphone,
      title: "Mobile Ready",
      description: "Works perfectly on all devices"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            {/* Logo */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-3xl card-elegant mb-8 animate-pulse-glow">
              <Sparkles className="w-10 h-10 text-gradient-primary" />
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-gradient-hero mb-6 leading-tight">
              AI Virtual
              <br />
              Try-On System
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the future of fashion shopping with our innovative AI-powered virtual try-on technology. 
              Preview how clothes fit and look without physically wearing them.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                onClick={() => navigate("/auth")}
                className="h-14 px-8 btn-gradient-primary text-lg font-semibold min-w-[200px]"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                className="h-14 px-8 text-lg font-semibold min-w-[200px] hover:bg-primary hover:text-primary-foreground"
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="flex justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-primary/10">AI Powered</Badge>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-secondary/10">Real-time</Badge>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-accent/10">All Ages</Badge>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="card-elegant hover:scale-105 transition-transform duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <CardDescription className="text-sm">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* How it Works */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gradient-primary">
              How It Works
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl card-elegant flex items-center justify-center mx-auto mb-4">
                  <Upload className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">1. Upload Photo</h3>
                <p className="text-muted-foreground">Upload your photo or take one with camera</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl card-elegant flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">2. Select Category</h3>
                <p className="text-muted-foreground">Choose from Men, Women, Adult, or Child categories</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl card-elegant flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">3. Try-On Magic</h3>
                <p className="text-muted-foreground">Watch AI create your virtual try-on preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-white rounded-lg card-elegant flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <span className="font-semibold text-gradient-primary">AI Virtual Try-On</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4" />
              <span>Secure & Privacy Protected</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
