interface GoalInterface {
  goal: string;
  test: string;
}

type TechnologiesType = 'css' | 'html' | 'js';

export interface ExerciseInterface {
  title: string;
  id: string;
  authorId: number;
  ratio: number;
  html: string;
  css: string;
  js: string;
  test: string;
  goals: GoalInterface[];
  technologies: TechnologiesType[];
}
