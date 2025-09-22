import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  ArrowLeft, 
  Sparkles, 
  ShoppingCart, 
  Heart,
  Star,
  Filter,
  Grid3X3
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const ProductCatalog = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  // Mock product data based on category
  const getProducts = (cat: string) => {
    const baseProducts = {
      men: [
        { id: 1, name: "Classic Cotton Shirt", price: 2999, image: "/placeholder.svg", colors: ["White", "Blue", "Black"], sizes: ["S", "M", "L", "XL"], available: true, rating: 4.5 },
        { id: 2, name: "Formal Pants", price: 3999, image: "/placeholder.svg", colors: ["Black", "Navy", "Grey"], sizes: ["30", "32", "34", "36"], available: true, rating: 4.3 },
        { id: 3, name: "Denim Jacket", price: 5999, image: "/placeholder.svg", colors: ["Blue", "Black"], sizes: ["S", "M", "L", "XL"], available: false, rating: 4.7 },
        { id: 4, name: "Casual T-Shirt", price: 1499, image: "/placeholder.svg", colors: ["White", "Red", "Green"], sizes: ["S", "M", "L", "XL"], available: true, rating: 4.2 },
      ],
      women: [
        { id: 5, name: "Elegant Dress", price: 4999, image: "/placeholder.svg", colors: ["Red", "Black", "Navy"], sizes: ["XS", "S", "M", "L"], available: true, rating: 4.6 },
        { id: 6, name: "Casual Top", price: 2499, image: "/placeholder.svg", colors: ["Pink", "White", "Yellow"], sizes: ["XS", "S", "M", "L"], available: true, rating: 4.4 },
        { id: 7, name: "Designer Skirt", price: 3499, image: "/placeholder.svg", colors: ["Black", "Blue"], sizes: ["XS", "S", "M", "L"], available: true, rating: 4.5 },
        { id: 8, name: "Blouse", price: 2999, image: "/placeholder.svg", colors: ["White", "Cream"], sizes: ["XS", "S", "M", "L"], available: false, rating: 4.3 },
      ],
      child: [
        { id: 9, name: "Kids T-Shirt", price: 999, image: "/placeholder.svg", colors: ["Blue", "Pink", "Yellow"], sizes: ["2-3Y", "4-5Y", "6-7Y"], available: true, rating: 4.8 },
        { id: 10, name: "School Uniform", price: 1999, image: "/placeholder.svg", colors: ["White", "Blue"], sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"], available: true, rating: 4.6 },
      ],
      accessories: [
        { id: 11, name: "Leather Watch", price: 7999, image: "/placeholder.svg", colors: ["Brown", "Black"], sizes: ["One Size"], available: true, rating: 4.7 },
        { id: 12, name: "Designer Bag", price: 12999, image: "/placeholder.svg", colors: ["Black", "Brown", "Red"], sizes: ["One Size"], available: true, rating: 4.5 },
        { id: 13, name: "Sunglasses", price: 3999, image: "/placeholder.svg", colors: ["Black", "Brown"], sizes: ["One Size"], available: false, rating: 4.4 },
      ]
    };
    return baseProducts[cat as keyof typeof baseProducts] || [];
  };

  const products = getProducts(category || "men");
  const categoryTitle = {
    men: "Men's Fashion",
    women: "Women's Fashion", 
    child: "Children's Wear",
    accessories: "Accessories"
  };

  const handleTryOn = (productId: number) => {
    alert(`Starting virtual try-on for product ${productId}...`);
  };

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigate("/try-on")}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-xl card-elegant flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gradient-hero">
                  {categoryTitle[category as keyof typeof categoryTitle]}
                </h1>
                <p className="text-muted-foreground text-sm">Choose your perfect fit</p>
              </div>
            </div>
          </div>
        </header>

        {/* Filters */}
        <Card className="card-elegant mb-6">
          <CardContent className="p-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                <span className="text-sm font-medium">Filters:</span>
              </div>
              
              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Size" />
                </SelectTrigger>
                <SelectContent className="bg-background border shadow-lg">
                  <SelectItem value="all">All Sizes</SelectItem>
                  <SelectItem value="XS">XS</SelectItem>
                  <SelectItem value="S">S</SelectItem>
                  <SelectItem value="M">M</SelectItem>
                  <SelectItem value="L">L</SelectItem>
                  <SelectItem value="XL">XL</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedColor} onValueChange={setSelectedColor}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Color" />
                </SelectTrigger>
                <SelectContent className="bg-background border shadow-lg">
                  <SelectItem value="all">All Colors</SelectItem>
                  <SelectItem value="Black">Black</SelectItem>
                  <SelectItem value="White">White</SelectItem>
                  <SelectItem value="Blue">Blue</SelectItem>
                  <SelectItem value="Red">Red</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-background border shadow-lg">
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="card-elegant hover:shadow-lg transition-all duration-200">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-2 right-2 flex gap-2">
                    <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                      <Heart className="w-4 h-4" />
                    </Button>
                    {!product.available && (
                      <Badge variant="destructive" className="text-xs">
                        Out of Stock
                      </Badge>
                    )}
                  </div>
                </div>
                
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">({product.rating})</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">₹{product.price}</span>
                    <Badge variant="secondary">{product.available ? 'In Stock' : 'Out of Stock'}</Badge>
                  </div>

                  <div className="space-y-2">
                    <div>
                      <span className="text-sm font-medium">Colors: </span>
                      <div className="flex gap-1 mt-1">
                        {product.colors.slice(0, 3).map((color, idx) => (
                          <div
                            key={idx}
                            className="w-4 h-4 rounded-full border border-gray-300"
                            style={{ backgroundColor: color.toLowerCase() }}
                            title={color}
                          />
                        ))}
                        {product.colors.length > 3 && (
                          <span className="text-xs text-muted-foreground ml-1">+{product.colors.length - 3}</span>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium">Sizes: </span>
                      <span className="text-sm text-muted-foreground">
                        {product.sizes.join(", ")}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button 
                      onClick={() => handleTryOn(product.id)}
                      className="flex-1 btn-gradient-primary"
                      disabled={!product.available}
                    >
                      <Sparkles className="w-4 h-4 mr-2" />
                      Try On
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      disabled={!product.available}
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Similar Products Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Similar Products You Might Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.slice(0, 4).map((product) => (
              <Card key={`similar-${product.id}`} className="card-elegant">
                <CardContent className="p-3">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-32 object-cover rounded mb-2"
                  />
                  <h4 className="font-medium text-sm mb-1">{product.name}</h4>
                  <p className="text-primary font-bold text-sm">₹{product.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;