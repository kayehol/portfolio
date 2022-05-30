import Layout from "../components/Layout";
import styled from "styled-components";

export default function Contato() {
    const items = [
        {icon: '\u260F', link: "https://wa.me/5582003213377", text: "(82) 99321 3377"},
        {icon: '\u2709', link: "mailto:@kayeholanda@tutanota.com", text: "kayeholanda@tutanota.com"},
        {icon: '\u2328', link: "https://github.com/kayehol/", text: "github.com/kayehol"},
    ];

    const Item = styled.h3`
        text-align: center;
	display: flex;
	flex-direction: row;
	align-items: center;	
	border-style: dotted;
	padding: 0 1em; 
	a { margin-left: 1em; }
    `

    return (
        <Layout>
            {items.map((item, idx) => (
                <Item key={idx}>
		    { item.icon && <h1>{item.icon}</h1> }			
                    <a href={item.link}>{item.text}</a>
                </Item>
            ))}      
        </Layout>
    )
}
