let taxRate = 0.25; // 1

function checkout(cart: Item[], coupon?: string): number {
    const usedCoupons = new Set<string>();
    if (coupon && !usedCoupons.has(coupon)) {
        usedCoupons.add(coupon);
        taxRate -= 0.05;
    }

    for (const item of cart) { // car blir direkte mutert 4
        item.tags ??= [];
        item.tags.push("processed");
    }

    const luckyDiscount = Math.random() < 0.1 ? 0.9 : 1.0; // Math.nrandom() 2

    const isWeekend = [0, 6].includes(new Date(Date.now()).getDay()); // new Date 3 // kan være en funksjonsparameter?
    const weekendSurcharge = isWeekend ? 1.02 : 1.0;

    console.log("Checking out…"); // 6
    const subtotal = cart.reduce((s, it) => s + it.price * it.qty, 0);
    const total = subtotal * taxRate * luckyDiscount * weekendSurcharge;

    localStorage.setItem("lastTotal", String(total)); // 5 lagrer til en database

    return total;
}

type Item = {
    id: string;
    name: string;
    price: number;
    qty: number;
    tags?: string[]
};