import React from 'react'

export default function NewsItem(props) {
 
    return (
        <>
            <div className="col-md-4 my-3 newsItem">
                <img className="n-image" width="400" height="225" src={props.imgURL} alt="news" />
                <h3 className="fw-normal my-2 n-title">{props.title}</h3>
                <p className="n-desc">{props.desc}</p>
                <p className="n-links">
                <a className="btn btn-secondary mx-2" href="/">View details &raquo;</a>
                <a className="btn btn-secondary mx-2" href={props.oc}>View original article &raquo;</a>
                </p>
            </div>
        </>
    )

}