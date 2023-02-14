let BASE_URL = "http://localhost:3001/v1";

/*if (process.env.REACT_APP_STAGE === "development") {
  BASE_URL = "https://api.allballapp.com/api/v1";
} else if (process.env.REACT_APP_STAGE === "staging") {
  BASE_URL = "https://staging.allballapp.com/api/v1";
}*/

const paths = {
  LOGIN_API_URL: `${BASE_URL}/auth/login`,
  REGISTER_API_URL: `${BASE_URL}/auth/register`,
};

export default paths;
