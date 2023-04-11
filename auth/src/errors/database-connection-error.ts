import { BaseError } from "./base-error";

export class DatabaseConnectionError extends BaseError {
  statusCode = 500;
  reason = "Failed to connect to database";
  constructor() {
    super("Database Connection Error");

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.reason,
      },
    ];
  }
}
