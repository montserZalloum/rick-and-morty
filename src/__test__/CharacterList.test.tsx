import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import CharacterList from "../components/characters/character-list/CharacterList";
import { store } from "../app/store/index";
import { MockedProvider } from "@apollo/react-testing";
import { GET_CHARACTERS } from "../app/graphql/queries/characterQueries";

afterAll(cleanup);

const mocks = [
  {
    request: {
      query: GET_CHARACTERS,
      variables: { page: 1 },
    },
    result: {
      data: {
        characters: {
          results: [
            {
              id: "1",
              name: "Rick Sanchez",
              image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            },
          ],
          info: {
            pages: 42,
            next: 2,
            prev: null,
            count: 826,
          },
        },
      },
    },
  },
];
const mocksErrData = [
  {
    request: {
      query: GET_CHARACTERS,
      variables: { page: 1 },
    },
    error: new Error("Network Error"),
  },
];
const MockCharacterList = () => {
  return (
    <Provider store={store}>
      <MockedProvider mocks={mocks} addTypename={false}>
        <CharacterList />
      </MockedProvider>
    </Provider>
  );
};

// ***************
// LOADING
// ***************
it('wait until fetch data from the server :: loading', () => {
  const { getByAltText } = render(<MockCharacterList />)
  expect(getByAltText('loading...')).toBeInTheDocument();
});

// ***************
// ON ERROR
// ***************
it("when data not shown for some reason :: error", async () => {
  const { findByText } =  render(
    <Provider store={store}>
      <MockedProvider mocks={mocksErrData} addTypename={false}>
        <CharacterList />
      </MockedProvider>
    </Provider>
  );
  expect(await findByText(/Something Happened!/i)).toBeVisible();
});

// ***************
// ON FETCH DATA => HAPPY SCENARIO
// ***************
it("when data fetched :: success", async () => {
  const { findByTestId } = render(<MockCharacterList />)
  expect(await findByTestId('characters-list')).toBeInTheDocument();
});

// ***************
// PAGINATION CLICK => HAPPY SCENARIO
// ***************
it("after data fetched, when the user select a page from the pagination bar :: click", async () => {
  const { findByLabelText, findByTestId } = render(<MockCharacterList />);
  // select first character card
  const firstCharacterEl = await findByTestId("character-card-0");
  // select page #2
  const pageEl = await findByLabelText(/Go to page 2/i);

  await fireEvent.click(pageEl);

  expect(firstCharacterEl).not.toBeVisible();
});
