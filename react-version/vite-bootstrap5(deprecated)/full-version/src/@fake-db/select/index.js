import mock from '../mock'
const data = [
  {
    id: '1',
    value: 'The Shawshank Redemption',
    label: 'The Shawshank Redemption'
  },
  {
    id: '2',
    value: 'The Godfather',
    label: 'The Godfather'
  },
  {
    id: '3',
    value: 'The Godfather: Part II',
    label: 'The Godfather: Part II'
  },
  {
    id: '4',
    value: 'Pulp Fiction',
    label: 'Pulp Fiction'
  },
  {
    id: '5',
    value: 'The Good, the Bad and the Ugly',
    label: 'The Good, the Bad and the Ugly'
  },
  {
    id: '6',
    value: 'The Dark Knight',
    label: 'The Dark Knight'
  },
  {
    id: '7',
    value: '12 Angry Men',
    label: '12 Angry Men'
  },
  {
    id: '8',
    value: "Schindler's List",
    label: "Schindler's List"
  },
  {
    id: '9',
    value: 'The Lord of the Rings: The Return of the King',
    label: 'The Lord of the Rings: The Return of the King'
  },
  {
    id: '10',
    value: 'Fight Club',
    label: 'Fight Club'
  },
  {
    id: '11',
    value: 'Star Wars: Episode V - The Empire Strikes Back',
    label: 'Star Wars: Episode V - The Empire Strikes Back'
  },
  {
    id: '12',
    value: 'The Lord of the Rings: The Fellowship of the Ring',
    label: 'The Lord of the Rings: The Fellowship of the Ring'
  },
  {
    id: '13',
    value: "One Flew Over the Cuckoo's Nest",
    label: "One Flew Over the Cuckoo's Nest"
  },
  {
    id: '14',
    value: 'Inception',
    label: 'Inception'
  },
  {
    id: '15',
    value: 'Goodfellas',
    label: 'Goodfellas'
  },
  {
    id: '16',
    value: 'Star Wars',
    label: 'Star Wars'
  },
  {
    id: '17',
    value: 'Seven Samurai',
    label: 'Seven Samurai'
  },
  {
    id: '18',
    value: 'Forrest Gump',
    label: 'Forrest Gump'
  },
  {
    id: '19',
    value: 'The Matrix',
    label: 'The Matrix'
  },
  {
    id: '20',
    value: 'The Lord of the Rings: The Two Towers',
    label: 'The Lord of the Rings: The Two Towers'
  },
  {
    id: '21',
    value: 'City of God',
    label: 'City of God'
  },
  {
    id: '22',
    value: 'Se7en',
    label: 'Se7en'
  },
  {
    id: '23',
    value: 'The Silence of the Lambs',
    label: 'The Silence of the Lambs'
  },
  {
    id: '24',
    value: 'Once Upon a Time in the West',
    label: 'Once Upon a Time in the West'
  },
  {
    id: '25',
    value: 'Casablanca',
    label: 'Casablanca'
  },
  {
    id: '26',
    value: 'The Usual Suspects',
    label: 'The Usual Suspects'
  },
  {
    id: '27',
    value: 'Raiders of the Lost Ark',
    label: 'Raiders of the Lost Ark'
  },
  {
    id: '28',
    value: 'Rear Window',
    label: 'Rear Window'
  },
  {
    id: '29',
    value: "It's a Wonderful Life",
    label: "It's a Wonderful Life"
  },
  {
    id: '30',
    value: 'Psycho',
    label: 'Psycho'
  },
  {
    id: '31',
    value: 'Léon: The Professional',
    label: 'Léon: The Professional'
  },
  {
    id: '32',
    value: 'Sunset Blvd.',
    label: 'Sunset Blvd.'
  },
  {
    id: '33',
    value: 'American History X',
    label: 'American History X'
  },
  {
    id: '34',
    value: 'Apocalypse Now',
    label: 'Apocalypse Now'
  },
  {
    id: '35',
    value: 'Terminator 2: Judgment Day',
    label: 'Terminator 2: Judgment Day'
  },
  {
    id: '36',
    value: 'Saving Private Ryan',
    label: 'Saving Private Ryan'
  },
  {
    id: '37',
    value: 'Memento',
    label: 'Memento'
  },
  {
    id: '38',
    value: 'City Lights',
    label: 'City Lights'
  },
  {
    id: '39',
    value: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb'
  },
  {
    id: '40',
    value: 'Alien',
    label: 'Alien'
  },
  {
    id: '41',
    value: 'Modern Times',
    label: 'Modern Times'
  },
  {
    id: '42',
    value: 'Spirited Away',
    label: 'Spirited Away'
  },
  {
    id: '43',
    value: 'North by Northwest',
    label: 'North by Northwest'
  },
  {
    id: '44',
    value: 'Back to the Future',
    label: 'Back to the Future'
  },
  {
    id: '45',
    value: 'Life Is Beautiful',
    label: 'Life Is Beautiful'
  },
  {
    id: '46',
    value: 'The Shining',
    label: 'The Shining'
  },
  {
    id: '47',
    value: 'The Pianist',
    label: 'The Pianist'
  },
  {
    id: '48',
    value: 'Citizen Kane',
    label: 'Citizen Kane'
  },
  {
    id: '49',
    value: 'The Departed',
    label: 'The Departed'
  },
  {
    id: '50',
    value: 'M',
    label: 'M'
  },
  {
    id: '51',
    value: 'Paths of Glory',
    label: 'Paths of Glory'
  },
  {
    id: '52',
    value: 'Vertigo',
    label: 'Vertigo'
  },
  {
    id: '53',
    value: 'Django Unchained',
    label: 'Django Unchained'
  },
  {
    id: '54',
    value: 'Double Indemnity',
    label: 'Double Indemnity'
  },
  {
    id: '55',
    value: 'The Dark Knight Rises',
    label: 'The Dark Knight Rises'
  },
  {
    id: '56',
    value: 'Aliens',
    label: 'Aliens'
  },
  {
    id: '57',
    value: 'Taxi Driver',
    label: 'Taxi Driver'
  },
  {
    id: '58',
    value: 'American Beauty',
    label: 'American Beauty'
  },
  {
    id: '59',
    value: 'The Green Mile',
    label: 'The Green Mile'
  },
  {
    id: '60',
    value: 'Gladiator',
    label: 'Gladiator'
  },
  {
    id: '61',
    value: 'The Intouchables',
    label: 'The Intouchables'
  },
  {
    id: '62',
    value: 'WALL·E',
    label: 'WALL·E'
  },
  {
    id: '63',
    value: 'The Lives of Others',
    label: 'The Lives of Others'
  },
  {
    id: '64',
    value: 'Toy Story 3',
    label: 'Toy Story 3'
  },
  {
    id: '65',
    value: 'The Great Dictator',
    label: 'The Great Dictator'
  },
  {
    id: '66',
    value: 'The Prestige',
    label: 'The Prestige'
  },
  {
    id: '67',
    value: 'A Clockwork Orange',
    label: 'A Clockwork Orange'
  },
  {
    id: '68',
    value: 'Lawrence of Arabia',
    label: 'Lawrence of Arabia'
  },
  {
    id: '69',
    value: 'Amélie',
    label: 'Amélie'
  },
  {
    id: '70',
    value: 'To Kill a Mockingbird',
    label: 'To Kill a Mockingbird'
  },
  {
    id: '71',
    value: 'Reservoir Dogs',
    label: 'Reservoir Dogs'
  },
  {
    id: '72',
    value: 'Das Boot',
    label: 'Das Boot'
  },
  {
    id: '73',
    value: 'The Lion King',
    label: 'The Lion King'
  },
  {
    id: '74',
    value: 'Cinema Paradiso',
    label: 'Cinema Paradiso'
  },
  {
    id: '75',
    value: 'Star Wars: Episode VI - Return of the Jedi',
    label: 'Star Wars: Episode VI - Return of the Jedi'
  },
  {
    id: '76',
    value: 'The Treasure of the Sierra Madre',
    label: 'The Treasure of the Sierra Madre'
  },
  {
    id: '77',
    value: 'The Third Man',
    label: 'The Third Man'
  },
  {
    id: '78',
    value: 'Once Upon a Time in America',
    label: 'Once Upon a Time in America'
  },
  {
    id: '79',
    value: 'Requiem for a Dream',
    label: 'Requiem for a Dream'
  },
  {
    id: '80',
    value: 'Eternal Sunshine of the Spotless Mind',
    label: 'Eternal Sunshine of the Spotless Mind'
  },
  {
    id: '81',
    value: 'Full Metal Jacket',
    label: 'Full Metal Jacket'
  },
  {
    id: '82',
    value: 'Oldboy',
    label: 'Oldboy'
  },
  {
    id: '83',
    value: 'Braveheart',
    label: 'Braveheart'
  },
  {
    id: '84',
    value: 'L.A. Confidential',
    label: 'L.A. Confidential'
  },
  {
    id: '85',
    value: 'Bicycle Thieves',
    label: 'Bicycle Thieves'
  },
  {
    id: '86',
    value: 'Chinatown',
    label: 'Chinatown'
  },
  {
    id: '87',
    value: "Singin' in the Rain",
    label: "Singin' in the Rain"
  },
  {
    id: '88',
    value: 'Princess Mononoke',
    label: 'Princess Mononoke'
  },
  {
    id: '89',
    value: 'Monty Python and the Holy Grail',
    label: 'Monty Python and the Holy Grail'
  },
  {
    id: '90',
    value: 'Metropolis',
    label: 'Metropolis'
  },
  {
    id: '91',
    value: 'Rashomon',
    label: 'Rashomon'
  },
  {
    id: '92',
    value: 'Some Like It Hot',
    label: 'Some Like It Hot'
  },
  {
    id: '93',
    value: 'Amadeus',
    label: 'Amadeus'
  },
  {
    id: '94',
    value: '2001: A Space Odyssey',
    label: '2001: A Space Odyssey'
  },
  {
    id: '95',
    value: 'All About Eve',
    label: 'All About Eve'
  },
  {
    id: '96',
    value: 'Witness for the Prosecution',
    label: 'Witness for the Prosecution'
  },
  {
    id: '97',
    value: 'The Sting',
    label: 'The Sting'
  },
  {
    id: '98',
    value: 'The Apartment',
    label: 'The Apartment'
  },
  {
    id: '99',
    value: 'Grave of the Fireflies',
    label: 'Grave of the Fireflies'
  },
  {
    id: '100',
    value: 'Indiana Jones and the Last Crusade',
    label: 'Indiana Jones and the Last Crusade'
  }
]

mock.onGet('/api/select/data').reply(config => {
  if (config.query.length) {
    const queryLowerCase = config.query.toLowerCase()
    return [200, data.filter(i => i.value.toLowerCase().includes(queryLowerCase))]
  }
  return [200, data]
})
