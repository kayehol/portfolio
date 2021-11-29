import Layout from "../components/Layout";
import styled from "styled-components";

export default function Contato() {
    const items = [
        {link: "https://wa.me/5582003213377", text: "(82) 99321 3377"},
        {link: "mailto:@kayeholanda@tutanota.com", text: "kayeholanda@tutanota.com"},
        {link: "https://github.com/kayehol/", text: "github.com/kayehol"},
    ];

    const Item = styled.h3`
        text-align: center;
    `

    return (
        <Layout>
            {items.map((item, idx) => (
                <Item key={idx}>
                    <a href={item.link}>{item.text}</a>
                </Item>
            ))}      
        </Layout>
    )
}