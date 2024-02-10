import { CountAtom } from "./store/atoms/count";
import { RecoilRoot, useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";


function App() {

  return (
    <>
      <div>
        <RecoilRoot>
          <Count />
        </RecoilRoot>
      </div>
    </>
  )
}

function Count(){
  
  return <div>
    <CountRender />
    <Buttons />
  </div>
}

function Write(){
  console.log("hyy again rerender");
  const val = useRecoilValue(CountAtom);
  if(val%2 == 0){
    return <>
      <p>Its even value</p>
    </>
  }
}

function CountRender(){
  const count = useRecoilValue(CountAtom);
  // const [count, setCount] = useRecoilState(countAtom); // if you want value and function both then use this..
  // other wise for value you can use "useRecoilValue"
  return <div>
    <b>
      {count}
    </b>
  </div>
}

function Buttons(){
  const setCount = useSetRecoilState(CountAtom);
  console.log("hyy again rerender");
  return <div>
    <button onClick={() => {
      setCount(count => (count + 1))
    }}>Increase</button>
    
    <button onClick={() => {
      setCount(count => (count - 1))
    }}>Decrease</button>
    <br />
    <Write />
  </div>
}

export default App
