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

declare type RegisterFields = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  rePassword: string;
  gender: string;
  height: number;
  weight: number;
  age: number;
  goal: string;
  activityLevel: string;
};

declare interface RegisterResponse {
  user: User;
  token: string;
}

// Verify otp types
declare type VerifyOTPFields = {
  resetCode: string;
};

declare type VerifyOTPResponse = {
  status: string;
};