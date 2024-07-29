import render from '@frontend/test/render';
import { screen } from '@testing-library/react';
import React from 'react';
import talks from '../__tests__/__mocks__/talk';
import TalkItem from '.';

describe('TalkItem', () => {
  test('renders TalkItem', () => {
    const talk = talks[0];
    render(<TalkItem talk={talk} />);

    const title = screen.getByText(talk.title);
    expect(title).toBeInTheDocument();

    const description = screen.getByText(talk.description);
    expect(description).toBeInTheDocument();

    const date = screen.getByTestId('talk-date');
    expect(date).toBeInTheDocument();

    const slides = screen.getByRole('link', {
      name: 'Slides',
    });

    expect(slides).toHaveAttribute('href', talk.slideUrl);
  });
});
