export interface CourseInterface {
  title: string;
  id: string;
  authorId: string;
  description: string;
  modules: number;
  lessons: number;
  difficulty: 'trainee' | 'junior' | 'middle' | 'senior';
  isPro: boolean;
}
