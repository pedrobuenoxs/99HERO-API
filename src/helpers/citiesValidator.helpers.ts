export function citiesValidator(cities: string[]): any {
  const citiesList = ["tóquio", "new york", "rio de janeiro"];
  try {
    cities.forEach((city) => {
      if (!citiesList.includes(city.toLowerCase())) {
        throw new Error("error");
      }
    });
    return true;
  } catch (error) {
    return false;
  }
}
