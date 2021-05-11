

export const NeighborhoodMap = props => {
    const {line} = props
    const {type, coordinates} = props.neighborhoodInfo.the_geom

    if (type === 'MultiPolygon') return coordinates.map((el, idx) => {
        return (
            <g className="neighborhood" key={idx}>
                <path 
                    d={line(el[0])}
                    fill='green'
                    stroke='white'
                ></path>
            </g>
        )
    })
     else return (
        <g className="neighborhood">
        <path 
            d={line(coordinates[0])}
            fill='green'
            stroke="white"
        ></path>
    </g>
    )
}
