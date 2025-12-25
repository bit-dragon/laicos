import Image from "next/image";
import { UserCardProps } from "./types";

export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="p-6 border border-stone-300 rounded w-60 flex flex-col gap-3">
      <div className="flex gap-3">
        <div>
          <Image
            className="rounded-full shadow-xl" // Tailwind classes
            src="https://placecats.com/50/50"
            alt="User profile"
            width={50}
            height={50}
            priority
          />
        </div>

        <div className="flex flex-col gap-1">
          <h4 className="font-semibold text-sm">{user.author}</h4>
          <span className="text-sm text-gray-500">
            Friend since {user.date}
          </span>
        </div>
      </div>
    </div>
  );
}
