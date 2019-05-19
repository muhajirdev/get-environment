export const getEnvAsArray = (env: string) => {
  const envKeywords = getEnvAndEnsure(env) as string;
  return envKeywords ? envKeywords.split(",").map(str => str.trim()) : [];
};

export const getEnvAndEnsure = (envProp: string) => {
  const env = process.env[envProp];

  if (typeof env === "undefined" || env === null) {
    throw Error(`Env ${envProp} is not found`);
  }

  if (env === "true" || env === "TRUE") {
    return true;
  }
  if (env === "false" || env === "FALSE") {
    return false;
  }

  return env;
};

export const getManyEnvAndEnsure = (envProps: string[]) =>
  envProps.map(getEnvAndEnsure);
