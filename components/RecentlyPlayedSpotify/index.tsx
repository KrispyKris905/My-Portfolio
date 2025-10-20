import { getRecentlyPlayed } from '@/lib/spotify';

export default async function RecentlyPlayedSpotify() {
  const data = await getRecentlyPlayed(5);

  return (
    <div>
      <h2>Recently Played</h2>
      <ul>
        {data.items?.map((item: any) => (
          <li key={item.played_at}>
            {item.track.name} - {item.track.artists[0].name}
          </li>
        ))}
      </ul>
    </div>
  );
}