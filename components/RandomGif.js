import { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import axios from "axios";

import Loader from "./Loader";

const Style = styled.div`
    #randomGif {
        object-fit: contain;
        object-position: 50% 50%;
        position: relative;
    }
`

const RandomGif = () => {
    const [gif, setGif] = useState({});
    
    useEffect(() => {
        const wordList = ['the-matrix', 'johnny-mnemonic', 'blade-runner', 'tron-1982', 'mr-robot', 'lord-of-the-rings', 'hackers-1995'];
        const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
        const key = process.env.TENOR_KEY;
        const url = `https://g.tenor.com/v1/search?q=${randomWord}&key=${key}&limit=4&media_filter=minimal`
        
        async function getGif() {
            const result = await axios.get(url);
            const resultsList = result.data.results;
            const randomResult = resultsList[Math.floor(Math.random() * resultsList.length)];
            const gifDescription = randomResult.content_description;
            const gifUrl = randomResult.media[0].gif.url;
            setGif({
                url: gifUrl,
                description: gifDescription
            });
        }

        getGif();

    }, []);
    return (
        <Style>
           { Object.keys(gif).length !== 0  ? <Image id="randomGif" alt={gif.description} src={gif.url} width={500} height={500} /> : <Loader /> } 
        </Style>
    )
}

export default RandomGif