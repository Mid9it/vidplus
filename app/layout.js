
import { Dosis } from 'next/font/google'
import './globals.css'
import Child from './Child';




const dosis = Dosis({ subsets: ['latin'] })

export const metadata = {
  title:{
    default: 'Vidnaija'},
    metadataBase: new URL('https://vidnaija.com.ng/'),
    openGraph: {
      title: 'Vidnaija | Entertainment and Movie Hubspot',
      description: 'Download movies, hollywood, bollywood, korean series, tv series and anime series for free from Vidnaija',
      images:[{url:'https://vidnaija.com.ng/opengraph-image.png', width:1200, height:630}]
      ,
      url:"https://vidnaija.com.ng",
      type:"website"
      ,
    twitter:{
      card:"summary_large_image"
    }
     
    }
,
  description: 'Download movies, hollywood, bollywood, korean series, tv series and anime series for free from Vidnaija',
  keywords:['movie download', 'movie streaming', 'free movies online', , 'free movie websites', 'new movies to stream', 'watch free movies', 'best streaming services', 'free full movies', 'freevee movies', 'free movie sites', 'movies online', 'free streaming sites', 'watch movies free online', 'free tv shows', 'watch free movies online free', 'watch free movies online without registration', 'watch movies', 'download movies free', 'free movies online sites', 'free new movies online', 'free movie streaming sites', 'best streaming movies',"netnaija", "nkiri", "download free movie", "fzmovies", "godzilla","tvseries","download free tvseries"," download free kseries ","korean series","bollywood","latest movies", "download latest movies", "download latest series","download movies from fzmovies", "download movies from telegram", "download movies from moviebox", "knuckles", "download knuckles free", "download godzilla x kong", "godzilla x kong", "stream godzilla x kong free", "stream godzilla x kong", "latest movies", "latest movies download", "latest free movies download","nollywood movies","nollywood movies download","soo ji and woo ri", "in cold blood","korean series", "k-drama download","korean series series", "boys be brave", "download boys be brave", "download boys be brave free", "latest korean series download","site to download korean series", "free site to download korean series","best site to download korean series","download spanish series with subtitle","download spanish series","download second chance","download telenovalas","download telenovalas with subtitleapy"],
  creator: 'Mid9it',
  alternates:{
    canonical:"https://vidnaija.com.ng"
  }
}

export default function RootLayout({ children }) {
  return (
  <Child children={children} dosis={dosis}/>
  )
}
