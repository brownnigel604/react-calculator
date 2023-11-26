const CheckNumLength = (numInput) => {
  const strInput = numInput.toString();

  // 10 character length
  if (strInput.length > 10) {
    return strInput.slice(0, 10);
  }

  return numInput;
};

export default CheckNumLength;
