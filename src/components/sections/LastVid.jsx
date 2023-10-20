"use client"

import { useState, useEffect } from 'react';
import LastVidSkeleton from '@/components/skeletons/LastVidSkeleton';


const LastVid = () => {
  const [lastVideoLink, setLastVideoLink] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLastVideo = async () => {
      try {
        const response = await fetch('https://beta.decapi.me/youtube/latest_video?id=UCKtKtFvTjdM7x9gSZiEr1gg');
        if (response.ok) {
          const data = await response.text();
          setLastVideoLink(data);
        } else {
          console.error('Error fetching latest video');
        }
      } catch (error) {
        console.error('Error fetching latest video', error);
      } finally {
        // Marcar como no cargando una vez que se completa la solicitud
        setLoading(false);
      }
    };

    fetchLastVideo();
  }, []);

  return (
    <div className="flex flex-col container px-6 py-20 pb-20 md:pb-24 mx-auto gap-6 justify-center h-full">
      <h3 className="text-white font-bold text-2xl glow text-center">¿Ya viste mi último video?</h3>
      {loading ? (
        <LastVidSkeleton />
      ) : (
        <div className="max-w-3xl mx-auto md:w-full">
          <div className="aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${lastVideoLink.split('/').pop()}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-md"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default LastVid;