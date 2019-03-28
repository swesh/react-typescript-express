import express from 'express';
import * as os from 'os';
import * as path from 'path';

const app = express();


app.use(express.static(__dirname));



app.get('/api/getUsername', (req, res) => res.json({ username: "dfjkjkfd" }));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static('dist'));
app.use('*', function (req, res, next) {
  console.log(path.resolve(process.cwd())+"/dist/index.html");
  res.sendFile(path.resolve(process.cwd())+"/dist/index.html");
  });

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
