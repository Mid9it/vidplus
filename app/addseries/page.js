"use client"
import React, { useEffect, useState } from 'react'
import { Formik, ErrorMessage } from 'formik'
import Episode from '@/app/addseries/Episode'
import Loading from '../loading'
import * as yup from 'yup'
import { useRouter } from 'next-nprogress-bar'
import { Gets } from '../check/Check'

const Series = () => {
  const schema = yup.object({
    category:yup.string().required().min(2),
    image:yup.string().required(),
    title:yup.string().required().max(100),
    year:yup.number().required().max(2099).min(1900),
    runtime:yup.string().required(),
    release:yup.string().required(),
    rated:yup.string().required(),
    overview:yup.string().required().min(100),
    trailer:yup.string().required(),
    rating:yup.number().required()
  })
  const router = useRouter()
  const Cate = ["","anime", "asianseries", "tvshows"]
  const [arr,setarr] = useState([])
  const [loading, setloading] = useState(false)
  const [submit, setsubmit] = useState(false)
  const genres = ['FANTASY', 'THRILER', 'SPORT', 'SCI-FI', 'ROMANCE', 'MUSICAL', 'HORROR', 'HISTORY', 'FAMILY', 'DRAMA', 'CRIME', 'COMEDY', 'ANIMATION', 'ADVENTURE', 'ACTION'];
  const [selectedGenres, setSelectedGenres] = useState([]);


  const handleGenreChange = (genre) => {
      if (selectedGenres.includes(genre)) {
        setSelectedGenres(selectedGenres.filter((g) => g !== genre));
      } else {
        if (selectedGenres.length < 3) {
          setSelectedGenres([...selectedGenres, genre]);
        }
      }
    };

    useEffect(()=>{
      Gets(router)
    })
return (
  <>{loading?
  <Loading/>:
  <div className=' pt-32'>
                 <header className=' flex justify-center text-3xl font-bold text-white mb-10 '><h1>ADD SERIES</h1></header>
          <div>
              <Formik initialValues={{category:"",image:"",title:"",top:"",year:"",runtime:"",release:"",rated:"",overview:"",trailer:"", rating:""}}
              validationSchema={schema}
              onSubmit={async(form,{resetForm})=>{
                setloading(true)
                let seri={series:true}

                  const cate ={
                      type:{a:selectedGenres[0],
                      b:selectedGenres[1],
                      c:selectedGenres[2]}
                  }
                  if(selectedGenres.length < 3)
                  {
                    setloading(false)
                      return
                  }
                 
                  const episode = {
                    seasons:arr
                  }
                  const total = {...form,...cate,...seri,...episode}
                  const tok = localStorage.getItem('data')
                  if(!tok){
                    return router.push("/")
                  }
                  const token = JSON.parse(tok).token
                  const url ="https://vidnaija-backend.fly.dev/postMovie"
                  const data = await fetch(url,{
                      method: "POST",
                      headers: { 'Content-Type': 'application/json','auth-token':token },
                      body:JSON.stringify(total)
                    })
                    const result = await data.json()
              
                    window.location.reload()
                  
                    
              }}
            
              >
                  {(props)=>{
                    useEffect(() => {
                      // Calculate and store the year based on the RELEASE date
                      if (props.values.release) {
                        props.setFieldValue("year", new Date(props.values.release).getFullYear());
                      }
                    }, [props.values.release]); 
                      return(
                          <div className='  text-white'>
                                 <div>
                                        {submit&&<Episode arr={arr} props={props.handleSubmit} sub={setsubmit} setArr={setarr}/>}
                                      </div>
                              <div className='px-10 flex flex-wrap justify-between items-center mb-10'>
                              <div className=' flex items-center justify-between  mb-5 lg:mb-0'><p className=' mr-2'>CATEGORY: </p><div><select value={props.values.category} onChange={props.handleChange('category')} className=' bg-transparent border-gray-100 h-9 border-[1px] border-opacity-30 text-white  sm:w-60 lg:w-80'> 
                                    {Cate.map((e)=>{
                                        return(
                                            <option className='bg-black' value={e}>{e}</option>
                                        )
                                    })}
                                    </select><ErrorMessage name='category' component='div' className='text-red-500 text-sm mt-1' /></div></div>
                                  <div className=' flex flex-col sm:flex-row  justify-between items-center  mb-5 lg:mb-0'><p className=' mr-2'>TITLE: </p><form className='w-full'><input type='text' placeholder='* * * * *' className='w-full sm:w-96 h-9 px-3 bg-transparent border-[1px] border-gray-200 border-opacity-25' value={props.values.title} onChange={props.handleChange("title")}/><ErrorMessage name='title' component='div' className='text-red-500 text-sm mt-1' /></form></div>
                                    
                                    <div className=' flex flex-col sm:flex-row  justify-between items-center  mb-5 lg:mb-0'><p className=' mr-2'>IMAGE: </p><form className='w-full'><input type='text' placeholder='* * * * *' className='w-full sm:w-96 h-9 px-3 bg-transparent border-[1px] border-gray-200 border-opacity-25' value={props.values.image} onChange={props.handleChange("image")}/><ErrorMessage name='image' component='div' className='text-red-500 text-sm mt-1' /></form></div>
                                  </div>
                                  <div className=' px-10  flex justify-between mb-10 items-center  flex-wrap'>
                                <div className=' flex flex-col sm:flex-row  justify-between items-center  mb-5 lg:mb-0'><p className=' mr-2'>RUNTIME: </p><form className='w-full'><input type='text' placeholder='* * * * *' className='w-full sm:w-96 h-9 px-3 bg-transparent border-[1px] border-gray-200 border-opacity-25' value={props.values.runtime} onChange={props.handleChange("runtime")}/><ErrorMessage name='runtime' component='div' className='text-red-500 text-sm mt-1' /></form></div>
                                    <div className=' flex flex-col sm:flex-row  justify-between items-center  mb-5 lg:mb-0'><p className=' mr-2'>RELEASE: </p><form className='w-full'><input type='date' placeholder='* * * * *' className='w-full sm:w-96 h-9 px-3 bg-transparent border-[1px] border-gray-200 border-opacity-25' value={props.values.release} onChange={props.handleChange("release")}/><ErrorMessage name='release' component='div' className='text-red-500 text-sm mt-1' /></form></div>
                                    </div>
                                    <div className=' px-10  flex justify-between mb-10 items-center  flex-wrap'>
                                    <div className='flex flex-col sm:flex-row justify-between items-center mb-5 lg:mb-0'>
  <p className='mr-2'>RATED: </p>
  <form className='w-full'>
    <select
      value={props.values.rated}
      onChange={props.handleChange("rated")}
      className='w-full sm:w-96 h-9 px-3 bg-transparent border-[1px] border-gray-200 border-opacity-25'
    >
      <option value='' label='Select Rating' className=' bg-black'/>
      <option value='PG-13' label='PG-13' className=' bg-black' />
      <option value='G' label='G' className=' bg-black'/>
      <option value='PG' label='PG' className=' bg-black'/>
      <option value='R' label='R' className=' bg-black'/>
      <option value='NC-17' label='NC-17' className=' bg-black'/>
      <option value='Not Rated' label='Not Rated' className=' bg-black'/>
    </select>
    <ErrorMessage name='rated' component='div' className='text-red-500 text-sm mt-1' />
  </form>
</div>
                                    <div className=' flex flex-col sm:flex-row  justify-between items-center  mb-5 lg:mb-0'><p className=' mr-2'>OVERVIEW: </p><form className='w-full'><input type='text' placeholder='* * * * *' className='w-full sm:w-96 h-9 px-3 bg-transparent border-[1px] border-gray-200 border-opacity-25' value={props.values.overview} onChange={props.handleChange("overview")}/><ErrorMessage name='overview' component='div' className='text-red-500 text-sm mt-1' /></form></div>
                                    <div className=' flex flex-col sm:flex-row  justify-between items-center  mb-5 lg:mb-0'><p className=' mr-2'>TRAILER: </p><form className='w-full'><input type='text' placeholder='* * * * *' className='w-full sm:w-96 h-9 px-3 bg-transparent border-[1px] border-gray-200 border-opacity-25' value={props.values.trailer} onChange={props.handleChange("trailer")}/><ErrorMessage name='trailer' component='div' className='text-red-500 text-sm mt-1' /></form></div>
                                    </div>
                                  <div className='px-10  flex justify-between items-center mb-20 '>
                                  <div className='flex flex-col sm:flex-row justify-center mb-20 items-center'>
  <p className='mr-2'>RATING: </p>
  <form className='w-full'>
    <input
      type='text'
      placeholder='* * * * *'
      className='w-full sm:w-96 h-9 px-3 bg-transparent border-[1px] border-gray-200 border-opacity-25'
      value={props.values.rating}
      onChange={(e) => {
        const { value } = e.target;
        // Allow only two digits and add a dot after the first digit
        const finalValue = value.slice(0, 2).replace(/[^0-9]/g, '').replace(/(\d)(?=\d)/, '$1.');

        props.handleChange("rating")({ target: { value: finalValue } });
      }}
    />
    <ErrorMessage name='rating' component='div' className='text-red-500 text-sm mt-1' />
  </form>
</div>
                                  
                                  </div>
                                  <div>
                                 

                                      <div className=' px-10  mt-10 justify-center w-full flex flex-col items-center'>
                                          <p className=' text-center font-bold  mb-10 text-xl'>Type</p>
                                          <div className=' flex flex-wrap justify-between mb-10 w-[50%]'>
                                          {genres.map((genre) => (
      <label key={genre} className="block mb-10 cursor-pointer hover:bg-[#1F375F] hover:bg-opacity-10 px-10" >
        <input
          type="checkbox"
          value={genre}
          checked={selectedGenres.includes(genre)}
          onChange={() => handleGenreChange(genre)}
        />
        <span className="ml-2">{genre}</span>
      </label>
    ))}</div>
                                      </div>
                                  </div>
                                  <div className=' flex justify-center mb-10 '><input className=' px-20 py-2 hover:bg-red-700 bg-red-500 text-white font-bold cursor-pointer' type='submit' onClick={()=>setsubmit(!submit)} value={"SUBMIT"}/></div>
                          </div>
                      )
                  }}
              </Formik>
          </div>
  </div>}</>
)
}

export default Series