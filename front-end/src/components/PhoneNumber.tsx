import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneNumberValidation = (props: any) => {
  const { name, onchange } = props;
  const [phoneNumber, setPhoneNumber] = useState("");
  // const [name, setName] = useState();
  const [valid, setValid] = useState(true);

  const handleNumber = (value: any) => {
    setPhoneNumber(value);

    setValid(validatePhoneNumber(value));
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
          onChange={handleNumber}
          inputProps={{
            name: { name },
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
