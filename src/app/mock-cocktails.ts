import { Cocktail } from './cocktail';

export const COCKTAILS: Cocktail[] = [
  {
    id: 1,
    category: 'Unforgettables',
    name: 'Alexander',
    type: 'Cocktail',
    primaryAlcohol: [
      'cognac',
      'creme de cacao'
    ],
    served: [
      'straight up',
      'without ice'
    ],
    garnish: 'nutmeg',
    drinkware: 'cocktail glass',
    ingridients: [
      {
        name: 'cognac',
        volume: '3',
        unit: 'cl'
      },
      {
        name: 'brown creme de cacao',
        volume: '3',
        unit: 'cl'
      },
      {
        name: 'light cream',
        volume: '3',
        unit: 'cl'
      }
    ],
    preparation: 'Shake all ingredients with ice and strain contents into a cocktail glass. Sprinkle nutmeg on top and serve.'
  },
  {
    id: 2,
    category: 'Unforgettables',
    name: 'Americano',
    type: 'mixed drink',
    primaryAlcohol: [
      'vermouth',
      'campari'
    ],
    served: [
      'on the rocks',
      'poured over ice'
    ],
    garnish: 'half an orange slice',
    drinkware: 'old fashioned glass',
    ingridients: [
      {
        name: 'campari',
        volume: '3',
        unit: 'cl'
      },
      {
        name: 'red vermouth',
        volume: '3',
        unit: 'cl'
      },
      {
        name: 'soda',
        volume: '1',
        unit: 'splash'
      }
    ],
    preparation: 'Pour the Campari and vermouth over ice into glass, add a splash of soda water and garnish with half orange slice.'
  },
  {
    id: 3,
    category: 'Unforgettables',
    name: 'Angel Face',
    type: 'cocktail',
    garnish: null,
    primaryAlcohol: [
      'gin',
      'calvados'
    ],
    served: [
      'straight up',
      'without ice'
    ],
    //garnish: 'half an orange slice',
    drinkware: 'cocktail glass',
    ingridients: [
      {
        name: 'gin',
        volume: '3',
        unit: 'cl'
      },
      {
        name: 'apricot brandy',
        volume: '3',
        unit: 'cl'
      },
      {
        name: 'calvados',
        volume: '3',
        unit: 'cl'
      }
    ],
    preparation: 'Shake all ingredients with ice and strain contents into a cocktail glass.'
  },
  {
    id: 4,
    category: 'Unforgettables',
    name: 'Aviation',
    type: 'cocktail',
    garnish: 'cherry',
    primaryAlcohol: 'gin',
    served: [
      'straight up',
      'without ice'
    ],
    drinkware: 'cocktail glass',
    ingridients: [
      {
        name: 'gin',
        volume: '4.5',
        unit: 'cl'
      },
      {
        name: 'lemon juice',
        volume: '1.5',
        unit: 'cl'
      },
      {
        name: 'maraschino liqueur',
        volume: '1.5',
        unit: 'cl'
      },
      {
        name: 'creme de violette liqueur',
        volume: '0.75',
        unit: 'cl'
      }
    ],
    preparation: 'Add all ingredients into cocktail shaker filled with ice. Shake well and strain into cocktail glass. Garnish with a cherry.'
  },
  {
    id: 5,
    category: 'Unforgettables',
    name: 'Bacardi',
    type: 'cocktail',
    garnish: 'lime',
    primaryAlcohol: 'rum',
    served: [
      'straight up'
    ],
    drinkware: 'cocktail glass',
    ingridients: [
      {
        name: 'white rum',
        volume: '4.5',
        unit: 'cl'
      },
      {
        name: 'lime juice',
        volume: '2.5',
        unit: 'cl'
      },
      {
        name: 'grenadine syrup',
        volume: '1',
        unit: 'cl'
      }
    ],
    preparation: 'Shake together with ice. Strain into glass and serve.'
  },
  {
    id: 6,
    category: 'Unforgettables',
    name: 'Between the Sheets',
    type: 'cocktail',
    garnish: null,
    primaryAlcohol: [
      'rum',
      'cognac',
      'triple sec'
    ],
    served: [
      'straight up',
      'without ice'
    ],
    drinkware: 'cocktail glass',
    ingridients: [
      {
        name: 'white rum',
        volume: '3',
        unit: 'cl'
      },
      {
        name: 'cognac',
        volume: '3',
        unit: 'cl'
      },
      {
        name: 'triple sec',
        volume: '3',
        unit: 'cl'
      },
      {
        name: 'fresh lemon juice',
        volume: '2',
        unit: 'cl'
      }
    ],
    preparation: 'Pour all ingredients into shaker with ice cubes, shake, strain into chilled cocktail glass.'
  },
  {
    id: 7,
    category: 'Unforgettables',
    name: 'Casino',
    type: 'cocktail',
    garnish: 'lemon twist and maraschino cherry',
    primaryAlcohol: [
      'gin',
    ],
    served: [
      'straight up',
      'without ice'
    ],
    drinkware: 'cocktail glass',
    ingridients: [
      {
        name: 'gin (Old Tom)',
        volume: '4',
        unit: 'cl'
      },
      {
        name: 'maraschino',
        volume: '1',
        unit: 'cl'
      },
      {
        name: 'orange bitters',
        volume: '1',
        unit: 'cl'
      },
      {
        name: 'fresh lemon juice',
        volume: '1',
        unit: 'cl'
      }
    ],
    preparation: 'Pour all ingredients into shaker with ice cubes. Shake well. Strain into chilled cocktail glass. Garnish with a lemon twist and a maraschino cherry. Serve without a straw'
  },
  {
    id: 8,
    category: 'Unforgettables',
    name: 'Clover Club',
    type: 'cocktail',
    garnish: null,
    primaryAlcohol: [
      'gin',
    ],
    served: [
      'straight up',
      'without ice'
    ],
    drinkware: 'cocktail glass',
    ingridients: [
      {
        name: 'gin',
        volume: '4.5',
        unit: 'cl'
      },
      {
        name: 'lemon juice',
        volume: '1.5',
        unit: 'cl'
      },
      {
        name: 'raspberry syrup',
        volume: '1.5',
        unit: 'cl'
      },
      {
        name: 'egg white',
        volume: '1',
        unit: ''
      }
    ],
    preparation: 'Dry shake ingredients to emulsify, add ice, shake and served straight up.'
  }
]
