import React from 'react'
import { Col } from 'antd'

const Card = (data) => {
    data = data.data
    return (
        <div className="card">
            <Col><img src={data.img}></img></Col>
            <Col><h4>{data.name} {data.num}</h4></Col>
        </div>
    )
}
export default Card;