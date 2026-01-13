import { gql } from '@apollo/client';
import { apolloClient } from '../../../lib/apolloClient';
import { Movies } from '../types/movie';

export interface GetMoviesByGenreResponse {
  moviesByGenre: Movies;
}

export const GET_MOVIES_QUERY = gql`
  query GetMovies {
    movies {
      id
      link
      title
      rating
      genres
      description
      yearLaunched
      thumbFileURL
      videoFileURL
      bannerFileURL
    }
  }
`;

export const GET_MOVIE_BY_ID = gql`
  query GetMovieById($id: ID!) {
    movie(id: $id) {
      id
      link
      title
      rating
      genres
      description
      yearLaunched
      thumbFileURL
      videoFileURL
      bannerFileURL
    }
  }
`;

export const GET_MOVIES_BY_GENRE = gql`
  query GetMoviesByGenre($genre: String!) {
    moviesByGenre(genre: $genre) {
      id
      link
      title
      rating
      genres
      description
      yearLaunched
      thumbFileURL
      videoFileURL
      bannerFileURL
    }
  }
`;

export const getMoviesByGenre = async (
  genre: string,
  options: { _limit?: number } = {}
) => {
  const limit = options?._limit || 8;

  const { data } = await apolloClient.query<GetMoviesByGenreResponse>({
    query: GET_MOVIES_BY_GENRE,
    variables: { genre, limit },
  })

  return data?.moviesByGenre ?? [];
}
