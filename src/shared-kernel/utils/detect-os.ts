export const detectOS = (): string => {
  switch (true) {
    case window.navigator.userAgent.indexOf("Windows") != -1:
      return "Windows";
    case window.navigator.userAgent.indexOf("Mac OS") != -1:
      return "Mac OS";
    case window.navigator.userAgent.indexOf("Linux") != -1:
      return "Linux";
    default:
      return "The user's operating system could not be determined";
  }
};
