import { HeroSection, IndustriesSection, LinksSection } from '@/components';
export default function Home() {
  return (
    <div className='min-h-screen bg-background'>
      <HeroSection />
      <LinksSection />
      <IndustriesSection />
    </div>
  );
}
