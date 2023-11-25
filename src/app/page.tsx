import AnnouncementBar from "@/component/AnnouncementBar";
import InfiniteScrollCarousel from "@/component/InfiniteScrollCarousel";
import HeroBanner from "@/component/HeroBanner";
import TopnavBar from "@/component/TopnavBar";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="overflow-hidden">

      <div>

        <AnnouncementBar/>

        <TopnavBar/>
        <HeroBanner/>
        <InfiniteScrollCarousel/>

      </div>
    </main>
  );
}
