import { useEffect, useState } from "react";
import { NavBar } from "../../components/NavBar";
import { TextFormContainer } from "../../components/TextForm/TextFormContainer";
import { TextList } from "../../components/TextList";
import { ToastType } from "../../components/Toast";
import { TextEntry, TextRequests } from "../../utilities/textRequests";
import "./RoomPage.css";

export interface RoomPageProps {
  textRequests: TextRequests;
  displayToast: (type: ToastType, message: string) => void;
}

export const RoomPage = ({
  textRequests,
  displayToast,
}: RoomPageProps): JSX.Element => {
  const [texts, setTexts] = useState<TextEntry[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getLastTenTexts = async () => {
      try {
        const texts = await textRequests.getTexts();
        setTexts(texts);
      } catch (error) {
        setError(error);
        displayToast(ToastType.Error, error.message);
      }
    };

    getLastTenTexts();
  }, [textRequests, displayToast]);

  return (
    <>
      <NavBar />
      <div className="page roomPage">
        <TextFormContainer textRequests={textRequests} />
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
