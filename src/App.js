import "./styles.css";
import { AsyncComponent, AsyncComponentFallback } from "./AsyncComponent";
import { Suspense } from "react";
import { getResource } from "./Api";

const dogData = getResource("https://retoolapi.dev/lfaPzW/dogs");

export default function App() {
  return (
    <div className="App">
      <h1>Some Header</h1>
      <Suspense fallback={<AsyncComponentFallback />}>
        <AsyncComponent dogs={dogData} />
      </Suspense>
    </div>
  );
}
