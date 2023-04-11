import { BaseError } from "./base-error";

export class NotFoundError extends BaseError {
  statusCode = 404;
  reason = "The desired endpoint does not exists";
  constructor() {
    super("Page Not Error");

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.reason,
      },
    ];
  }
}
