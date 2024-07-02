import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { LeadList } from "./lead/LeadList";
import { LeadCreate } from "./lead/LeadCreate";
import { LeadEdit } from "./lead/LeadEdit";
import { LeadShow } from "./lead/LeadShow";
import { ContactList } from "./contact/ContactList";
import { ContactCreate } from "./contact/ContactCreate";
import { ContactEdit } from "./contact/ContactEdit";
import { ContactShow } from "./contact/ContactShow";
import { DealList } from "./deal/DealList";
import { DealCreate } from "./deal/DealCreate";
import { DealEdit } from "./deal/DealEdit";
import { DealShow } from "./deal/DealShow";
import { SalesPersonList } from "./salesPerson/SalesPersonList";
import { SalesPersonCreate } from "./salesPerson/SalesPersonCreate";
import { SalesPersonEdit } from "./salesPerson/SalesPersonEdit";
import { SalesPersonShow } from "./salesPerson/SalesPersonShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CRMService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Lead"
          list={LeadList}
          edit={LeadEdit}
          create={LeadCreate}
          show={LeadShow}
        />
        <Resource
          name="Contact"
          list={ContactList}
          edit={ContactEdit}
          create={ContactCreate}
          show={ContactShow}
        />
        <Resource
          name="Deal"
          list={DealList}
          edit={DealEdit}
          create={DealCreate}
          show={DealShow}
        />
        <Resource
          name="SalesPerson"
          list={SalesPersonList}
          edit={SalesPersonEdit}
          create={SalesPersonCreate}
          show={SalesPersonShow}
        />
      </Admin>
    </div>
  );
};

export default App;
