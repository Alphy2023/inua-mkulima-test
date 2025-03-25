const providers = {
  google: "google",
  microsoft: "microsoft",
  apple: "apple",
  yahoo: "yahoo",
};

export const getEmailProvider =(email) =>{
  if (email.includes("@gmail.com")) return providers.google;
  if (email.includes("@outlook.com") || email.includes("@hotmail.com"))
    return providers.microsoft;
  if (email.includes("@icloud.com") || email.includes("@me.com"))
    return providers.apple;
  if (email.includes("@yahoo.com")) return providers.yahoo;
  return null;
}
