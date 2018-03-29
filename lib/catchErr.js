import regeneratorRuntime from "regenerator-runtime" // eslint-disable-line
// Used to wrap a function call in a try/catch
export const catchErr = fn => async (...args) => {
  try {
    return await fn(...args)
  } catch (err) {
    console.error(
      `Attempted to call function ${fn.name} with arguments:`,
      getArgsHash(getFnParams(fn), args),
      err
    )
  }
}

// https://davidwalsh.name/javascript-arguments
// https://stackoverflow.com/questions/32934617/get-functions-default-value
// returns a hash of a function's parameter names and their default values
// TODO: need to find a way to extract default values
export const getFnParams = fn => {
  console.log(fn.toString())
  return (
    fn
      .toString()
      // Get the parameters declaration between the parenthesis
      .match(/^function\s*[^\(]*\(\s*([^\)]*)\)/m)[1]
      // Get rid of comments
      .replace(/(\/\*[\s\S]*?\*\/)/gm, "")
      .split(",")
      // Convert it into an object
      .reduce((hash, param) => {
        // Split parameter name from value
        const matches = param.match(/([_$a-zA-Z][^=]*)(?:=([^=]+))?/)
        // Eval each default value, to get strings, variable refs, etc.
        hash[matches[1].trim()] = eval(matches[2]) // eslint-disable-line
        return hash
      }, {})
  )
}

// combines a list of parameter names with a list of arguments given,
// returning a hash of names/args, with overloaded args grouped together
// in their own key
export const getArgsHash = (params, args) => {
  const paramNames = Object.keys(params)
  const defaults = Object.values(params)
  // if fewer arguments were given than there are parameters for a function
  // use the default parameter value if there is one, else use undefined
  if (args.length < paramNames.length) {
    for (let i; paramNames.length - args.length; i++) {
      args.push(defaults[i])
    }
  }
  return args.reduce((hash, arg, i) => {
    hash[paramNames[i] || `_extraArgs_`] = paramNames[i]
      ? arg
      : [...(hash[`_extraArgs_`] || []), arg]
    return hash
  }, {})
}
