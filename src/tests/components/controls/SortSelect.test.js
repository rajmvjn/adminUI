import { render, screen } from "@testing-library/react";
import SortSelect from '../../../components/controls/SortSelect';

describe('Sort Select component', () => {
    test('renders the given label for the select element', () => {

        render(<SortSelect label={'Select Label'} options={[]}/>);
        const labelElement = screen.getByText('Select Label');
        expect(labelElement).toBeInTheDocument();
    });

    test('renders the select option with given options', () => {

        render(<SortSelect options={['option1', 'option2']}/>);
        const labelElement = screen.getByText('option2');
        expect(labelElement).toBeInTheDocument();
    });
});
