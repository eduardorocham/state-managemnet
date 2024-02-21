interface TitleProps {
  text: string;
}

export const Title = ({ text }: TitleProps) => {
  return <h1 className="text-3xl font-bold mb-4">{text}</h1>;
};
