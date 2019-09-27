import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";

const GET_CHARACTERS = gql`
  query getCharacters {
    characters {
      thumbnail
      description
      name
      id
    }
  }
`;

function CharacterWithHOC() {
  const { loading, error, data } = useQuery(GET_CHARACTERS);
  if (error) {
    return <div>Error</div>;
  }

  if (loading) {
    return (
      <div className="App">
        <h2>Loading...</h2>
      </div>
    );
  }
  if (data) {
    if (data.characters.length > 0) {
      return (
        <div className="characters">
          {data.characters.map(character => (
            <div key={character.name} className="character">
              <img src={character.thumbnail} alt={character.name} />
              <p>{character.name}</p>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default CharacterWithHOC;
