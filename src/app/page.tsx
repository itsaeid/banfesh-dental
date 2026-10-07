import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero"

export default function Home() {
  return (
    <div className="bg-background h-screen">
      <Navbar />
      <span className="text-accent"></span>
      <Hero />
      <div className="bg-white h-100"></div>
    </div>
  );
}
