"use client"
import React, { useState , useEffect } from 'react'
import { Formik, ErrorMessage } from 'formik'
import * as yup from 'yup'
import Loading from '../loading'
import { useRouter } from 'next-nprogress-bar'
import { Gets } from '../check/Check'


const Movie = () => {
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
    const Cate = ["","hollywood", "bollywood"]
    const [load, setload] = useState(false)
    const [low, setlow] = useState()
    const [sizelow,setsizelow] = useState()
    const [sizehigh,setsizehigh] = useState()
    const [high, sethigh] = useState()
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
    },[])
  return (
    <>{load?
    <Loading/>:
    <div className=' pt-40'>
                   <header className=' flex justify-center text-3xl font-bold text-white mb-5'><h1>ADD MOVIES</h1></header>
            <div>
                <Formik initialValues={{category:"",image:"",title:"",year:"",runtime:"",release:"",rated:"",overview:"",trailer:"", rating:""}}
                validationSchema={schema}
                onSubmit={async(form, {resetForm})=>{
                  setload(true)
                  let seri;
                  if(form.category == "hollywood" || form.category == "bollywood")
                  {
                    seri={series : false}
                  }
                  else{
                    seri={series:true}
                  }
                    const lows = {
                            lowdownload:{size:sizelow,
                            link:low}
                    }
                    const highs ={
                        highdownload:{size:sizehigh,
                        link:high}
                    }

                    const cate ={
                        type:{a:selectedGenres[0],
                        b:selectedGenres[1],
                        c:selectedGenres[2]}
                    }
                    if(selectedGenres.length < 3)
                    {
                      setload(false)
                        return
                    }
                    const total = {...form,...lows,...highs,...cate,...seri}
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
                      if(result)
                      {
                        setlow()
                        setsizelow()
                        setsizehigh()
                        sethigh()
                        setSelectedGenres([])
                        setload(false)
                        resetForm()
                      }
                      else{
                        setload(false)
                      }
                      
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
                            <div className=' px-10 text-white lg:text-sm text-xs'>
                                <div className=' flex flex-wrap justify-between items-center mb-10'>
                                <div className=' flex items-center justify-between mb-5 lg:mb-0'><p className=' mr-2'>CATEGORY: </p><div><select value={props.values.category} onChange={props.handleChange('category')} className=' bg-transparent border-gray-100 h-9 border-[1px] border-opacity-30 text-white sm:w-60 lg:w-80'> 
                                    {Cate.map((e)=>{
                                        return(
                                            <option className='bg-black' value={e}>{e}</option>
                                        )
                                    })}
                                    </select><ErrorMessage name='category' component='div' className='text-red-500 text-sm mt-1' /></div></div>
                                    <div className=' flex flex-col sm:flex-row  justify-between items-center mb-5 lg:mb-0 '><p className=' mr-2'>TITLE: </p><form className='w-full'><input type='text' placeholder='* * * * *' className='w-full sm:w-96 h-9 px-3 bg-transparent border-[1px] border-gray-200 border-opacity-25' value={props.values.title} onChange={props.handleChange("title")}/><ErrorMessage name='title' component='div' className='text-red-500 text-sm mt-1' /></form></div>
                                    
                                    <div className=' flex flex-col sm:flex-row  justify-between items-center mb-5 lg:mb-0'><p className=' mr-2'>IMAGE: </p><form className='w-full'><input type='text' placeholder='* * * * *' className='w-full sm:w-96 h-9 px-3 bg-transparent border-[1px] border-gray-200 border-opacity-25' value={props.values.image} onChange={props.handleChange("image")}/><ErrorMessage name='image' component='div' className='text-red-500 text-sm mt-1' /></form></div>
                                    </div>
                                    <div className=' flex justify-between mb-10 items-center  flex-wrap '>
                                    <div className=' flex flex-col sm:flex-row  justify-between items-center  mb-5 lg:mb-0'><p className=' mr-2'>RUNTIME: </p><form className='w-full'><input type='text' placeholder='* * * * *' className='w-full sm:w-96 h-9 px-3 bg-transparent border-[1px] border-gray-200 border-opacity-25' value={props.values.runtime} onChange={props.handleChange("runtime")}/><ErrorMessage name='runtime' component='div' className='text-red-500 text-sm mt-1' /></form></div>
                                    <div className=' flex flex-col sm:flex-row  justify-between items-center  mb-5 lg:mb-0'><p className=' mr-2'>RELEASE: </p><form className='w-full'><input type='date' placeholder='* * * * *' className='w-full sm:w-96 h-9 px-3 bg-transparent border-[1px] border-gray-200 border-opacity-25' value={props.values.release} onChange={props.handleChange("release")}/><ErrorMessage name='release' component='div' className='text-red-500 text-sm mt-1' /></form></div>
                                    </div>
                                    <div className=' flex justify-between mb-10 items-center  flex-wrap'>
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
                                    <div className=' flex justify-center mb-4'><p className='px-2 sm:px-40 py-2 bg-red-500 text-white whitespace-nowrap font-bold'>LOW DOWNLOAD EDIT</p></div>
                                    <div className=' flex justify-between mb-10 items-center  flex-wrap'>
                                    <div className=' flex flex-col sm:flex-row  justify-between items-center mb-5 lg:mb-0'><p className=' mr-2'>LINK: </p><form className='w-full'><input type='text' placeholder='* * * * *' className='w-full sm:w-96 h-9 px-3 bg-transparent border-[1px] border-gray-200 border-opacity-25' value={low} onChange={(e)=>setlow(e.target.value)} required/></form></div>
                                    <div className=' flex flex-col sm:flex-row  justify-between items-center mb-5 lg:mb-0'><p className=' mr-2'>SIZE: </p><form className='w-full'><input type='number' placeholder='* * * * *' className='w-full sm:w-96 h-9 px-3 bg-transparent border-[1px] border-gray-200 border-opacity-25' value={sizelow} onChange={(e)=>setsizelow(e.target.value)} required/></form></div>
                                    </div>
                                    <div className=' flex justify-center mb-4'><p className='px-2 sm:px-40 py-2 bg-red-500 text-white whitespace-nowrap font-bold'>HIGH DOWNLOAD EDIT</p></div>
                                    <div className=' flex justify-between mb-10 items-center  flex-wrap'>
                                    <div className=' flex flex-col sm:flex-row  justify-between items-center mb-5 lg:mb-0'><p className=' mr-2'>LINK: </p><form className='w-full'><input type='text' placeholder='* * * * *' className='w-full sm:w-96 h-9 px-3 bg-transparent border-[1px] border-gray-200 border-opacity-25' value={high} onChange={(e)=>sethigh(e.target.value)} required/></form></div>
                                    <div className=' flex flex-col sm:flex-row  justify-between items-center mb-5 lg:mb-0'><p className=' mr-2'>SIZE: </p><form className='w-full'><input type='number' placeholder='* * * * *' className='w-full sm:w-96 h-9 px-3 bg-transparent border-[1px] border-gray-200 border-opacity-25' value={sizehigh} onChange={(e)=>setsizehigh(e.target.value)} required/></form></div>
                                    </div>
                                    <div>
                                        
                                        <div className=' justify-center w-full flex flex-col items-center'>
                                            <p className=' text-center font-bold  mb-10 text-xl'>Type</p>
                                            <div className=' flex flex-wrap lg:justify-between mb-10 w-[50%]'>
                                            {genres.map((genre) => (
        <label key={genre} className="block mb-10 cursor-pointer hover:bg-[#1F375F] hover:bg-opacity-10 px-5 lg:px-10">
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
                                    <div className=' flex justify-center mb-10 '><input className=' px-20 py-2 hover:bg-red-700 bg-red-500 text-white font-bold cursor-pointer' type='submit' onClick={props.handleSubmit} value={"SUBMIT"}/></div>
                            </div>
                        )
                    }}
                </Formik>
            </div>
    </div>}
    </>
  )
}

export default Movie