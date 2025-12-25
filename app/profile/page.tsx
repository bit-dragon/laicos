import Container from "@/components/Container/Container";
import Content from "@/components/Content/Content";
import Image from "next/image";

export default function Profile() {
  return (
    <Container>
      <div className="flex">
        <Container>
          <div className="flex">
            <Image
              className="rounded shadow-xl" // Tailwind classes
              src="https://placecats.com/500/500"
              alt="User profile"
              width={300}
              height={300}
              priority
            />
            <div className="flex flex-col gap-2 py-6 pl-6">
              <h2 className="text-4xl font-semibold">Jorge Garcia</h2>
              <span className="text-gray-500 text-sm">Member since 2020</span>
            </div>
          </div>
          <Content title="Photos by you">
            <div className="w-full">Photos....</div>
          </Content>
          <Content title="Videos by you">
            <div className="w-full">Videos....</div>
          </Content>
          <Content title="Latest posts">
            <div className="w-full">Latest posts....</div>
          </Content>
        </Container>
      </div>
    </Container>
  );
}
