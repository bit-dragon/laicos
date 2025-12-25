import Image from "next/image";
import { PostProps } from "./types";

export default function Post({ post }: PostProps) {
  return (
    <div className="p-6 border border-stone-300 rounded w-3xl flex flex-col gap-3">
      <div className="flex gap-3">
        <div>
          <Image
            className="rounded-full shadow-xl" // Tailwind classes
            src="https://placecats.com/40/40"
            alt="User profile"
            width={40}
            height={40}
            priority
          />
        </div>

        <div className="flex flex-col gap-1">
          <h4 className="font-semibold text-sm">{post.author}</h4>
          <span className="text-sm text-gray-500">{post.date}</span>
        </div>
      </div>

      <div>
        <p>{post.content}</p>
      </div>

      <div className="flex gap-3">
        <span className="text-gray-500 cursor-pointer hover:text-gray-800 font-semibold">
          Like
        </span>{" "}
        <span className="text-gray-500 cursor-pointer hover:text-gray-800 font-semibold">
          Comments
        </span>
      </div>
    </div>
  );
}
