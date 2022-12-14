import axios from "axios";

export const Api = axios.create({
  baseURL: "https://c4fb-200-124-166-153.ngrok.io/api/v1",
});

export const createSession = async (username: string, password: string) => {
  const response = await Api.post("/login", {
    username,
    password,
  });

  return response;
};

export const getBalance = async (): Promise<any> => {
  const response =
    await Api.get("/find-balance")

  return response;
};

export const createUser = async (username: string, password: string) => {
  const response = await Api.post("/create", {
    username,
    password,
  });

  return response;
};
