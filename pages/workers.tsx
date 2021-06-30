import React from 'react';
import {Button, Col, Form, FormControl, InputGroup, Row, Table} from 'react-bootstrap';
import Box from "../custom/components/Box";

const Workers = () => {

    const m = [
        {fName: "Stephen", lName: "Stewart"},
        {fName: "Marian", lName: "Harris"},
        {fName: "Leslie", lName: "Robinson"},
        {fName: "Rose", lName: "Evans"},
        {fName: "Jesse", lName: "Castro"},
        {fName: "Walter", lName: "Richardson"},
        {fName: "Bobby", lName: "Scott"},
        {fName: "Mary", lName: "Burns"},
        {fName: "Lucille", lName: "Martin"},
        {fName: "Marion", lName: "Lee"},
        {fName: "Stephen", lName: "Stewart"},
        {fName: "Marian", lName: "Harris"},
        {fName: "Leslie", lName: "Robinson"},
        {fName: "Rose", lName: "Evans"},
        {fName: "Jesse", lName: "Castro"},
        {fName: "Walter", lName: "Richardson"},
        {fName: "Bobby", lName: "Scott"},
        {fName: "Mary", lName: "Burns"},
        {fName: "Lucille", lName: "Martin"},
        {fName: "Marion", lName: "Lee"},
    ]

    return (

        <>
            <div className="text-end mb-4">
                <div><Button>Добавити</Button></div>
            </div>
            <Box>
                <Box.Content>
                    <Table className="bg-white p-4">
                        <thead>
                        <tr>
                            <th style={{width: "32px"}} className="mb-0"><Form.Check className="mx-auto mb-0"/></th>
                            <th>Ім'я</th>
                            <th>Прізвище</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            m.map((item, index) => (
                                <tr>
                                    <td className="text-center"><Form.Check className="mx-auto mb-0"/></td>
                                    <td>{item.fName}</td>
                                    <td>{item.lName}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </Table>
                </Box.Content>
            </Box>
        </>
    );
};

export default Workers;