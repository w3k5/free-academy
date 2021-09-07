import { of } from 'rxjs';
import type { CourseInterface } from '@interfaces';

const MockCourses: CourseInterface[] = [
  {
    authorId: '1',
    id: '1',
    title: 'Знакомство с веб-разработкой',
    description: 'На практике знакомимся с базовыми технологиями веб-разработки: HTML, CSS, JavaScript и PHP.',
    difficulty: 'trainee',
    lessons: 47,
    modules: 3,
    isPro: false,
  },
  {
    authorId: '1',
    id: '2',
    title: 'Знакомство с HTML и CSS',
    description:
      'Изучаем основы HTML и CSS. На практике разбираемся с семантической разметкой и базовыми механизмами стилизации на примере небольшого сайта.',
    difficulty: 'trainee',
    lessons: 109,
    modules: 5,
    isPro: false,
  },
  {
    authorId: '1',
    id: '3',
    title: 'Знакомство с JavaScript',
    description: 'Узнаем, как работает JavaScript в браузере. Научимся оживлять интерфейсы.',
    difficulty: 'trainee',
    lessons: 61,
    modules: 4,
    isPro: false,
  },
  {
    authorId: '1',
    id: '4',
    title: 'Знакомство с PHP',
    description: 'Добавляем PHP в разметку, работаем с веб-сценариями, данными и адресом.',
    difficulty: 'trainee',
    lessons: 59,
    modules: 4,
    isPro: false,
  },
  {
    authorId: '1',
    id: '5',
    title: 'Знакомство с веб-разработкой',
    description: 'На практике знакомимся с базовыми технологиями веб-разработки: HTML, CSS, JavaScript и PHP.',
    difficulty: 'trainee',
    lessons: 100,
    modules: 3,
    isPro: true,
  },
  {
    authorId: '1',
    id: '6',
    title: 'Погружение в HTML и CSS',
    description:
      'Познакомимся с продвинутыми техниками создания сайтов. Узнаем, как верстать по макету, строить сложные сетки и создавать декоративные эффекты.',
    difficulty: 'junior',
    lessons: 59,
    modules: 3,
    isPro: true,
  },
  {
    authorId: '1',
    id: '7',
    title: 'Продвинутый HTML и CSS',
    description:
      'Знакомимся с продвинутыми возможностями HTML: формами, таблицами, элементами для проигрывания медиа. Детально разбираем важные механизмы CSS.',
    difficulty: 'trainee',
    lessons: 162,
    modules: 8,
    isPro: true,
  },
];

export const MockCourseResponse = of(MockCourses);
