// export const getUserAgent = () => {
//   const headersList = headers();
//   return headersList.get("user-agent") || "";
// };
//
// export const getHost = () => {
//   const headersList = headers();
//   return headersList.get("host") || "";
// };

export const getUserAgentDetails = (data: Navigator, location: Location) => {
  const userAgent = data.userAgent;
  const platform = data.platform;
  const language = data.language;
  const host = location.host;

  // Helper function to extract browser name and version
  const extractBrowserDetails = (userAgent: any) => {
    const browsers = [
      { name: "Edge", regex: /Edge\/(\S+)/ },
      { name: "Chrome", regex: /Chrome\/(\S+)/ },
      { name: "Firefox", regex: /Firefox\/(\S+)/ },
      { name: "Safari", regex: /Version\/(\S+).*Safari/ },
      { name: "Internet Explorer", regex: /MSIE (\d+\.\d+);/ },
      { name: "Internet Explorer", regex: /Trident\/.*rv:(\d+\.\d+)/ },
    ];

    for (let browser of browsers) {
      const match = userAgent.match(browser.regex);
      if (match) {
        return { name: browser.name, version: match[1] };
      }
    }

    return { name: "Unknown", version: "Unknown" };
  };

  // Extract browser details
  const { name: browserName, version: browserVersion } =
    extractBrowserDetails(userAgent);

  // Improved OS detection
  const osMap: { [key: string]: string } = {
    Win: "Windows",
    Mac: "MacOS",
    Linux: "Linux",
    Android: "Android",
    iPhone: "iOS",
    iPad: "iOS",
    iPod: "iOS",
  };

  const os =
    Object.keys(osMap).find(
      (key) => platform.includes(key) || userAgent.includes(key),
    ) || "Unknown OS";

  // Determine device type.ts
  const isMobile = /Mobi|Android/i.test(userAgent);
  const isTablet = /Tablet|iPad/i.test(userAgent);
  const deviceType = isMobile ? "Mobile" : isTablet ? "Tablet" : "Desktop";

  // Construct the browser details object
  return {
    userAgent,
    platform,
    language,
    host,
    browserName,
    browserVersion,
    os: osMap[os] || os,
    deviceType,
    isMobile,
    isTablet,
    isIE: /MSIE|Trident/.test(userAgent),
    isChrome: /Chrome/.test(userAgent) && !/Edge/.test(userAgent),
    isFirefox: /Firefox/.test(userAgent),
    isSafari: /Safari/.test(userAgent) && !/Chrome/.test(userAgent),
  };
};
