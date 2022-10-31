import Link from "next/link";
import Card from "react-bootstrap/Card";

export default function Post({ post }) {
    return (
        <Card bg="dark" text="white" className="post-teaser py-1">
            <Card.Body>
                <Card.Title>
                    <Link href={`/${post.frontmatter.blog ? 'blog': 'projs'}/${post.slug}`}>
                        {post.frontmatter.title}
                    </Link>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {post.frontmatter.published}
                </Card.Subtitle>
                <Card.Text>
                    {post.frontmatter.teaser}
                </Card.Text>
            </Card.Body>
        </Card>
    );
} 