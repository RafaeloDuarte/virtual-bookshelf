import React from 'react'
import { Row, Col, Card, Icon, CardTitle } from 'react-materialize'
import { Link } from 'react-router-dom'

export const books = ({ booklist }) => (
    <Row>
       {booklist.map(book => 
           (
               <Col
                    m={4}
                    s={12}
                >
                    <Card
                        actions={[
                            <Link to='/book/1'>Detalhes</Link>
                        ]}
                        closeIcon={<Icon>close</Icon>}
                        header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">{book.title}</CardTitle>}
                        revealIcon={<Icon>more_vert</Icon>}
                    >
                        {book.description}
                    </Card>
                </Col>
            )
       )} 
    </Row>
)