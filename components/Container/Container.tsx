import { ContainerProps } from "./types";

export default function Container({ children, title }: ContainerProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex min-h-screen w-full flex-col items-center p-6 bg-white dark:bg-black sm:items-start">
        {title && <h1 className="text-xl font-semibold pb-6">{title}</h1>}
        {children}
      </div>
    </div>
  );
}
