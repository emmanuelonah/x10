import axios from 'axios';

import { HttpService } from './index.service';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('HttpService', () => {
  const baseURL = 'https://api.example.com';
  const token = 'test-token';

  beforeEach(() => {
    mockedAxios.create.mockReturnThis();
  });

  it('should create an axios instance with baseURL and default headers', () => {
    new HttpService({ token, baseURL });
    expect(mockedAxios.create).toHaveBeenCalledWith({
      baseURL,
      headers: { 'Content-Type': 'application/json' },
    });
  });

  it.skip('should add Authorization header if token is provided', () => {
    const service = new HttpService({ token, baseURL });
    const testConfig: { headers: Record<string, string> } = { headers: {} };
    service.httpGetRequest('/test', testConfig);
    expect(testConfig.headers.Authorization).toBe(`Bearer ${token}`);
  });

  describe('HTTP method tests', () => {
    let service: HttpService;

    beforeEach(() => {
      service = new HttpService({ baseURL });
    });

    it('should send a GET request with correct URL and config', async () => {
      const url = '/get';
      const config = {};
      await service.httpGetRequest(url, config);
      expect(mockedAxios.get).toHaveBeenCalledWith(url, config);
    });

    it('should send a POST request with correct URL, data, and config', async () => {
      const url = '/post';
      const data = { key: 'value' };
      const config = {};
      await service.httpPostRequest(url, data, config);
      expect(mockedAxios.post).toHaveBeenCalledWith(url, data, config);
    });

    it('should send a PUT request with correct URL, data, and config', async () => {
      const url = '/put';
      const data = { key: 'value' };
      const config = {};
      await service.httpPutRequest(url, data, config);
      expect(mockedAxios.put).toHaveBeenCalledWith(url, data, config);
    });

    it('should send a PATCH request with correct URL, data, and config', async () => {
      const url = '/patch';
      const data = { key: 'value' };
      const config = {};
      await service.httpPatchRequest(url, data, config);
      expect(mockedAxios.patch).toHaveBeenCalledWith(url, data, config);
    });

    it('should send a DELETE request with correct URL and config', async () => {
      const url = '/delete';
      const config = {};
      await service.httpDeleteRequest(url, config);
      expect(mockedAxios.delete).toHaveBeenCalledWith(url, config);
    });
  });
});
