export const validateRegisterForm = (form) => {
  const name = form.name.trim();
  const phone = form.phone.trim();
  const email = form.email.trim();
  const password = form.password;

  if (!name) return "Full Name is required";
  if (!phone) return "Phone Number is required";
  if (!email) return "Email Address is required";
  if (!password) return "Password is required";

  // Phone validation (10 digits)
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone)) return "Phone number must be exactly 10 digits";

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return "Please enter a valid email address";

  // Password length
  if (password.length < 6) return "Password must be at least 6 characters";

  return ""; // no error
};
