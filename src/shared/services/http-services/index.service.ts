import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { throwError } from 'shared/utils';

type ConstructorArg = {
  token?: string;
  baseURL: string;
};

export class HttpService {
  private _axiosService: AxiosInstance;

  constructor({ token, baseURL }: ConstructorArg) {
    this._axiosService = axios.create({
      baseURL,
      headers: { 'Content-Type': 'application/json' },
    });

    if (token) this.requestMiddleware(token);
  }

  private static validateToken(token: string) {
    if (!token) {
      throwError('MissingTokenError', 'token must be provided', HttpService.validateToken);
    }
  }

  private requestMiddleware(token: string) {
    this._axiosService.interceptors.request.use(
      function appendAuthorizationToRequest(config) {
        HttpService.validateToken(token);
        config.headers!.Authorization = `Bearer ${token}`;
        return config;
      },
      function (error: Error) {
        return Promise.reject(error);
      }
    );
  }

  public httpGetRequest<ResponseType = Record<string, any>, C = any>(
    url: string,
    config?: AxiosRequestConfig<C>
  ) {
    return this._axiosService.get<ResponseType>(url, config);
  }

  public httpPostRequest<D = Record<string, string>, ResponseType = any, C = any>(
    url: string,
    data: D,
    config?: AxiosRequestConfig<C extends D ? any : any>
  ) {
    return this._axiosService.post<ResponseType>(url, data, config);
  }

  public httpPutRequest<D = Record<string, string>, ResponseType = any, C = any>(
    url: string,
    data: D,
    config?: AxiosRequestConfig<C extends D ? any : any>
  ) {
    return this._axiosService.put<ResponseType>(url, data, config);
  }

  public httpPatchRequest<D = Record<string, string>, ResponseType = any, C = any>(
    url: string,
    data: D,
    config?: AxiosRequestConfig<C extends D ? any : any>
  ) {
    return this._axiosService.patch<ResponseType>(url, data, config);
  }

  public httpDeleteRequest<ResponseType = any, C = any>(
    url: string,
    config?: AxiosRequestConfig<C>
  ) {
    return this._axiosService.delete<ResponseType>(url, config);
  }
}
