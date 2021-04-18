import useAPI from "@/utils/hooks/useAPI";

describe("useAPI.js", () => {
  global.fetch = jest.fn((url) => {
    if (url !== "error") {
      return Promise.resolve({
        json: () =>
          Promise.resolve([
            {
              id: 1,
              firstName: "test",
              lastName: "test",
              email: "test@gmail.com",
              phone: "(612)211-6296",
            },
          ]),
      });
    }

    return Promise.reject("error");
  });

  let urlCallback, handleResponse;

  beforeEach(() => {
    fetch.mockClear();
  });

  beforeAll(() => {
    urlCallback = () => {
      return "test";
    };

    handleResponse = (response) => {
      return response.json();
    };
  });

  it("Loading flag should be false", async function () {
    const { execute, isLoading } = useAPI(urlCallback, handleResponse);
    await execute();

    expect(isLoading.value).toBeFalsy();
  });

  it("Error should be setted", async function () {
    const { execute, error } = useAPI(() => "error", handleResponse);
    await execute();

    expect(error.value).not.toBeNull();
  });

  it("Response data should be", async function () {
    const { execute, data } = useAPI(urlCallback, handleResponse);
    await execute();

    expect(data).not.toBeNull();
  });
});
