import { StormGlass} from '@src/clients/StormGlass';
import axios from 'axios';
import stormGlassWeather3HoursFixture from '@test/fixtures/stormGlass_weather_3_hours';
import stormGlassNormalized3HoursFixtures from '@test/fixtures/stormGlass_normlized_response_3_hours' 

jest.mock('axios')

describe('StormGlass client', () => { 
    it('should return the normalized forecast from the StromGlass service', async () => {
        const lat = -33.792726;
        const lng = 151.289824;

        axios.get = jest.fn().mockResolvedValue(stormGlassWeather3HoursFixture);

        const stormGlass = new StormGlass(axios);
        const response = await stormGlass.fetchPoints(lat, lng);
        expect(response).toEqual(stormGlassNormalized3HoursFixtures);
    })

}) 