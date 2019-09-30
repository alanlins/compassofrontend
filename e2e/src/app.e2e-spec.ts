import { AppPage } from "./app.po";

describe("new App", () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  describe("default screen", () => {
    beforeEach(() => {
      page.navigateTo("/list");
    });
    it("should have a title saying List Users", () => {
      page.getPageOneTitleText().then(title => {
        expect(title).toEqual("List Users");
      });
    });
  });
});
