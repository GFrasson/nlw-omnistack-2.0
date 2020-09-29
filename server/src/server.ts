import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// Métodos HTTP:
// GET: Buscar ou listar uma informação
// POST: Criar alguma nova informação no back-end
// PUT: Atualizar uma informação existente
// DELETE: Deletar uma informação existente

// Parâmetros:
// Corpo (request body): Dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar
// Query Params: Paginação, filtros, ordenação...


app.listen(3333);