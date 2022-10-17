export default class MoviesAnalyzer {
    constructor(movies, users) {
        this.movies = movies;
        this.users = users;
    }

    topRatedMoviesAmongFriends(userId) {
        const user = this.users.filter(f => f.userId === userId);
        const friends = user[0].friends;
        const res = [];

        for (let movie of this.movies) {
            movie.ratings2 = [];
            for (let rating of movie.ratings) {
                for (let friend of friends) {
                    if (rating.userId == friend) {
                        movie.ratings2.push(rating);
                    }
                }
            }
            if (movie.ratings2.length > 0) {
                movie.avg = movie.ratings2.reduce((accumulator, object) => {
                    return accumulator + object.rating;
                }, 0) / movie.ratings2.length;
                res.push(movie);
            } else {
                delete movie.ratings2;
            }
        }
        res.sort((m1, m2) => {
            if (m2.avg == m1.avg) {
                return m1.title > m2.title ? 1 : -1;;
            }
            return m2.avg - m1.avg;
        });
        return res.map(m => m.title).slice(0, 3);
    }
}
