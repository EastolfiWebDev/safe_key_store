import { OsfpovPage } from './app.po';

describe('osfpov App', () => {
    let page: OsfpovPage;

    beforeEach(() => {
        page = new OsfpovPage();
    });

    it('should display message saying App Web!', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('App Web!');
    });
});
