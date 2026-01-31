interface ApiError {
  response?: {
    data?: {
      message?: string;
    };
  };
}

export function getErrorMessage(
  error: unknown,
  defaultMessage: string
): string {
  if (error instanceof Error && "response" in error) {
    const apiError = error as ApiError;
    return apiError.response?.data?.message || defaultMessage;
  }
  return defaultMessage;
}
