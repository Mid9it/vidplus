import Bodyjs from "./Bodyjs"

export async function generateMetadata({params}){
  const title = params.info

return{
  title:{
    default: `Vidnaija || ${title} `},
    openGraph: {
      title: `Vidnaija || ${title} `,
      description: `Download ${title} series from vidnaija free`,
      images:[{url:'https://vidnaija.com.ng/opengraph-image.png', width:1200, height:630}]
      ,},
  description: `Download ${title} series from vidnaija free`,
  keywords:[`${title} download`,`${title} free download` ,`${title}`,'movie download', 'movie streaming', 'free movies online', , 'free movie websites', 'new movies to stream', 'watch free movies', 'best streaming services', 'free full movies', 'freevee movies', 'free movie sites', 'movies online', 'free streaming sites', 'watch movies free online', 'free tv shows', 'watch free movies online free', 'watch free movies online without registration', 'watch movies', 'download movies free', 'free movies online sites', 'free new movies online', 'free movie streaming sites', 'best streaming movies',"netnaija", "nkiri", "download free movie", "fzmovies", "godzilla","tvseries","download free tvseries"," download free kseries ","korean series","bollywood","latest movies", "download latest movies", "download latest series","download movies from fzmovies", "download movies from telegram", "download movies from moviebox", "knuckles", "download knuckles free", "download godzilla x kong", "godzilla x kong", "stream godzilla x kong free", "stream godzilla x kong", "latest movies", "latest movies download", "latest free movies download","nollywood movies","nollywood movies download","soo ji and woo ri", "in cold blood","korean series", "k-drama download","korean series series", "boys be brave", "download boys be brave", "download boys be brave free", "latest korean series download","site to download korean series", "free site to download korean series","best site to download korean series","download spanish series with subtitle","download spanish series","download second chance","download telenovalas","download telenovalas with subtitle"],
  alternates:{
    canonical:`https://vidnaija.com.ng/display/${title}/${params.limit}/${params.search}`
  }
}
}

const Display = ({params}) => {
  

  return (
    <>
    <Bodyjs params={params}/>
    </>
  )
}

export default Display