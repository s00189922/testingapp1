    import {compute} from './compute';

    describe ('compute', () => {    //Describe explains that the test is compute
        it('should return 0 if the input is negative',() => { //It explains that the returned value should be 0
            const result = compute(-1); //Compute function is called and passed -1
            expect(result).toBe(0); //Expect checks if 0 was returned

    });

    });