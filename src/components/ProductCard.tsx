import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, HelpCircle } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  size: string;
  price: string;
  nectarPrice?: string;
  dietTags: string[];
  description?: string;
}

export function ProductCard({ 
  id, 
  name, 
  image, 
  size, 
  price, 
  nectarPrice, 
  dietTags, 
  description 
}: ProductCardProps) {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsAdding(false);
  };

  return (
    <Card className="group h-full transition-all duration-200 hover:shadow-hover border border-border bg-gradient-card">
      <CardContent className="p-4 flex flex-col h-full">
        {/* Product Image */}
        <div className="relative aspect-square mb-3 overflow-hidden rounded-md bg-muted">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
            loading="lazy"
          />
          {nectarPrice && (
            <Badge className="absolute top-2 right-2 bg-grocery-orange text-primary-foreground">
              Nectar
            </Badge>
          )}
        </div>

        {/* Product Info */}
        <div className="flex-1 space-y-2">
          <h3 className="font-medium text-sm leading-tight line-clamp-2">
            {name}
          </h3>
          
          <p className="text-xs text-muted-foreground">
            {size}
          </p>

          {/* Diet Tags */}
          {dietTags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {dietTags.map((tag) => (
                <Badge 
                  key={tag} 
                  variant="secondary" 
                  className="text-xs px-2 py-0.5 bg-grocery-orange-light text-grocery-orange"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Price Section */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-lg text-foreground">
                  {price}
                </span>
                {nectarPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    {nectarPrice}
                  </span>
                )}
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                aria-label={`Why this price for ${name}`}
              >
                <HelpCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Add Button */}
        <Button
          onClick={handleAddToCart}
          disabled={isAdding}
          className="w-full mt-4 bg-grocery-orange hover:bg-grocery-orange/90 text-primary-foreground"
          aria-label={`Add ${name} to cart`}
        >
          {isAdding ? (
            "Adding..."
          ) : (
            <>
              <Plus className="h-4 w-4 mr-2" />
              Add
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}