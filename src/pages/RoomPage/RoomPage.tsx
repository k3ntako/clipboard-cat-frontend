import { useEffect, useState } from "react";
import { NavBar } from "../../components/NavBar";
import { TextList } from "../../components/TextList";
import { TextEntry } from "../../utilities/textRequests";
import "./RoomPage.css";

interface RoomPageProps {
  textRequests: {
    getTexts: () => Promise<TextEntry[]>;
  };
}

export const RoomPage = ({ textRequests }: RoomPageProps): JSX.Element => {
  const [texts, setTexts] = useState<TextEntry[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getLastTenTexts = async () => {
      try {
        const texts = await textRequests.getTexts();
        setTexts(texts);
      } catch (error) {
        setError(error);
      }
    };

    getLastTenTexts();
  }, [textRequests]);

  return (
    <>
      <NavBar />
      <div className="page roomPage">
        <h2>Texts</h2>
        {error ? (
          <div className="error">There was an error retrieving the texts</div>
        ) : (
          <TextList texts={texts} />
        )}
      </div>
    </>
  );
};
