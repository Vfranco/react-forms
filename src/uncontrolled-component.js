
const App = () => {
  const submit = (event) => {
    event.preventDefault();
    const data = Array.from(new FormData(event.target));
    console.log(Object.fromEntries(data));
  }

  return (
    <form onSubmit={submit}>
      <div>
        <span>Field</span>
        <input name='campo' />
      </div>
      <input name='campo-2' />
      <input type='submit' />
    </form>
  )
}

export default App;
