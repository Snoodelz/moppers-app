import { useTheme } from "next-themes";

type SongProps = {
  lyrics: string;
};

const Lyrics: React.FC<SongProps> = ({ lyrics }) => {
  const theme = useTheme();
  const textColor = theme.theme === "dark" ? "white" : "black";
  //console.log(textColor);
  console.log(theme.theme);

  return (
    <div
      className="prose prose-stone break-words dark:prose-invert prose-p:my-0"
      dangerouslySetInnerHTML={{ __html: lyrics }}
    />
  );
};
export default Lyrics;
