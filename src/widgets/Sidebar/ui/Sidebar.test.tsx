import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "@/widgets/Sidebar";
import { renderWithRouter } from "@/shared/lib/tests/renderWithRouter";

describe('Sidebar', () => {
    test('test render', () => {
        renderWithRouter(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('sidebar toggle', () => {
        renderWithRouter(<Sidebar />)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed')
    })
})