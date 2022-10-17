import MoviesAnalyzer from "../src/index";
const { movies, users } = require('./data.json');
const testcases = require('./testcases.json');

describe('MoviesAnalyzer', () => {

  describe('topRatedMoviesAmongFriends', () => {

    const analyzer = new MoviesAnalyzer(movies, users);
    testcases.forEach(({ userId, expected }) => {
      it(`should return highest avg rating among friends for user ${userId}`, () => {
        const actual = analyzer.topRatedMoviesAmongFriends(userId);
        expect(actual).toEqual(expected);
      });
    });
  });
});
