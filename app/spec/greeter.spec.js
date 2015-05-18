import greeter from '../lib/greeter';

describe("greeter", function () {

    it("greets better than most world", function () {
        expect(greeter.greet()).toBe('Hello World!');
    });

});
