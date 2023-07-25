import React from 'react'

function NewsHead(props) {

    return (
        <div className={`card mb-3 mb-5 news mediaQuery crd ${props.cls}`} >
            <div className="row g-0">
                <div className='crdpic'>
                    <img src={props.img} className="img-fluid rounded-start p-3 " alt="Image not available"/>
                </div>
                <div className="crdd">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">
                            {props.description}
                        </p>
                        <div className='mjj'>
                        <p className="card-text mjj">
                             {props.source.toUpperCase()} - {props.time}
                        </p>
                        <a href={props.url} target='_blank' className="btn btn-outline-secondary">Read Full Article</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
{/* <AllNews arr={arr} cls={cardTheme} /> */}

export default NewsHead
