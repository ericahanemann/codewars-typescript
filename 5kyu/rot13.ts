// How can you tell an extrovert from an introvert at NSA?
// Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

// I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
// According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

// For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

// Test examples:

// "EBG13 rknzcyr." -> "ROT13 example."

// "This is my first ROT13 excercise!" -> "Guvf vf zl svefg EBG13 rkprepvfr!"

function rot13(str: string): string {
  const alphabet: string = "abcdefghijklmnopqrstuvwxyz";

  return str.replace(/[a-zA-Z]/g, (char) => {
    if (alphabet.includes(char.toLowerCase())) {
      let charToReplacePosition: number =
        alphabet.indexOf(char.toLowerCase()) + 13;
      charToReplacePosition =
        charToReplacePosition > 25
          ? (charToReplacePosition -= 26)
          : charToReplacePosition;

      let charToReplace: string = alphabet.charAt(charToReplacePosition);
      charToReplace =
        char === char.toUpperCase()
          ? charToReplace.toUpperCase()
          : charToReplace;

      return charToReplace;
    }

    return char;
  });
}
