
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
    twitter:{
      card:"summary_large_image"
    }
     
    }
,
  description: 'Download movies, hollywood, bollywood, korean series, tv series and anime series for free from Vidnaija',
  keywords:['movie download', 'movie streaming', 'prime video', 'free movies online', , 'free movie websites','paramount plus movies', 'new movies to stream', 'watch free movies', 'dragon ball super super hero full movie', 'best streaming services', 'free full movies', 'best shows on peacock', 'freevee movies', 'free movie sites', 'avatar 2 streaming', 'movies online', 'free streaming sites', 'watch movies free online', 'free tv shows', 'avatar disney plus', 'prime video channels', 'watch free movies online free', 'watch free movies online without registration', 'hulu movies', 'best movies on peacock', 'watch movies', 'hd movies', 'download movies free', 'free movies online sites', 'free new movies online', 'free movie streaming sites', 'best streaming movies',"netnaija", "nkiri", "download free movie", "fzmovies", "godzilla","tvseries","download free tvseries"," download free kseries ","korean series","bollywood","latest movies", "download latest movies", "download latest series"],
  creator: 'Midnight',
}

export default function RootLayout({ children }) {
  return (
  <Child children={children} dosis={dosis}/>
  )
}
