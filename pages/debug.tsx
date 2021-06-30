import React from 'react';
import {Button, Col, Row} from 'react-bootstrap';
import Box from "../custom/components/Box";

const Debug = () => {
    // @ts-ignore
    return (
        <Box>
            <Box.Content>
                <Row>
                    <Col>
                        <h1>h1</h1>
                        <h2>h2</h2>
                        <h3>h3</h3>
                        <h4>h4</h4>
                        <h5>h5</h5>
                    </Col>
                    <Col>
                        <div className="display-1 text-danger">display-1</div>
                        <div className="display-2 text-primary">display-2</div>
                        <div className="display-3 text-warning">display-3</div>
                        <div className="display-4 text-info">display-4</div>
                        <div className="display-5 text-secondary">display-5</div>
                    </Col>
                    <Col>
                        <div className="mb-3 fw-bold text-muted">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, temporibus.
                        </div>
                        <div className="mb-3 fs-1">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, temporibus.
                        </div>
                        <div className="mb-3 fs-2">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, porro.
                        </div>
                        <div className="mb-3 fs-3">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nostrum?
                        </div>
                        <div className="mb-3 fs-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nostrum?
                        </div>
                        <div className="mb-3 fs-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nostrum?
                        </div>
                        <div className="mb-3 fs-6">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nostrum?
                        </div>
                    </Col>
                </Row>

                <Row className="my-5">
                    <Col>
                        <Button variant="success" className="mx-1">Тест</Button>
                    </Col>
                    <Col>
                        <Button variant="warning" className="mx-1">Тест</Button>
                    </Col>
                    <Col>
                        <Button variant="danger" className="mx-1 fw-bold">Тест</Button>
                    </Col>
                    <Col>
                        <Button variant="dark" className="mx-1">Тест</Button>
                    </Col>
                    <Col>
                        <Button variant="primary" className="mx-1">Створити користувача</Button>
                    </Col>
                    <Col>
                        <Button variant="info" className="mx-1">Тест</Button>
                    </Col>
                    <Col>
                        <Button variant="secondary" className="mx-1">Тест</Button>
                    </Col>
                </Row>


                <Box rounded>
                    <Box.Title title="8 task completed out of 10">
                        <div className="text-secondary">Lorem ipsum dolor.</div>
                    </Box.Title>
                    <Box.Content>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci
                        aspernatur atque cupiditate deleniti facere id illo ipsam nulla obcaecati placeat porro,
                        possimus
                        quasi qui quos sunt ullam velit voluptates?
                    </Box.Content>
                </Box>
            </Box.Content>
        </Box>
    );
};

export default Debug;