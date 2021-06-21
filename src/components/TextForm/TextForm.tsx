import { useState } from "react";
import "./TextForm.css";

interface TextFormProps {
  onSubmit: (textString: string) => void;
}

export const TextForm = ({ onSubmit }: TextFormProps) => {
  const [textString, setTextString] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(textString);
  };

  return (
    <div className="textForm">
      <form onSubmit={handleSubmit} role="form">
        <label htmlFor="textString">Paste text:</label>
        <textarea
          id="textString"
          onChange={(e) => setTextString(e.target.value)}
        />
        <div className="rightButtonsContainer">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
