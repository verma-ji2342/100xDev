import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { notifications, totalNotificationSelector } from './atoms'
import { todosAtomFamily } from './atomfamily'
function App() {
  return <RecoilRoot>
    <MainApp />
    <br /> <br />
    <Todo id={1} /> 
    <Todo id={2} /> 
    <Todo id={3} />
    <Todo id={4} />
    <Todo id={5} />
    <Todo id={6} />
  </RecoilRoot>
}

function Todo({id}){
  const currentValue = useRecoilValue(todosAtomFamily(id));

  return <>
    Title : <b>{currentValue.title}</b>
    <br />
    description : <b>{currentValue.description}</b>
    <br />
  </>
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <>
      <button>Home</button>
      
      <button>My network ({networkCount.network >= 100 ? "99+" : networkCount.network})</button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App