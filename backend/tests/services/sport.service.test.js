import * as sportService from '../../src/services/sport.service.js'

describe('Test sport.service.js', () => {
    test('Get sports', () => {
        expect(sportService.get()).toBeInstanceOf(Array)
    })
})