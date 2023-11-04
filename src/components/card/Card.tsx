import './card.css';
import { Character } from '../types';
import { useLoaderData, Link, LoaderFunction } from 'react-router-dom';

async function getCharacter(id: number) {
  if (!id || typeof id !== 'number') {
    throw new Error('Invalid character ID');
  }
  const request = await fetch(`https://swapi.dev/api/people/${id}/`);
  const response = await request.json();
  return response;
}

interface CharacterData {
  character: Character;
}

export const loader: LoaderFunction = async ({ params }) => {
  if (params && params.peopleId !== undefined) {
    const res = await getCharacter(+params.peopleId);
    console.log(res);
    return { character: res };
  }
};

const Card = () => {
  const { character } = useLoaderData() as CharacterData;
  console.log(character);
  return (
    <div className={'characterInfo'}>
      <div className={'infoWrap'}>
        <>
          <h3 className={'title'}>{character.name}</h3>
          <div className={'blockInfo'}>
            <div>Weight: {character.eye_color}</div>
            <div>Species: {character.birth_year}</div>
            <div className={'listWrap'}></div>
          </div>
          <div>
            <Link to={'/'}>
              <button className={'backButton'}>Back</button>
            </Link>
          </div>
        </>
      </div>
    </div>
  );
};

export default Card;
