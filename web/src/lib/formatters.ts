export function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  const sanitized = digits.length > 11 ? digits.slice(digits.length - 11) : digits;

  if (sanitized.length <= 2) {
    return sanitized;
  }

  if (sanitized.length <= 6) {
    return `(${sanitized.slice(0, 2)}) ${sanitized.slice(2)}`;
  }

  return `(${sanitized.slice(0, 2)}) ${sanitized.slice(2, 7)}-${sanitized.slice(7)}`;
}
