import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    #main {
        color: ${({ theme }) => theme.colors.primary};
    }
    a {
        padding: 1em;
    }
`;

const Header = () => {
    return (
        <header>
            <Wrapper>
                <Link href="/">
                    <a id="main">kaye-holanda</a>
                </Link>
                <Link href="/projs">
                    <a>projetos</a>
                </Link>
                <Link href="/blog">
                    <a>blog</a>
                </Link>
                <Link href="/contato">
                    <a>contato</a>
                </Link>
            </Wrapper>
        </header>
    );
};

export default Header;