import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { BasketProvider } from '@context/BasketContext';
import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (audioRef.current) {
        audioRef.current.muted = false;  // Unmute the audio after interaction
        audioRef.current.play();         // Ensure the audio starts playing
      }
      window.removeEventListener('click', handleUserInteraction); // Remove listener after one interaction
    };

    if (audioRef.current) {
      audioRef.current.volume = 0.1; // Set initial volume
      audioRef.current.muted = true; // Mute initially to allow autoplay
    }

    // Listen for user interaction to unmute and start playback
    window.addEventListener('click', handleUserInteraction);

    return () => window.removeEventListener('click', handleUserInteraction);
  }, []);

  return (
    <>
      {/* Background audio */}
      <audio ref={audioRef} autoPlay loop muted>
        /* <source src="/spooky-sounds/something-haunted-passing-by-190277.mp3" type="audio/mp3" /> */
        Your browser does not support the audio element.
      </audio>
      
    <BasketProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </BasketProvider>
    </>
  );
}
