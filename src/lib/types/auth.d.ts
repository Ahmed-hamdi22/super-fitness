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

declare type ForgotPasswordFields = {
  email: string;
};

declare type ForgotPasswordResponse = {
  message: string;
  info: string;
};

declare type NewPasswordFields = {
  email: string;
  newPassword:string
};

declare type NewPasswordResponse = {
  email: string;
  token:string
};




// Change password response
declare type ChangePasswordResponse = {
  message: string;
  token: string;
};

// Delete account response
declare type DeleteAccountResponse = {
  message: string;
};

// Upload photo fields
declare type UploadPhotoFields = {
  photo: File;
};

// Upload photo response
declare type UploadPhotoResponse = {
  message: string;
};