import { Request, response, Response } from 'express';
import apis from '../services/axios';
import UserModel from '../models/user';
import { User } from '../interfaces/userInterface';

export default class {
  static async repoSearch(req: Request, res: Response) {
    try {
      const data = await apis.repoSearch(req.query.q);
      const dataContents = data.items;
      if (data.total_count === 0) {
        res.send({ message: 'There is no such repository...' });
      } else {
        const output = {
          data: [{}],
        };

        data.items.forEach((element: User) => {
          let newResponse = {
            repo_name: element.full_name,
            owner_name: element.owner.login,
            description: element.description,
          };
          output.data.push(newResponse);
        });

        res.send(output);
      }
    } catch (error) {
      console.log(error);
    }
  }
  static async userSearch(req: Request, res: Response) {
    try {
      const query = { name: req.body.username };
      const userData = await UserModel.findOne(query);

      /* if user is present in our DB. */
      if (userData !== null) {
        res.send(userData);
      } else {
        const response = await apis.userSearch(req.body.username);
        if (response.data) {
          await UserModel.insertMany(response);
          res.send(response.data);
        } else {
          res.send({ message: 'No user found' });
        }
      }
    } catch (error) {
      return error;
    }
  }
}
