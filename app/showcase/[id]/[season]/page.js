import Bodyjs from "./Bodyjs"

export async function generateMetadata({params}){
  const data = await fetch(`https://vidnaija-backend.fly.dev/getMovies/${params?.id}?start=${0}&limit=${15}&season=${ params?.season}`)
  const info = await data.json()
  const title = info.title
  const overview = info.overview
  const image = info.image
  const cate = info.category
return{
  title:{
    default: `${title} `},
    openGraph: {
      title: `Vidnaija || ${title} `,
      description: overview,
      images:[{url: image, width:1200, height:630}],
      type:"website"
      ,
    twitter:{
      card:"summary_large_image"
    }
     
    }
,
  description: overview,
  keywords:[`${title} download`,`${title} fzmovies download`, `${title} fzmovies`,`${title} netnaija`,`${title} netnaija download`,`${title} nkiri download`,`${title} nkiri`,`${title} free download` ,`${cate}`,`${cate}  download`,`${cate} free download`, `${title}`,'movie download', 'movie streaming', 'free movies online', , 'free movie websites', 'new movies to stream', 'watch free movies', 'best streaming services', 'free full movies', 'freevee movies', 'free movie sites', 'movies online', 'free streaming sites', 'watch movies free online', 'free tv shows', 'watch free movies online free', 'watch free movies online without registration', 'watch movies', 'download movies free', 'free movies online sites', 'free new movies online', 'free movie streaming sites', 'best streaming movies',"netnaija", "nkiri", "download free movie", "fzmovies", "godzilla","tvseries","download free tvseries"," download free kseries ","korean series","bollywood","latest movies", "download latest movies", "download latest series","download movies from fzmovies", "download movies from telegram", "download movies from moviebox", "knuckles", "download knuckles free", "download godzilla x kong", "godzilla x kong", "stream godzilla x kong free", "stream godzilla x kong", "latest movies", "latest movies download", "latest free movies download","nollywood movies","nollywood movies download","soo ji and woo ri", "in cold blood","korean series", "k-drama download","korean series series", "boys be brave", "download boys be brave", "download boys be brave free", "latest korean series download","site to download korean series", "free site to download korean series","best site to download korean series","download spanish series with subtitle","download spanish series","download second chance","download telenovalas","download telenovalas with subtitle"],
  alternates:{
    canonical:`https://vidnaija.com.ng/showcase/${params.id}/${params?.season}`
  }
}
}

const Showcase = ({params}) => {
  return (
    <>
    <Bodyjs params={params}/>
   </>
  )
}

export default Showcase