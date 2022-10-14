import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  const [contacts, setContacts] = useState([
    { name: 'Lily',
      phone: '4567789',
      email: 'lily1987@gmail.com'
    },
    { name: 'Harry',
      phone: '7589365',
      email: 'harry11@gmail.com'
    }
  ]);

  const [appointments, setAppointments] = useState([
    {
      title: 'Meeting with Jennie',
      date: '17.05',
      time: '11.00',
      personContact: '5639475'
    },
    {
      title: 'Lunch with James',
      date: '12.05',
      time: '14.00',
      personContact: '4847502'
    }
  ]);
 
  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
