const {
  REACT_APP_CLIENT_ID,
  REACT_APP_AUTHORIZE_URL,
  REACT_APP_REDIRECT_URL
} = process.env

const scopes: string[] = [
  "user-read-private",
  "user-library-read",
  "playlist-modify-private",
  "playlist-modify-public"
]

export const AuthUrl: string = `https://accounts.spotify.com/authorize?
client_id=37e32bab351c40f0aed03bd381302869
&redirect_uri=http://localhost:3000/callback
&scope=${scopes.join("%20")}
&response_type=token
&show_dialog=true`

export const getTokenFromUrl = (): string => {
  var hashParams: any = {};
  var e, r = /([^&;=]+)=?([^&;]*)/g,
  q = window.location.hash.substring(1);
  e = r.exec(q)
  while (e) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
    e = r.exec(q);
  }
  console.log(hashParams.access_token)
  return hashParams.access_token
}
