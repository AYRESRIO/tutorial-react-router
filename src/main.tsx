import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Expenses from "./routs/Expenses/index.tsx";
import Invoices from "./routs/Invoices/index.tsx";
import NotFound from "./routs/NotFound/index.tsx";
import Invoice from "./routs/Invoices/Invoice/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} >
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route path="*" element = {<NotFound/>}
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
