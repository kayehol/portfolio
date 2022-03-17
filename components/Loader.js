import styled from "styled-components";

const Spinner = styled.span`
    position: absolute;
    top: calc(50% - 4em);
    left: calc(50% - 4em);
    width: 6em;
    height: 6em;
    border: 1.1em solid rgba(0, 0, 0, 0.2);
    border-left: 1.1em solid #000000;
    border-radius: 50%;
    animation: load8 1.1s infinite linear;
    transition: opacity 0.3s;
  
    @keyframes load8 {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`

const Loader = () => <Spinner></Spinner>

export default Loader