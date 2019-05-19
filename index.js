"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnvAsArray = function (env) {
    var envKeywords = exports.getEnvAndEnsure(env);
    return envKeywords ? envKeywords.split(",").map(function (str) { return str.trim(); }) : [];
};
exports.getEnvAndEnsure = function (envProp) {
    var env = process.env[envProp];
    if (typeof env === "undefined" || env === null) {
        throw Error("Env " + envProp + " is not found");
    }
    if (env === "true" || env === "TRUE") {
        return true;
    }
    if (env === "false" || env === "FALSE") {
        return false;
    }
    return env;
};
exports.getManyEnvAndEnsure = function (envProps) {
    return envProps.map(exports.getEnvAndEnsure);
};
