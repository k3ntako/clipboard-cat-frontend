import { useEffect, useState } from "react";
import { TextList } from "../components/TextList";
import { TextEntry } from "../utilities/textRequests";
import "./RoomPage.css";

export interface RoomPageProps {
  textRequests: {
    getTexts: () => Promise<TextEntry[]>;
  };
}

export const RoomPage = ({ textRequests }: RoomPageProps): JSX.Element => {
  const [texts, setTexts] = useState<TextEntry[]>([]);

  useEffect(() => {
    const getLastTenTexts = async () => {
      const texts = await textRequests.getTexts();
      setTexts(texts);
    };

    getLastTenTexts();
  }, [textRequests]);

  return (
    <div className="page roomPage">
      <h2>Texts</h2>
      <TextList texts={texts} />
    </div>
  );
};
