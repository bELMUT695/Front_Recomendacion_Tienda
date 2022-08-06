const environment = "DEV";
export const serverURL =
  process.env.NODE_ENV === "development"
    ? "https://back-tienda-electronica.herokuapp.com" //http://localhost:3050
    : "https://back-tienda-electronica.herokuapp.com";
