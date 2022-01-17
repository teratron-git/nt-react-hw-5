import { useState } from "react"
import "./App.css"
import Card from "./components/Card"
import Decomposition from "./components/Decomposition"
import TaskSwitcher from "./components/TaskSwitcher"

const App = () => {
  const [task, setTask] = useState("1")

  const handler = (e: any) => {
    setTask(e.target.value)
  }

  return (
    <>
      <TaskSwitcher task={task} onChangeHandler={handler} />

      {task == "1" && (
        <div className="container">
          <Card img="https://fakeimg.pl/300/">
            <div className="card-body">
              <h5 className="card-title">Card title 1</h5>
              <p className="card-text">Это компонент Card.</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </Card>

          <Card>
            <div className="card-body">
              <h5 className="card-title">Card title 2</h5>
              <p className="card-text">Это тоже компенент Card, но без картинки. </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </Card>
        </div>
      )}

      {task == "2" && <Decomposition />}

      {/* {task == "3" && <>Task 3</>} */}
    </>
  )
}

export default App
