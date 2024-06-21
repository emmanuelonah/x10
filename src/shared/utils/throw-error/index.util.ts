export function throwError<OptionsValues>(
  name: string,
  message: string,
  constructor?: Function,
  options?: Record<string, OptionsValues>
) {
  const error = new Error();
  error.name = name.concat(' 🚨');
  error.message = message;

  Error.captureStackTrace?.(error, constructor);
  if (options) Object.assign(error, options);
  throw error;
}
