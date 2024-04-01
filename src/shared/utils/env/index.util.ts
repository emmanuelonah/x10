const __DEV__ = process.env.NODE_ENV === 'development';
const __PROD__ = process.env.NODE_ENV === 'production';
const __TEST__ = process.env.NODE_ENV === 'test';

export { __DEV__, __PROD__, __TEST__ };
