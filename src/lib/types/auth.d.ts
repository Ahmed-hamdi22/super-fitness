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

// Profile Fields
declare type ProfileFields = {
  weight?: number;
  activityLevel?: string;
  goal?: string;
};

// Profile Response
declare type ProfileResponse = {
  message: string;
  user: User;
};

declare type NewPasswordResponse =
  | SuccessfulNewPassword
  | NewPasswordErrorResponse;