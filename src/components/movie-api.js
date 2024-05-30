import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org";


  // movies today
export const getMovies = async (page) => {

const url =
    "https://api.themoviedb.org/3/trending/movie/day"; 
const options = {
  params: {
    page: page,   
  },
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGM0YmI0NTcyNjQ3MTI1NTg2Mjg3ZGIyNDAwNWMzNCIsInN1YiI6IjY2NTg2ZjJhMmY5MjRlNzQwMDkzZTRiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Mwq9FqnVfpwK9pk_EU5FeFOguvSOl05-Lyec837Kyek",
  },
}; 
   try {
     const response = await axios.get(url, options);

     return response.data;
   } catch (error) {
     console.error("Error fetching articles:", error);
     throw error;
   }
  
};

// search movies for name ==========
export const searchMovies = async (searchQuery, page) => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/search/movie",
      {
        params: {
          query: searchQuery,
          page: page,
        },
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGM0YmI0NTcyNjQ3MTI1NTg2Mjg3ZGIyNDAwNWMzNCIsInN1YiI6IjY2NTg2ZjJhMmY5MjRlNzQwMDkzZTRiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Mwq9FqnVfpwK9pk_EU5FeFOguvSOl05-Lyec837Kyek",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};

// movie dedales ==========
export const movieDetal = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGM0YmI0NTcyNjQ3MTI1NTg2Mjg3ZGIyNDAwNWMzNCIsInN1YiI6IjY2NTg2ZjJhMmY5MjRlNzQwMDkzZTRiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Mwq9FqnVfpwK9pk_EU5FeFOguvSOl05-Lyec837Kyek",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};

// movies actors ===================
export const movieActors = async (id) => {

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGM0YmI0NTcyNjQ3MTI1NTg2Mjg3ZGIyNDAwNWMzNCIsInN1YiI6IjY2NTg2ZjJhMmY5MjRlNzQwMDkzZTRiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Mwq9FqnVfpwK9pk_EU5FeFOguvSOl05-Lyec837Kyek",
        },
      }
    );

    return response.data.cast;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};

// Reviews===========

export const movieReviews = async (id) => {

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGM0YmI0NTcyNjQ3MTI1NTg2Mjg3ZGIyNDAwNWMzNCIsInN1YiI6IjY2NTg2ZjJhMmY5MjRlNzQwMDkzZTRiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Mwq9FqnVfpwK9pk_EU5FeFOguvSOl05-Lyec837Kyek",
        },
      }
    );

    return response.data.results;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};