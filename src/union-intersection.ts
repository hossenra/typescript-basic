type NoopDeveloper = {
  name: string;
};

// type JuniorDeveloper = {
//   name: string;
//   expertise: string;
//   experience: number;
// };
type JuniorDeveloper = NoopDeveloper & {
  expertise: string;
  experience: number;
};

type NextLevelDeveloper = JuniorDeveloper & {
  leadershipExperience: number;
  level: string;
};

const newDeveloper: JuniorDeveloper = {
  name: "Rahim Mia",
  expertise: "JavaScript",
  experience: 6,
};

enum Level {
  junior = "junior",
  mid = "mid",
  senior = "senior",
}

const developer: NextLevelDeveloper = {
  name: "Razibul Hossen",
  expertise: "TypeScript",
  experience: 2,
  leadershipExperience: 1,
  level: Level.junior,
};
