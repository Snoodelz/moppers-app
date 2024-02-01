type SongProps = {
  lyrics: string;
};

const Lyrics: React.FC<SongProps> = ({ lyrics }) => {
  return (
    <div
      className="prose prose-stone break-words dark:prose-invert prose-p:my-0"
      dangerouslySetInnerHTML={{ __html: lyrics }}
    />
  );
};
export default Lyrics;
