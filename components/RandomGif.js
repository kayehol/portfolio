import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import {IoRefreshCircleSharp} from "react-icons/io5";
import axios from "axios";
import wordList from "../wordlist.js";

const RandomGif = () => {
    const formatDescription = (text) => {
        if (!text) return '';
        text = text.split(' ');
        text.pop();
        return text.join('-').toLowerCase();
    }
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Recarregar
        </Tooltip>
    );
    const [gif, setGif] = useState({});

    const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    const key = process.env.NEXT_PUBLIC_TENOR_KEY;
    const url = `https://g.tenor.com/v1/search?q=${randomWord}&key=${key}&limit=4&media_filter=minimal`
        
    async function getGif() {
        try {
            const result = await axios.get(url);
            const resultsList = result.data.results;
            const randomResult = resultsList[Math.floor(Math.random() * resultsList.length)];
            const gifDescription = randomResult.content_description;
            const gifUrl = randomResult.media[0].tinygif.url;
            setGif({
                url: gifUrl,
                description: gifDescription
            });
        } catch(err) {
            console.error(err);
        }
    }
    
    useEffect(() => {
        getGif();
    }, []);
    return (
        <>
            <Card bg="dark"text="white">
                {Object.keys(gif).length !== 0 ? <Card.Img variant="top" src={gif.url} /> : <Spinner animation="border" />}
                <Card.Body>
                    <Row>
                        <Col className="m-0">
                            <Card.Text style={{ fontSize: '10px'}}>
                                {formatDescription(gif.description)}
                            </Card.Text>
                        </Col>
                        <Col className="d-flex justify-content-end" >
                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip}
                            >
                                <Button variant="outline-secondary" size="sm">
                                    <IoRefreshCircleSharp style={{ scale: '175%'}} onClick={getGif} />
                                </Button>
                            </OverlayTrigger>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}

export default RandomGif
