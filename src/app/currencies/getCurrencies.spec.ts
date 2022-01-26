import {getCurrencies} from './getCurrencies';

describe('getCurrencies', ()=> { //Describe explains that the test is getCurrencies
    it('should include the currencies in the message', () => { //It explains that the returned value should be currencies
        // expect(getCurrencies(['USD', 'GDP','EUR']).toContain(['USD', 'GDP','EUR']);
        const result = getCurrencies();
        expect(result).toContain('USD');
        expect(result).toContain('GDP');
        expect(result).toContain('EUR');
      
    });
    //Checking for a non-existing cuurency
    xit('should include the currencies in the message', () => { //It explains that the returned value should be currencies
        const result = getCurrencies();
        expect(result).toContain('AUD');
});

});