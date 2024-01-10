type PersonProps = {
  person: {
    id: number;
    name: string;
    age: number;
    image: string;
  };
};

export default function Person({ person }: PersonProps) {
  return (
    <article className="person">
      <img src={person.image} alt={person.name} className="img" />
      <div>
        <h4>{person.name}</h4>
        <p>{person.age} years</p>
      </div>
    </article>
  );
}
