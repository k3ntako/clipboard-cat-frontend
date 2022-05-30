import { TextEntry } from "../../utilities/textRequests";
import "./TextList.css";

interface TextListProps {
  texts: TextEntry[];
}

export const TextList = ({ texts }: TextListProps) => {
  if (!texts.length) {
    return <div className="noTexts">No texts yet</div>;
  }

  return (
    <div className="textList">
      {texts.map((t) => (
        <div key={t.id}> {t.content}</div>
      ))}
    </div>
  );
};
