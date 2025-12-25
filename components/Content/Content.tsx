import { ContainerProps } from "../Container/types";

export default function Content({ children, title }: ContainerProps) {
  return (
    <div className="w-full flex-col items-center p-6 bg-white dark:bg-black sm:items-start">
      {title && <h1 className="text-xl font-semibold pb-6">{title}</h1>}
      {children}
    </div>
  );
}
