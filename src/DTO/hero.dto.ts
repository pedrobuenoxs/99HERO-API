export default interface DTOHero {
  id?: number;
  name?: string;
  heroName: string;
  cities: [string];
  disasters: [string];
  teamwork: string;
  message?: string;
}
