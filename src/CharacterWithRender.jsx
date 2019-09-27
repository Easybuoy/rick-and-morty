import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const GET_CHARACTERS = gql`
  query getCharacters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

export default function CharacterWithRender() {
  return (
    <Query query={GET_CHARACTERS}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;

        return (
          <div className="characters">
            {data.characters.results.map(character => (
              <div key={character.name} className="character">
                <img src={character.image} alt={character.name} />
                <p>{character.name}</p>
              </div>
            ))}
          </div>
        );
      }}
    </Query>
  );
}
