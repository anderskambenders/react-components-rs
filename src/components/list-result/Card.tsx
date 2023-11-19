type CardProps = {
  id: number;
  image: string[];
  title: string;
  description: string;
};

const Card = (props: CardProps) => {
  return (
    <div data-testid="card" className="list__item" key={props.id}>
      <ul className="item__container">
        <img className="item__img" src={props.image[0]} alt="product image" />
        <li className="item">{`Name: ${props.title}`}</li>
        <li className="item">{`Description: ${props.description} cm`}</li>
      </ul>
    </div>
  );
};
export default Card;
