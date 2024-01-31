// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

function validatePin(pin: string): boolean {
  if (pin.length === 4 || pin.length === 6) {
    if (/^\d+$/.test(pin)) {
      return true;
    }
  }
  return false;
}
