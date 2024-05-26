export const yearFormatter = (date) => date.getFullYear().toString();

export const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
}).format;
