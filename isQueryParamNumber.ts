export function isNumberQueryParam(value: string): value is string {
    if (value === null) {
        return false; // If the parameter is null, it's not a number
    }
    const numericValue = parseFloat(value);
    return !isNaN(numericValue) && typeof numericValue === 'number';
}