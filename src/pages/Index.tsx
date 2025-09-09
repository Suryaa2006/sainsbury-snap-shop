import { useState } from "react";
import { Header } from "@/components/Header";
import { FilterSidebar } from "@/components/FilterSidebar";
import { ProductGrid } from "@/components/ProductGrid";
import { SuggestedAddons } from "@/components/SuggestedAddons";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-6">
          <FilterSidebar />
          
          <div className="flex-1">
            <ProductGrid searchQuery={searchQuery} />
            <SuggestedAddons />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
