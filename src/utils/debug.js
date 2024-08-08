
export const debug = (...args) => {
  if (args.length === 1) {
    console.log(args[0]);
    return args[0];
  }

  const [firstArg, ...restArgs] = args;
  if (typeof firstArg === 'string') {
    console.log(`> debug::${firstArg}`, ...restArgs);
    return restArgs[0];
  }

  console.log(...args);
}