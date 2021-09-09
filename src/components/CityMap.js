import * as d3 from 'd3'
// import NTA from '../NTA.json'
import {NeighborhoodMap} from './NeighborhoodMap'
import {useState, useEffect} from 'react'
import axios from 'axios'

export const CityMap = (props) => {

    const [mapInfo, setMapInfo] = useState([])

    useEffect(() => {
        const getMap = async () => {
            try {
                const {data} = await axios.get('http://localhost:3001/api')
                setMapInfo(data)
            } catch (error) {
                console.log('we got and error: ', error)
            }
        }
        getMap()
    },[])

    const height = document.documentElement.clientHeight
    const width = height * 1.32465263323

    const xScale = d3
    .scaleLinear()
    .domain([-74.2555928790719, -73.7000104153247])
    .range([0, width])

  const yScale = d3
    .scaleLinear()
    .domain([40.4961236003829, 40.9155410761847])
    .range([height, 0])

    const line = d3
    .line()
    .x(d => {
      return xScale(d[0])
    })
    .y(d => {
      return yScale(d[1])
    })

    return (
        <div id='CityMapWrapper'>
            <svg
                width={width}
                height={height}
                id="CityMapSVG"
            >
                {mapInfo.map((neighborhood, idx) => (
                    <NeighborhoodMap
                        line={line}
                        neighborhoodInfo={neighborhood}
                        key={idx}
                    />
                ))}    
            </svg>
        </div>
    )
}

