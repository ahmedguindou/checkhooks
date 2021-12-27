
import { useState } from 'react';
import Navv from './Navv';
import './App.css';
import Movielist from './Movielist';
function App() {
  const   [moviedata,setMoviedata]=useState([ {
    id: 0,
    title: "peaky blinders",
    photo: "//pbs.twimg.com/media/ETAoYTMXgAA01qD.jpg",
    rate: 1,
    description:
      "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
    trailer: "https://www.youtube.com/embed/oVzVdvGIC7U",
  },
  {
    id: 1,
    title: "Game of thrones",
    photo:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2015%2F11%2Fjs20-20tease.jpeg",
    rate: 3,
    description:
      "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
    trailer: "https://www.youtube.com/embed/gcTkNV5Vg1E",
  },
  {
    id: 2,
    title: "The good doctor",
    photo: "https://pbs.twimg.com/media/EbNkkiTXsAc2o3Y.jpg",
    rate: 4.2,
    description:
      "Shaun Murphy, a young surgeon with autism and Savant syndrome, is recruited into the surgical unit of a prestigious hospital.",
    trailer: "https://www.youtube.com/embed/msJggy8xtmI",
  },
  {
    id: 3,
    title: "Breaking bad",
    photo:
      "https://image.tmdb.org/t/p/original/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    rate: 4.5,
    description:
      "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
    trailer: "https://www.youtube.com/embed/lrcqbavlbyQ",
  },
  {
    id: 4,
    title: "Prison Break",
    photo:
      "https://upload.wikimedia.org/wikipedia/en/5/54/Prison-break-season-4-dvd.jpg",
    rate: 4.2,
    description:
      "Due to a political conspiracy, an innocent man is sent to death row and his only hope is his brother, who makes it his mission to deliberately get himself sent to the same prison in order to break the both of them out, from the inside.",
    trailer: "https://www.youtube.com/embed/AL9zLctDJaU",
  },


 


  {
    id: 10,
    title: "Black List",
    photo:
      "https://i2.wp.com/www.nerdsandbeyond.com/wp-content/uploads/2018/11/203AD589-D9BC-4842-BE7A-3FAC786F49EA.jpeg?fit=750%2C947&ssl=1",
    rate: 4,
    description:
      "A new FBI profiler, Elizabeth Keen, has her entire life uprooted when a mysterious criminal, Raymond Reddington, who has eluded capture for decades, turns himself in and insists on speaking only to her.",
    trailer: "https://www.youtube.com/embed/XihA6GWIBdM",
  },
 
  {
    id:12,
    title: "Vis A Vis",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1DBIEAneCfzyHa1-xYPa2oMCulo6mken_9Q&usqp=CAU",
    rate: 2,
    description:
      "Locked Up, originally titled in Spanish as Vis A Vis , is a Spanish serial drama television series produced by Globomedia, initially for Spanish Network Antena 3 and later on for Fox Spain. It premiered on 20 April 2015.[2] The series begins by focusing on a young woman who is sent to prison and then goes on to depict the image of prison and law enforcement systems.",
    trailer: "https://www.youtube.com/embed/ceNKwOvSVm8",
  },

  {
    id: 14,
    title: "See",
    photo:
      "https://fr.web.img6.acsta.net/pictures/19/09/10/20/30/1507616.jpg",
    rate: 3,
    description:
      "Far in a dystopian future, the human race has lost the sense of sight, and society has had to find new ways to interact, build, hunt, and to survive. All of that is challenged when a set of twins is born with sight.",
    trailer: "https://www.youtube.com/embed/7Rg0y7NT1gU",
  },

])
   
const [title,setTitle]=useState("")
const [rate,setRate]=useState(0)
  return (
    
    
    <div className="App">
 <Navv moviedata={moviedata} setMoviedata={setMoviedata} setTitle={setTitle} title={title}  setrate={setRate} rate={rate}/>
 <Movielist  moviedata={moviedata} setMoviedata={setMoviedata} title={title} rate={rate}/>
     




      
      
      
          </div>
  );
}

export default App;
