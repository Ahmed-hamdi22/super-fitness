// User
declare type User = {
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
} & DatabaseFields;

// Profile Response
declare type ProfileResponse = {
  message: string;
  user: User;
};

// Profile Response
declare type ProfileResponse = {
  message: string;
  user: User;
};

declare type NewPasswordResponse =
  | SuccessfulNewPassword
  | NewPasswordErrorResponse;