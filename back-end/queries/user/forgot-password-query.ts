import nodemailer from "nodemailer";
import { Request, Response } from "express";
import { UserModel } from "../../db";

const isEmailValid = async (email: string) => {
  const result = UserModel.findOne({ email: email });
  return result;
};

export const forgorPasswordQuery = async (req: Request, res: Response) => {
  const { email } = req.body;

  // const randomNumber = Math.floor(Math.random() * 10000);
  // console.log(randomNumber);

  const randomFourDigitNumber = Math.floor(1000 + Math.random() * 9000);
  console.log(randomFourDigitNumber);

  const isUser = await isEmailValid(email);

  if (!isUser) {
    throw new Error("Email is wrong");
  }

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "bbaatarnya@gmail.com",
      pass: "omjp ebhd xwjn ykgh",
    },
  });

  const options = {
    from: "bbaatarnya@gmail.com",
    to: "baatarnyamganbold@gmail.com",
    subject: "Hello it's your One time password",
    Number: randomFourDigitNumber,
  };

  await transporter.sendMail(options);

  //   await transporter.sendMail(options, (error, info) => {
  //     if (error) {
  //       console.error("Error sending email: ", error);
  //     } else {
  //       console.log("Email sent: ", info.response);
  //     }
  //   });

  return "success";
};

// 1. 4 orontoi too generate hiih
// 2. inputees orj ireh too generate hiisen too taarch bga esehiig shalgah
// 3. password iig update hiih
