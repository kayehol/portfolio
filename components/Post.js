import Link from "next/link";

export default function Post({ post }) {
    return (
        <div className="post-teaser">
            <Link href={`/${post.frontmatter.blog ? 'blog': 'projs'}/${post.slug}`}>
                <a><h3>{post.frontmatter.title}</h3></a>
            </Link>
            <p>{post.frontmatter.published}</p>
            <p>{post.frontmatter.teaser}</p>
            <hr />
        </div>
    );
} 