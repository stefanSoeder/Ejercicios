const isOver16 = (dateOfBirth) => {
  // Ensure birthDate is a Date object
  if (!(dateOfBirth instanceof Date)) {
    dateOfBirth = new Date(dateOfBirth);
  }

  // Calculate the difference in milliseconds between now and 16 years ago
  const now = new Date();
  const sixteenYearsAgo = new Date(
    now.getFullYear() - 16,
    now.getMonth(),
    now.getDate()
  );

  // Compare birthDate with the threshold. User is over 16 if
  // their birthdate is earlier than sixteenYearsAgo
  return dateOfBirth <= sixteenYearsAgo;
};
const userBirthDate = new Date("1995-06-15");
if (isOver16(userBirthDate)) {
  return 200;
} else {
  console.log("User is not over 16 years old.");
}
