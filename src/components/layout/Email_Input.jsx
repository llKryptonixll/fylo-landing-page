const Email_Input = ({ email, handleEmailChange, placeholderText, borderStyle, isValid }) => {
  return (
    <input
      className={`${borderStyle} ${isValid ? "border-very_dark_blue" : "border-red-500"} placeholder:text-light_gray shadow-xl text-sm h-full flex-1 px-4 flex-shrink min-h-10 w-full`}
      aria-label="Your Email Address"
      value={email}
      onChange={handleEmailChange}
      placeholder={placeholderText}
      type="email"
    />
  );
};

export default Email_Input;
