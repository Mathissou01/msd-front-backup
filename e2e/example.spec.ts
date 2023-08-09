import { test, expect } from "@playwright/test";

test("homepage has title and links homepage customization page", async ({
  page,
}) => {
  await page.goto("http://localhost:3002/");
  await expect(page).toHaveTitle(/MSD/);
  await page.getByTestId("logo-community").click();
  // await page.getByRole("link", { name: "Page d'accueil" }).click();
  // const title = page.getByTestId("title");
  // await expect(title).toHaveText("Page d'accueil");
});
