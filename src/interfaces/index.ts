export interface IContactRequest {
  name: string;
  email: string;
  telephone: string;
}

export interface IClientRequest {
  name: string;
  email: string;
  telephone: string;
  password: string;
}

export interface IClientLogin {
  email: string;
  password: string;
}

export interface IClientUpdate {
  name?: string;
  email?: string;
  telephone?: string;
  password?: string;
}

export interface IContactUpdate {
  name?: string;
  email?: string;
  telephone?: string;
}
