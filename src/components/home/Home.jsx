import React, { useEffect } from 'react'
import Header from '../headers/Header';
import { useState } from 'react';


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTVlYWI5ZGEyODNiNzA5M2I1Y2Q4Nzg1NGU3MWVkYyIsInN1YiI6IjY1ZWMxZjA1MmYxYmUwMDE2MzI5ZGIxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4u62_IN6IY9RKtvOkZa3okuUpMmd2jmbKk3_3zFyod4'
  }
};
let url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'
let movie = 'movie';
let tv = 'tv';
let image = 'https://image.tmdb.org/t/p/w500'




const Card = ({img}) => {
  return (
    <>
    <div className='imgContainer'>
      <img src={'https://image.tmdb.org/t/p/w500' + img} alt="poster"  className='poster'/>
    </div>
    </>
  )
}

const Row=({title,arr=[
  
]
})=> {
  return (
    <>
    <div className="rowContainer">

      <h2>{title}</h2>
      <div className="row">
      
        {
          arr.map((item,index)=> (
            <Card key={index} img={item.poster_path}/>
          ))
        }
      </div>
    </div>
    </>
  )
}

const footer=()=>{
  return (
    <>
    <div data-layout="wrapper" data-uia="footer+wrapper" class=" default-ltr-cache-1hai3zx eslj5pt1"><footer data-layout="container" data-uia="footer+container" class="default-ltr-cache-xpmat2 eslj5pt0"><div data-layout="item" class=" default-ltr-cache-108atmr ew2l6qe0"><p class=" default-ltr-cache-2o4prs euy28771"><span id="" data-uia="">Questions? Call <a href="tel:000-800-919-1694">000-800-919-1694</a></span></p></div><div data-layout="item" class=" default-ltr-cache-qr1r67 ew2l6qe0"><div data-layout="wrapper" class=" default-ltr-cache-nywquj eslj5pt1"><ul data-layout="container" data-style="linkList" class="default-ltr-cache-w5gdnq eslj5pt0"><li data-layout="item" class=" default-ltr-cache-1nz3giy ew2l6qe0"><a role="link" data-uia="footer-link" class="e1xphksk0 default-ltr-cache-1jy04bf e1ff4m3w1" href="https://help.netflix.com/support/412">FAQ</a></li><li data-layout="item" class=" default-ltr-cache-1nz3giy ew2l6qe0"><a role="link" data-uia="footer-link" class="e1xphksk0 default-ltr-cache-1jy04bf e1ff4m3w1" href="https://help.netflix.com">Help Centre</a></li><li data-layout="item" class=" default-ltr-cache-1nz3giy ew2l6qe0"><a role="link" data-uia="footer-link" class="e1xphksk0 default-ltr-cache-1jy04bf e1ff4m3w1" href="/youraccount">Account</a></li><li data-layout="item" class=" default-ltr-cache-1nz3giy ew2l6qe0"><a role="link" data-uia="footer-link" class="e1xphksk0 default-ltr-cache-1jy04bf e1ff4m3w1" href="https://media.netflix.com/">Media Centre</a></li><li data-layout="item" class=" default-ltr-cache-1nz3giy ew2l6qe0"><a role="link" data-uia="footer-link" class="e1xphksk0 default-ltr-cache-1jy04bf e1ff4m3w1" href="http://ir.netflix.com/">Investor Relations</a></li><li data-layout="item" class=" default-ltr-cache-1nz3giy ew2l6qe0"><a role="link" data-uia="footer-link" class="e1xphksk0 default-ltr-cache-1jy04bf e1ff4m3w1" href="https://jobs.netflix.com/jobs">Jobs</a></li><li data-layout="item" class=" default-ltr-cache-1nz3giy ew2l6qe0"><a role="link" data-uia="footer-link" class="e1xphksk0 default-ltr-cache-1jy04bf e1ff4m3w1" href="/watch">Ways to Watch</a></li><li data-layout="item" class=" default-ltr-cache-1nz3giy ew2l6qe0"><a role="link" data-uia="footer-link" class="e1xphksk0 default-ltr-cache-1jy04bf e1ff4m3w1" href="https://help.netflix.com/legal/termsofuse">Terms of Use</a></li><li data-layout="item" class=" default-ltr-cache-1nz3giy ew2l6qe0"><a role="link" data-uia="footer-link" class="e1xphksk0 default-ltr-cache-1jy04bf e1ff4m3w1" href="https://help.netflix.com/legal/privacy">Privacy</a></li><li data-layout="item" class=" default-ltr-cache-1nz3giy ew2l6qe0"><a role="link" data-uia="footer-link" class="e1xphksk0 default-ltr-cache-1jy04bf e1ff4m3w1" href="#">Cookie Preferences</a></li><li data-layout="item" class=" default-ltr-cache-1nz3giy ew2l6qe0"><a role="link" data-uia="footer-link" class="e1xphksk0 default-ltr-cache-1jy04bf e1ff4m3w1" href="https://help.netflix.com/legal/corpinfo">Corporate Information</a></li><li data-layout="item" class=" default-ltr-cache-1nz3giy ew2l6qe0"><a role="link" data-uia="footer-link" class="e1xphksk0 default-ltr-cache-1jy04bf e1ff4m3w1" href="https://help.netflix.com/contactus">Contact Us</a></li><li data-layout="item" class=" default-ltr-cache-1nz3giy ew2l6qe0"><a role="link" data-uia="footer-link" class="e1xphksk0 default-ltr-cache-1jy04bf e1ff4m3w1" href="https://fast.com">Speed Test</a></li><li data-layout="item" class=" default-ltr-cache-1nz3giy ew2l6qe0"><a role="link" data-uia="footer-link" class="e1xphksk0 default-ltr-cache-1jy04bf e1ff4m3w1" href="https://help.netflix.com/legal/notices">Legal Notices</a></li><li data-layout="item" class=" default-ltr-cache-1nz3giy ew2l6qe0"><a role="link" data-uia="footer-link" class="e1xphksk0 default-ltr-cache-1jy04bf e1ff4m3w1" href="https://www.netflix.com/in/browse/genre/839338">Only on Netflix</a></li></ul></div></div><div data-layout="item" class=" default-ltr-cache-108atmr ew2l6qe0"><div data-uia="language-picker+container" class=" e1jlx6kl1 default-ltr-cache-1d7jpaj ea3diy35"><label for=":R1ajlahat9:" data-uia="language-picker+label" class="default-ltr-cache-1vw5kt6 ea3diy32">Select Language</label><div class="default-ltr-cache-fmygl2 ea3diy34"><div role="img" aria-hidden="true" class="default-ltr-cache-iyxs8w e1vkmu654"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="default-ltr-cache-4z3qvp e1svuwfo1" data-name="Languages" aria-labelledby=":R8pbajlahat9:" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z" fill="currentColor"></path></svg></div><select id=":R1ajlahat9:" name="LanguageSelect" data-uia="language-picker" fdprocessedid="hvukkm"><option lang="en" label="English" value="en-IN" selected="">English</option><option lang="hi" label="हिन्दी" value="hi-IN">हिन्दी</option></select><div aria-hidden="true" class="default-ltr-cache-emv211 ea3diy33"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="default-ltr-cache-4z3qvp e1svuwfo1" data-name="CaretDown" aria-labelledby=":R9pbajlahat9:" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.5976 6.5C11.7461 6.5 11.8204 6.67956 11.7154 6.78457L8.23574 10.2643C8.10555 10.3945 7.89445 10.3945 7.76425 10.2643L4.28457 6.78457C4.17956 6.67956 4.25393 6.5 4.40244 6.5H11.5976Z" fill="currentColor"></path></svg></div></div></div></div><div data-layout="item" class=" default-ltr-cache-qr1r67 ew2l6qe0"><p class=" default-ltr-cache-18h6uc9 euy28771">Netflix India</p></div></footer></div>
    </>
  )
}




