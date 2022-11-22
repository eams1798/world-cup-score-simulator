const listMatches = [{
    id: 1,
    group: 'A',
    match: 1,
    home: { name: 'Qatar', goals: 0 },
    away: { name: 'Ecuador', goals: 2 },
    date: '20 November 2022 19:00',
    stadium: 'albayt'
  },
  {
    id: 2,
    group: 'A',
    match: 1,
    home: { name: 'Senegal', goals: 0 },
    away: { name: 'Netherlands', goals: 2 },
    date: '21 November 2022 19:00',
    stadium: 'althumama'
  },
  {
    id: 3,
    group: 'A',
    match: 2,
    home: { name: 'Netherlands', goals: null },
    away: { name: 'Ecuador', goals: null },
    date: '25 November 2022 19:00',
    stadium: 'khalifa'
  },
  {
    id: 4,
    group: 'A',
    match: 2,
    home: { name: 'Qatar', goals: null },
    away: { name: 'Senegal', goals: null },
    date: '25 November 2022 16:00',
    stadium: 'althumama'
  },
  {
    id: 5,
    group: 'A',
    match: 3,
    home: { name: 'Netherlands', goals: null },
    away: { name: 'Qatar', goals: null },
    date: '29 November 2022 18:00',
    stadium: 'albayt'
  },
  {
    id: 6,
    group: 'A',
    match: 3,
    home: { name: 'Ecuador', goals: null },
    away: { name: 'Senegal', goals: null },
    date: '29 November 2022 18:00',
    stadium: 'khalifa'
  },
  {
    id: 7,
    group: 'B',
    match: 1,
    home: { name: 'England', goals: 6 },
    away: { name: 'Iran', goals: 2 },
    date: '21 November 2022 16:00',
    stadium: 'khalifa'
  },
  {
    id: 8,
    group: 'B',
    match: 1,
    home: { name: 'United States', goals: 1 },
    away: { name: 'Wales', goals: 1 },
    date: '21 November 2022 22:00',
    stadium: 'ahmad'
  },
  {
    id: 9,
    group: 'B',
    match: 2,
    home: { name: 'Wales', goals: null },
    away: { name: 'Iran', goals: null },
    date: '25 November 2022 13:00',
    stadium: 'ahmad'
  },
  {
    id: 10,
    group: 'B',
    match: 2,
    home: { name: 'England', goals: null },
    away: { name: 'United States', goals: null },
    date: '25 November 2022 22:00',
    stadium: 'albayt'
  },
  {
    id: 11,
    group: 'B',
    match: 3,
    home: { name: 'Wales', goals: null },
    away: { name: 'England', goals: null },
    date: '29 November 2022 22:00',
    stadium: 'ahmad'
  },
  {
    id: 12,
    group: 'B',
    match: 3,
    home: { name: 'Iran', goals: null },
    away: { name: 'United States', goals: null },
    date: '29 November 2022 22:00',
    stadium: 'althumama'
  },
  {
    id: 13,
    group: 'C',
    match: 1,
    home: { name: 'Argentina', goals: null },
    away: { name: 'Saudi Arabia', goals: null },
    date: '22 November 2022 13:00',
    stadium: 'lusail'
  },
  {
    id: 14,
    group: 'C',
    match: 1,
    home: { name: 'Mexico', goals: null },
    away: { name: 'Poland', goals: null },
    date: '22 November 2022 19:00',
    stadium: 's974'
  },
  {
    id: 15,
    group: 'C',
    match: 2,
    home: { name: 'Poland', goals: null },
    away: { name: 'Saudi Arabia', goals: null },
    date: '26 November 2022 16:00',
    stadium: 'education'
  },
  {
    id: 16,
    group: 'C',
    match: 2,
    home: { name: 'Argentina', goals: null },
    away: { name: 'Mexico', goals: null },
    date: '26 November 2022 22:00',
    stadium: 'lusail'
  },
  {
    id: 17,
    group: 'C',
    match: 3,
    home: { name: 'Poland', goals: null },
    away: { name: 'Argentina', goals: null },
    date: '30 November 2022 22:00',
    stadium: 's974'
  },
  {
    id: 18,
    group: 'C',
    match: 3,
    home: { name: 'Saudi Arabia', goals: null },
    away: { name: 'Mexico', goals: null },
    date: '30 November 2022 22:00',
    stadium: 'lusail'
  },
  {
    id: 19,
    group: 'D',
    match: 1,
    home: { name: 'France', goals: null },
    away: { name: 'Australia', goals: null },
    date: '22 November 2022 22:00',
    stadium: 'aljanoub'
  },
  {
    id: 20,
    group: 'D',
    match: 1,
    home: { name: 'Denmark', goals: null },
    away: { name: 'Tunisia', goals: null },
    date: '22 November 2022 16:00',
    stadium: 'education'
  },
  {
    id: 21,
    group: 'D',
    match: 2,
    home: { name: 'Tunisia', goals: null },
    away: { name: 'Australia', goals: null },
    date: '26 November 2022 13:00',
    stadium: 'aljanoub'
  },
  {
    id: 22,
    group: 'D',
    match: 2,
    home: { name: 'France', goals: null },
    away: { name: 'Denmark', goals: null },
    date: '26 November 2022 19:00',
    stadium: 's974'
  },
  {
    id: 23,
    group: 'D',
    match: 3,
    home: { name: 'Tunisia', goals: null },
    away: { name: 'France', goals: null },
    date: '30 November 2022 18:00',
    stadium: 'education'
  },
  {
    id: 24,
    group: 'D',
    match: 3,
    home: { name: 'Australia', goals: null },
    away: { name: 'Denmark', goals: null },
    date: '30 November 2022 18:00',
    stadium: 'aljanoub'
  },
  {
    id: 25,
    group: 'E',
    match: 1,
    home: { name: 'Spain', goals: null },
    away: { name: 'Costa Rica', goals: null },
    date: '23 November 2022 19:00',
    stadium: 'althumama'
  },
  {
    id: 26,
    group: 'E',
    match: 1,
    home: { name: 'Germany', goals: null },
    away: { name: 'Japan', goals: null },
    date: '23 November 2022 16:00',
    stadium: 'khalifa'
  },
  {
    id: 27,
    group: 'E',
    match: 2,
    home: { name: 'Japan', goals: null },
    away: { name: 'Costa Rica', goals: null },
    date: '27 November 2022 13:00',
    stadium: 'ahmad'
  },
  {
    id: 28,
    group: 'E',
    match: 2,
    home: { name: 'Spain', goals: null },
    away: { name: 'Germany', goals: null },
    date: '27 November 2022 22:00',
    stadium: 'albayt'
  },
  {
    id: 29,
    group: 'E',
    match: 3,
    home: { name: 'Japan', goals: null },
    away: { name: 'Spain', goals: null },
    date: '1 December 2022 22:00',
    stadium: 'khalifa'
  },
  {
    id: 30,
    group: 'E',
    match: 3,
    home: { name: 'Costa Rica', goals: null },
    away: { name: 'Germany', goals: null },
    date: '1 December 2022 22:00',
    stadium: 'albayt'
  },
  {
    id: 31,
    group: 'F',
    match: 1,
    home: { name: 'Belgium', goals: null },
    away: { name: 'Canada', goals: null },
    date: '23 November 2022 22:00',
    stadium: 'ahmad'
  },
  {
    id: 32,
    group: 'F',
    match: 1,
    home: { name: 'Morocco', goals: null },
    away: { name: 'Croatia', goals: null },
    date: '23 November 2022 13:00',
    stadium: 'albayt'
  },
  {
    id: 33,
    group: 'F',
    match: 2,
    home: { name: 'Croatia', goals: null },
    away: { name: 'Canada', goals: null },
    date: '27 November 2022 19:00',
    stadium: 'khalifa'
  },
  {
    id: 34,
    group: 'F',
    match: 2,
    home: { name: 'Belgium', goals: null },
    away: { name: 'Morocco', goals: null },
    date: '27 November 2022 16:00',
    stadium: 'althumama'
  },
  {
    id: 35,
    group: 'F',
    match: 3,
    home: { name: 'Croatia', goals: null },
    away: { name: 'Belgium', goals: null },
    date: '1 December 2022 18:00',
    stadium: 'ahmad'
  },
  {
    id: 36,
    group: 'F',
    match: 3,
    home: { name: 'Canada', goals: null },
    away: { name: 'Morocco', goals: null },
    date: '1 December 2022 18:00',
    stadium: 'althumama'
  },
  {
    id: 37,
    group: 'G',
    match: 1,
    home: { name: 'Brazil', goals: null },
    away: { name: 'Serbia', goals: null },
    date: '24 November 2022 22:00',
    stadium: 'lusail'
  },
  {
    id: 38,
    group: 'G',
    match: 1,
    home: { name: 'Switzerland', goals: null },
    away: { name: 'Cameroon', goals: null },
    date: '24 November 2022 13:00',
    stadium: 'aljanoub'
  },
  {
    id: 39,
    group: 'G',
    match: 2,
    home: { name: 'Cameroon', goals: null },
    away: { name: 'Serbia', goals: null },
    date: '28 November 2022 13:00',
    stadium: 'aljanoub'
  },
  {
    id: 40,
    group: 'G',
    match: 2,
    home: { name: 'Brazil', goals: null },
    away: { name: 'Switzerland', goals: null },
    date: '28 November 2022 19:00',
    stadium: 's974'
  },
  {
    id: 41,
    group: 'G',
    match: 3,
    home: { name: 'Cameroon', goals: null },
    away: { name: 'Brazil', goals: null },
    date: '2 December 2022 22:00',
    stadium: 'lusail'
  },
  {
    id: 42,
    group: 'G',
    match: 3,
    home: { name: 'Serbia', goals: null },
    away: { name: 'Switzerland', goals: null },
    date: '2 December 2022 22:00',
    stadium: 's974'
  },
  {
    id: 43,
    group: 'H',
    match: 1,
    home: { name: 'Portugal', goals: null },
    away: { name: 'Ghana', goals: null },
    date: '24 November 2022 19:00',
    stadium: 's974'
  },
  {
    id: 44,
    group: 'H',
    match: 1,
    home: { name: 'Uruguay', goals: null },
    away: { name: 'South Korea', goals: null },
    date: '24 November 2022 16:00',
    stadium: 'education'
  },
  {
    id: 45,
    group: 'H',
    match: 2,
    home: { name: 'South Korea', goals: null },
    away: { name: 'Ghana', goals: null },
    date: '28 November 2022 16:00',
    stadium: 'education'
  },
  {
    id: 46,
    group: 'H',
    match: 2,
    home: { name: 'Portugal', goals: null },
    away: { name: 'Uruguay', goals: null },
    date: '28 November 2022 22:00',
    stadium: 'lusail'
  },
  {
    id: 47,
    group: 'H',
    match: 3,
    home: { name: 'South Korea', goals: null },
    away: { name: 'Portugal', goals: null },
    date: '2 December 2022 18:00',
    stadium: 'education'
  },
  {
    id: 48,
    group: 'H',
    match: 3,
    home: { name: 'Ghana', goals: null },
    away: { name: 'Uruguay', goals: null },
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
