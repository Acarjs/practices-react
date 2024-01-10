import Person from './Person';

type PeopleProps = {
  people: {
    id: number;
    name: string;
    age: number;
    image: string;
  }[];
};

export default function List({ people }: PeopleProps) {
  return (
    <div>
      {people.map((person) => {
        return <Person key={person.id} person={person} />;
      })}
    </div>
  );
}
