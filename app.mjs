import express from "express";

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/login', function(req, res) {

  var state = (Math.random() * 10).toString(36).replace('.', '');
  var scope = 'user-read-private user-read-email playlist-read-private playlist-modify-private playlist-modify-public user-library-read';

  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});

app.get('/callback', function(req, res){

});

app.listen(port, () => {
  console.log(`Playlistify server listening on port: ${port}`);
});