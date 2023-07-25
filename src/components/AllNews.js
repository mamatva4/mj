import React from 'react'
import NewsHead from './NewsHead'

function AllNews(props) {
    // var url = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=0a3069a7407140d4858eaafd546d9e7c"
    function myfunc(){

        // props.f()
    }
    let defaultImg = "images/defaultImg.jpg"
  return (
    <div className='allnews'>
      <div className="d-flex flex-wrap justify-content-around ">
        {props.arr.map((ele,idx)=><NewsHead cls={props.cls} source={ele.source_id} title={ele.title} url={ele.link}  time={ele.pubDate} description={(ele.description!==null && ele.description.length)>300?ele.description.substr(0,300)+"...":ele.description} key={idx} id={idx} img={ele.image_url===null ? defaultImg : ele.image_url} f={props}/>)}
      </div>
    </div>
    
  )
  // <AllNews arr={arr} cls={cardTheme} />
}

export default AllNews
