import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ContactItem = () => {
    return (
        <Row>
            <Col width={50} lg={2}>이미지</Col>
            <Col lg={10}>
                <div>
                    박준익
                </div>
                <div>
                    0100000000
                </div>
            </Col>

        </Row>

    )
}

export default ContactItem
