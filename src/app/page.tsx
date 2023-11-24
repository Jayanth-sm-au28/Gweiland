import AnnouncementBar from "@/component/announcementBar";
import InfiniteScrollCarousel from "@/component/InfiniteScrollCarousel";
import HeroBanner from "@/component/heroBanner";
import TopnavBar from "@/component/topnavBar";
import BrandCarousel from "@/component/InfiniteScrollCarousel"

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="overflow-hidden">

      <div>

        <AnnouncementBar/>

        <TopnavBar/>
        <HeroBanner/>
        <InfiniteScrollCarousel/>

        <h1 className='text-lg text-red-500 text-center'>welcome</h1>
      </div>
    </main>
  );
}
