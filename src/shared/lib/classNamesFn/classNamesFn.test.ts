import { classNamesFn } from "@/shared/lib/classNamesFn/classNamesFn";

describe('classNamesFn', () => {
    test('with only first param', () => {
        expect(classNamesFn('class')).toBe('class');
    })

    test('with additional params', () => {
        expect(classNamesFn('class', {}, ['add', 'remove'])).toBe('class add remove');
    })

    test('with mods params', () => {
        expect(classNamesFn('class', { hovered: true, disabled: true }, ['add', 'remove'])).toBe('class add remove hovered disabled');
    })

    test('with mods params and false', () => {
        expect(classNamesFn('class', { hovered: true, disabled: false }, ['add', 'remove'])).toBe('class add remove hovered');
    })

    test('with mods params and undefined', () => {
        expect(classNamesFn('class', { hovered: true, disabled: undefined! }, ['add', 'remove'])).toBe('class add remove hovered');
    })
})