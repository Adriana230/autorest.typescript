export interface ErrorResponseOutput {
  /** The error object. */
  error: ErrorModelOutput;
}

export interface ErrorModelOutput {
  /** One of a server-defined set of error codes. */
  code: string;
  /** A human-readable representation of the error. */
  message: string;
  /** The target of the error. */
  target?: string;
  details: Array<ErrorModelOutput>;
  /** An object containing more specific information about the error. As per Microsoft One API guidelines - https://github.com/Microsoft/api-guidelines/blob/vNext/Guidelines.md#7102-error-condition-responses. */
  innererror?: InnerErrorOutput;
}

export interface InnerErrorOutput {
  /** One of a server-defined set of error codes. */
  code: string;
  /** An object containing more specific information about the error. As per Microsoft One API guidelines - https://github.com/Microsoft/api-guidelines/blob/vNext/Guidelines.md#7102-error-condition-responses. */
  innererror?: InnerErrorOutput;
}

export interface OutputModelOutput {
  /** Represents the days of the week using a standard, non-string enum. */
  Day:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
  /** Required string enum value. */
  Language: "English" | "Spanish" | "Mandarin" | "Undocumented";
}

export interface RoundTripModelOutput {
  /** Represents the days of the week using a standard, non-string enum. */
  Day:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
  /** Required string enum value. */
  Language: "English" | "Spanish" | "Mandarin" | "Undocumented";
}
