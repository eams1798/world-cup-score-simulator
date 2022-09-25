const listMatches = [{
    id: 1,
    group: 'A',
    match: 1,
    home: { name: 'Qatar', goals: 1 },
    away: { name: 'Ecuador', goals: 2 },
    date: '20 November 2022 19:00',
    stadium: 'albayt'
  },
  {
    id: 2,
    group: 'A',
    match: 1,
    home: { name: 'Senegal', goals: 1 },
    away: { name: 'Netherlands', goals: 2 },
    date: '21 November 2022 19:00',
    stadium: 'althumama'
  },
  {
    id: 3,
    group: 'A',
    match: 2,
    home: { name: 'Netherlands', goals: 2 },
    away: { name: 'Ecuador', goals: 0 },
    date: '25 November 2022 19:00',
    stadium: 'khalifa'
  },
  {
    id: 4,
    group: 'A',
    match: 2,
    home: { name: 'Qatar', goals: 1 },
    away: { name: 'Senegal', goals: 4 },
    date: '25 November 2022 16:00',
    stadium: 'althumama'
  },
  {
    id: 5,
    group: 'A',
    match: 3,
    home: { name: 'Netherlands', goals: 3 },
    away: { name: 'Qatar', goals: 0 },
    date: '29 November 2022 18:00',
    stadium: 'albayt'
  },
  {
    id: 6,
    group: 'A',
    match: 3,
    home: { name: 'Ecuador', goals: 1 },
    away: { name: 'Senegal', goals: 1 },
    date: '29 November 2022 18:00',
    stadium: 'khalifa'
  },
  {
    id: 7,
    group: 'B',
    match: 1,
    home: { name: 'England', goals: 3 },
    away: { name: 'Iran', goals: 1 },
    date: '21 November 2022 16:00',
    stadium: 'khalifa'
  },
  {
    id: 8,
    group: 'B',
    match: 1,
    home: { name: 'United States', goals: 2 },
    away: { name: 'Wales', goals: 1 },
    date: '21 November 2022 22:00',
    stadium: 'ahmad'
  },
  {
    id: 9,
    group: 'B',
    match: 2,
    home: { name: 'Wales', goals: 2 },
    away: { name: 'Iran', goals: 1 },
    date: '25 November 2022 13:00',
    stadium: 'ahmad'
  },
  {
    id: 10,
    group: 'B',
    match: 2,
    home: { name: 'England', goals: 2 },
    away: { name: 'United States', goals: 2 },
    date: '25 November 2022 22:00',
    stadium: 'albayt'
  },
  {
    id: 11,
    group: 'B',
    match: 3,
    home: { name: 'Wales', goals: 1 },
    away: { name: 'England', goals: 2 },
    date: '29 November 2022 22:00',
    stadium: 'ahmad'
  },
  {
    id: 12,
    group: 'B',
    match: 3,
    home: { name: 'Iran', goals: 0 },
    away: { name: 'United States', goals: 1 },
    date: '29 November 2022 22:00',
    stadium: 'althumama'
  },
  {
    id: 13,
    group: 'C',
    match: 1,
    home: { name: 'Argentina', goals: 3 },
    away: { name: 'Saudi Arabia', goals: 0 },
    date: '22 November 2022 13:00',
    stadium: 'lusail'
  },
  {
    id: 14,
    group: 'C',
    match: 1,
    home: { name: 'Mexico', goals: 0 },
    away: { name: 'Poland', goals: 1 },
    date: '22 November 2022 19:00',
    stadium: 's974'
  },
  {
    id: 15,
    group: 'C',
    match: 2,
    home: { name: 'Poland', goals: 1 },
    away: { name: 'Saudi Arabia', goals: 0 },
    date: '26 November 2022 16:00',
    stadium: 'education'
  },
  {
    id: 16,
    group: 'C',
    match: 2,
    home: { name: 'Argentina', goals: 2 },
    away: { name: 'Mexico', goals: 0 },
    date: '26 November 2022 22:00',
    stadium: 'lusail'
  },
  {
    id: 17,
    group: 'C',
    match: 3,
    home: { name: 'Poland', goals: 1 },
    away: { name: 'Argentina', goals: 2 },
    date: '30 November 2022 22:00',
    stadium: 's974'
  },
  {
    id: 18,
    group: 'C',
    match: 3,
    home: { name: 'Saudi Arabia', goals: 0 },
    away: { name: 'Mexico', goals: 0 },
    date: '30 November 2022 22:00',
    stadium: 'lusail'
  },
  {
    id: 19,
    group: 'D',
    match: 1,
    home: { name: 'France', goals: 2 },
    away: { name: 'Australia', goals: 1 },
    date: '22 November 2022 22:00',
    stadium: 'aljanoub'
  },
  {
    id: 20,
    group: 'D',
    match: 1,
    home: { name: 'Denmark', goals: 3 },
    away: { name: 'Tunisia', goals: 0 },
    date: '22 November 2022 16:00',
    stadium: 'education'
  },
  {
    id: 21,
    group: 'D',
    match: 2,
    home: { name: 'Tunisia', goals: 1 },
    away: { name: 'Australia', goals: 1 },
    date: '26 November 2022 13:00',
    stadium: 'aljanoub'
  },
  {
    id: 22,
    group: 'D',
    match: 2,
    home: { name: 'France', goals: 0 },
    away: { name: 'Denmark', goals: 1 },
    date: '26 November 2022 19:00',
    stadium: 's974'
  },
  {
    id: 23,
    group: 'D',
    match: 3,
    home: { name: 'Tunisia', goals: 0 },
    away: { name: 'France', goals: 2 },
    date: '30 November 2022 18:00',
    stadium: 'education'
  },
  {
    id: 24,
    group: 'D',
    match: 3,
    home: { name: 'Australia', goals: 1 },
    away: { name: 'Denmark', goals: 1 },
    date: '30 November 2022 18:00',
    stadium: 'aljanoub'
  },
  {
    id: 25,
    group: 'E',
    match: 1,
    home: { name: 'Spain', goals: 3 },
    away: { name: 'Costa Rica', goals: 1 },
    date: '23 November 2022 19:00',
    stadium: 'althumama'
  },
  {
    id: 26,
    group: 'E',
    match: 1,
    home: { name: 'Germany', goals: 2 },
    away: { name: 'Japan', goals: 2 },
    date: '23 November 2022 16:00',
    stadium: 'khalifa'
  },
  {
    id: 27,
    group: 'E',
    match: 2,
    home: { name: 'Japan', goals: 2 },
    away: { name: 'Costa Rica', goals: 1 },
    date: '27 November 2022 13:00',
    stadium: 'ahmad'
  },
  {
    id: 28,
    group: 'E',
    match: 2,
    home: { name: 'Spain', goals: 1 },
    away: { name: 'Germany', goals: 1 },
    date: '27 November 2022 22:00',
    stadium: 'albayt'
  },
  {
    id: 29,
    group: 'E',
    match: 3,
    home: { name: 'Japan', goals: 1 },
    away: { name: 'Spain', goals: 2 },
    date: '1 December 2022 22:00',
    stadium: 'khalifa'
  },
  {
    id: 30,
    group: 'E',
    match: 3,
    home: { name: 'Costa Rica', goals: 0 },
    away: { name: 'Germany', goals: 2 },
    date: '1 December 2022 22:00',
    stadium: 'albayt'
  },
  {
    id: 31,
    group: 'F',
    match: 1,
    home: { name: 'Belgium', goals: 1 },
    away: { name: 'Canada', goals: 1 },
    date: '23 November 2022 22:00',
    stadium: 'ahmad'
  },
  {
    id: 32,
    group: 'F',
    match: 1,
    home: { name: 'Morocco', goals: 1 },
    away: { name: 'Croatia', goals: 2 },
    date: '23 November 2022 13:00',
    stadium: 'albayt'
  },
  {
    id: 33,
    group: 'F',
    match: 2,
    home: { name: 'Croatia', goals: 2 },
    away: { name: 'Canada', goals: 1 },
    date: '27 November 2022 19:00',
    stadium: 'khalifa'
  },
  {
    id: 34,
    group: 'F',
    match: 2,
    home: { name: 'Belgium', goals: 2 },
    away: { name: 'Morocco', goals: 0 },
    date: '27 November 2022 16:00',
    stadium: 'althumama'
  },
  {
    id: 35,
    group: 'F',
    match: 3,
    home: { name: 'Croatia', goals: 1 },
    away: { name: 'Belgium', goals: 1 },
    date: '1 December 2022 18:00',
    stadium: 'ahmad'
  },
  {
    id: 36,
    group: 'F',
    match: 3,
    home: { name: 'Canada', goals: 1 },
    away: { name: 'Morocco', goals: 0 },
    date: '1 December 2022 18:00',
    stadium: 'althumama'
  },
  {
    id: 37,
    group: 'G',
    match: 1,
    home: { name: 'Brazil', goals: 3 },
    away: { name: 'Serbia', goals: 1 },
    date: '24 November 2022 22:00',
    stadium: 'lusail'
  },
  {
    id: 38,
    group: 'G',
    match: 1,
    home: { name: 'Switzerland', goals: 1 },
    away: { name: 'Cameroon', goals: 1 },
    date: '24 November 2022 13:00',
    stadium: 'aljanoub'
  },
  {
    id: 39,
    group: 'G',
    match: 2,
    home: { name: 'Cameroon', goals: 2 },
    away: { name: 'Serbia', goals: 1 },
    date: '28 November 2022 13:00',
    stadium: 'aljanoub'
  },
  {
    id: 40,
    group: 'G',
    match: 2,
    home: { name: 'Brazil', goals: 1 },
    away: { name: 'Switzerland', goals: 0 },
    date: '28 November 2022 19:00',
    stadium: 's974'
  },
  {
    id: 41,
    group: 'G',
    match: 3,
    home: { name: 'Cameroon', goals: 0 },
    away: { name: 'Brazil', goals: 2 },
    date: '2 December 2022 22:00',
    stadium: 'lusail'
  },
  {
    id: 42,
    group: 'G',
    match: 3,
    home: { name: 'Serbia', goals: 1 },
    away: { name: 'Switzerland', goals: 1 },
    date: '2 December 2022 22:00',
    stadium: 's974'
  },
  {
    id: 43,
    group: 'H',
    match: 1,
    home: { name: 'Portugal', goals: 2 },
    away: { name: 'Ghana', goals: 2 },
    date: '24 November 2022 19:00',
    stadium: 's974'
  },
  {
    id: 44,
    group: 'H',
    match: 1,
    home: { name: 'Uruguay', goals: 2 },
    away: { name: 'South Korea', goals: 1 },
    date: '24 November 2022 16:00',
    stadium: 'education'
  },
  {
    id: 45,
    group: 'H',
    match: 2,
    home: { name: 'South Korea', goals: 1 },
    away: { name: 'Ghana', goals: 1 },
    date: '28 November 2022 16:00',
    stadium: 'education'
  },
  {
    id: 46,
    group: 'H',
    match: 2,
    home: { name: 'Portugal', goals: 0 },
    away: { name: 'Uruguay', goals: 1 },
    date: '28 November 2022 22:00',
    stadium: 'lusail'
  },
  {
    id: 47,
    group: 'H',
    match: 3,
    home: { name: 'South Korea', goals: 0 },
    away: { name: 'Portugal', goals: 1 },
    date: '2 December 2022 18:00',
    stadium: 'education'
  },
  {
    id: 48,
    group: 'H',
    match: 3,
    home: { name: 'Ghana', goals: 1 },
    away: { name: 'Uruguay', goals: 2 },
    date: '2 December 2022 18:00',
    stadium: 'aljanoub'
  },
  {
    id: 49,
    group: 'roundOf16',
    match: 4,
    home: { id: '1A', name: null, goals: null, penalties: null },
    winner: null,
    loser: null,
    away: { id: '2B', name: null, goals: null, penalties: null },
    date: '3 December 2022 18:00',
    stadium: 'khalifa'
  },
  {
    id: 50,
    group: 'roundOf16',
    match: 4,
    home: { id: '1C', name: null, goals: null, penalties: null },
    winner: null,
    loser: null,
    away: { id: '2D', name: null, goals: null, penalties: null },
    date: '3 December 2022 22:00',
    stadium: 'ahmad'
  },
  {
    id: 51,
    group: 'roundOf16',
    match: 4,
    home: { id: '1E', name: null, goals: null, penalties: null },
    winner: null,
    loser: null,
    away: { id: '2F', name: null, goals: null, penalties: null },
    date: '5 December 2022 18:00',
    stadium: 'aljanoub'
  },
  {
    id: 52,
    group: 'roundOf16',
    match: 4,
    home: { id: '1G', name: null, goals: null, penalties: null },
    winner: null,
    loser: null,
    away: { id: '2H', name: null, goals: null, penalties: null },
    date: '5 December 2022 22:00',
    stadium: 's974'
  },
  {
    id: 53,
    group: 'roundOf16',
    match: 4,
    home: { id: '1B', name: null, goals: null, penalties: null },
    winner: null,
    loser: null,
    away: { id: '2A', name: null, goals: null, penalties: null },
    date: '4 December 2022 22:00',
    stadium: 'albayt'
  },
  {
    id: 54,
    group: 'roundOf16',
    match: 4,
    home: { id: '1D', name: null, goals: null, penalties: null },
    winner: null,
    loser: null,
    away: { id: '2C', name: null, goals: null, penalties: null },
    date: '4 December 2022 18:00',
    stadium: 'althumama'
  },
  {
    id: 55,
    group: 'roundOf16',
    match: 4,
    home: { id: '1F', name: null, goals: null, penalties: null },
    winner: null,
    loser: null,
    away: { id: '2E', name: null, goals: null, penalties: null },
    date: '6 December 2022 18:00',
    stadium: 'education'
  },
  {
    id: 56,
    group: 'roundOf16',
    match: 4,
    home: { id: '1H', name: null, goals: null, penalties: null },
    winner: null,
    loser: null,
    away: { id: '2G', name: null, goals: null, penalties: null },
    date: '6 December 2022 22:00',
    stadium: 'lusail'
  },
  {
    id: 57,
    group: 'quarterFinals',
    match: 5,
    home: { id: 'GP49', name: null, goals: null, penalties: null },
    winner: null,
    loser: null,
    away: { id: 'GP50', name: null, goals: null, penalties: null },
    date: '9 December 2022 22:00',
    stadium: 'lusail'
  },
  {
    id: 58,
    group: 'quarterFinals',
    match: 5,
    home: { id: 'GP51', name: null, goals: null, penalties: null },
    winner: null,
    loser: null,
    away: { id: 'GP52', name: null, goals: null, penalties: null },
    date: '9 December 2022 18:00',
    stadium: 'education'
  },
  {
    id: 59,
    group: 'quarterFinals',
    match: 5,
    home: { id: 'GP53', name: null, goals: null, penalties: null },
    winner: null,
    loser: null,
    away: { id: 'GP54', name: null, goals: null, penalties: null },
    date: '10 December 2022 22:00',
    stadium: 'albayt'
  },
  {
    id: 60,
    group: 'quarterFinals',
    match: 5,
    home: { id: 'GP55', name: null, goals: null, penalties: null },
    winner: null,
    loser: null,
    away: { id: 'GP56', name: null, goals: null, penalties: null },
    date: '10 December 2022 18:00',
    stadium: 'althumama'
  },
  {
    id: 61,
    group: 'semifinals',
    match: 6,
    home: { id: 'GP57', name: null, goals: null, penalties: null },
    winner: null,
    loser: null,
    away: { id: 'GP58', name: null, goals: null, penalties: null },
    date: '13 December 2022 22:00',
    stadium: 'lusail'
  },
  {
    id: 62,
    group: 'semifinals',
    match: 6,
    home: { id: 'GP59', name: null, goals: null, penalties: null },
    winner: null,
    loser: null,
    away: { id: 'GP60', name: null, goals: null, penalties: null },
    date: '14 December 2022 22:00',
    stadium: 'albayt'
  },
  {
    id: 63,
    group: '3rdPlacePlayOff',
    match: 7,
    home: { id: 'PP61', name: null, goals: null, penalties: null },
    winner: null,
    loser: null,
    away: { id: 'PP62', name: null, goals: null, penalties: null },
    date: '17 December 2022 18:00',
    stadium: 'khalifa'
  },
  {
    id: 64,
    group: 'final',
    match: 7,
    home: { id: 'GP61', name: null, goals: null, penalties: null },
    winner: null,
    loser: null,
    away: { id: 'GP62', name: null, goals: null, penalties: null },
    date: '18 December 2022 18:00',
    stadium: 'lusail'
  },
]

export default listMatches;
