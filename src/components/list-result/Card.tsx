import Image from 'next/image';
type CardProps = {
  id: number;
  image: string[];
  title: string;
  description: string;
};
export const blurDataURL = `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAiACYDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAAIBAwQFBv/EABsQAQEBAQEAAwAAAAAAAAAAAAABAhEDEyEx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APUek+mD2xeuprPYzenn0GDzzytfn+I+PlPmcA8CYAaqr1D2qtUFeoiQ3eiQBAkAv0o2ABYaAAkAA//Z`;

const Card = (props: CardProps) => {
  const myLoader = () => {
    return props.image[0];
  };

  return (
    <div data-testid="card" className="list__item" key={props.id}>
      <ul className="item__container">
        <Image
          className="item__img"
          loader={myLoader}
          src={props.image[0]}
          alt={'product-image'}
          width={200}
          height={180}
          unoptimized={true}
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
        <li className="item">{`Name: ${props.title}`}</li>
        <li className="item">{`Description: ${props.description} cm`}</li>
      </ul>
    </div>
  );
};
export default Card;
