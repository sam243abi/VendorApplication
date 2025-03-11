
export const handlePhoneNumberChange = (text) => {
  return text.replace(/[^0-9]/g, "");
};

export const handleOtpChange = (index, value, otp, setOtp, setError, inputRefs) => {
    if (/^[0-9]$/.test(value) || value === "") { // Allow only numeric input or empty string
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      setError(false); // Clear the error when input is valid
  
      // Automatically focus the next input if value is not empty
      if (value !== "" && index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };