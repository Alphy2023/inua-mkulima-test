import dayjs from "dayjs";
import CryptoJS from "crypto-js";
import DOMPurify from "dompurify";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

// check if age is or above i8 years and return age
export const checkAge = (date) => {
  const selectedDate = dayjs(date);
  const today = dayjs();
  const minAgeDate = today.subtract(18, "years");

  if (selectedDate.isAfter(minAgeDate)) {
    return { err: "You must be at least 18 years old." };
  } else {
    const age = today.diff(selectedDate, "years");
    return { age };
  }
};
export const modifyQuillContent = (htmlContent) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');

    // paragraph
    Array.from(doc.querySelectorAll('p')).forEach((paragraph) => {
        // Modify paragraph element
        paragraph.className = 'font-bodyFont font-medium text-[14px]';
    });
    Array.from(doc.querySelectorAll('ol')).forEach((list) => {
        list.className = 'list-decimal font-bodyFont ml-8';
    });
    Array.from(doc.querySelectorAll('ul')).forEach((list) => {
        list.className = 'list-disc font-bodyFont ml-8';
    });
    Array.from(doc.querySelectorAll('li')).forEach((list) => {
        list.className = 'ml-2 font-medium text-[14px]';
    });
    Array.from(doc.querySelectorAll('a')).forEach((anchor) => {
        anchor.className = 'underline cursor-pointer font-medium text-[14px]';
    });
    // image
    Array.from(doc.querySelectorAll('img')).forEach((image) => {
        // Modify image element
        image.className = `rounded-[10px] w-[400px] h-[300px] object-cover
        shadow-md`;
        // Add additional styling or attributes if needed
    });


    // Serialize the modified elements back to HTML
    const modifiedHtml = Array.from(doc.body.childNodes)
        .map((node) => node.outerHTML)
        .join('');
    return modifiedHtml;
};
// calculate age of a user
export const calculateAge = (birthDate) => {
  let age;
  // Parse the birthdate string into a Date object
  const birthDateObj = birthDate && new Date(birthDate);
  // Get the current date
  const currentDate = new Date();
  // Calculate the user's age
  age = currentDate?.getFullYear() - birthDateObj?.getFullYear();

  // Check if the user's birthday has occurred this year
  if (
    currentDate?.getMonth() < birthDateObj?.getMonth() ||
    (currentDate?.getMonth() === birthDateObj?.getMonth() &&
      currentDate?.getDate() < birthDateObj?.getDate())
  ) {
    age--; // Decrease the age if the birthday hasn't occurred yet
  }

  return age;
};
// diasble dates based on the passed calendar date
export const disabledDates = (current) => {
  // Disable dates after today
  if (current && current > dayjs().endOf("day")) {
    return true;
  }

  // Disable future months and years
  const currentMonth = current && current.month();
  const currentYear = current && current.year();
  const today = dayjs();
  const todayMonth = today.month();
  const todayYear = today.year();

  if (currentYear > todayYear) {
    return true; // Disable future years
  }

  if (currentYear === todayYear && currentMonth > todayMonth) {
    return true; // Disable future months in the current year
  }

  return false;
};
// format the date to DD MM YYYY
export const formatDate = (dateString) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dateObj = new Date(dateString);
  const year = dateObj.getUTCFullYear();
  const month = months[dateObj.getUTCMonth()];
  const day = dateObj.getUTCDate();

  const formattedDate = `${day} ${month} ${year}`;

  return formattedDate;
};

export const formatVideoDate = (startDate, endDate, option) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const parseDate = (dateString) => {
    return new Date(dateString);
  };

  const timeFormat = (date) => {
    // Format time as HH:MM using local time
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const dateYYYFormat = (date) => {
    // Format date as YYYY-MM-DD using local time
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  let formattedDate;
  const newStartDate = parseDate(startDate);
  const newEndDate = parseDate(endDate);
  const startYear = newStartDate.getFullYear();
  const endYear = newEndDate.getFullYear();
  const startMonth = months[newStartDate.getMonth()];
  const endMonth = months[newEndDate.getMonth()];
  const day = newStartDate.getDate();
  const endDay = newEndDate.getDate();
  const startTime = timeFormat(newStartDate);
  const endTime = timeFormat(newEndDate);

  if (dateYYYFormat(newStartDate) === dateYYYFormat(newEndDate)) {
    const formattedTime = `${startTime} - ${endTime}`;
    switch (option) {
      case "date-only":
        formattedDate = `${day} ${startMonth} ${startYear}`;
        break;
      case "time-only":
        formattedDate = `${formattedTime}`;
        break;

      default:
        formattedDate = `${day} ${startMonth} ${startYear}, ${formattedTime}`;
        break;
    }
  } else {
    const startFormat = `${day} ${startMonth} ${startYear}, ${startTime}`;
    const endFormat = `${endDay} ${endMonth} ${endYear}, ${endTime}`;
    switch (option) {
      case "date-only":
        formattedDate = `${day} ${startMonth} ${startYear} - ${day} ${endMonth} ${endYear} `;
        break;
      case "time-only":
        formattedDate = `${startTime} - ${endTime} `;
        break;

      default:
        formattedDate = `${startFormat} - ${endFormat}`;
        break;
    }
  }

  return formattedDate;
};
export const formatDateTime = (startDate,option) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const parseDate = (dateString) => {
    return new Date(dateString);
  };

  const timeFormat = (date) => {
    // Format time as HH:MM using local time
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  let formattedDate;
  const newStartDate = parseDate(startDate);
  const startYear = newStartDate.getFullYear();
  const startMonth = months[newStartDate.getMonth()];
  const day = newStartDate.getDate();
  const startTime = timeFormat(newStartDate);

  if(option && option==='date-only'){

   formattedDate = `${day} ${startMonth} ${startYear}`;
  }
  else{
    formattedDate =`${day} ${startMonth} ${startYear}, ${startTime}`;

  }
  return formattedDate;

};

export const formatDateToYYYYMMDD = (inputDate) => {
  const date = new Date(inputDate);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Add 1 to month since it's zero-based
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
export const combineHourMinutes = (hour, minutes) => {
  return `${hour}:${minutes}`;
};

// great user based on time
export const Greeting = () => {
  const hoursNow = new Date().getHours();
  let greeting = "";
  if (hoursNow >= 16) {
    greeting = "Good Evening,";
  } else if (hoursNow >= 12) {
    greeting = "Good Afternoon,";
  } else if (hoursNow >= 6) {
    greeting = "Good Morning,";
  } else {
    greeting = "Welcome";
  }
  return `Hello, ${greeting}`;
};

// resize and refine and image to a given height and width
export const resizeImage = async (img, maxWidth, maxHeight) => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const image = new Image();
    image.src = img;

    image.onload = function () {
      let width = image.width;
      let height = image.height;

      if (width > maxWidth || height > maxHeight) {
        const aspectRatio = width / height;

        if (width > maxWidth) {
          width = maxWidth;
          height = maxWidth / aspectRatio;
        }

        if (height > maxHeight) {
          height = maxHeight;
          width = maxHeight * aspectRatio;
        }
      }

      canvas.width = width;
      canvas.height = height;

      ctx.drawImage(image, 0, 0, width, height);

      // You can convert the canvas to a data URL or Blob as needed
      const resizedDataURL = canvas.toDataURL("image/png"); // Change format as needed

      resolve(resizedDataURL);
    };

    image.onerror = function (error) {
      reject(error);
    };
  });
};

// combine dates and time to string
export const combineDateAndTime = (dateString, timeString) => {
  const date = new Date(dateString);
  const timeParts = timeString.split(":");
  let hours = parseInt(timeParts[0]);
  const minutes = parseInt(timeParts[1]);
  const seconds = parseInt(timeParts[2]);

  if (hours === 24) {
    hours = 0; // Adjust hours to 0 if it is 24
  }

  date.setHours(hours);
  date.setMinutes(minutes);
  if (seconds){
    date.setSeconds(seconds);
  } 
  date.setMilliseconds(0); // Ensure milliseconds are set to 0

  return date;
};

// get time range between two dates
export const getTimeRange = (startDateString, endsDateString) => {
  const startDate = new Date(startDateString);
  const endDate = new Date(endsDateString);

  const startHours = formatTime(startDate);
  const endHours = formatTime(endDate);

  const timeRange = ` ${startHours} - ${endHours}`;

  return timeRange;
};
// format time to 24 hours system
export const formatTime = (date) => {
  const hours =
    date.getHours() === 0 ? "00" : ("0" + date.getHours()).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);

  return `${hours}:${minutes}`;
};

// function to coutdown datetime
export const countdownToDatetime = (targetDatetime) => {
  // Calculate the time difference in milliseconds
  let timeDifference = targetDatetime - new Date().getTime();

  // If the target datetime has not passed
  if (timeDifference > 0) {
    // Convert the time difference to seconds
    let seconds = Math.floor(timeDifference / 1000);

    // Calculate days, hours, minutes, and remaining seconds
    let days = Math.floor(seconds / (24 * 60 * 60));
    seconds %= 24 * 60 * 60;
    let hours = Math.floor(seconds / (60 * 60));
    seconds %= 60 * 60;
    let minutes = Math.floor(seconds / 60);
    seconds %= 60;

    // Display the countdown
    console.log(
      `Time left: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
    );

    // Update the countdown every second
    setTimeout(() => {
      countdownToDatetime(targetDatetime);
    }, 1000);
  } else {
    console.log("Countdown reached!");
  }
};

export const getDateTimeRange = (startDateString, endsDateString) => {
  const startDate = new Date(startDateString);
  const endDate = new Date(endsDateString);

  // Helper function to format time as HH:mm in 24-hour format
  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, "0"); // Ensures 2 digits for hours
    const minutes = String(date.getMinutes()).padStart(2, "0"); // Ensures 2 digits for minutes
    return `${hours}:${minutes}`;
  };

  const startHours = formatTime(startDate);
  const endHours = formatTime(endDate);

  const timeRange = `${startHours} - ${endHours}`;
  return timeRange;
};
export const sanitizeAndRenderHTML = (htmlContent)=> {
    const sanitizedHTML = DOMPurify.sanitize(htmlContent);

    return { __html: sanitizedHTML };
  }
export const shortenDate = (dateString) => {
  const date = new Date(dateString);
  // Get the different parts of the date
  const weekday = date.toLocaleDateString("en-US", { weekday: "short" }); // "Sat"
  const day = date.toLocaleDateString("en-US", { day: "2-digit" }); // "30"
  const month = date.toLocaleDateString("en-US", { month: "short" }); // "Nov"
  const year = date.toLocaleDateString("en-US", { year: "numeric" }); // "2024"

  // Format the date with a comma after the weekday
  const formattedDate = `${weekday}, ${day} ${month} ${year}`;

  return formattedDate;
};
export  const isMemberOnline = (memberId,onlineUsers) => {
  return onlineUsers?.length > 0 && onlineUsers?.some((e) => e?.id ===memberId);
};
// calculate the days btn two dates
export const calculateDaysBetween = (startDate, endDate) => {
  // Convert both dates to UTC to avoid time zone issues
  const start = new Date(startDate).setHours(0, 0, 0, 0);
  const end = new Date(endDate).setHours(0, 0, 0, 0);

  // Calculate the difference in milliseconds
  const differenceInTime = end - start;

  // Convert milliseconds to days
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);

  return differenceInDays;
};

export const generate24HourTimes = (minTime) => {
  const times = [];

  let startHour = 0;

  // If minTime is passed, calculate the next hour
  if (minTime) {
    const [minHour, minMinute] = minTime.split(":").map(Number);
    startHour = minMinute > 0 ? minHour + 1 : minHour + 1; // always move to the next hour
  }

  for (let hour = startHour; hour < 24; hour++) {
    const formattedHour = String(hour).padStart(2, "0");
    const time = `${formattedHour}:00`;

    times.push({ label: time, value: time });
  }

  return times;
};
//Reusable disabledDate function with dateA and dateB
export const disabledDate = (dateA, dateB) => {
  // Disable dates before today
  const today = dayjs(dateA).startOf("day");
  const endDate = dateB ? dayjs(dateB, "YYYY-MM-DD").endOf("day") : null;

  // Return a function to check the current date against the allowed range
  return (current) => {
    // Disable dates before today
    if (current && current < today) {
      return true;
    }
    // Disable dates after dateB (if provided)
    if (endDate && current > endDate) {
      return true;
    }
    return false; // Allow dates within the range
  };
};

export const addAnyOptionInList = (options) => {
  // Create a new "Any" option
  const anyOption = { value: "Any", label: "Any" };

  // Return a new array with "Any" at the top, followed by the existing options
  return [anyOption, ...options];
};
export const numberToWords = (num) => {
  const ones = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];

  const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  if (num < 20) {
    return ones[num];
  } else if (num < 100) {
    let tensPart = tens[Math.floor(num / 10)];
    let onesPart = num % 10 === 0 ? "" : "-" + ones[num % 10];
    return tensPart + onesPart;
  } else {
    return "Zero";
  }
};

export const convertHeight = (currentType, value, targetType) => {
  let cmValue;
  let feetValue;
  let inchesValue;
  let feetWhole;
  let feetDecimal;

  const cmToFeet = (cm) => cm / 30.48;
  const feetToCm = (feet) => Math.round(feet * 30.48);
  const inchesToCm = (inches) => Math.round(inches * 2.54);

  switch (currentType) {
    case "cm":
      cmValue = parseFloat(value);
      feetValue = cmToFeet(cmValue);
      // Separate the feet and inches parts
      feetWhole = Math.floor(feetValue);
      feetDecimal = feetValue - feetWhole;
      inchesValue = Math.round(feetDecimal * 12);
      feetValue = feetWhole;
      break;
    case 'ft-in':
      console.log('new values:',{ft:value.ft,in:value.in});
      feetValue = parseFloat(value.ft) || 0;
      inchesValue = parseFloat(value.in) || 0;
      cmValue = feetToCm(feetValue) + inchesToCm(inchesValue);
      break;

    default:
      break;
  }

  switch (targetType) {
    case "ft-in":
      return {cm:cmValue,ft:feetValue,in:inchesValue};
    case "cm":
      return {cm:cmValue};
    
    default:
      return value;
  }
};
// convert and combine height, heighttype to display 40cm,1 feet 3 cinches somthing like this
export const combineConvertedHeight = (currentType, value) => {
  let cmValue;
  let feetValue;
  let inchesValue;

  const cmToFeet = (cm) => {
    const feet = Math.floor(cm / 30.48);
    const remainingInches = Math.round((cm % 30.48) / 2.54);
    return { feet, inches: remainingInches };
  };

  const cmToInches = (cm) => {
    const totalInches = Math.round(cm / 2.54);
    const feet = Math.floor(totalInches / 12);
    const inches = totalInches % 12;
    return { feet, inches };
  };

  const feetToCm = (feet) => Math.round(feet * 30.48);
  const feetToInches = (feet) => Math.round(feet * 12);
  const inchesToCm = (inches) => Math.round(inches * 2.54);
  const inchesToFeet = (inches) => {
    const feet = Math.floor(inches / 12);
    const remainingInches = Math.round(inches % 12);
    return { feet, inches: remainingInches };
  };

  switch (currentType) {
    case "cm":
      cmValue = parseFloat(value);
      feetValue = cmToFeet(cmValue);
      inchesValue = cmToInches(cmValue);
      break;
    case "feet":
      feetValue = parseFloat(value);
      cmValue = feetToCm(feetValue);
      inchesValue = feetToInches(feetValue);
      break;
    case "inches":
      inchesValue = parseFloat(value);
      cmValue = inchesToCm(inchesValue);
      feetValue = inchesToFeet(inchesValue);
      break;

    default:
      break;
  }

  return { cm: cmValue, feet: feetValue, inches: inchesValue };
};

// format date to display  "today", "yesterday", and onwards
export const formatChatDate = (inputDate) => {
  const currentDate = new Date();
  const inputDateObj = new Date(inputDate);
  const oneDayInMillis = 24 * 60 * 60 * 1000; // One day in milliseconds

  // Check if the date is today
  if (
    inputDateObj.getFullYear() === currentDate.getFullYear() &&
    inputDateObj.getMonth() === currentDate.getMonth() &&
    inputDateObj.getDate() === currentDate.getDate()
  ) {
    return "today";
  }

  // Check if the date is yesterday
  const yesterday = new Date(currentDate - oneDayInMillis);
  if (
    inputDateObj.getFullYear() === yesterday.getFullYear() &&
    inputDateObj.getMonth() === yesterday.getMonth() &&
    inputDateObj.getDate() === yesterday.getDate()
  ) {
    return "yesterday";
  }

  // Format the date as "Wed, 12 Dec, 2023"
  const options = {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  return inputDateObj.toLocaleDateString("en-US", options);
};
export const calculateTimeDifference =(starts, ends)=> {
    const startDate = new Date(starts);
    const endDate = new Date(ends);

    const differenceInMillis = endDate - startDate;
    const differenceInMinutes = Math.floor(differenceInMillis / (1000 * 60));

    if (differenceInMinutes >= 60) {
      const hours = Math.floor(differenceInMinutes / 60);
      const remainingMinutes = differenceInMinutes % 60;
      return hours + "hr " + remainingMinutes + "min";
    } else {
      return differenceInMinutes + "min";
    }
  }

  export const getTimeDifference = (startTime, endTime) => {
    const parseTime = (timeStr) => {
      const res = timeStr && timeStr.split(":").map(Number);
      return res[0] * 60 + res[1]; // Return total minutes from midnight
    };

    const startMinutes = parseTime(startTime);
    const endMinutes = parseTime(endTime);

    const differenceInMinutes = endMinutes - startMinutes;

    if (differenceInMinutes < 0) {
      return "End time cannot be before start time";
    }

    if (differenceInMinutes >= 60) {
      const hours = Math.floor(differenceInMinutes / 60);
      const remainingMinutes = differenceInMinutes % 60;
      return `${hours}hr ${remainingMinutes}mins`;
    } else {
      return `${differenceInMinutes}mins`;
    }
  };
// get time differenc ein mniutes
export const calculateTimeDifferenceInMinutes =({starts, ends})=> {
  // Parse the start and end times into Date objects
  const startDate = new Date(starts);
  const endDate = new Date(ends);

  // Get the time difference in milliseconds
  const timeDifferenceMs = endDate.getTime() - startDate.getTime();

  // Convert milliseconds to minutes
  const timeDifferenceMinutes = Math.round(timeDifferenceMs / (1000 * 60));

  return timeDifferenceMinutes;
}
// function to encrypt messages
export const encryptMessage = (message, key) => {
  const encrypted = CryptoJS.AES.encrypt(message, CryptoJS.enc.Hex.parse(key), {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  }).toString();
  return encrypted;
};
export const decryptMessage = (ciphertext, key) => {
  try {
    const bytes = CryptoJS.AES.decrypt(
      ciphertext,
      CryptoJS.enc.Hex.parse(key),
      {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
      }
    );
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    return decrypted;
  } catch (error) {
    console.error("Decryption error:", error);
    throw new Error("Failed to decrypt the message");
  }
};

// Function to check for password strength
export const isStrongPassword = (password) => {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
};


export const dataURLtoImage = (dataUrl) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = (err) => reject(err);
      img.src = dataUrl;
    });
  };
export const dataURLtoFile =(dataurl)=> {
    const [metadata, base64Data] = dataurl.split(',');
    const mimeMatch = metadata.match(/:(.*?);/);
    const mime = mimeMatch ? mimeMatch[1] : '';
    const bstr = atob(base64Data);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], 'image', { type: mime });
}


export const sanitizeText = (note) => {
  // Regex for removing unwanted elements
  const specialCharsPattern = /[!@#$%^&*()?":{}|<>]/g;
  const emailPattern = /\b[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,}\b/g;
  const emailProvidersPattern = /\b(gmail|yahoo|apple|outlook|hotmail|icloud)\b/gi;
  const dotComPattern = /\b(dot|com|net|org|co|info)\b/gi;
  const linksPattern = /https?:\/\/\S+/g;
  const domainNamesPattern = /\b\S+\.\S+\b/g;

  // Phone number pattern (supports various formats like 123-456-7890, (123) 456-7890, +1234567890, etc.)
  const phoneNumberPattern = /(?:\+\d{1,3}[-.\s]?)?(?:\(?\d{2,4}\)?[-.\s]?)?\d{3,4}[-.\s]?\d{4}/g;

  // General standalone numbers
  const standaloneNumbersPattern = /\b\d+\b/g;

  // Step 1: Remove emails, links, domain names, special characters, phone numbers, etc.
  note = note
    .replace(emailPattern, "")
    .replace(emailProvidersPattern, "")
    .replace(dotComPattern, "")
    .replace(linksPattern, "")
    .replace(domainNamesPattern, "")
    .replace(phoneNumberPattern, "")
    .replace(specialCharsPattern, "");

  // Step 2: Identify and retain valid time and date formats
  const validPatterns = [];

  // Step 3: Remove standalone numbers unless part of valid patterns
  note = note.replace(standaloneNumbersPattern, (match) => {
    return validPatterns.includes(match.trim()) ? match : "";
  });

  // Step 4: Clean up any extra spaces and trim the result
  return note
    .split(/\s+/) // Split by spaces
    .filter((word) => validPatterns.includes(word) || word.trim().length > 0) // Filter out empty or invalid words
    .join(" ") // Join words back together
    .trim();
};

//  ============ function that checks if weekends/weekdays exists in the calendar days selected and returns true or false ================
export const checkDaysInCalendar = ({ availabilityData, option }) => {
  let generatedMonths = {};

  const { value: availabilityYear, months: availabilityMonths } =
    availabilityData.year;
  const generateCalendarDays = (year, month, filteredDays) => {
    const monthShortToNumber = {
      Jan: 1,
      Feb: 2,
      Mar: 3,
      Apr: 4,
      May: 5,
      Jun: 6,
      Jul: 7,
      Aug: 8,
      Sep: 9,
      Oct: 10,
      Nov: 11,
      Dec: 12,
    };

    const monthNumber = monthShortToNumber[month];
    const newSelectedDays = Object.values(filteredDays).map((obj) => obj.value);

    switch (option) {
      case "weekends":
        filteredDays = newSelectedDays.filter((day) =>
          [0, 6].includes(new Date(year, monthNumber - 1, day).getDay())
        );
        break;
      case "weekdays":
        filteredDays = newSelectedDays.filter(
          (day) =>
            ![0, 6].includes(new Date(year, monthNumber - 1, day).getDay())
        );
        break;

      default:
        break;
    }
    return filteredDays;
  };

  Object.keys(availabilityMonths)?.forEach((monthKey) => {
    generatedMonths[monthKey] = {
      days: generateCalendarDays(
        availabilityYear,
        monthKey,
        availabilityMonths[monthKey]?.days
      ),
    };
  });
  const weekendLists = [];
  Object.values(generatedMonths).map((obj) => {
    obj.days?.forEach((d) => {
      weekendLists.push(d);
    });
  });
  const isWeekends = weekendLists?.length > 0;

  return isWeekends;
};

// ------------ chats ----------------
// ---------------- search ------------------

export const sortMembersByOnlineStatus = ({ members, onlineUsers, sortConfigured }) => {
  
  if (sortConfigured) {
    // If sortConfigured is true, return the members array as is
    return [...members];
  }

  const onlineUserIds = onlineUsers?.map((user) => user?.id);
  // Create a shallow copy of the members array before sorting
  const membersCopy = [...members];

  return membersCopy.sort((a, b) => {
    const aIsOnline = onlineUserIds?.includes(a?.uuid);
    const bIsOnline = onlineUserIds?.includes(b?.uuid);

    // Sort online users to the top
    if (aIsOnline && !bIsOnline) return -1;
    if (!aIsOnline && bIsOnline) return 1;

    return 0; // Keep order the same if both are online or both are offline
  });
};

//  -------------------------- notification content  -----------------
export const notifcationContent = ({ sendTo, content, path, icon, type }) => {
  const notice = {
    sendTo,
    content,
    time: new Date(),
    path,
    icon,
    type,
  };
  return { notice };
};
// Custom validation function to check for special characters, email addresses, phone numbers, links, and domain names
export const validateTextInputValue = (value) => {
  const specialCharsRegex = /[!@#$%^&*(),.?":{}|<>]/;
  const emailRegex = /\S+@\S+\.\S+/;
  const phoneRegex = /\d{10,}/;
  const linkRegex = /https?:\/\/\S+/;
  const domainRegex = /\S+\.\S+/;

  if (
    specialCharsRegex.test(value) ||
    emailRegex.test(value) ||
    phoneRegex.test(value) ||
    linkRegex.test(value) ||
    domainRegex.test(value)
  ) {
    return "Please avoid special characters, email addresses, phone numbers, links, and domain names.";
  }

  return null; // No validation error
};

export const generateMonths = (year) => {
  const months = Array.from({ length: 12 }, (_, i) => {
    const monthValue = i + 1;
    const label = new Date(year, i, 1).toLocaleString("en-US", {
      month: "short",
    });

    // Check if it's the current year and month is not past
    return {
      value: monthValue,
      label: label,
    };
  });
  return months;
};
export const generateYears = () => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => {
    const yearValue = currentYear - i;
    return {
      value: yearValue,
      label: yearValue.toString(),
    };
  });
  return years;
};

export const orderIds = (id1, id2) => {
  const intId1 = parseInt(id1);
  const intId2 = parseInt(id2);

  if (intId1 > intId2) {
    return id1 + "#" + id2;
  } else {
    return id2 + "#" + id1;
  }
};
export const truncateTextWithEllipsis = (text, maxLength) => {
  let words = text.split(" ");
  let truncatedText = words.slice(0, maxLength).join(" ");
  if (words.length > maxLength) {
    truncatedText = truncatedText + "...";
  }
  return truncatedText;
};
export const countWords = (text) => {
  const words = text.trim().split(/\s+/);
  return words.length;
};

export const checkIfDateIsWithin12Hours = (dateString) => {
  // Parse the incoming date string into a Date object
  const date = new Date(dateString);

  // Get the current time
  const currentTime = new Date();

  // Calculate the difference in milliseconds between the input date and the current time
  const timeDifference = Math.abs(date - currentTime);

  // Convert milliseconds to hours
  const hoursDifference = timeDifference / (1000 * 60 * 60);

  // Check if the hours difference is less than or equal to 12
  return hoursDifference <= 12;
};

// Helper function to validate file type
export const allowedImageTypes = () => {
  return ["image/jpeg", "image/jpg", "image/webp", "image/heic"];
};
export const allowedEventImageTypes = () => {
  return ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/heic"];
};
export const allowedAdvertImageTypes = () => {
  return ["image/jpeg", "image/jpg", "image/png",  "image/gif","image/webp", "image/heic"];
};
export const isValidImageFileType = (file) => {
  const allowedTypes = allowedImageTypes();
  return allowedTypes.includes(file.type);
};
export const isValidEventImageFileType = (file) => {
  const allowedTypes = allowedEventImageTypes();
  return allowedTypes.includes(file.type);
};

export const allowedImageTypesTitle = () => {
  return "JPEG, JPG, HEIC & WebP files allowed.";
};
export const allowedEventImageTypesTitle = () => {
  return "JPEG, JPG, PNG, HEIC & WebP files allowed.";
};

export const allowedAdvertImageTypesTitle = () => {
  return "JPEG, JPG, PNG, GIF, HEIC & WebP files allowed.";
};


// export const fetchActualFile = async(filePath)=>{
//   try {
//     const response = await axios.get(filePath, { responseType: 'blob' });
//     const actualFile = new File([response.data], "downloadedFile", { type: response.data.type });
//     return {actualFile}
//   } catch (error) {
//     console.error("Error fetching the file:", error);
//     return {error:'Error fetching the file'}
//   }

// }

export const getActualFileFromBuffer = (data) => {
  try {
      const decodedFileContent = atob(data?.fileContent);

      // Create a Uint8Array from the binary string
      const binaryLength = decodedFileContent?.length;
      const binaryArray = new Uint8Array(binaryLength);
      for (let i = 0; i < binaryLength; i++) {
      binaryArray[i] = decodedFileContent.charCodeAt(i);
      }

      // Create a Blob from the Uint8Array
      const fileBlob = new Blob([binaryArray], { type: data?.contentType });
      const fileName = data?.fileName || "uploadedFile";
      const actualFile = new File([fileBlob], fileName, { type: data?.contentType });

      return {fileBlob,actualFile}
  } catch (error) {
    console.error("Error fetching the file:", error);
    return { error: "Error fetching the file" };
  }
};


const getDatesBetween = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Normalize both dates to midnight to avoid time component issues
  start.setHours(0, 0, 0, 0);
  end.setHours(0, 0, 0, 0);

  let dates = [];

  // Validate input
  if (isNaN(start) || isNaN(end)) {
    throw new Error("Invalid startDate or endDate");
  }

  if (start > end) {
    console.warn("Start date is after end date. Returning an empty array.");
    return dates;
  }

  // Generate dates
  while (start <= end) {
    dates.push(new Date(start));
    start.setDate(start.getDate() + 1);
  }

  console.log("Generated Dates:", dates.map(d => d.toDateString()));
  return dates;
};


const getCalendarTimeSlots = (starts, ends, userCalendar) => {
  const dates = getDatesBetween(starts, ends);

  
  let timeSlots = [];
  

  dates.forEach((date) => {
    // const year = date.getFullYear();

    const month = date.toLocaleString("default", { month: "short" });
    const normalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);
    const day = date.getDate();
    
    // Compare the year with the value in the calendar
      const daySlots =
        userCalendar?.year?.months?.[normalizedMonth]?.days?.[day]?.timeSlots || [];
        timeSlots.push(...daySlots);

  });

  return timeSlots;
};

export const checkUserAvailabilityCalendar = ({
  starts,
  ends,
  userCalendar,
  }) => {
  try {
    const timeSlots = getCalendarTimeSlots(starts, ends, userCalendar);
    return timeSlots;
  } catch (error) {
    console.error("Error fetching time slots:", error);
    return [];
  }
};


// function to generate timeslots based on the year,month,day and UTC

// Map shorthand month names to numbers
const monthMap = {
  Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06",
  Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12"
};
export const updateAvailabilityTimeslotsData = (availabilityData) => {
  if (!availabilityData || !availabilityData?.year || !availabilityData?.year?.months) return {};

  const year = availabilityData?.year?.value;
  const detectedTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone; // Auto-detect timezone

  // Clone structure to avoid modifying the original data
  const updatedData = { ...availabilityData, year: { ...availabilityData.year, months: { ...availabilityData.year.months } } };

  Object.keys(updatedData?.year?.months)?.forEach((month) => {
    const monthNumber = monthMap[month];

    if (!monthNumber) {
      console.error(`Invalid month name: ${month}`);
      return;
    }

    const days = updatedData?.year?.months[month]?.days;
    if (!days) return;

    Object.keys(days)?.forEach((day) => {
      const formattedDay = String(day)?.padStart(2, "0"); // Ensure two-digit day format

      const timeSlots = days[day]?.timeSlots;
      if (!Array.isArray(timeSlots) || timeSlots.length === 0) return;

      // Update each time slot object while keeping `status`
      const updatedTimeSlots = timeSlots
        .filter(slot => typeof slot?.timeSlot === "string" && slot.timeSlot.includes("-")) // Ensure valid format
        .map(({ timeSlot, status }) => {
          const [startTime, endTime] = timeSlot.split("-").map(t => t.trim()); // Trim whitespace

          if (!startTime || !endTime) {
            console.error(`Invalid time slot format: ${timeSlot}`);
            return null; // Skip invalid entries
          }

          // Convert time to full timestamp in local timezone
          const startDateTime = dayjs(`${year}-${monthNumber}-${formattedDay}T${startTime}:00`)
            .tz(detectedTimeZone)
            .format(); 

          const endDateTime = dayjs(`${year}-${monthNumber}-${formattedDay}T${endTime}:59`)
            .tz(detectedTimeZone)
            .format();

          return { timeSlot: `${startDateTime} - ${endDateTime}`, status }; // Keep `status` unchanged
        })
        .filter(Boolean); // Remove any null values

      // Assign the updated time slots
      updatedData.year.months[month].days[day].timeSlots = updatedTimeSlots;
    });
  });

  return updatedData;
};

// function to convet timeslots to local time slots
export const convertToLocalTimeSlot = (timeSlot) => {
  
  if (typeof timeSlot !== "string" || !timeSlot?.includes(" - ")) {
    console.error("Invalid timeSlot format:", timeSlot);
    return null;
  }

  const detectedTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone; // User's local timezone
  const [startISO, endISO] = timeSlot.split(" - ").map(t => t.trim());

  try {
    // Convert start and end times to user's local timezone
    const startLocal = dayjs(startISO).tz(detectedTimeZone).format("HH:mm");
    const endLocal = dayjs(endISO).tz(detectedTimeZone).format("HH:mm");

    return `${startLocal} - ${endLocal}`;
  } catch (error) {
    console.error("Error parsing timeSlot:", error);
    return null;
  }
};

export const sanitizeCalendar = (calendar)=> {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.toLocaleString('en-US', { month: 'short' }).replace(/^./, m => m.toUpperCase()); // e.g., "Jan"
    const currentDay = now.getDate();
    const currentHour = now.getHours();
    
    // If the year is in the past, remove everything
    if (calendar.year.value < currentYear) {
        return { year: { value: currentYear, months: {} } };
    }

    // Loop through months
    Object.keys(calendar.year.months).forEach((month) => {
        if (new Date(`${month} 1, ${calendar.year.value}`).getMonth() < new Date(`${currentMonth} 1, ${calendar.year.value}`).getMonth()) {
            delete calendar.year.months[month]; // Remove past months
        } else {
            // Loop through days
            Object.keys(calendar.year.months[month].days).forEach((day) => {
                if (parseInt(day) < currentDay && month === currentMonth) {
                    delete calendar.year.months[month].days[day]; // Remove past days in the current month
                } else if (parseInt(day) === currentDay && month === currentMonth) {
                    // Remove past time slots for the current day
                    calendar.year.months[month].days[day].timeSlots = calendar.year.months[month].days[day].timeSlots.filter(slot => {
                        const slotHour = parseInt(slot.timeSlot.split(':')[0]);
                        return slotHour >= currentHour; // Keep only future time slots
                    });
                }
            });
            // If no days remain in the month, remove the month
            if (Object.keys(calendar.year.months[month].days).length === 0) {
                delete calendar.year.months[month];
            }
        }
    });
    return calendar;
}

export const checkMatchingTimeSlots = ({userCalendar, newCalendar,isSingleDay}) => {
  if (!userCalendar || !newCalendar) return "No conflict";

  const userYear = userCalendar?.year?.value;
  const newYear = newCalendar?.year?.value;

  if (userYear !== newYear) return "No conflict"; // Ensure the same year

  const userMonths = userCalendar?.year?.months || {};
  const newMonths = newCalendar?.year?.months || {};

  for (const month in newMonths) {
    if (!userMonths[month]) continue; // Skip if month doesn't exist in userCalendar

    const userDays = userMonths[month]?.days || {};
    const newDays = newMonths[month]?.days || {};

    for (const day in newDays) {
      if (!userDays[day]) continue; // Skip if day doesn't exist in userCalendar

      const userTimeSlots = userDays[day]?.timeSlots || [];
      const newTimeSlots = newDays[day]?.timeSlots || [];

      for (const newSlot of newTimeSlots) {
        // Find a matching time slot in the userCalendar
        const matchingUserSlot = userTimeSlots?.find(userSlot => userSlot.timeSlot === newSlot.timeSlot);
        if (matchingUserSlot && matchingUserSlot.havingDate) {

          return {isValid:false,message:`Can't set availability. You have a date 
            ${isSingleDay ? " within the day" 
            :"in one of your selections"}.`};
        }
      }
    }
  }

  return {isValid:true,message:""}; // If no conflicts were found
};

