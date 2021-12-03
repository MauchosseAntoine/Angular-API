import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {Post} from '../models';

const config: ModelCrudRestApiConfig = {
  model: Post,
  pattern: 'CrudRest',
  dataSource: 'db',
  basePath: '/posts',
};
module.exports = config;
