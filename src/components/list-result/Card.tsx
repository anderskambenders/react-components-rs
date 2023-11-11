import { Product } from '@components/types';
import { Link, useSearchParams } from 'react-router-dom';

const Card = ({ props }: { props: Product }) => {
  const [search] = useSearchParams();
  const page = Object.fromEntries(search).page || '1';
  return (
    <Link className="link" to={`about/${props.id}?page=${page}`}>
      <div className="list__item" key={props.id}>
        <ul className="item__container">
          <img className="item__img" src={props.images[0]} />
          <li className="item">{`Name: ${props.title}`}</li>
          <li className="item">{`Description: ${props.description} cm`}</li>
        </ul>
      </div>
    </Link>
  );
};
export default Card;
