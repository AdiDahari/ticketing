import { ValidationError } from "express-validator";
import { BaseError } from "./base-error";

export class RequestValidationError extends BaseError {
  statusCode = 400;
  constructor(public errors: ValidationError[]) {
    super("Request Validation Error");

    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map((error) => ({
      message: error.msg,
      field: error.param,
    }));
  }
}
