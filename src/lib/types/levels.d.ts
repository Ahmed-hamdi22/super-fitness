declare type LevelsResponse = {
  // message: string;
  // level: Level;
  // difficulty_levels: DifficultyLevels[];
    message: string;
  difficulty_levels: DifficultyLevels[];
  
};

export interface Level {
  id: string;
  name: string;
}
declare type DifficultyLevels= {
  id:string;
  name:string;
}

