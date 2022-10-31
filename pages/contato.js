import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { BiMailSend } from "react-icons/bi";
import { AiOutlineCode } from "react-icons/ai";
import Link from 'next/link';
import Layout from "../components/Layout";

export default function Contato() {
    const items = [
        {icon: <BiMailSend />, link: "mailto:@kayeholanda@tutanota.com", text: "kayeholanda@tutanota.com"},
        {icon: <AiOutlineCode />, link: "https://github.com/kayehol/", text: "github.com/kayehol"},
    ];

    return (
        <Layout>
            <Container>
                <ListGroup>
                    {items.map((item, idx) => (
                        <ListGroup.Item variant="dark" key={idx}>
                            <Row>
                                <Col 
                                    style={{ width: '32px', height: '32px' }} 
                                    className="d-flex align-items-center"
                                >
                                    {item.icon}			
                                </Col>
                                <Col className="d-flex align-items-center">
                                    <Link href={item.link}>{item.text}</Link>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))}      
                </ListGroup>
            </Container>
        </Layout>
    )
}
