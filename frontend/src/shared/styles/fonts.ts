export const Fonts = {
  Poppins_Light: "Poppins-Light",
  Poppins_Italic: "Poppins-Italic",
  Poppins_Regular: "Poppins-Regular",
  Poppins_Medium: "Poppins-Medium",
  Poppins_Bold: "Poppins-Bold",
  Poppins_SemiBold: "Poppins-SemiBold",
} as const;

export type Fonts = (typeof Fonts)[keyof typeof Fonts];
