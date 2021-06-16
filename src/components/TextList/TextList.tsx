import { TextEntry } from "../../utilities/textRequests";
import "./TextList.css";

export interface TextListProps {
  texts: TextEntry[];
}

export const TextList = ({ texts }: TextListProps) => {
  return (
    <div className="textList">
      {texts.map((t) => (
        <div key={t.id}> {t.text_string}</div>
      ))}
    </div>
  );
};
