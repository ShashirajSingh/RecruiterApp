import axios from 'axios';

export default class {
  static async repoSearch(repoName: any) {
    try {
      const url = `https://api.github.com/search/repositories?q=${repoName}`;
      const response = await axios.get(url);
      const { data } = response;
      return data;
    } catch (error) {
      return error;
    }
  }
  static async userSearch(userName: any) {
    try {
      const url = `https://api.github.com/users/${userName}`;
      const response = await axios.get(url);
      return response;
    } catch (error) {
      return error;
    }
  }
}
