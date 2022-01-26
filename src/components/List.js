function List(data) {   
  return (
    <ul>
        {data.users.map(item => <li key={item.age}>{item.name}</li>)}
    </ul>
  );
}

export default List;
