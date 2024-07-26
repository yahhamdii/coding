import { render, screen, mount } from '@testing-library/react';
import {Page, userInfoWithTitle, UserInfo} from './Component/SecondComponent';

it('has expected user Info', function(){
    render(<Page user={{firstName:'hamdi', lastName:'yahyaoui'}} />);
   // const linkElement = screen.getByText(/yahyaoui/i);
    const linkElement1 = screen.getByText(/hamdi/i);
  //expect(linkElement).toBeInTheDocument();
  expect(linkElement1).toBeInTheDocument();

});