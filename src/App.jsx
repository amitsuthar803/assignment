import { useLayoutData } from "./context/LayoutContext";
import Form from "./ui/Form";
import MainContainer from "./ui/MainContainer";
import Sidebar from "./ui/Sidebar";

function App() {
  const { showForm } = useLayoutData();
  return (
    <div className="relative h-screen flex  bg-[##EBF2F7]">
      <Sidebar />
      <MainContainer />
      {showForm && <Form />}
    </div>
  );
}

export default App;
