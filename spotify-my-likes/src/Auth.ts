const {
  REACT_APP_CLIENT_ID,
  REACT_APP_AUTHORIZE_URL,
  REACT_APP_REDIRECT_URL
} = process.env

const scopes: string[] = [
  "user-library-read",
  "playlist-modify-private",
  "playlist-modify-public"
]

export const AuthUrl: string = `${REACT_APP_AUTHORIZE_URL}?
client_id=${REACT_APP_CLIENT_ID}
&redirect_uri=${REACT_APP_REDIRECT_URL}
&scope=${scopes.join("%20")}
&response_type=token
&show_dialog=true`

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial: any, item) => {
      let parts = item.split("=")
      initial[parts[0]] = decodeURIComponent(parts[1])
      return initial
    }, {})
}
