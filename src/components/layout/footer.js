import React from "react"
import {Row, Col} from "antd"

const footerCol = [
    {
    label: 'Footer One',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar dolor gravida, suscipit justo eget, vulputate ligula. Integer convallis.',
    key: 'col1',
  },{
    label: 'Footer Two',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar dolor gravida, suscipit justo eget, vulputate ligula. Integer convallis.',
    key: 'col2',
  },{
    label: 'Footer Three',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar dolor gravida, suscipit justo eget, vulputate ligula. Integer convallis.',
    key: 'col3',
  }
]

  const Footer = () => {
      const columnCount = footerCol.length;
    return (
        <Row>
            {footerCol.map(item => {
                return (
                    <Col key={item.key} className="m-2"span={24 / columnCount}>
                        <Row>
                            <h4>{item.label}</h4>
                        </Row>
                        <Row>
                            <p>{item.description}</p>
                        </Row>
                    </Col>
                )
            })}
        </Row>
    )
}

export default Footer