import React from 'react'
import "./tile.css"
const Tile = ({ number, image }) => {
    console.log(image)
    return (
        <div>
            {
                number % 2 === 0 ?
                    <div className="tile black-tile">
                        {image && <div style={{ backgroundImage: `url(${image})` }} className="checker-piece"></div>}
                    </div>
                    : <div className="tile white-tile">
                        {image && <div style={{ backgroundImage: `url(${image})` }} className="checker-piece"></div>}
                    </div>

            }

        </div>
    )
}

export default Tile