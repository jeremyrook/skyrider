import React from "react"
import { Row } from "antd"
import Card from "./Card"

const CardList = (data) => {
    return (
        <Row>
            {data.data !== undefined ? 
                data.data.map(item => {
                    return (
                        <Card data={item} />
                    )}) :
                "No data"
            }
        </Row>
    )
}

export default CardList;