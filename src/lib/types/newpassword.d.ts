declare type SuccessfulNewPassword = {
  message: "success";
  info: string;
};

declare type NewPasswordErrorResponse = {
  error: string;
};

declare type NewPasswordResponse =
  | SuccessfulNewPassword
  | NewPasswordErrorResponse;
