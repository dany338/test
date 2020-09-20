import React from 'react';
import { fireEvent, render, waitForElement } from '@testing-library/react';
import Todo from './Todo';

describe('Test for Todo component', () => {
  test('Should add new task when form been submitted', async () => {
    const { getByTestId, getByText } = render(<Todo />);
    const fieldNode = await waitForElement(
      () => getByTestId('form-field')
    );
    // console.log(fieldNode);
    const newTask = 'testing';

    fireEvent.change(
      fieldNode,
      { target: { value : newTask }}
    )
    expect(fieldNode.value).toEqual(newTask)

    const btnNode = await waitForElement(
      () => getByTestId('form-btn')
    );
    fireEvent.click(btnNode)
    // console.log(btnNode);
    const tdNode = await waitForElement(
      () => getByText(newTask)
    )
    expect(tdNode).toBeDefined()
  });
})
