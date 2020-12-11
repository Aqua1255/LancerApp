import { render, screen } from '@testing-library/react';
import React from "react";
import {App} from "./App";

//Tests the Main screen title and Lancer Logo
test('Lancer Brigade Operations Center', () => {
  render(<App/>);
  const linkElement = screen.getByText('Lancer Brigade Operations Center');
  expect(linkElement).toBeInTheDocument();
});

//Tests the Blue 6 Report Creation Form
describe('Blue 6 Reporting fields are present and accessible', () => {
  render(<App/>);
  it('Reporting fields are visible and accessible', async () => {
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
})});

    //
    //
    //
    //
    //

    //
    //

    //
    //

    //
    //

    //
    //

    //


