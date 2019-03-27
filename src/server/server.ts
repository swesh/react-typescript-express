import * as express from 'express';
import * as os from 'os';
import * as path from 'path';

const app = express();


app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static('dist'));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname,  'index.html'));
  });

app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
