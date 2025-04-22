import AvatarSection from "./_components/AvatarSection";
import HeroSection from "./_components/HeroSection";
import NetlabList from "./_components/NetlabList";

export default function App() {
  return (
    <div className="relative bg-background flex flex-col gap-20 overflow-hidden">
      <HeroSection />
      <NetlabList />
      <AvatarSection />
    </div>
  );
}
