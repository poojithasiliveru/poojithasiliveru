import React from 'react';
import {render,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './button';

test('Render button with label',()=>{
    const {getByText}=render(<button label="Click me"/>)
    const buttonElement=getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
});
//className=btn
test('ClassName btn present',()=>{
    const {continer}=render(
        <Button label="Click me"/>
    )
    const buttonElement=continer.
    querySelector('button');
    expect(buttonElement).toHaveClass('btn')
})
//firEvent to click my button
test('Button is Clicked',()=>{
    const onClickMock=jest.fn();
    const button =render(<Button label="Click me" onClick={onClickMock}/>)
    const buttonElement=button.getByText('Click me');
    fireEvent.click(buttonElement) //simulate
    fireEvent.click(buttonElement)
    expect(onClickMock).toHaveBeenCalledTimes(2);
})

// const mockFun=jest.fn();
// test('fun',()=>{
//     mockFun();
//     mockFun();
//     expect(mockFun).toHaveBeenCalledTimes(2);
// })