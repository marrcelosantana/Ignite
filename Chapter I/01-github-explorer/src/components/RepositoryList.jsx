import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com/unform/unform'
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h2>Lista de repositórios</h2>
      <ul>
        <RepositoryItem repository={ repository }/>
        <RepositoryItem repository={ repository }/>
        <RepositoryItem repository={ repository }/>
        <RepositoryItem repository={ repository }/>
      </ul>
    </section>
  );
}