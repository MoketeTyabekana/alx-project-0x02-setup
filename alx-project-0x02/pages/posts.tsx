import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostsPageProps } from "@/interfaces";

const Post: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <>
      <Header />
      <main>
        <section className="px-10 py-4 ">
          
          <div className="grid grid-cols-3 gap-4">
            {posts.slice(0,20).map(({ id, title, body, userId }) => (
              <PostCard key={id} title={title} body={body} userId={userId} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch("http://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export default Post;
