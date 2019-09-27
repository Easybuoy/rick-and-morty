import React, { useState } from "react";
import { gql } from "apollo-boost";
import { withApollo } from "react-apollo";

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

function CharacterWithHOC({ client }) {
  const [characters, setCharacters] = useState([]);

  client
    .query({ query: GET_CHARACTERS })
    .then(res => setCharacters(res.data.characters))
    .catch(err => console.log(err));

  if (characters.length > 0) {
    return (
      <div className="characters">
        {characters.map(character => (
          <div key={character.name} className="character">
            <img src={character.thumbnail} alt={character.name} />
            <p>{character.name}</p>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="App">
      <h2>Loading...</h2>
    </div>
  );
}

export default withApollo(CharacterWithHOC);
