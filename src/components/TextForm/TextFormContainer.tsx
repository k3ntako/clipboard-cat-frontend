import { TextForm } from "./TextForm";
import { TextRequests } from "../../utilities/textRequests";
import "./TextForm.css";

interface TextFormContainerProps {
  textRequests: TextRequests;
}

export const TextFormContainer = ({ textRequests }: TextFormContainerProps) => {
  const onSubmit = async (textString: string): Promise<void> => {
    await textRequests.uploadText(textString);
  };

  return (
    <div>
      <TextForm onSubmit={onSubmit} />
    </div>
  );
};
