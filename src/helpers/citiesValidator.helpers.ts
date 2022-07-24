export function citiesValidator(cities: string[]): any {
  const citiesList = ["Tóquio", "New York", "Rio de Janeiro"];
  try {
    cities.forEach((city) => {
      if (!citiesList.includes(city)) {
        throw new Error("error");
      }
    });
    return true;
  } catch (error) {
    return false;
  }
}
