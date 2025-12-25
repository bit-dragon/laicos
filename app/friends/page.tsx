import Container from "@/components/Container/Container";
import UserCard from "@/components/UserCard/UserCard";

export default async function Friends() {
  const data = await fetch("https://api.vercel.app/blog");
  const users = await data.json();

  return (
    <Container title="News feed">
      <div className="flex flex-wrap gap-3">
        {users.map((user) => {
          return <UserCard key={user.date} user={user} />;
        })}
      </div>
    </Container>
  );
}
