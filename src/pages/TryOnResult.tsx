import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Sparkles, 
  Download, 
  Share2,
  ShoppingCart,
  Heart,
  RefreshCw
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const TryOnResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { productName = "Classic Product", productImage = "/placeholder.svg", category = "men" } = location.state || {};

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-xl card-elegant flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gradient-hero">Virtual Try-On Result</h1>
                <p className="text-muted-foreground text-sm">See how it looks on you!</p>
              </div>
            </div>
          </div>
          <Button 
            variant="outline" 
            onClick={() => navigate("/try-on")}
          >
            New Try-On
          </Button>
        </header>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Panel - Try-On Result */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Your Virtual Try-On
                </span>
                <Badge variant="default" className="bg-green-500">
                  AI Generated
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <img 
                  src={productImage}
                  alt="Try-on result"
                  className="w-full h-[500px] object-cover rounded-lg"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <h3 className="text-xl font-bold">{productName}</h3>
                      <p className="text-sm opacity-90">AI Virtual Try-On</p>
                    </div>
                    <Button size="sm" variant="secondary">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-3 gap-3 mt-6">
                <Button variant="outline" className="flex flex-col items-center h-auto py-3">
                  <Download className="w-5 h-5 mb-1" />
                  <span className="text-xs">Download</span>
                </Button>
                <Button variant="outline" className="flex flex-col items-center h-auto py-3">
                  <Share2 className="w-5 h-5 mb-1" />
                  <span className="text-xs">Share</span>
                </Button>
                <Button 
                  variant="outline" 
                  className="flex flex-col items-center h-auto py-3"
                  onClick={() => navigate(`/catalog/${category}`)}
                >
                  <RefreshCw className="w-5 h-5 mb-1" />
                  <span className="text-xs">Try Another</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Right Panel - Product Details */}
          <div className="space-y-6">
            {/* Product Info */}
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle>Product Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{productName}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-3xl font-bold text-primary">₹2,999</span>
                    <Badge variant="secondary">In Stock</Badge>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Select Size</label>
                    <div className="flex gap-2">
                      {["S", "M", "L", "XL"].map((size) => (
                        <Button 
                          key={size}
                          variant="outline"
                          className="w-12 h-12"
                        >
                          {size}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Select Color</label>
                    <div className="flex gap-2">
                      {["White", "Blue", "Black"].map((color) => (
                        <div
                          key={color}
                          className="w-10 h-10 rounded-full border-2 border-border cursor-pointer hover:border-primary transition-colors"
                          style={{ backgroundColor: color.toLowerCase() }}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <Button className="w-full h-12 btn-gradient-primary text-lg font-semibold mt-6">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle>Why You'll Love It</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Sparkles className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Premium Quality</p>
                      <p className="text-sm text-muted-foreground">Made with finest materials</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Sparkles className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Perfect Fit</p>
                      <p className="text-sm text-muted-foreground">Tailored for comfort</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Sparkles className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Free Shipping</p>
                      <p className="text-sm text-muted-foreground">On orders above ₹999</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Similar Products */}
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle>You Might Also Like</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="cursor-pointer group">
                      <div className="aspect-square bg-muted rounded-lg mb-2 overflow-hidden">
                        <img 
                          src="/placeholder.svg" 
                          alt="Similar product"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                        />
                      </div>
                      <p className="text-xs font-medium line-clamp-1">Product {item}</p>
                      <p className="text-xs text-primary font-bold">₹2,999</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TryOnResult;
