/******************* 
@Purpose : Used for environment configuration
@Parameter : {API_URL, PORT}
@Author : INIC
******************/
module.exports = {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
    PORT: process.env.PORT,
    BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    ENVIRONMENT: process.env.NEXT_PUBLIC_ENVIRONMENT,
};
