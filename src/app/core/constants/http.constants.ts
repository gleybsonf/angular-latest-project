export const HTTP_CONSTANTS = {
  /** Códigos que devem disparar o tratamento de erro genérico */
  GENERIC_ERROR_CODES: [
    400, // Bad Request
    404, // Not Found
    500, // Internal Server Error
    502, // Bad Gateway
    503, // Service Unavailable
    504, // Gateway Timeout
  ],

  TIMEOUT_MS: 30000,

  RETRY_ATTEMPTS: 3,
};
