export default {
    port: 7979,
    dbUri: `mongodb+srv://nashtranet:nashtranet@nashtranet.4pgdxil.mongodb.net/nashtranet?retryWrites=true&w=majority`,
    saltWorkFactor: 10,
    jwtPublicKey: `-----BEGIN PUBLIC KEY-----
    MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAIAOqiecEEAJqDzQDbpI/WkfZxv+Kw8d
    NWGfJoNIW+bbidfmAlNGvV3Xscwfy/G9OFKjzkYT9s+M/MA20oyp3zUCAwEAAQ==
    -----END PUBLIC KEY-----`,
    jwtPrivateKey: `-----BEGIN RSA PRIVATE KEY-----
    MIIBOwIBAAJBAIAOqiecEEAJqDzQDbpI/WkfZxv+Kw8dNWGfJoNIW+bbidfmAlNG
    vV3Xscwfy/G9OFKjzkYT9s+M/MA20oyp3zUCAwEAAQJAOHO+iSWgeEqJkv14/8VL
    iXshflKm8svCi52YYcmVUgiUJ24J7SosF1lo+3lBqELimgY27WexchYz7G9rZ+kA
    JQIhAOQuUvVU/9NrlLypQXyA91feOp1kI2Ao1lMHmWdABCw7AiEAj6tqcCmdYEvw
    LRpFbqTcf/Xewfce5ZYDjIBKxCLCG08CIQCU5wHt5OT5A5hRMSZx5/sA1R1s/h7z
    rlKGZkweC7FtZwIgA6S3OEz13sFOP/aQmDO6G8yib4zSzcO2J1QBkWPIRGUCIQDM
    XpuIVIa9iCEkOqlPPBk927FITp0o5AYGEJhvDIexhA==
    -----END RSA PRIVATE KEY-----`,
    jwtAccessTokenTtl: '15m',
    jwtRefreshTokenTtl: '1d',
};
