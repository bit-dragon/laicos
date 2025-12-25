import Container from "@/components/Container/Container";
import Post from "@/components/Post/Post";

export default async function Home() {
  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();

  return (
    <Container title="News feed">
      <div className="flex flex-col gap-3">
        {posts.map((post) => {
          return <Post key={post.date} post={post} />;
        })}
      </div>
    </Container>
  );
}
