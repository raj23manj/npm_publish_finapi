import axios, { Axios, AxiosRequestHeaders, AxiosResponse } from "axios";

declare interface RequestI {
  get(url: string, data: any): any;
  post(url: string, data: any): any;
  patch(url: string, data: any): any;
}

interface RequestParamsObject {
  url: string,
  data?: any,
}

interface StringObject {
  [key: string]: string;
}

interface ConstructorParamsObject {
  hostUrl: string,
  token?: string,
  headers?: StringObject,
}

interface ErroResponse {
  error: {
    status: number | string | null,
    message: string | null,
    errors: null | string | Array<string>,
  }
}

export class Api implements RequestI {

  private axios_client;

  private hostUrl: string;
  private token: string | null;
  private headers: StringObject | undefined;

  constructor(options: ConstructorParamsObject) {
    this.hostUrl = options.hostUrl;
    this.token = options.token || null;
    this.headers = options.headers;

    let headers = {
      'Authorization' : 'Bearer ' + this.token,
      'Content-Type': 'application/json',
      ...options.headers
    }

    this.axios_client = axios.create({
      baseURL: options.hostUrl,
      headers: headers,
      'maxRedirects' : 0,
    });

    //interceptor for response
    this.axios_client.interceptors.response.use(this.handleSuccess, this.handleFailure)

    this.axios_client.interceptors.request.use(request => {
      return request
    })
  }

  public get(url: string, data?: any): any {
    return this.axios_client.get(url, data);
  }

  public post(url: string, data: any): any {
    return this.axios_client.post(url, data);
  }

  public patch(url: string, data?: any): any {
    return this.axios_client.patch(url, data);
  }

  private handleSuccess(response: AxiosResponse) {
    return response.data;
  }
  private handleFailure(error: any) {
    return Promise.reject(error.response.data as ErroResponse);
  }

  // return custom client
  public customAxiosClient(headers: AxiosRequestHeaders): Axios {
    const customClient = axios.create({
      baseURL: this.hostUrl,
      headers: headers,
      'maxRedirects' : 0,
    });
    // setting interceptors for custom client
    customClient.interceptors.response.use(this.handleSuccess, this.handleFailure)
    customClient.interceptors.request.use(request => {
      return request
    })

    return customClient;
  }
}
