import { Videos } from '@/models/videos';
import { useState, useEffect } from 'react';

const initalState: Videos = {
  trends: [],
  originals: [],
  mylist: [],
}

export const useInitialState = (API: string) => {
  const [videos, setVideos] = useState<Videos>(initalState);

  useEffect(() => {
    window.fetch(API)
      .then(response => response.json())
      .then(data => setVideos(data))
  }, []);

  return videos;
}