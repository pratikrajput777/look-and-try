import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  Upload, 
  Sparkles, 
  Users, 
  Baby, 
  User, 
  UserCheck,
  ArrowRight,
  Image as ImageIcon,
  Wand2,
  Crown,
  Watch
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const TryOn = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [uploadedImage, setUploadedImage] = useState<string>("");
  const navigate = useNavigate();

  const categories = [
    {
      id: "men",
      title: "Men",
      icon: User,
      description: "Shirts, pants, jackets & more",
      color: "bg-blue-500"
    },
    {
      id: "women", 
      title: "Women",
      icon: UserCheck,
      description: "Dresses, tops, skirts & more",
      color: "bg-pink-500"
    },
    {
      id: "child",
      title: "Children",
      icon: Baby,
      description: "Kids clothing & accessories",
      color: "bg-green-500"
    },
    {
      id: "accessories",
      title: "Accessories",
      icon: Watch,
      description: "Watches, bags, jewelry & more",
      color: "bg-purple-500"
    }
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCameraCapture = () => {
    // Camera functionality would be implemented here
    alert("Camera functionality will be implemented with device access!");
  };

  const handleStartTryOn = () => {
    if (!selectedCategory) {
      alert("Please select a category first!");
      return;
    }
    if (!uploadedImage) {
      alert("Please upload an image or take a photo!");
      return;
    }
    // Navigate to product catalog
    navigate(`/catalog/${selectedCategory}`);
  };

  return (
    <div className="min-h-screen p-4">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-xl card-elegant flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gradient-hero">AI Virtual Try-On</h1>
              <p className="text-muted-foreground text-sm">Experience fashion with AI</p>
            </div>
          </div>
          <Button 
            variant="outline" 
            onClick={() => navigate("/")}
            className="hover:bg-primary hover:text-primary-foreground"
          >
            Logout
          </Button>
        </header>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Panel - Upload & Categories */}
          <div className="lg:col-span-3 space-y-6">
            {/* Image Upload Section */}
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ImageIcon className="w-5 h-5" />
                  Upload Your Photo
                </CardTitle>
                <CardDescription>
                  Upload a photo or take one with your camera
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {uploadedImage ? (
                  <div className="relative">
                    <img 
                      src={uploadedImage} 
                      alt="Uploaded" 
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <Button
                      size="sm"
                      variant="secondary"
                      className="absolute top-2 right-2"
                      onClick={() => setUploadedImage("")}
                    >
                      Change
                    </Button>
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                        <ImageIcon className="w-8 h-8 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-lg font-medium mb-2">No image selected</p>
                        <p className="text-sm text-muted-foreground">Choose how to add your photo</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload">
                      <Button 
                        variant="outline" 
                        className="w-full h-12" 
                        asChild
                      >
                        <span className="flex items-center gap-2">
                          <Upload className="w-4 h-4" />
                          Upload File
                        </span>
                      </Button>
                    </label>
                  </div>
                  <Button 
                    variant="outline" 
                    className="h-12"
                    onClick={handleCameraCapture}
                  >
                    <Camera className="w-4 h-4 mr-2" />
                    Camera
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Category Selection */}
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Select Category
                </CardTitle>
                <CardDescription>
                  Choose the clothing category you want to try
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    const isSelected = selectedCategory === category.id;
                    
                    return (
                      <div
                        key={category.id}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                          isSelected 
                            ? 'border-primary bg-primary/5 shadow-lg' 
                            : 'border-border hover:border-primary/50'
                        }`}
                        onClick={() => setSelectedCategory(category.id)}
                      >
                        <div className="flex flex-col items-center text-center space-y-2">
                          <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{category.title}</h3>
                            <p className="text-xs text-muted-foreground">{category.description}</p>
                          </div>
                          {isSelected && (
                            <Badge variant="default" className="text-xs">
                              Selected
                            </Badge>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Panel - Preview & Actions */}
          <div className="lg:col-span-2 space-y-6">
            {/* Try-On Preview */}
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wand2 className="w-5 h-5" />
                  Virtual Try-On Preview
                </CardTitle>
                <CardDescription>
                  Your AI-powered fashion preview will appear here
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                      <Sparkles className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-lg font-medium mb-2">Ready for Magic!</p>
                    <p className="text-sm text-muted-foreground">
                      Upload an image and select category to start
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Start Button */}
            <Card className="card-elegant">
              <CardContent className="pt-6">
                <Button 
                  onClick={handleStartTryOn}
                  className="w-full h-14 btn-gradient-primary text-lg font-semibold"
                  disabled={!selectedCategory || !uploadedImage}
                >
                  <Wand2 className="w-5 h-5 mr-2" />
                  Start Virtual Try-On
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                
                {(!selectedCategory || !uploadedImage) && (
                  <p className="text-center text-sm text-muted-foreground mt-3">
                    {!uploadedImage && "Upload an image"} 
                    {!uploadedImage && !selectedCategory && " and "}
                    {!selectedCategory && "select a category"} to continue
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-white rounded-lg card-elegant flex items-center justify-center mx-auto mb-2">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-medium">AI Powered</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white rounded-lg card-elegant flex items-center justify-center mx-auto mb-2">
                  <Camera className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-medium">Real-time</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white rounded-lg card-elegant flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-medium">All Categories</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TryOn;