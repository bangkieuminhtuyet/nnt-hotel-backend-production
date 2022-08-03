require('dotenv').config();
const nodemailer = require('nodemailer');
const email = require('./confirmEmailTemplate');

const sendEmailConfirmCode = async (receiverEmail, code) => {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_APP,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"NNT Hotel ❤" < ${process.env.EMAIL_APP}>  `,
    to: receiverEmail, // test of receivers
    subject: `Khách sạn NNT : Xác nhận email / NNT Hotels: Confirm Email `, // Subject line
    html: email.emailCodeConfirm(code),
  });
};

const sendReceptionAcceptEmail = async (emailObject) => {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_APP,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"NNT Hotel ❤" < ${process.env.EMAIL_APP}>  `,
    to: emailObject.CustomerEmail, // test of receivers
    subject: `Đặt phòng thành công: Khách hàng ${emailObject.CustomerName} / Booking successful: Customer ${emailObject.CustomerName} `, // Subject line
    html: email.emailBookingSuccess(emailObject),
  });
};

const sendReceptionRejectEmail = async (emailAddress, phoneArray) => {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_APP,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"NNT Hotel ❤" < ${process.env.EMAIL_APP}>  `,
    to: emailAddress, // list of receivers
    subject: `Đặt phòng không thành công / Booking failed !`, // Subject line
    html: email.emailBookingFail(phoneArray),
  });
};

const sendNewBooking = async (receiverEmail, bookingInfo) => {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_APP,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"NNT Hotel ❤" < ${process.env.EMAIL_APP}>  `,
    to: process.env.EMAIL_APP, // test of receivers
    subject: `KHÁCH ĐẶT PHÒNG : ${bookingInfo.CustomerName} - ${bookingInfo.CustomerPhone}`, // Subject line
    html: email.emailNewBooking(bookingInfo),
  });
};

const sendNewQuestions = async (receiverEmail, questionObject) => {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_APP,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"NNT Hotel ❤" < ${process.env.EMAIL_APP}>  `,
    to: process.env.EMAIL_APP, // test of receivers
    subject: `CÂU HỎI, LỜI NHẮN KHÁCH HÀNG : ${questionObject.name} - ${questionObject.phone}`, // Subject line
    html: email.emailNewQuestion(questionObject),
  });
};

module.exports = {
  sendEmailConfirmCode,
  sendReceptionAcceptEmail,
  sendReceptionRejectEmail,
  sendNewBooking,
  sendNewQuestions,
};
