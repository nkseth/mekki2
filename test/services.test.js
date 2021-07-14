import Index from '../pages/services';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe("Index page", () => {
    it("should render", () => {
        render(<Index />);
    });
});