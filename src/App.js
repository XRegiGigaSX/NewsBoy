import React, { useEffect, useState } from 'react'
import Navbar from "./components/Navbar.jsx"
import NewsItem from "./components/NewsItem.jsx"
// const bodyParser = require("body-parser")

// Your API key is: 8c523c6f3f5f4c23b93eb4e7136556a9

const url = 'https://newsapi.org/v2/everything?' +
  'q=Apple&' +
  'from=2022-07-14&' +
  'sortBy=popularity&' +
  'apiKey=8c523c6f3f5f4c23b93eb4e7136556a9';


export default function App() {

  const [data, setData] = useState([])
  // const [dataList, setDataList] = useState([])

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(
        res => setData(res.articles)
      )
  }, [])

  // setDataList(data.articles);
  // console.log(dataList);
  console.log(data)

  return (
    <div>
      <Navbar />
      <div className="container marketing">
        <div className="row">
          {data.map((item, index) => {
              return (
                <NewsItem
                  key={index}
                  id={index}
                  title={item.title}
                  imgURL={item.urlToImage}
                  desc={item.description}
                  oc={item.url}
                />)
            })
          }
        </div>
      </div>
    </div>
  )
}


