type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  age: number;
  weight: number;
  height: number;
  activityLevel: string;
  goal: string;
  photo: string;
  createdAt: string;
};

type LoginSuccess = {
  message: "success";
  user: User;
  token: string;
};

type LoginErrorResponse = {
  error: string;
};

type LoginResponse = LoginSuccess | LoginErrorResponse;
