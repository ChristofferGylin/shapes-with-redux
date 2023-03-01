import ListSection from "./ListSection"
import CreateSection from "./redux/CreateSection"
import DeleteSection from "./redux/DeleteSection"
import UpdateSection from "./redux/UpdateSection"

function App() {


  return (
    <div className="App">

      <CreateSection />
      <UpdateSection />
      <DeleteSection />
      <ListSection />

    </div>
  )
}

export default App
