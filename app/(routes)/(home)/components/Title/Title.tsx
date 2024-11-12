import { Hedvig_Letters_Sans } from "next/font/google";

interface TitleProps {
  text: string;
}

const title = Hedvig_Letters_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export function Title({ text }: TitleProps) {
  return (
    <h1 className={`${title.className} antialiased md:text-3xl font-bold text-foreground text-start`}>
      {text}
    </h1>
  );
}
