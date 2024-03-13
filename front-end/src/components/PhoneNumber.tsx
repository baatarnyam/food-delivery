import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneNumberValidation = (props: any) => {
  const { onchange, num } = props;
  const [phoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(true);

  const handleChange = (number: string) => {
    setPhoneNumber(number);
    // console.log(number);

    setValid(validatePhoneNumber(number));
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;

    return phoneNumberPattern.test(phoneNumber);
  };

  return (
    <div>
      <label>
        <PhoneInput
          country={"mn"}
          value={phoneNumber}
          onChange={handleChange}
          inputProps={{
            required: true,
          }}
          inputStyle={{
            width: "382px",
            height: "40px",
            backgroundColor: "#ECEDF0",
          }}
        />
      </label>
      {!valid && (
        <p className="text-[12px] text-red-600">
          Please enter a valid phone number.
        </p>
      )}
    </div>
  );
};

export default PhoneNumberValidation;
