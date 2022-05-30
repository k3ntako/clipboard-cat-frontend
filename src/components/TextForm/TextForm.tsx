import { useState } from "react";
import "./TextForm.css";

export interface TextFormProps {
  onSubmit: (textString: string) => Promise<void>;
}

export const TextForm = ({ onSubmit }: TextFormProps) => {
  const [textString, setTextString] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent) => {
    try {
      event.preventDefault();
      await onSubmit(textString);
      setTextString("");
    } catch (error) {}
  };

  const overLengthLimit = textString.length > 250;
  const disabled = !textString.trim().length || overLengthLimit;

  return (
    <div className="textForm">
      <form onSubmit={handleSubmit} aria-label="form">
        <div className="textStringTextArea">
          <label htmlFor="textString">Paste text:</label>
          <textarea
            id="textString"
            onChange={(e) => setTextString(e.target.value)}
            value={textString}
          />
          <div
            className={
              "textLengthIndicator" + (overLengthLimit ? " error" : "")
            }
          >
            {textString.length}/250
          </div>
        </div>
        <div className="rightButtonsContainer">
          <button type="submit" disabled={disabled}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
