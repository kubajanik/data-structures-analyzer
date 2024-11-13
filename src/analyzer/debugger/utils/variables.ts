export const readVariablesFromSourceCode = (sourceCode: string): string[] => {
  const paramsMatch = /function .+\((.+)\)/.exec(sourceCode);

  const params = paramsMatch?.[1].replace(/ /g, "").split(",") ?? [];

  const variablesRegex = /(?:let|const) (\w+)/gm;
  const variables = [...sourceCode.matchAll(variablesRegex)].map(
    (match) => match[1],
  );

  return [...params, ...variables];
};

export const addTypeofGuardsToVariables = (variables: string[]) =>
  variables.map(
    (variable) =>
      `${variable}: typeof ${variable} !== 'undefined' ? ${variable} : undefined`,
  );
