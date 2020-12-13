import { render, screen } from '@testing-library/react';
import React from "react";
import {App} from "./App";

//Tests the Main screen title and Lancer Logo


//Tests the Blue 6 Report Creation Form
describe('All Needed Labels and Forms are Visible ', () => {

  test('Lancer Brigade Operations Center', () => {
    render(<App/>);
    screen.debug()
    const linkElement = screen.getByText('Lancer Brigade Operations Center');
    expect(linkElement).toBeInTheDocument();
  });
  it('Check-in fields are visible and accessible', async () => {
    render(<App/>);
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

//Tests Blue 7 Movement Closure Report
describe('All Needed Labels and Forms are Visible ', () => {
  it('Check-out fields are visible and accessible', async () => {
    render(<App/>);
    let checkOutReportingDateInput = screen.getByLabelText('Reporting Date Time Group:');
    expect(checkOutReportingDateInput).toBeVisible();
    let checkOutCallSignInput = screen.getByLabelText('Unit & Call Sign:');
    expect(checkOutCallSignInput).toBeVisible();
    let checkOutRpDateInput = screen.getByLabelText('RP Date Time Group:');
    expect(checkOutRpDateInput).toBeVisible();
    let checkOutLocInput = screen.getByLabelText('Command Post Location:')
    expect(checkOutLocInput).toBeVisible();
    let accidentInput = screen.getByLabelText('Accidents or SIGACTs:')
    expect(accidentInput).toBeVisible();
    let checkoutEtaInput = screen.getByLabelText('ETA to Continue Operations:')
    expect(checkoutEtaInput).toBeVisible();
    let checkOutSiInput = screen.getByLabelText(`Sensitive Items Status:`)
    expect(checkOutSiInput).toBeVisible();

})})


