const FetchingData = ({ addUser, updateUser }) => {
  return (
    <div>
      <button onClick={addUser}>crear usuario</button>
      <button onClick={updateUser}>actualizar usuario</button>
    </div>
  );
};

export default FetchingData;
