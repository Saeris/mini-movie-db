import server from "./server"

export const graphqlHandler = async (event, context, response) => { //eslint-disable-line
  const { path, queryStringParameters: params, httpMethod: method, body: payload, headers: reqHeaders } = event

  let url = path
  if (params) {
    const qs = Object.keys(params).map(key => `${key}=${params[key]}`)
    if (qs.length > 0) url = `${url}?${qs.join(`&`)}`
  }

  const { statusCode, headers, result: body } = await server.inject({
    method,
    url,
    payload,
    headers: reqHeaders,
    validate: false
  })

  delete headers[`content-encoding`]
  delete headers[`transfer-encoding`]
  response(null, { statusCode, headers, body })
}
