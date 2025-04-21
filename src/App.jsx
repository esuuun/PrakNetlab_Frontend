import HeroSection from "./_components/HeroSection";
import NetlabList from "./_components/NetlabList";

export default function App() {
  return (
    <div className="bg-background flex flex-col gap-20">
      <HeroSection />
      <NetlabList />
    </div>
  );
}
