import Link from "next/link";
import styled from "styled-components";

const Style = styled.div`
    display: flex;
    flex-direction: column;
    a {
        margin-top: 2em;
    }
`

export default function Menu() {
    return (
        <Style>
            <Link href="/projs">
                <a>projetos</a>
            </Link>
            <Link href="/blog">
                <a>blog</a>
            </Link>
            <Link href="/contato">
                <a>contato</a>
            </Link>
        </Style>
    )
}