import { render, screen, fireEvent} from '@testing-library/react';
import React from "react";
import {App} from "./App";

//Tests the Main screen title and Lancer Logo


//Tests the First Screen when the user arrives at url
describe('Title, Logo, and Blue6/7 Buttons are visible', () => {

  test('Lancer Brigade Operations Center', () => {
    render(<App/>);
    screen.debug()
    const linkElement = screen.getByText('Lancer Brigade Operations Center');
    expect(linkElement).toBeInTheDocument();
    let blue6Button = screen.getByRole('button', {name: 'Initiate Training Event w/ Blue 6'});
    expect(blue6Button).toBeVisible();
    let blue7Button = screen.getByRole('button', {name: 'Close-Out Training Event w/ Blue 7'});
    expect(blue7Button).toBeVisible()
  });

    //After user clicks on Blue 6
  it('Blue6 fields are visible and accessible when clicking buttons', async () => {
    render(<App/>);
    fireEvent.click(screen.getByRole('button', {name: 'Initiate Training Event w/ Blue 6'}));
    let reportingDateInput = screen.getByLabelText('Reporting Date Time Group:');
    expect(reportingDateInput).toBeVisible();
    let callSignInput = screen.getByLabelText('Unit & Call Sign:');
    expect(callSignInput).toBeVisible();
    let spDateInput = screen.getByLabelText('SP Date Time Group:');
    expect(spDateInput).toBeVisible();
    let rpInput = screen.getByLabelText('Estimated RP Date Time Group:')
    expect(rpInput).toBeVisible();
    let locInput = screen.getByLabelText('Command Post Location:')
    expect(locInput).toBeVisible();
    let etaInput = screen.getByLabelText('ETA to Continue Operations:')
    expect(etaInput).toBeVisible();
    let siInput = screen.getByLabelText('Sensitive Items Status:')
    expect(siInput).toBeVisible();
    let narInput = screen.getByLabelText('One Sentence Narrative:')
    expect(narInput).toBeVisible();
    let pocInput = screen.getByLabelText('Contact Name and Phone #:')
    expect(pocInput).toBeVisible();
    let cancelInput = screen.getByRole('button', {name: 'Cancel'});
    expect(cancelInput).toBeVisible();
})});

//Tests Blue 7 Movement Closure Report
describe('All Needed Labels and Forms are Visible for Blue 7', () => {
  it('Check-out fields are visible and accessible', async () => {
    render(<App/>);
    fireEvent.click(screen.getByRole('button', {name: 'Close-Out Training Event w/ Blue 7'}));
    let checkOutReportingDateInput = screen.getByLabelText('Reporting Date Time Group:');//Need to find a better option for this query. Causes problems above as well)
    expect(checkOutReportingDateInput).toBeVisible();
    let checkOutCallSignInput = screen.getByLabelText('Unit & Call Sign:');
    expect(checkOutCallSignInput).toBeVisible();
    let checkOutRpDateInput = screen.getByLabelText('RP Date Time Group:');
    expect(checkOutRpDateInput).toBeVisible();
    let checkOutLocInput = screen.getByLabelText('Command Post Location:');
    expect(checkOutLocInput).toBeVisible();
    let accidentInput = screen.getByLabelText('Accidents or SIGACTs:');
    expect(accidentInput).toBeVisible();
    let checkoutEtaInput = screen.getByLabelText('ETA to Continue Operations:');
    expect(checkoutEtaInput).toBeVisible();
    let checkOutSiInput = screen.getByLabelText('Sensitive Items Status:');
    expect(checkOutSiInput).toBeVisible();
    let cancelInput = screen.getByRole('button', {name: 'Cancel'});
    expect(cancelInput).toBeVisible();


})})

it ('From Blue 6 Form, user clicks on menu button, and returns them to home screen', async() => {
  render(<App/>);
  fireEvent.click(screen.getByRole('button', {name: 'Initiate Training Event w/ Blue 6'}));
  fireEvent.click(screen.getByRole('button',{name: 'Cancel'}));
  const linkElement = screen.getByText('Lancer Brigade Operations Center');
  expect(linkElement).toBeInTheDocument();
  let blue6Button = screen.getByRole('button', {name: 'Initiate Training Event w/ Blue 6'});
  expect(blue6Button).toBeVisible();
  let blue7Button = screen.getByRole('button', {name: 'Close-Out Training Event w/ Blue 7'});
  expect(blue7Button).toBeVisible()
})

it ('From Blue 7 Form, user clicks on menu button, and returns them to home screen', async() => {
  render(<App/>);
  fireEvent.click(screen.getByRole('button', {name: 'Close-Out Training Event w/ Blue 7'}));
  fireEvent.click(screen.getByRole('button',{name: 'Cancel'}));
  const linkElement = screen.getByText('Lancer Brigade Operations Center');
  expect(linkElement).toBeInTheDocument();
  let blue6Button = screen.getByRole('button', {name: 'Initiate Training Event w/ Blue 6'});
  expect(blue6Button).toBeVisible();
  let blue7Button = screen.getByRole('button', {name: 'Close-Out Training Event w/ Blue 7'});
  expect(blue7Button).toBeVisible()
})
