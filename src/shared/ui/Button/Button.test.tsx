import { render, screen } from "@testing-library/react";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";

describe('Button', () => {
    test('test render', () => {
        render(<Button>TEST</Button>)
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })

    test('button with clear theme class', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>)
        expect(screen.getByText('TEST')).toHaveClass('clear')
    })
})