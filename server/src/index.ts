import express from 'express'
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors'
import { createConnection } from 'typeorm';
import { schema } from './Schema';
import { Users } from './Entities/Users';

const main = async () => {
  await createConnection({
    type: 'mysql',
    database: 'graphql_crud',
    username: 'root',
    password: 'Nhan1996',
    logging: true,
    synchronize: false,
    entities: [Users]
  });

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
  }));

  app.listen(3001, () => {
    console.log('🚀 connected to localhost:3001/');
  });
};

main().catch((err) => {
  console.log(err);
});