import { colors } from './index';

describe('colors', () => {
  it('should confirm colors are valid', () => {
    expect({
      white400: '#fff',
      white300: '#FDFEFF',
      white200: '#F7F7F7',
      white100: '#F7F7F7',
      white50: '#e8eaec',

      warning400: '#FF7A00',
      warning300: '#FF9534',
      warning200: '#FFB067',
      warning100: '#FFD0A5',
      warning50: '#FFF7EF',

      secondary400: '#181818',
      secondary300: '#737373',
      secondary200: '#B0B0B0',
      secondary100: '#DFDFDF',

      error400: '#FF0000',
      error300: '#FF5656',
      error200: '#FDA1A1',
      error100: '#FCDEDE',

      success400: '#02A543',
      success300: '#5CC486',
      success200: '#A2DDB9',
      success100: '#D4EEDE',

      magenta400: '#CD00D1',
      magenta300: '#DE5BE0',
      magenta200: '#EBA1ED',
      magenta100: '#F4D4F5',

      primary400: '#0038FF',
      primary300: '#5B7FFE',
      primary200: '#A1B5FD',
      primary100: '#D4DDFC',

      dark500: '#000',
      dark400: '#111015',
      dark300: '#4D4D4D',
      dark200: '#1b1920',
      dark100: '#C9C9C9',

      grey400: '#8B5CF6',
      grey300: '#242426',
      grey200: '#4f4e50',
      grey100: '#cacacb',

      accent400: '#E7E7E7',
      accent300: '#EEEEEE',
      accent200: '#F3F3F3',
      accent100: '#F7F7F7',

      neutral400: '#8B5CF6',
      neutral300: '#d9dbe9',
      neutral200: '#e8e8e8',
      neutral100: '#bdc1c6',
    }).toMatchObject(colors);
  });
});
