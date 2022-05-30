import { TextForm } from "./TextForm";
import { TextEntry, TextRequests } from "../../utilities/textRequests";
import "./TextForm.css";

interface TextFormContainerProps {
  textRequests: TextRequests;
  onSuccess: (text: TextEntry) => void;
}

export const TextFormContainer = ({
  textRequests,
  onSuccess,
}: TextFormContainerProps) => {
  const onSubmit = async (textString: string): Promise<void> => {
    const response = await textRequests.uploadText(textString);
    onSuccess(response);
  };

  return (
    <div>
      <TextForm onSubmit={onSubmit} />
    </div>
  );
};
