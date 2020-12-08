import { render, screen } from '@testing-library/react';
import SetUpProxy from './SetUp-Proxy';
//Tests the Main screen title and Lancer Logo
test('Lancer Brigade Operations Center', () => {
  render(<SetUpProxy/>);
  const linkElement = screen.getByText('Lancer Brigade Operations Center');
  expect(linkElement).toBeInTheDocument();
});

//Tests the Blue 6 Report Creation Form
describe('Blue 6 Creation Form', () => {
  it('fields are visible and accessible', async () => {

    let reportingDateInput = screen.getByLabelText('Reporting DTG');
    expect(reportingDateInput).toBeVisible();
    expect(reportingDateInput).toHaveAttribute('placeholder', 'Reporting DTG (Required)');

    let callSignInput = screen.getByLabelText('Unit & Call Sign');
    expect(callSignInput).toBeVisible();
    expect(callSignInput).toHaveAttribute('placeholder', 'Unit & Call Sign');

    let spDate = screen.getByLabelText('SP DTG');
    expect(spDate).toBeVisible();
    expect(spDate).toHaveAttribute('placeholder', 'SP DTG');

    let rpInput = screen.getByLabelText('Estimated RP DTG')
    expect(rpInput).toBeVisible();
    expect(rpInput).toHaveAttribute('placeholder', 'Estimated RP DTG');

    let locInput = screen.getByLabelText('Command Post LOC')
    expect(locInput).toBeVisible();
    expect(locInput).toHaveAttribute('placeholder', 'Command Post LOC');

    let etaInput = screen.getByLabelText('ETA to Continue Operations')
    expect(etaInput).toBeVisible();
    expect(etaInput).toHaveAttribute('placeholder', 'ETA to Continue Operations');

    let siInput = screen.getByLabelText('Sensitive Items Status')
    expect(siInput).toBeVisible();
    expect(siInput).toHaveAttribute('placeholder', 'Sensitive Items Status');

    let narInput = screen.getByLabelText('Concise Narrative')
    expect(narInput).toBeVisible();
    expect(narInput).toHaveAttribute('placeholder', 'Concise Narrative');

    let pocInput = screen.getByLabelText('Contact Name and Phone #')
    expect(pocInput).toBeVisible();
    expect(pocInput).toHaveAttribute('placeholder', 'Contact Name and Phone #');
  })});
