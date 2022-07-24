export function disastersValidator(disasters: string[]): any {
  const disastersList = [
    "assalto a bancos",
    "monstros gigantes",
    "desastres naturais",
  ];
  try {
    disasters.forEach((city) => {
      if (!disastersList.includes(city.toLowerCase())) {
        throw new Error("error");
      }
    });
    return true;
  } catch (error) {
    return false;
  }
}
