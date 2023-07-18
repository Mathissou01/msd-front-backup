export const renderFlowName: (name: string) => string = (name: string) => {
  switch (name) {
    case "OMR":
      return "Ordures ménagères";
    case "CS":
      return "Emballages";
    case "all":
      return "Tous";
    default:
      return name;
  }
};
