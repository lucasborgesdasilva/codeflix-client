export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export const getAppSettings = (): Promise<{ theme: string, language: string }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ theme: 'dark', language: 'en' });
    }, 1000);
  });
}

export const getUserInfo = (): Promise<{
  name: string;
  email: string;
  age: number;
}> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'John Doe',
        email: 'john@doe.com',
        age: 30
      });
    }, 1000);
  });
}

export const getUserById = async (id: string): Promise<User> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await response.json();
  return data;
}