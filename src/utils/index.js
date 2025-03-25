

export const getPrice = (price) => {
    const numericPrice = Number(price); // Convert to number if it's a string
    return `£${numericPrice.toFixed(2)}`;
};

export const passwordTooltipMessage = ()=>{
    return `Strong password should have at least a lowercase, uppercase, number and special character.`
}