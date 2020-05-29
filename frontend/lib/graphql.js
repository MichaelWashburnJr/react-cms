export const mapDataToProps = (mappers) => ({ data }) => {
  const mappedProps = Object.keys(mappers).reduce((props, curKey) => {
    const mapper = mappers[curKey];
    const value = mapper(data);
    return {
      ...props,
      [curKey]: value,
    };
  }, {});

  return {
    ...mappedProps,
    graphql: data,
  };
};
