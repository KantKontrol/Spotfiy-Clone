require("dotenv").config();
module.exports = (server, querystring) => {

    //Spotify Auth Layout
        //redirect to spotify for auth
        //provide callback route to  veryify login and retrieve user data

        const generateRandomString = function(length) { //generates random string courtesy of spotify docs
            var text = ''; 
            var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          
            for (var i = 0; i < length; i++) {
              text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return text;
          };


        var stateKey = 'spotify_auth_state'; //the name of our auth cookie

        server.get("/login", (req, res) => {

            var state = generateRandomString(16); //get a random string to represent our current state
            res.cookie(stateKey, state); //set our cookie in the response object

            let scope = 'user-read-private user-read-email';

            res.redirect('https://accounts.spotify.com/authorize?' +
            querystring.stringify({
                response_type: 'code',
                client_id: process.env.CLIENT_ID,
                scope: scope,
                redirect_uri: process.env.REDIRECT_URI,
                state: state
            }));
        });


        server.get("/callback", (req, res) => {

            var code = req.query.code || null; //checks if we got a code response from spotify
            var state = req.query.state || null; //checks if we recieved our state back
            var storedState = req.cookies ? req.cookies[stateKey] : null; //makes sure to store our cookie that came back if it did

            if (state === null || state !== storedState) { //checks if we didnt get a state or we recieved a different one from where we started
                res.redirect('/#' +
                  querystring.stringify({
                    error: 'state_mismatch'
                  }));
              } else {

                res.clearCookie(stateKey); //clears our current auth state cookie

                var authOptions = { //sets some options for our request to spotify for our access and refresh tokens
                  url: 'https://accounts.spotify.com/api/token',
                  form: {
                    code: code,
                    redirect_uri: process.env.REDIRECT_URI,
                    grant_type: 'authorization_code'
                  },
                  headers: {
                    'Authorization': 'Basic ' + (new Buffer(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET).toString('base64'))
                  },
                  json: true
                };

                request.post(authOptions, function(error, response, body) { //makes a post request to spotify token url
                    if (!error && response.statusCode === 200) {
              
                      var access_token = body.access_token,
                          refresh_token = body.refresh_token;
              
                      var options = {
                        url: 'https://api.spotify.com/v1/me',
                        headers: { 'Authorization': 'Bearer ' + access_token },
                        json: true
                      };
              
                      // use the access token to access the Spotify Web API
                      request.get(options, function(error, response, body) {
                        console.log(body);
                      });
              
                      // we can also pass the token to the browser to make requests from there
                      res.redirect('/#' +
                        querystring.stringify({
                          access_token: access_token,
                          refresh_token: refresh_token
                        }));
                    } else {
                      res.redirect('/#' +
                        querystring.stringify({
                          error: 'invalid_token'
                        }));
                    }
                  });

              }

        });



}