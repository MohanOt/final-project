import { Layout } from "@/components/Layout";
import { MeshBackground } from "@/components/MeshBackground";

const Tech = () => {
  return (
    <Layout>
      <MeshBackground />
      <section className="py-32 text-center">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-eco bg-clip-text text-transparent">
          Tech Innovations
        </h1>
        <p className="text-muted-foreground text-lg 
        font-bold text-purple-600 mb-8 text-2xl" 
        >
          Exploring the latest in sustainable technology and innovation to help Businesses and Individuals grow in the Evolving World in Tech.
       </p>
        <p>Coming Soon ...</p>
      </section>
    </Layout>
  );
};

export default Tech;
