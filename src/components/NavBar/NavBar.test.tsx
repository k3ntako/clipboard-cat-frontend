import { getByText, render } from "@testing-library/react";
import { NavBar } from "./NavBar";

test("renders text passed in", () => {
  const { getByRole } = render(<NavBar />);

  const nav = getByRole("navigation");
  expect(nav).toBeInTheDocument();

  const link = getByText(nav, "CopyCat", {
    selector: "a",
  });

  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", process.env.REACT_APP_COPY_CAT_WEB_URL);
});
