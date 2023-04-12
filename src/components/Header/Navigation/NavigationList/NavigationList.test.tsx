import { render, screen } from "@testing-library/react";
import { ContractEntity } from "../../../../graphql/codegen/generated-types";
import globalMock from "../../../../../__mocks__/globalMock.json";
import { ContractContext } from "../../../../hooks/useContract";
import NavigationList from "./NavigationList";

describe("NavigationList", () => {
  it("renders in mobile mode", async () => {
    const { container } = render(
      <ContractContext.Provider
        value={{
          contract: globalMock.contract as ContractEntity,
          contractId: `${Number.parseInt(globalMock.contract.id)}`,
        }}
      >
        <NavigationList isDesktopMode={false} />
      </ContractContext.Provider>,
    );

    expect(await screen.findByText("Accueil")).toBeInTheDocument();
    expect(await screen.findByText("Guide du tri")).toBeInTheDocument();
    expect(await container).toMatchSnapshot();
  });

  it("renders in desktop mode", async () => {
    const { container } = render(
      <ContractContext.Provider
        value={{
          contract: globalMock.contract as ContractEntity,
          contractId: `${Number.parseInt(globalMock.contract.id)}`,
        }}
      >
        <NavigationList isDesktopMode={true} />
      </ContractContext.Provider>,
    );

    expect(await screen.findByText("Accueil")).toBeInTheDocument();
    expect(await screen.findByText("Guide du tri")).toBeInTheDocument();
    expect(await container).toMatchSnapshot();
  });
});
