interface State {
  flag: string;
  name: string;
  population: string;
}

const states: State[] = [
  {
    name: 'Arkansas',
    population: '2.978M',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
  },
  {
    name: 'California',
    population: '39.14M',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
  },
  {
    name: 'Florida',
    population: '20.27M',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
  },
  {
    name: 'Texas',
    population: '27.47M',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
  }
];

export { State, states };
