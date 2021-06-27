import { Selector } from 'testcafe';

const url = `https://www.tiket.com/`
const username_fb = 'Please Insert Your Facabook Account';
const password_fb = 'Please Insert Your Facabook Password';

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

        .click(Selector('#productWidget > div.product-list-container > div.product-list-content > a:nth-child(2) > span'))
        .wait(5000)
        .click(Selector('#destination-input'))
        
        .click(Selector('#autocomplete-list-item > div.main-container'))
        // .click(Selector('#date-input-startdate'))
        // .click(Selector('#checkoutDate > div > div > div.popup-content > div > div > div:nth-child(3) > div > div > div.DayPicker > div > div.DayPicker-Months > div:nth-child(1) > div.DayPicker-Body > div:nth-child(2) > div.DayPicker-Day.DayPicker-Day--startDate.DayPicker-Day--endDate > div > div > div.day-mod-body#checkinDate > div > div > div.popup-content > div > div > div:nth-child(3) > div > div > div.DayPicker > div > div.DayPicker-Months > div:nth-child(2) > div.DayPicker-Body > div:nth-child(2) > div.DayPicker-Day.DayPicker-Day--startDate > div'))
        // .click(Selector('#checkoutDate > div > div > div.popup-content > div > div > div:nth-child(3) > div > div > div.DayPicker > div > div.DayPicker-Months > div:nth-child(1) > div.DayPicker-Body > div:nth-child(3) > div.DayPicker-Day.DayPicker-Day--endDate.DayPicker-Day--weekends > div > div > div.day-mod-body'))
        .click(Selector('#guestAndRoom'))
        .click(Selector('#guestAndRoom > div > div > div.popup-content > div > div:nth-child(1) > div.number-input > div:nth-child(3)'))
        // for(i=0; i<room; i++){
        //     wait 
        //     .click(Selector('#guestAndRoom > div > div > div.popup-content > div > div:nth-child(1) > div.number-input > div:nth-child(3) > i'))
        // }
        // wait
        // .click(Selector('#guestAndRoom > div > div > div.popup-content > div > div:nth-child(1) > div.number-input > div:nth-child(3) > i'))
        .click(Selector('#guestAndRoom > div > div > div.popup-content > div > div.done-button > button'))
        .click(Selector('#app > main > div > div.hero-section > div.widget-container > div > div.button-container > button'))
        .wait(5000)

        //Fileter Hotel
        .click(Selector('#app > main > div > div.header-search-wrapper > div.filter-bar > div > div > div:nth-child(4) > div.popover-dropdown-textbox > div.left-wrap > div.text-wrap'))
        .click(Selector('#app > main > div > div.header-search-wrapper > div.filter-bar > div > div > div:nth-child(4) > div:nth-child(3) > div.tix-pop-over.bottom-top.show > div > div.popover-content > div > div:nth-child(1) > div.checkbox-label > i:nth-child(5)'))
        .click(Selector('#app > main > div > div.header-search-wrapper > div.filter-bar > div > div > div:nth-child(4) > div:nth-child(3) > div.popover-overlay-bg'))
        .wait(5000)

        //chose Room
        .click(Selector('#app > main > div > div.hotel-search-container > div.search-result > div.hotel-card-list-desktop > div:nth-child(1) > div'))
        .wait(5000)
        .click(Selector('#overview > div.hotel-info > div.hotel-info__wrapper > div.price-info > div:nth-child(4) > button'))
        .click(Selector('#Suite > div.room-card-list > div > div.right-side > div.bottom-right > button'))
        .wait(5000)

        //checkout
        .click(Selector('#app > div > div > div.booking-form-container > div.main-content > div.booking-submit > button'))
        .wait(5000)

        //payment
        .click(Selector('#app > div > div.main-wrap > div > div.container > div:nth-child(2) > div.col-xs-8 > div > div:nth-child(2) > div:nth-child(4) > div > a:nth-child(5) > div > div > span'))
        .wait(3000)
        .click(Selector('#app > div > div.main-wrap > div > div.container > div:nth-child(2) > div.col-xs-8 > div > div > div.action-wrap > div.payment-button-next-step > button'))
        .wait(5000)

        .click(Selector('#app > div > div.main-wrap > div > div.container > div:nth-child(2) > div.col-xs-8 > div > div > div > div.row > div:nth-child(2) > button'))
        .click(Selector('#modal-root > div > div > div > div.modal-wrapper > div.modal-footer > div > button'))
        .wait(5000)

        //Logout
        .click(Selector('#app > div > div.header-v3 > div.header-bottom-layer > div > div.header-right-side > div > span'))
        .click(Selector('#app > div > div.header-v3 > div.header-bottom-layer > div > div.header-right-side > div > div > div.account-link-list > div'))
        .click(Selector('#modal-root > div > div > div > div > div.logout-button > div.logout-yes'))

        

});