import { Bitter } from "next/font/google";

const bitter = Bitter({ subsets: ["latin"] });

interface TitleProps {
  text: string;
}

export function Title({text} : TitleProps) {
  return (
    <h1 className={`${bitter.className} antialiased text-6xl font-extrabold text-center`}>
      {text}
    </h1>
  );
}
