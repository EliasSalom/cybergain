
 const getEnvVar = (key: string): string => {
    const envValue = process.env[key];
  
    if (!envValue) {
        throw new Error(`Environment variable "${key}" is not defined.`);
    }
  
    return envValue;
  };
  
  export const getS3URL=()=>'https://public.qa.cybergain.io'