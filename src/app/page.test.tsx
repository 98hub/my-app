import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './page';

describe('Home Page', () => {
    it('renders expected content', () => {
        render(<Home />);

        // 1. Sign up to Dewacloud Academy!
        expect(
            screen.getByText((_, element) =>
                element?.textContent === 'Sign up to Dewacloud Academy!'
            )
        ).toBeInTheDocument();

        // 2. Save and see your changes instantly!
        expect(
            // screen.getByText('Hello World!')
            screen.getByText('Save and see your changes instantly!')
        ).toBeInTheDocument();

        // 3. This app uses for CI/CD demonstration purposes only 🚀
        const matches = screen.getAllByText(
            'This app uses for CI/CD demonstration purposes only 🚀'
        );
        const codeElement = matches.find(el => el.tagName === 'CODE');
        expect(codeElement).toBeDefined();
    });
});