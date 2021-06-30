import Head from 'next/head'
import Image from 'next/image'
import {Button, Col, Row} from "react-bootstrap";
import Box from "../custom/components/Box";
import {ImPencil2} from "react-icons/im";

export default function Home() {
    // @ts-ignore
    return (
        <>
            <Row>
                <Col className="mb-5">
                    <Box>
                        <Box.Title icon={ImPencil2} iconSize={4} title="Темповий контейнер"/>
                        <Box.Content>
                            <Box>
                                <Box.Content>
                                    На даній сторінці буде відображатись останні події, та загальна інформація про підприємство.
                                </Box.Content>
                            </Box>
                        </Box.Content>
                    </Box>
                </Col>
                <Col>
                    <Box>
                        <Box.Title title="Темповий контейнер">w</Box.Title>
                        <Box.Content>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cupiditate dolores eos
                            exercitationem, impedit ipsa maxime nisi omnis placeat praesentium provident rem sequi sint,
                            tempora tenetur voluptatem voluptatum. Quaerat, sed.
                        </Box.Content>
                    </Box>
                    <Box className="mt-5">
                        <Box.Title title="Темповий контейнер">
                        </Box.Title>
                        <Box.Content>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque excepturi saepe soluta vero
                            vitae? A aliquam animi commodi corporis cumque debitis deserunt dicta dignissimos earum eius
                            esse exercitationem facere illum incidunt ipsum itaque laboriosam mollitia optio, quae quis
                            ratione repellat sit sunt unde vitae? Atque debitis, dicta doloremque dolorum eligendi
                            explicabo, facere id iure magni maiores minima, minus molestiae nam numquam perferendis
                            perspiciatis placeat rerum sed soluta veritatis. Aperiam assumenda beatae consectetur
                            consequuntur distinctio dolore ducimus, eveniet facilis itaque iusto magnam nemo possimus
                            soluta sunt ullam vel voluptate. Dolore ipsa ratione saepe tempora vel! Beatae
                            exercitationem illo labore nam ut.
                            <div className="text-end mt-3">
                                 <Button size="sm" variant="light">Скасувати</Button>
                                <Button size="sm" variant="success">Зберегти</Button>
                            </div>
                        </Box.Content>
                    </Box>
                </Col>
            </Row>
        </>
    )
}
