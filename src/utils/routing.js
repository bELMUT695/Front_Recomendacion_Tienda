const environment = "DEV";
export const serverURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001" //http://localhost:3050
    : "https://back-tienda-electronica.herokuapp.com";
