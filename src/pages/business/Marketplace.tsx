import { Layout } from "@/components/Layout";
import { MeshBackground } from "@/components/MeshBackground";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Link } from "react-router-dom";

const dummyProducts = [
  {
    id: 1,
    name: "EcoSmart LED Bulb",
    price: "$12.99",
    image: "https://source.unsplash.com/800x600/?technology",
    store: "Amazon",
  },
  {
    id: 2,
    name: "Reusable Bamboo Cutlery Set",
    price: "$8.50",
    image: "https://via.placeholder.com/200x150?text=Bamboo+Cutlery",
    store: "Etsy",
  },
  {
    id: 3,
    name: "Solar Power Bank",
    price: "$24.99",
    image: "https://via.placeholder.com/200x150?text=Solar+Power+Bank",
    store: "AliExpress",
  },
   {
    id: 5,
    name: "Ergonomic Office Chair",
    price: "$149.99",
    image: "https://source.unsplash.com/800x600/?office-chair",
    store: "IKEA",
  },
   {
    id: 4,
    name: "Mechanical Keyboard RGB",
    price: "$89.99",
    image: "https://source.unsplash.com/800x600/?keyboard",
    store: "Newegg",
  },
];

const Marketplace = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState(dummyProducts);

  const handleSearch = () => {
    // later we'll replace this with API/AI logic
    const results = dummyProducts.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
    setProducts(results);
  };

  return (
    <Layout>
      <MeshBackground />

      <section className="relative py-24 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-eco bg-clip-text text-transparent">
            Eco Marketplace
          </h1>
          <p className="text-muted-foreground mb-4">
            Discover sustainable products sourced intelligently from trusted online stores.
          </p>
          
          <Link to="/marketplace/signup">
            <Button variant="outline" className="mb-8">
              Join as Supplier or Retailer
            </Button>
          </Link>

          {/* Search Bar */}
          <div className="flex justify-center gap-2 mb-12">
            <Input
              placeholder="What are you looking for?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-80"
            />
            <Button onClick={handleSearch}>Search</Button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="bg-card/60 backdrop-blur-sm hover:scale-[1.02] transition-all">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">{product.store}</p>
                  <p className="font-semibold">{product.price}</p>
                  <Button className="mt-4 w-full">Buy Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Marketplace;
