import React from 'react'

function NewsInside(props) {
  return (
    <div>
      <div className="card mb-3">
  <img src={props.arr[props.idx].img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.arr[props.idx].title}</h5>
    <p className="card-text">
      {props.arr[props.idx].content}
    </p>
  </div>
</div>

    </div>
  )
}

export default NewsInside
