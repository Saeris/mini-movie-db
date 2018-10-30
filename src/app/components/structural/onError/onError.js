import "./onError.scss"

export const OnError = ({ errMsg }) => (
  <span className="error">
    <h1>Whoops! Looks like something went wrong. 😭</h1>
    <h2>Try reloading?</h2>
    {errMsg && <p>{errMsg.message}</p>}
  </span>
)
