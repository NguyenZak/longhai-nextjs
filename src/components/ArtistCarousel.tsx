// components/ArtistCarousel.tsx

import Image from "next/image";

type Artist = {
  name: string;
  image: string;
};

export default function ArtistCarousel({ artists }: { artists: Artist[] }) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
  {artists.map((artist, idx) => (
    <div
      key={idx}
      className="min-w-[120px] flex-shrink-0 text-center transition-transform duration-300 ease-in-out hover:scale-105"
    >
      <div className="w-50 h-50 relative mx-auto rounded-full overflow-hidden border border-gray-300 shadow-sm hover:shadow-lg hover:border-pink-500 transition-all duration-300">
        <Image
          src={artist.image}
          alt={artist.name}
          fill
          className="object-cover"
        />
      </div>
      <p className="mt-2 text-sm font-medium">{artist.name}</p>
    </div>
  ))}
</div>

  );
}
