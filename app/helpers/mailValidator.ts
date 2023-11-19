export function validateEmail(mail: string) {
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(mail)) {
    return true;
  }
  return false;
}
