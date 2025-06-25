// User type
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

// Register types
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
declare type ForgotPasswordResponse = SuccessfulForgotPassword | ForgotErrorResponse;

declare type NewPasswordResponse = SuccessfulNewPassword | NewPasswordErrorResponse;
declare type ForgotPasswordResponse = SuccessfulForgotPassword | ForgotErrorResponse;
declare type NewPasswordResponse = SuccessfulNewPassword | NewPasswordErrorResponse;

// Profile fields
declare type ProfileFields = {
  firstName?: string;
  lastName?: string;
  age?: number;
  weight?: number;
  height?: number;
  activityLevel?: string;
  goal?: string;
  photo?: string;
  name?: string;
  weight?: number;
  activityLevel?: string;
  goal?: string;
};

/*

  "_id": "683610a3db652005144135c6",
        "firstName": "mariem",
        "lastName": "Tech2",
        "email": "mariemmohamed1421@gmail.com",
        "gender": "female",
        "age": 25,
        "weight": 59,
        "height": 159,
        "activityLevel": "level2",
        "goal": "lose weight",
        "photo": "https://fitness.elevateegy.com/uploads/default-profile.png",
        "createdAt": "2025-05-27T19:21:07.826Z",
        "passwordChangedAt": "2025-06-25T20:14:43.043Z",
        "passwordResetCode": "5acd13c3e49a2d24031bde00a264ca8721f5f3115e904d30bb1bc69f2c857a6f",
        "passwordResetExpires": "2025-06-21T20:28:49.702Z",
        "resetCodeVerified": false
*/

// Profile response
declare type ProfileResponse = {
  message: string;
  user: User;
};

// Change password fields
declare type ChangePasswordFields = {
  password: string;
  newPassword: string;
};

// Change password response
declare type ChangePasswordResponse = {
  message: string;
  token: string;
};