const Home = () => {
  // let posterPath = 'https://image.tmdb.org/t/p/w500';
  let moviesArray = [
    {img:'https://image.tmdb.org/t/p/w500/7O4iVfOMQmdCSxhOg1WnzG1AgYT.jpg'},
    {img:'https://image.tmdb.org/t/p/w500/7O4iVfOMQmdCSxhOg1WnzG1AgYT.jpg'},
    {img:'https://image.tmdb.org/t/p/w500/7O4iVfOMQmdCSxhOg1WnzG1AgYT.jpg'},
    {img:'https://image.tmdb.org/t/p/w500/7O4iVfOMQmdCSxhOg1WnzG1AgYT.jpg'},
  ]
  let [movies,setMovies] = useState([]);
  let [tv, setTv] = useState([]);
  let [nowplaying,setNowPlaying] = useState([]);
  let [upcoming,setUpcoming] = useState([]);
  let [genre,setGenre] = useState([]);
  let [popular,setPopular] = useState([]);
  let [toprated,setToprated] = useState([]);
  let [countries,setCountries] = useState([]);
  let [languages,setLanguages] = useState([])
  

  useEffect( ()=> {
 async function getMovies (){
  try {
    let movieData = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`, options);
    let movieRes = await movieData.json();
    // console.log(movieRes.results);
    setMovies(movieRes.results)
  } catch (error) {
    console.error('Error fetching movie data:', error);
  }; 

    }
    async function getTv () {
      try{
        let tvData = await fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`, options);
        let tvRes = await tvData.json();
        // console.log(tvRes.results)
        setTv(tvRes.results)
      }catch(err){
        console.log('error in fetching data' , err)
      };
    };

    async function nowplayingfun () {
      try{
        let tvData = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`, options);
        let tvRes = await tvData.json();
        console.log(tvRes)
        setNowPlaying(tvRes.results);
      }catch(err){
        console.log('error in fetching data' , err)
      };
    };

    async function upcomingData(){
      await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
      .then(response => response.json())
      .then(response => setUpcoming(response.results))
      .catch(err => console.error(err));

    };
    async function genersfun(){
      await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
      .then(response => response.json())
      .then(response => setGenre(response.genres))
      .catch(err => console.error(err));

    };

    async function popularFun(){
      await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=2', options)
      .then(response => response.json())
      .then(response => setPopular(response.results))
      .catch(err => console.error(err));
    }
    async function ratedFun(){
      fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => setToprated(response.results))
    .catch(err => console.error(err));
    }
    async function countriesFun(){
      fetch('https://api.themoviedb.org/3/configuration/countries?language=en-US', options)
    .then(response => response.json())
    .then(response => setCountries(response))
    .catch(err => console.error(err));
    };
    async function languagesFun(){
      fetch('https://api.themoviedb.org/3/configuration/languages', options)
    .then(response => response.json())
    .then(response => setLanguages(response))
    .catch(err => console.error(err));
    };
    languagesFun();
    countriesFun();
    ratedFun();
    popularFun();
    genersfun();
    upcomingData();
    nowplayingfun();
    getTv();
    getMovies();
  },[]);
  return (
    <>
    <Header />
    <div className="banner" style={{backgroundImage:nowplaying[0] ? `url(${`${image}${nowplaying[0].backdrop_path}`})`: 'black',}}>
      <div className='overview'>
      <h1>{nowplaying[0] && nowplaying[0].title}</h1>
        <p>{nowplaying[0] && nowplaying[0].overview}</p>
        <p>release data :- {nowplaying[0] && nowplaying[0].release_date}</p>
        <div>
          <button><i className="fa-solid fa-play"></i> play now</button><button><i className="fa-solid fa-plus"></i> watch later</button>
        </div>
      </div>
    </div>
    <Row title='Now Playing' arr={nowplaying}/>
    <Row title="Movies" arr={movies}/>
    <Row title="Tv Shows" arr={tv}/>
    <Row title="Popular" arr={popular}/>
    <Row title="Top Rated" arr={toprated}/>
    <Row title='Upcoming...' arr={upcoming}/>

    <div className='hello'>
      {
        genre.map((item,index)=>(
          <div key={index} className='genreTags'>{item.name}</div>
        ))
      }
    </div>
    <div className='countriesParent'>
      {/* {
        countries.map((item,index)=> (
          <div key={index}>{item.english_name}</div>
        ))
      } */}
    </div>
    <div className='languagesParent'>
      {/* {
        languages.map((item,index)=> (
          <div key={index}>{item.english_name}</div>
        ))
      } */}
    </div>
      <footer />
    </>
  )
}

export default Home;