import { useRef } from "react";

const App = () => {
  const inputRef = useRef();
  const file = useRef();

  const submit = () => {
    console.log(file.current.files[0]);
    const form = new FormData();
    form.append('archivo', file.current.files[0])
    form.append('campo', inputRef.current.value);

    fetch('/lala', {method : 'POST', body : form});
  }

  return (
    <div>
      <div>
        <span>Field</span>
        <input ref={inputRef} type='text' name='campo' />
        <input ref={file} type='file' name='file' />
      </div>
      <input onClick={submit} type='submit' name='Enviar' />
    </div>
  )
}

export default App;
