const InitialState = {
  GlobalText: "Starting Text",
};

export const AddToState = (propName, value) => {
  InitialState[propName] = {
    ...InitialState,
    propName: value,
  };
};

export default InitialState;
