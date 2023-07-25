import { useEffect, useState } from 'react';
import './App.css';
import AllNews from './components/AllNews';
import Darkmode from './components/Darkmode';
import LoadMore from './components/LoadMore';
import Navbar from './components/Navbar';


function App() {
  const [arr, setArr] = useState([])
  const [category, setCategory] = useState("")
  const [query, setQuery] = useState("")
  const [country, setCountry] = useState("country=in&")
  const [page, setPage] = useState('')
  const [cardTheme, setCardTheme] = useState('cardLight')
  const [bodyTheme, setBodyTheme] = useState('bodyLight')
  const [headerTheme, setHeaderTheme] = useState('headerLight')
  const [navTheme, setNavTheme] = useState('navLight')
  const [nxtpg, setnxtpg] = useState('')
  const [total, setTotal] = useState(1)
  const [loader, setLoader] = useState(1)

  function toggleTheme() {
    if (cardTheme === 'cardLight') {
      setCardTheme('cardDark')
      setBodyTheme('bodyDark')
      setNavTheme('navDark')
      setHeaderTheme('headerDark')


    }
    else {
      setCardTheme('cardLight')
      setBodyTheme('bodyLight')
      setNavTheme('navLight')
      setHeaderTheme('headerLight')
    }
  }

  var url = `https://newsdata.io/api/1/news?${country}${query}${category}page=${page}&apiKey=pub_17585db915e300c3c5505092db0dd2d5412b9`

  useEffect(() => {
    setLoader(1)
    let y = document.getElementById('loadmore')
    if (y) {
      y.innerHTML = 'Loading...'
    }
    fetch(url).then(response => response.json())
      .then(data => {
        setLoader(0)
        y = document.getElementById('loadmore')
        if (y) {
          y.innerHTML = 'Load More News'
        }
        // console.log(data);
        let temp = data.results
        setArr([...arr, ...temp])
        setTotal(data.totalResults)
        setnxtpg(data.nextPage)
        // setTotalPage(Math.ceil((data.totalResults) / 10));
      }).catch((error) => {
        console.log(error);
        document.getElementById('loading').innerHTML = 'Something went wrong'
      })
  }, [url])

  function reset() {
    setArr([])
  }


  function addQuery(q) {
    setQuery(q)
    setCountry('country=in&')
    setCategory("")
  }
  function addCategory(c) {
    setCategory(c);
    setCountry('country=in&')
    setQuery("")
  }

  function addCountry(c) {
    setCountry(c)
    setCategory('')
    setQuery('')
  }

  function incPg() {
    setPage(nxtpg)
  }

  function setPg1() {
    setPage('')
  }


  // if (arr.length === 0) {
  //     return (
  //       <div className={`App ${bodyTheme}`} >
  //         {/* <Header cls={headerTheme} />
  //         <Navbar setCat={addCategory} setCou={addCountry} setQue={addQuery} reset={reset} setPg1={setPg1} cls={navTheme} />
  //         <Darkmode toggle={toggleTheme} />
  //         <div className="alert alert-danger mt-5" role="alert">
  //           {total===0?"Can't find any news": 'Loading'}
  //         </div> */}
  //         Loading
  //       </div>
  //     );
  // }

  return (
    <div className={`App pt-1 ${bodyTheme}`}>
      {/* <Header cls={headerTheme} /> */}
      <Navbar setCat={addCategory} setCou={addCountry} setQue={addQuery} reset={reset} setPg1={setPg1} cls={navTheme} />
      <Darkmode toggle={toggleTheme} />
      {(loader == 1) && <div className='loaderr' id='loading'>Please wait...</div>}
      <AllNews arr={arr} cls={cardTheme} />
      {(arr.length !== 0) && <LoadMore incPg={incPg} nxtpg={nxtpg} />}
    </div>
  );
}

export default App;
