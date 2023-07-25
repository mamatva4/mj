import React from 'react'

function LoadMore(props) {

    function func(){
        props.incPg()
    }
    if(props.nxtpg===null){
         
    return (
        <div className='' style={{textAlign:'center', fontWeight:600}}>
        *** END ***
        </div>
      )
    }
   
      return (
        <div className='load mb-3'>
        <button type="button" className="btn "  id='loadmore' onClick={func}>Load More News</button>
        <br/><br/><br/>
        Created by Mamatva <br/>***********************
        </div>
      )
  
}

export default LoadMore
