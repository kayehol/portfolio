import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';

const Header = () => {
    return (
        <Nav 
            direction="horizontal" 
            gap={5}
            className="justify-content-center py-2"
        >
            <Nav.Item>
                <Nav.Link>
                    <Link href="/" >
                        kaye-holanda
                    </Link>
                </Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
                <Nav.Link>
                    <Link href="/blog">
                        <a>blog</a>
                    </Link>
                </Nav.Link>
            </Nav.Item> */}
            <Nav.Item>
                <Nav.Link>
                    <Link href="/contato">
                        contato
                    </Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>
                    <Link href="/projs">
                        projetos
                    </Link>
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default Header;