import { render } from "@testing-library/react";
import { RoomPage } from "./RoomPage";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { fullResponse } from "../testHelpers/mockTextResponses";
import * as textRequests from "../utilities/textRequests";

const server = setupServer(
  rest.get(/api\/texts/, (req, res, ctx) => {
    return res(ctx.json(fullResponse));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("renders text from backend", async () => {
  const { findByText } = render(<RoomPage textRequests={textRequests} />);

  const text = await findByText("text 1");
  expect(text).toBeInTheDocument();

  const lastText = await findByText("text 10");
  expect(lastText).toBeInTheDocument();
});
