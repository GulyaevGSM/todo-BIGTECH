import { render, screen } from '@testing-library/react';
import { Input, InputSize } from './Input';

jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (str: string) => str
    }),
}));

describe('Input component', () => {
    test('renders with default props', () => {
        render(<Input placeholder="Поиск" />);

        const inputElement = screen.getByPlaceholderText('Поиск');
        expect(inputElement).toBeInTheDocument();
    });

    test('renders with custom placeholder', () => {
        render(<Input placeholder="Введите текст" />);

        const inputElement = screen.getByPlaceholderText('Введите текст');
        expect(inputElement).toBeInTheDocument();
    });

    test('renders with correct size class', () => {
        render(<Input size={InputSize.L} placeholder="Введите текст" />);

        const inputElement = screen.getByPlaceholderText('Введите текст');
        expect(inputElement).toHaveClass('size_l'); // Проверяем правильный класс размера
    });

    test('renders with custom class', () => {
        render(<Input className="custom-class" placeholder="Введите текст" />);

        const inputElement = screen.getByPlaceholderText('Введите текст');
        expect(inputElement).toHaveClass('custom-class'); // Проверяем, что кастомный класс применён
    });
});
