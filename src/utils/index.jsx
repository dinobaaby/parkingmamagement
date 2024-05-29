export const yearFormatter = (date) => date.getFullYear().toString();

export const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
}).format;

export const dateFormater = (date) => {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    const month = String(newDate.getMonth() + 1).padStart(2, "0"); // Add 1 and pad with '0' if needed
    const day = String(newDate.getDate()).padStart(2, "0"); // Pad with '0' if needed

    return `${year}-${month}-${day}`;
};
