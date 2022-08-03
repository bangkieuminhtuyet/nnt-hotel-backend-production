const dotenv = require('dotenv');
dotenv.config();

const emailCodeConfirm = (code) => {
  return `<!DOCTYPE html>
  <html>
    <head>
      <title></title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <style type="text/css">
        
        /* CLIENT-SPECIFIC STYLES */
        body,
        table,
        td,
        a {
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
  
        table,
        td {
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
        }
  
        img {
          -ms-interpolation-mode: bicubic;
        }
  
        /* RESET STYLES */
        img {
          border: 0;
          height: auto;
          line-height: 100%;
          outline: none;
          text-decoration: none;
        }
  
        table {
          border-collapse: collapse !important;
        }
  
        body {
          height: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
        }
  
        /* iOS BLUE LINKS */
        a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: none !important;
          font-size: inherit !important;
          font-family: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
        }
  
        /* MOBILE STYLES */
        @media screen and (max-width: 600px) {
          h1 {
            font-size: 32px !important;
            line-height: 32px !important;
          }
        }
  
        /* ANDROID CENTER FIX */
        div[style*='margin: 16px 0;'] {
          margin: 0 !important;
        }
      </style>
    </head>
  
    <body
      style="
        background-color: #f4f4f4;
        margin: 0 !important;
        padding: 0 !important;
      "
    >
      <!-- HIDDEN PREHEADER TEXT -->
      <div
        style="
          display: none;
          font-size: 1px;
          color: #fefefe;
          line-height: 1px;
          font-family: 'Lato', Helvetica, Arial, sans-serif;
          max-height: 0px;
          max-width: 0px;
          opacity: 0;
          overflow: hidden;
        "
      >
        Mã xác nhận của quý khách là ${code} / Your verification code is ${code}<br/>
      </div>
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <!-- LOGO -->
        <tr>
          <td bgcolor="#365d6e" align="center">
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="100%"
              style="max-width: 600px"
            >
              <tr>
                <td
                  align="center"
                  valign="top"
                  style="padding: 40px 10px 40px 10px"
                >
                <img style="width: 140px;
              height: 100px;
              object-fit: cover;" src="https://i.ibb.co/VBgXCH9/nnt-logo.png" alt="">
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td bgcolor="#365d6e" align="center" style="padding: 0px 10px 0px 10px">
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="100%"
              style="max-width: 600px"
            >
              <tr>
                <td
                  bgcolor="#ffffff"
                  align="center"
                  valign="top"
                  style="
                    padding: 40px 20px 20px 20px;
                    border-radius: 4px 4px 0px 0px;
                    color: #111111;
                    font-family: 'Lato', Helvetica, Arial, sans-serif;
                    font-size: 48px;
                    font-weight: 400;
                    line-height: 48px;
                  "
                >
                  <h1 style="font-size: 48px; font-weight: 600; color:#365d6e">
                    Xin Chào ! <br/> Welcome !
                  </h1>
                  <img
                    src="https://i.ibb.co/vkDvk75/hotel-1.png"
                    width="125"
                    height="120"
                    style="display: block; border: 0px"
                  />
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px">
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="100%"
              style="max-width: 600px"
            >
              <tr>
                <td
                  bgcolor="#ffffff"
                  align="left"
                  style="
                    padding: 20px 30px 40px 30px;
                    color: #666666;
                    font-family: 'Lato', Helvetica, Arial, sans-serif;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 25px;
                  "
                >
                  <p style="margin: 0;">
                    <b><i style="color:#365d6e">Xin cảm ơn quý khách đã thực hiện đặt phòng tại NNT Hotel.</i></b>
                    <br/>
                    <b><i style="color:#365d6e">Thank you for making a reservation at NNT Hotel.</i></b>
                    <br/>Quý khách vui lòng nhập mã code phía dưới để hoàn tất xác thực Email. 
                    <br/>Please enter the code below to complete email verification.
                  </p>
                </td>
              </tr>
              <tr>
                <td bgcolor="#ffffff" align="left">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td
                        bgcolor="#ffffff"
                        align="center"
                        style="padding: 20px 30px 60px 30px"
                      >
                        <table border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td
                              align="center"
                              style="border-radius: 3px"
                              bgcolor="#365d6e"
                            >
                              <p
                                style="
                                  font-size: 30px;
                                  letter-spacing: 3px;
                                  font-weight: 700;
                                  margin:0;
                                  font-family: Helvetica, Arial, sans-serif;
                                  color: #ffffff;
                                  text-decoration: none;
                                  color: #ffffff;
                                  text-decoration: none;
                                  padding: 15px 25px;
                                  border-radius: 2px;
                                  border: 1px solid #365d6e;
                                  display: inline-block;
                                "
                                >${code}</a
                              >
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <!-- COPY -->
              <tr>
                <td
                  bgcolor="#ffffff"
                  align="left"
                  style="
                    padding: 0px 30px 0px 30px;
                    color: #666666;
                    font-family: 'Lato', Helvetica, Arial, sans-serif;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 25px;
                  "
                >
                  <p style="margin: 0">
                    Mã code chỉ có hiệu lực trong vòng 100s. Sau 100s Quý khách vui lòng nhấn nút "Gửi lại" để nhận mã xác nhận mới.
                    <br/>
                    The code is only valid for 100 seconds. After 100s, please press the "Resend" button to receive a new confirmation code.
                  </p>
                </td>
              </tr>
              <!-- COPY -->
              
             
              <tr>
                <td
                  bgcolor="#ffffff"
                  align="left"
                  style="
                    padding: 10px 30px 40px 30px;
                    border-radius: 0px 0px 4px 4px;
                    color: #666666;
                    font-family: 'Lato', Helvetica, Arial, sans-serif;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 25px;
                  "
                >
                <p style="margin: 0,">Trân trọng, xin cảm ơn.
                <br />
                Sincerely, thank you.
                <br/>
                <b style="color: #365d6e"><i>Khách sạn NNT / NNT Hotels</i></b>
                </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
};

const emailBookingSuccess = (emailObject) => {
  const customerNumberLine = () => {
    const { ChildrenNumber, AdultNumber } = emailObject;
    if (ChildrenNumber) {
      return `${AdultNumber} người lớn / adults - ${ChildrenNumber} trẻ em / children`;
    } else {
      return `${AdultNumber} người lớn / adults`;
    }
  };
  {
    /* <li>Ngày Check In : <b>20/02/2022 - 15:34</b></li> */
  }
  const printDateTimeBooked = () => {
    const { CheckInDate, CheckInTime, CheckOutDate, StayType } = emailObject;
    switch (StayType) {
      case 'NG':
        return `<li>Ngày Check In / Check in date : <b>${CheckInDate}</b> Giờ / Time: <b>${CheckInTime.slice(
          0,
          5
        )}</b></li>`;
      case 'ND':
        return `<li>Ngày Check In / Check in date : <b>${CheckInDate}</b> Giờ / Time: <b>21:00</b></li>`;
      case 'NND':
        return `<li>Ngày Nhận phòng / Check in date : <b>${CheckInDate}</b> Giờ / Time: <b> 14:00</b></li>
        <li>Ngày Trả phòng / Check out date : <b>${CheckOutDate}</b> Giờ / Time: <b>12:00</b></li>
        `;
    }
  };
  const printBookedRoom = () => {
    const roomBookedList = JSON.parse(emailObject.RoomBookedList);
    let newArr = [];
    roomBookedList.forEach((item) => {
      newArr.push(`${item.numberBook} ${item.roomName}`);
    });
    return newArr.join(', ');
  };
  return `<!DOCTYPE html>
  <html>
    <head>
      <title></title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <style type="text/css">
        
        /* CLIENT-SPECIFIC STYLES */
        body,
        table,
        td,
        a {
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
  
        table,
        td {
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
        }
  
        img {
          -ms-interpolation-mode: bicubic;
        }
        .im {
          color: #000000 !important;
       }
        /* RESET STYLES */
        img {
          border: 0;
          height: auto;
          line-height: 100%;
          outline: none;
          text-decoration: none;
        }
  
        table {
          border-collapse: collapse !important;
        }
  
        body {
          height: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
        }
  
        /* iOS BLUE LINKS */
        a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: none !important;
          font-size: inherit !important;
          font-family: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
        }
  
        /* MOBILE STYLES */
        @media screen and (max-width: 600px) {
          h1 {
            font-size: 32px !important;
            line-height: 32px !important;
          }
        }
  
        /* ANDROID CENTER FIX */
        div[style*='margin: 16px 0;'] {
          margin: 0 !important;
        }
      </style>
    </head>
  
    <body
      style="
        background-color: #f4f4f4;
        margin: 0 !important;
        padding: 0 !important;
      "
    >
      <!-- HIDDEN PREHEADER TEXT -->
      <div
        style="
          display: none;
          font-size: 1px;
          color: #fefefe;
          line-height: 1px;
          font-family: 'Lato', Helvetica, Arial, sans-serif;
          max-height: 0px;
          max-width: 0px;
          opacity: 0;
          overflow: hidden;
        "
      >
        Mã đặt phòng của quý khách là ${
          emailObject.BookingCode
        } / Your reservation code is ${emailObject.BookingCode}<br/>
      </div>
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <!-- LOGO -->
        <tr>
          <td bgcolor="#365d6e" align="center">
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="100%"
              style="max-width: 600px"
            >
              <tr>
                <td
                  align="center"
                  valign="top"
                  style="padding: 40px 10px 40px 10px"
                >
                <img style="width: 140px;
              height: 100px;
              object-fit: cover;" src="https://i.ibb.co/VBgXCH9/nnt-logo.png" alt="">
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td bgcolor="#365d6e" align="center" style="padding: 0px 10px 0px 10px">
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="100%"
              style="max-width: 600px"
            >
              <tr>
                <td
                  bgcolor="#ffffff"
                  align="center"
                  valign="top"
                  style="
                    padding: 40px 20px 20px 20px;
                    border-radius: 4px 4px 0px 0px;
                    color: #111111;
                    font-family: 'Lato', Helvetica, Arial, sans-serif;
                    font-size: 48px;
                    font-weight: 400;
                    line-height: 48px;
                  "
                >
                  <h1 style="font-size: 44px; font-weight: 600; color:#00b100">
                    Đặt phòng thành công !
                    <br/>
                    Booking successful !
                  </h1>
                  <img
                    src="https://i.ibb.co/bzzJ6H5/check.png"
                    width="125"
                    height="120"
                    style="display: block; border: 0px"
                  />
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px">
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="100%"
              style="max-width: 600px"
            >
              <tr>
                <td
                  bgcolor="#ffffff"
                  align="left"
                  style="
                    padding: 20px 30px 40px 30px;
                    color: #666666;
                    font-family: 'Lato', Helvetica, Arial, sans-serif;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 25px;
                  "
                >
                  <p style="margin: 0;">
                    <b><i style="color:#365d6e">Xin cảm ơn quý khách đã thực hiện đặt phòng tại NNT Hotel.</i></b>
                    <b><i style="color:#365d6e">Thank you for making a reservation at NNT Hotel.</i></b>
                    <br/>
                    Thông tin đặt phòng của quý khách : 
                    <br/>
                    Your booking information :
                    <ul style="font-size: 16px; line-height: 24px; ">
                      <li>Tên khách / Your Name : <b>${
                        emailObject.CustomerName
                      }</b></li>
                      <li>Số điện thoại / Your phone : <b>${
                        emailObject.CustomerPhone
                      }</b></li>
                      <li>Email : <b>${emailObject.CustomerEmail}</b></li>
                      <li>Số người / Amount of people : <b>${customerNumberLine()}</b></li>
                      ${printDateTimeBooked()}
                      <li>Hạng Phòng / Room type : <b>${printBookedRoom()}</b></li>
                      <li>Ghi chú / Note for hotel : <b>${
                        emailObject.NoteForHotel || ''
                      }</b></li>
                      <li>Mã đặt phòng / Booking code: </li>
                    </ul>
                     
                  </p>
                </td>
              </tr>
              <tr>
                <td bgcolor="#ffffff" align="left">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td
                        bgcolor="#ffffff"
                        align="center"
                        style="padding: 0 30px 60px 30px"
                      >
                        <table border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td
                              align="center"
                              style="border-radius: 3px"
                              bgcolor="#00b100"
                            >
                              <p
                                style="
                                  font-size: 30px;
                                  letter-spacing: 3px;
                                  font-weight: 700;
                                  margin:0;
                                  font-family: Helvetica, Arial, sans-serif;
                                  color: #ffffff;
                                  text-decoration: none;
                                  text-decoration: none;
                                  padding: 15px 25px;
                                  border-radius: 2px;
                                  border: 1px solid #00b100;
                                  display: inline-block;
                                "
                                >${emailObject.BookingCode}</a
                              >
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <!-- COPY -->
              <tr>
                <td
                  bgcolor="#ffffff"
                  align="left"
                  style="
                    padding: 0px 30px 0px 30px;
                    color: #666666;
                    font-family: 'Lato', Helvetica, Arial, sans-serif;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 25px;
                  "
                >
                  <p style="margin: 0">
                   Quý khách vui lòng đến đúng giờ để được hỗ trợ nhận phòng.  Khách sạn xin phép chỉ giữ phòng không quá 15 phút sau giờ nhận phòng đã đặt.
                   <br/>
                   Chúc quý khách có những giây phút hạnh phúc bên người thân tại khách sạn NNT.
                   <br/>
                   Please arrive on time for check-in assistance. The hotel asks for permission to only keep the room no more than 15 minutes after the booked check-in time.
                    <br/>
                    Wish you have happy moments with your loved ones at NNT hotel.
                  </p>
                </td>
              </tr>
              <!-- COPY -->
              
             
              <tr>
                <td
                  bgcolor="#ffffff"
                  align="left"
                  style="
                    padding: 10px 30px 40px 30px;
                    border-radius: 0px 0px 4px 4px;
                    color: #666666;
                    font-family: 'Lato', Helvetica, Arial, sans-serif;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 25px;
                  "
                >
                <p style="margin: 0,">Trân trọng, xin cảm ơn.
                <br />
                Sincerely, thank you.
                <br/>
                <b style="color: #365d6e"><i>Khách sạn NNT / NNT Hotels</i></b>
                </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>`;
};

const emailBookingFail = (phoneArray) => {
  const printPhoneList = () => {
    let data = phoneArray.map((item) => {
      return `<li style="display:block;height: 50px; line-height: 50px;">
          <b>${item.name}</b>: <a href="tel:${item.phone}">${item.phone}</a>
        </li>`;
    });
    return data.join('');
  };
  return `<!DOCTYPE html>
  <html>
    <head>
      <title></title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <style type="text/css">
        
        /* CLIENT-SPECIFIC STYLES */
        body,
        table,
        td,
        a {
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
  
        table,
        td {
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
        }
  
        img {
          -ms-interpolation-mode: bicubic;
        }
        .im {
          color: #000000 !important;
       }
        /* RESET STYLES */
        img {
          border: 0;
          height: auto;
          line-height: 100%;
          outline: none;
          text-decoration: none;
        }
  
        table {
          border-collapse: collapse !important;
        }
  
        body {
          height: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
        }
  
        /* iOS BLUE LINKS */
        a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: none !important;
          font-size: inherit !important;
          font-family: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
        }
  
        /* MOBILE STYLES */
        @media screen and (max-width: 600px) {
          h1 {
            font-size: 32px !important;
            line-height: 32px !important;
          }
        }
  
        /* ANDROID CENTER FIX */
        div[style*='margin: 16px 0;'] {
          margin: 0 !important;
        }
      </style>
    </head>
  
    <body
      style="
        background-color: #f4f4f4;
        margin: 0 !important;
        padding: 0 !important;
      "
    >
      <!-- HIDDEN PREHEADER TEXT -->
      <div
        style="
          display: none;
          font-size: 1px;
          color: #fefefe;
          line-height: 1px;
          font-family: 'Lato', Helvetica, Arial, sans-serif;
          max-height: 0px;
          max-width: 0px;
          opacity: 0;
          overflow: hidden;
        "
      >
        Đặt phòng không thành công ! Booking failed !
      </div>
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <!-- LOGO -->
        <tr>
          <td bgcolor="#365d6e" align="center">
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="100%"
              style="max-width: 600px"
            >
              <tr>
                <td
                  align="center"
                  valign="top"
                  style="padding: 40px 10px 40px 10px"
                >
                <img style="width: 140px;
              height: 100px;
              object-fit: cover;" src="https://i.ibb.co/VBgXCH9/nnt-logo.png" alt="">
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td bgcolor="#365d6e" align="center" style="padding: 0px 10px 0px 10px">
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="100%"
              style="max-width: 600px"
            >
              <tr>
                <td
                  bgcolor="#ffffff"
                  align="center"
                  valign="top"
                  style="
                    padding: 40px 20px 20px 20px;
                    border-radius: 4px 4px 0px 0px;
                    color: #111111;
                    font-family: 'Lato', Helvetica, Arial, sans-serif;
                    font-size: 48px;
                    font-weight: 400;
                    line-height: 48px;
                  "
                >
                  <h1 style="font-size: 36px; font-weight: 600; color:#e24c4b">
                    Đặt phòng không thành công !
                    Booking failed !
                  </h1>
                  <img
                    src="https://i.ibb.co/vH9B5S3/warning.png"
                    width="125"
                    height="120"
                    style="display: block; border: 0px"
                  />
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px">
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="100%"
              style="max-width: 600px"
            >
              <tr>
                <td
                  bgcolor="#ffffff"
                  align="left"
                  style="
                    padding: 20px 30px 40px 30px;
                    color: #666666;
                    font-family: 'Lato', Helvetica, Arial, sans-serif;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 25px;
                  "
                >
                  <p style="margin: 0;">
                    <b><i style="color:#365d6e">Xin cảm ơn quý khách đã thực hiện đặt phòng tại NNT Hotel.</i></b>
                    <b><i style="color:#365d6e">Thank you for making a reservation at NNT Hotel.</i></b>                 
                    <br/>
                    Hiện tại không có phòng phù hợp với yêu cầu của quý khách còn trống. 
                    <br/>
                    There are currently no available rooms that match your request.
                  </p>
                </td>
              </tr>
              
              <!-- COPY -->
              <tr>
                <td
                  bgcolor="#ffffff"
                  align="left"
                  style="
                    padding: 0px 30px 0px 30px;
                    color: #666666;
                    font-family: 'Lato', Helvetica, Arial, sans-serif;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 25px;
                  "
                >
                  <p style="margin: 0">
                   Quý khách vui lòng liên hệ trực tiếp với bộ phận lễ tân tại khách sạn để được hỗ trợ đặt lại qua website : <a href="https://nnthotel.vn">nnthotel.vn</a> hoặc số điện thoại lễ tân : 
                   <br/>
                   Please contact the hotel reception directly for assistance with rebooking via website: <a href="https://nnthotel.vn">nnthotel.vn</a> or phone number receptionist :
                   <br/>
                   <ul>
                   ${printPhoneList()}
                   </ul>
                  </p>
                </td>
              </tr>
              <!-- COPY -->
              
             
              <tr>
                <td
                  bgcolor="#ffffff"
                  align="left"
                  style="
                    padding: 10px 30px 40px 30px;
                    border-radius: 0px 0px 4px 4px;
                    color: #666666;
                    font-family: 'Lato', Helvetica, Arial, sans-serif;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 25px;
                  "
                >
                  <p style="margin: 0,">Trân trọng, xin cảm ơn.
                  <br />
                  Sincerely, thank you.
                  <br/>
                  <b style="color: #365d6e"><i>Khách sạn NNT / NNT Hotels</i></b></p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>`;
};

const emailNewBooking = (bookingInfo) => {
  const printDateTimeBooked = () => {
    const { CheckInDate, CheckInTime, CheckOutDate, StayType } = bookingInfo;
    switch (StayType) {
      case 'NG':
        return `<li><h3>Ngày Check In / Check in date : <b>${CheckInDate}</b> Giờ / Time: <b>${CheckInTime.slice(
          0,
          5
        )}</b></h3></li>`;
      case 'ND':
        return `<li><h3>Ngày Check In / Check in date : <b>${CheckInDate}</b> Giờ / Time: <b>21:00</b></h3></li>`;
      case 'NND':
        return `<li><h3>Ngày Nhận phòng / Check in date : <b>${CheckInDate}</b> Giờ / Time: <b> 14:00</b></h3></li>
        <li><h3>Ngày Trả phòng / Check out date : <b>${CheckOutDate}</b> Giờ / Time: <b>12:00</b></h3></li>
        `;
    }
  };
  const printStayType = () => {
    switch (bookingInfo.StayType) {
      case 'NG':
        return 'Nghỉ Giờ';
      case 'ND':
        return 'Nghỉ Đêm';
      case 'NND':
        return 'Nghỉ Ngày Đêm';
    }
  };

  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Khách hàng đặt phòng</title>
        <style>
        h1{
          color: red;
      }
      a{
        font-weight: bold;
        cursor: pointer;
    }
        </style>
      </head>
      <body>
        <h1>Khách hàng đặt phòng</h1>
        <h2>Thông tin khách hàng :</h2>
        <ul>
          <li><h3>Khách sạn : ${bookingInfo.CustomerName}</h3></li>
          <li><h3>Tên khách : ${bookingInfo.HotelName}</h3></li>
          <li><h3>Email : ${bookingInfo.CustomerEmail}</h3></li>
          <li><h3>Số điện thoại : ${bookingInfo.CustomerPhone}</h3></li>
          <li><h3>Hình thức nghỉ : ${printStayType()}</h3></li>
            ${printDateTimeBooked()}
        </ul>
        <h4>Anh em lễ tân , quản lý mở erp ra để check khách !</h3>
        <a href="https://nnthotel.vn/erp"><h2>Link NNT ERP</h2></a>
      </body>
    </html>
    `;
};

const emailNewQuestion = (questionObject) => {
  const { name, phone, email, message } = questionObject;
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Khách gửi câu hỏi</title>
      <style>
          h1{
              color: green;
          }
          a.button{
              cursor: pointer;
              font-weight: bold;
          }
      </style>
    </head>
    <body>
      <h1>Khách hàng gửi câu hỏi! </h1>
      <h2>Thông tin câu hỏi :</h2>
      <ul>
        <li><h3>Tên khách : ${name}</h3></li>
        <li><h3>Email :  ${email}</h3></li>
        <li><h3>Số điện thoại :  ${phone}</h3></li>
        <li><h3>Câu hỏi :  ${message}</h3></li>
      </ul>
      <h4>Anh em lễ tân , quản lý mở erp ra để check khách !</h3>
          <a class='button' href="https://nnthotel.com/erp">Link NNT ERP</a>
    </body>
  </html>
  `;
};

module.exports = {
  emailCodeConfirm,
  emailBookingSuccess,
  emailBookingFail,
  emailNewBooking,
  emailNewQuestion,
};
