import { getRecentlyPlayed } from '@/lib/spotify';
import Image from 'next/image';
import { ContentSection } from "@/components/content-section";


export default async function RecentlyPlayedSpotify() {
  const data = await getRecentlyPlayed(5);

  return (
    <div className="w-full">
      <h4>Recently Played on Spotify</h4>
      <div className="responsive-flex ">
        {data.items?.map((item: any) => (
          <div key={item.track.id} className="flex flex-col items-center">
            <Image
              src={item.track.album.images[0]?.url || '/placeholder.png'}
              alt={`${item.track.name} album cover`}
              width={150}
              height={150}
              className="img-square"
            />
            <h6>{item.track.name}</h6>
            <h6>{item.track.artists[0].name}</h6>
          </div>
        ))}
      </div>
    </div>
  );
}