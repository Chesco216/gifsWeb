import { gifFetch } from "../../src/resources/getGif";

describe('getGif function test', () => {

  test('fetch test', async() => {
    
    const gifs = await gifFetch('Dragon Ball')
    expect( gifs.length ).toBeGreaterThan(0)
    expect( gifs[0] ).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    })

  })

})


// TODO: fajpajda
// FIX: djijdaw
// PERF: JDIAJWDIJAD
// HACK: KODFJWADJA
// NOTE: JDAIWJDAW
// WARN: DJAIFDJAWE
// TEST: JFESFJAESFJO
// 
