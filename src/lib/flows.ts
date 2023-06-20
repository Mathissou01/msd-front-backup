export const renderFlowName: (name: string) => string = (name: string) => {
  switch (name) {
    case "householdWaste":
      return "Ordures ménagères";
    case "packaging":
      return "Emballages";
    case "all":
      return "Tous";
    default:
      return name;
  }
};
