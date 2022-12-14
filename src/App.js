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
      title: 'Meeting',
      date: '17.05',
      time: '11.00',
      personContact: 'Jennie'
    },
    {
      title: 'Lunch',
      date: '12.05',
      time: '14.00',
      personContact: 'James'
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

  const addContact = (contact) => {
    setContacts((prev) => {
      return [contact, ...prev]
    });
  }

  const addAppointment = (appointment) => {
    setAppointments((prev) => {
      return [appointment, ...prev]
    });
  }

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
            <ContactsPage contacts={contacts} addContact={addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage appointments={appointments} addAppointment={addAppointment} contacts={contacts} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
