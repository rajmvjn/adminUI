import { render, screen } from "@testing-library/react";
import SortSelect from '../../../components/controls/SortSelect';

describe('Sort Select component', () => {
    test('renders the given label for the select element', () => {

        let labelText = 'Select Label';
        
        render(<SortSelect label={labelText} options={[]}/>);
        const labelElement = screen.getByLabelText(labelText);
        screen.debug(labelElement);
        screen.logTestingPlaygroundURL(labelElement);
        expect(labelElement).toBeInTheDocument();
    });

    test('renders the select option with given options', () => {

        let option2 = 'option2';

        render(<SortSelect options={['option1', option2 ]}/>);
        const labelElement = screen.getByText(option2);
        expect(labelElement).toBeInTheDocument();
    });
});
