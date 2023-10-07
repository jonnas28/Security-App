// import { TokenStorageService } from "./token-storage.service";

export class ApiBase {
  // private tokenService = new TokenStorageService;
  protected constructor() {
  }

  protected transformOptions(options: any): Promise<any> {
	// options.headers = options.headers.append('authorization', `Bearer ${this.tokenService.Token}`);
  //   return Promise.resolve(options);
  return Promise.resolve(true);
  }
}
