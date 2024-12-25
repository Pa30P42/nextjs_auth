import { Blog } from "@/types";
import { NextPageContext } from "next";
import { getSession, signIn } from "next-auth/react";
import blogs from "../../data/blogs";

interface Props {
  blogs: Blog[];
}

export default function BlogsPage({ blogs }: Props) {
  return (
    <div>
      <h1>Blogs Page</h1>
      <ul>
        {blogs.map((blog) => {
          return <li key={blog.id}>{blog.title}</li>;
        })}
      </ul>
    </div>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  console.log("session", session);

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin?callbackUrl=/blogs",
        permanent: false,
      },
    };
  }

  return {
    props: {
      blogs: blogs,
    },
  };
}
