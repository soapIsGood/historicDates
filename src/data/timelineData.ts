export interface TimelineItem {
  id: string;
  startYear: number;
  endYear: number;
  label?: string;
  title: string;
  events: {
    date?: string;
    description?: string;
  }[];
}

export const timelineData: TimelineItem[] = [
  {
    id: 'p1',
    startYear: 1990,
    endYear: 1995,
    label: '1990–1995',
    title: 'Наука',
    events: [
      { date: '1990', description: 'Запуск космического телескопа «Хаббл» на орбиту Земли' },
      {
        date: '1991',
        description: 'Открытие сверхновой SN 1991T — важный шаг в изучении Вселенной',
      },
      { date: '1992', description: 'Обнаружена первая подтверждённая экзопланета у пульсара' },
      { date: '1993', description: 'Телескоп «Хаббл» сделал первые снимки далёких галактик' },
      { date: '1994', description: 'Столкновение кометы Шумейкеров — Леви с Юпитером' },
    ],
  },
  {
    id: 'p2',
    startYear: 1996,
    endYear: 2000,
    label: '1996–2000',
    title: 'Литература',
    events: [
      { date: '1996', description: 'Выход романа Джорджа Мартина «Битва королей»' },
      { date: '1997', description: 'Джоан Роулинг публикует «Гарри Поттер и философский камень»' },
      { date: '1998', description: 'Нобелевская премия по литературе — Жозе Сарамаго' },
      { date: '1999', description: 'Выходит роман «Бойцовский клуб» Чака Паланика' },
      { date: '2000', description: 'Нобелевская премия по литературе — Гао Синцзянь' },
    ],
  },
  {
    id: 'p3',
    startYear: 2001,
    endYear: 2005,
    label: '2001–2005',
    title: 'Кино',
    events: [
      { date: '2001', description: 'Премьера фильма «Властелин колец: Братство Кольца»' },
      { date: '2002', description: 'Выход мультфильма «Ледниковый период»' },
      {
        date: '2003',
        description: 'Оскар за лучший фильм — «Властелин колец: Возвращение короля»',
      },
      { date: '2004', description: 'Премьера анимационного фильма «Суперсемейка»' },
      { date: '2005', description: 'Выход фильма «Бэтмен: Начало» режиссёра Кристофера Нолана' },
    ],
  },
  {
    id: 'p4',
    startYear: 2006,
    endYear: 2010,
    label: '2006–2010',
    title: 'Музыка',
    events: [
      { date: '2006', description: 'Выходит альбом «FutureSex/LoveSounds» Джастина Тимберлейка' },
      { date: '2007', description: 'Альбом «Graduation» Канье Уэста занимает вершины чартов' },
      { date: '2008', description: 'Леди Гага выпускает дебютный альбом «The Fame»' },
      { date: '2009', description: 'Майкл Джексон скончался, став мировой новостью №1' },
      { date: '2010', description: 'Выходит сингл «Rolling in the Deep» Адель' },
    ],
  },
  {
    id: 'p5',
    startYear: 2011,
    endYear: 2015,
    label: '2011–2015',
    title: 'Живопись',
    events: [
      { date: '2011', description: 'Продажа картины Сезанна «Игроки в карты» за $250 млн' },
      { date: '2012', description: 'В Лондоне открылась выставка Дэмиена Херста' },
      { date: '2013', description: 'Картина Фрэнсиса Бэкона продана за $142 млн' },
      { date: '2014', description: 'Бэнкси создаёт новую серию уличных работ в Нью-Йорке' },
      { date: '2015', description: 'Продажа картины Модильяни за $170 млн' },
    ],
  },
  {
    id: 'p6',
    startYear: 2016,
    endYear: 2020,
    label: '2016–2020',
    title: 'Спорт',
    events: [
      { date: '2016', description: 'Олимпийские игры в Рио-де-Жанейро' },
      { date: '2017', description: 'Реал Мадрид выиграл Лигу чемпионов УЕФА третий раз подряд' },
      { date: '2018', description: 'Франция становится чемпионом мира по футболу в России' },
      { date: '2019', description: 'Сборная Южной Африки выигрывает Кубок мира по регби' },
      { date: '2020', description: 'Олимпийские игры в Токио перенесены из-за пандемии COVID-19' },
    ],
  },
];
