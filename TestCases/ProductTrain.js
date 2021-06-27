import { Selector } from 'testcafe';

const url = `https://www.tiket.com/`
const username_fb = 'Please Insert Your Facabook Account';
const password_fb = 'Please Insert Your Facabook Password';
const passenger_name = 'Bambang';
const passenger_id = '320812569800098'

fixture `Tiket.com Testing`
    .page(url);

test('Product Hotel', async t => {
    await t
        .click(Selector('#app > div > div.home-page > div.left-side > div.header-v3 > div.header-bottom-layer > div > div.header-right-side > a:nth-child(3)'))

        //Login Facebook
        .click(Selector('#app > div > div:nth-child(2) > div > div > div > div > div.row.signup-content > div.col-xs-4.card-wrapper > div > div > div > div > div.content-wrap > div.social-network-wrap > div > div > ul > li:nth-child(3) > div > span'))
        .typeText(Selector('#email'), username_fb)
        .typeText(Selector('#pass'), password_fb)
        .click(Selector('#loginbutton'))

        .click(Selector('#productWidget > div.product-list-container > div.product-list-content > a:nth-child(4) > div > img'))
        .wait(5000)
        .click(Selector('#formhome > div > div > div.train-form > div.train-mode-container > section > div.coach-mark > button'))
        .click(Selector('#formhome > div > div > div.train-form.z-index-999 > div.form-style > div.part-component.part-depart > div.content > div.user-area > div > input'))
        .click(Selector('#formhome > div > div > div.train-form.z-index-999 > div.form-style > div.part-component.part-depart > div.content > div.user-area > div > div > div.content > ul > li:nth-child(1) > div.station-text > div.station-city'))
        .click(Selector('#formhome > div > div > div.train-form.z-index-999 > div.form-style > div.part-component.part-return > div.content > div.user-area > div > div > div.content > ul > li:nth-child(2) > div.station-text'))
        .click(Selector('#formhome > div > div > div.train-form.z-index-999 > div.form-style > div.part-component.part-passenger > div.content > div'))
        .click(Selector('#formhome > div > div > div.train-form.z-index-999 > div.form-style > div.part-component.part-passenger > div.content > div > div > div.passenger-box > div:nth-child(1) > div.right > div:nth-child(3) > button > i'))
        .click(Selector('#formhome > div > div > div.train-form.z-index-999 > div.form-style > div.part-component.part-passenger > div.content > div > div > div.passenger-box > div:nth-child(2) > div.right > div:nth-child(3) > button > i'))
        .click(Selector('#formhome > div > div > div.train-form.z-index-999 > div.form-style > div.part-component.part-passenger > div.content > div > div > div.foot > button'))
        .click(Selector('#formhome > div > div > div.train-form.z-index-999 > div.footer-part > button'))
        .wait(5000)

        .click(Selector('#app > div > div.left-side > div.search-result-page > div.container > div > div > div.col-filter.padding-content.list-horizontal__top > div > div.content-filter > div > div:nth-child(1) > div.ReactCollapse--collapse > div > div:nth-child(1) > div > label'))
        .wait(5000)
        .click(Selector('#app > div > div.left-side > div.search-result-page > div.container > div > div > div.col-result.padding-content.list-horizontal__top > div:nth-child(2) > div:nth-child(1) > div > div:nth-child(2) > div.col-3.right > button'))
        .typeText(Selector('#adult-form-0 > div.body-part > div > div > div.form-row.fullName > div > input'), passenger_name)
        .typeText(Selector('#adult-form-0 > div.body-part > div > div > div.form-row.identityNumber > div > input'), passenger_id)
        .click(Selector('#contact-form > div.button-bottom-set > button.btn.active.btn-continue'))

        .click(Selector('#popup > div > div > div > div.button-area > button:nth-child(1)'))
        .wait(5000)
        .click(Selector('#app > div > div.main-wrap > div > div.container > div:nth-child(2) > div.col-xs-8 > div > div:nth-child(2) > div:nth-child(4) > div > a:nth-child(5) > div > div > span'))
        .wait(5000)
        .click(Selector('#app > div > div.main-wrap > div > div.container > div:nth-child(2) > div.col-xs-8 > div > div > div.action-wrap > div.payment-button-next-step > button'))
        .wait(5000)

        .click(Selector('#app > div > div.main-wrap > div > div.container > div:nth-child(2) > div.col-xs-8 > div > div > div > div.row > div:nth-child(2) > button'))
        .click(Selector('#modal-root > div > div > div > div.modal-wrapper > div.modal-footer > div > button'))
        .wait(5000)

        //Logout
        .click(Selector('#app > div > div.header-v3 > div.header-bottom-layer > div > div.header-right-side > div > span'))
        .click(Selector('#app > div > div.header-v3 > div.header-bottom-layer > div > div.header-right-side > div > div > div.account-link-list > div'))
        .click(Selector('#modal-root > div > div > div > div > div.logout-button > div.logout-yes'))



})