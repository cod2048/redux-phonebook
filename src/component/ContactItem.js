import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ContactItem = ({item}) => {
    return (
        <Row>
            <Col width={50} lg={2}>이미지</Col>
            <Col lg={10}>
                <div>
                    {item.name}
                </div>
                <div>
                    {item.phoneNumber}
                </div>
            </Col>

        </Row>

    )
}

export default ContactItem
