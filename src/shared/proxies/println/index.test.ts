import * as utils from 'shared/utils';

import { println } from './index.proxy';

jest.mock('shared/utils');

const consoleSpy = {
  log: jest.spyOn(console, 'log').mockImplementation(() => {}),
  info: jest.spyOn(console, 'info').mockImplementation(() => {}),
  warn: jest.spyOn(console, 'warn').mockImplementation(() => {}),
  error: jest.spyOn(console, 'error').mockImplementation(() => {}),
  debug: jest.spyOn(console, 'debug').mockImplementation(() => {}),
  trace: jest.spyOn(console, 'trace').mockImplementation(() => {}),
  table: jest.spyOn(console, 'table').mockImplementation(() => {}),
};

describe('println', () => {
  afterEach(() => {
    jest.clearAllMocks();
    Object.values(consoleSpy).forEach((spy) => spy.mockClear());
  });

  describe('positive', () => {
    beforeEach(() => {
      (utils.__DEV__ as boolean) = true;
    });

    it('should log messages in development mode', () => {
      println.log('Test log message');

      expect(consoleSpy.log).toHaveBeenCalledWith('✅', 'Test log message');
    });
  });

  describe('negative', () => {
    beforeEach(() => {
      (utils.__DEV__ as boolean) = false;
    });

    it('should not log messages in production mode', () => {
      println.log('Test log message');

      expect(consoleSpy.log).not.toHaveBeenCalled();
    });
  });
});
