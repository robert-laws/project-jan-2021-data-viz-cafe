import React, { useState, useEffect, useCallback, useContext } from 'react';
import OrdersContext from '../context/orders/ordersContext';
import {
  PageTitle,
  Subtitle,
  Spinner,
  SectionGroup,
  SectionTitle,
  SectionContent,
} from '../components';
import { SubPage } from '../layout';
import { GoogleSpreadsheet } from 'google-spreadsheet';

const Data = () => {
  const ordersContext = useContext(OrdersContext);
  const { orders, getOrders } = ordersContext;

  const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
  const SHEET_ID = process.env.REACT_APP_SHEET_ID;
  const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
  const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY;

  const getDoc = useCallback(() => {
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
    return doc;
  }, [SPREADSHEET_ID]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRows = async () => {
      setLoading(true);
      try {
        const doc = getDoc();
        await doc.useServiceAccountAuth({
          client_email: CLIENT_EMAIL,
          private_key: PRIVATE_KEY,
        });

        await doc.loadInfo();
        const sheet = doc.sheetsById[SHEET_ID];
        const rows = await sheet.getRows();
        getOrders(rows);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getRows();
  }, [CLIENT_EMAIL, PRIVATE_KEY, SHEET_ID, getDoc, getOrders]);

  if (loading) {
    return (
      <SubPage>
        <PageTitle>Data</PageTitle>
        <section
          className='is-flex is-flex-direction-row is-justify-content-center is-align-items-center'
          style={{ minHeight: '30rem' }}
        >
          <div>
            <p className='is-size-4 mb-1'>Loading...</p>
            <Spinner />
          </div>
        </section>
      </SubPage>
    );
  }

  return (
    <SubPage>
      <PageTitle>Data</PageTitle>
      <SectionGroup>
        <SectionTitle>Cafe Data</SectionTitle>
        <SectionContent>
          The Data Viz Cafe produces new data with every order. When a customer
          purchases something from the store those items are recorded as rows
          within in the data set. The data set includes: 1) a location id, which
          corresponds to a location name in a separate table, 2) a menu id,
          which corresponds to a menu item in a separate table, 3) a date, 4) a
          time rounded to the nearest hour, 5) a quantity, and 6) whether or not
          the order was placed through the drive-thru or not.
        </SectionContent>
        <SectionTitle>Data Analysis</SectionTitle>
        <SectionContent>
          With the data, it's possible to analyze things like the company's most
          and least popular locations, menu items, times of the day, week,
          month, and year. It's also possible to analyze the different
          quantities purchased and how many orders are placed using the drive
          thru.
        </SectionContent>
      </SectionGroup>
      <section className='is-flex is-flex-direction-row is-flex-wrap-wrap'>
        {orders && (
          <>
            <Subtitle>Data Viz Cafe - Customer Order Data</Subtitle>
            <table className='table is-bordered is-striped is-narrow is-hoverable is-fullwidth'>
              <thead>
                <tr>
                  <th>row #</th>
                  <th>location id</th>
                  <th>menu id</th>
                  <th>date</th>
                  <th>time</th>
                  <th>quantity</th>
                  <th>drive thru</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((row, index) => (
                  <tr key={row.id}>
                    <th>{index + 1}</th>
                    <td>{row.location_id}</td>
                    <td>{row.menu_id}</td>
                    <td>{row.date}</td>
                    <td>{row.time}</td>
                    <td>{row.quantity}</td>
                    <td>{row.drive_thru}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </section>
    </SubPage>
  );
};

export default Data;
