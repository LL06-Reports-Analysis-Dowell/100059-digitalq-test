import useFetch from "../api/useFetch";

function Test() {
  const {
    data: joke,
    loading,
    error,
    refetch,
  } = useFetch("https://100059.pythonanywhere.com/api/population/");

  if (loading) return <h1> LOADING...</h1>;

  if (error) console.log(error);

  return (
    <div className="App">
      {console.log(joke?.normal.data[0] + "kkkkkkkkkkk")}
      <table class="table">
        <thead>
          <tr>
            <th scope="col">cost</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {joke.normal.data[0].map((dats) => (
            <tr key={dats._id}>
              <th scope="row">{dats.dish_cost}</th>
              <td>{dats.dish_price}</td>
              <td>{dats.dish_name}</td>
              <td>{dats.dish_code}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={refetch}> Refetch</button>
    </div>
  );
}

export default Test;
