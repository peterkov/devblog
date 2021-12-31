import * as postB from "./posts/initial.mdx";
import {Link, useLoaderData} from "@remix-run/react";

function postFromModule(mod: any) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes.meta
  };
}

export function loader() {
  return [
    postFromModule(postB),
  ];
}

export default function Index() {
  const posts = useLoaderData();
  return (
      <ul>
        {posts.map((post: any) => (
            <li key={post.slug}>
              <Link to={'posts/' + post.slug}>{post.title}</Link>
              {post.description ? (
                  <p>{post.description}</p>
              ) : null}
            </li>
        ))}
      </ul>
  );
}
