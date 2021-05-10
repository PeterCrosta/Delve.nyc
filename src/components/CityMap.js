import * as d3 from 'd3'
import NTA from '../NTA.json'

export const CityMap = (props) => {

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
    const testCoords = NTA.features[0].geometry.coordinates[0]
    console.log(testCoords)
    return (
        <div id='CityMapWrapper'>
            <svg
                width={width}
                height={height}
                id="CityMapSVG"
                >
                <g className="neighborhood">
                    <path 
                        d={line(testCoords)}
                        fill='green'
                        stroke="white"
                    ></path>
                </g>
            </svg>
        </div>
    )
}

