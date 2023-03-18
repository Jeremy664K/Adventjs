function checkPart(part) {
  const checkIsPalindrome = (part) => {
    const partToArray = part.split("");
    const compareReversePart = partToArray.reverse().join("");
    return part === compareReversePart;
  };

  const IS_PALINDROME = true;

  if (checkIsPalindrome(part)) return IS_PALINDROME;

  for (const letter of part) {
    const newPart = part.replace(letter, "");
    if (checkIsPalindrome(newPart)) return IS_PALINDROME;
  }

  return !IS_PALINDROME;
}
