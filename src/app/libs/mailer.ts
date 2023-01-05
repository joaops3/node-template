import nodemailer from "nodemailer";
import handlebars from "handlebars";
import path from "path";
import fs from "fs";
import { promisify } from "util";
import dotenv from "dotenv";

dotenv.config();

export const transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

export const sendEmail = async (to: string, from: string, subject: string, variables: Object) => {
  const file = fs.readFileSync(path.resolve(__dirname, "..", "resources", "views", "email.hbs"), "utf-8").toString();
  const template = handlebars.compile(file);

  const html = template(variables);

  let mailOptions = {
    from: from, // sender address
    to: to, // list of receivers
    subject: subject, // Subject line
    html: html,
  };

  const message = transporter.sendMail(mailOptions, (err) => {
    if (err) {
      console.log(err);
    }
  });
};
