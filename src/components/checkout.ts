import type { Item, Model, Message, TotalInput } from "./types";

export function update(model: Model, message: Message): Model { return model; };

export function addItem(items: Item[], item: Item) : Item[] { return [...items, item]; };
export function removeItem(items: Item[], id: string) : Item[] { return items.filter(item => item.id !== id); };

export function markProcessed(items: Item[]) : Item[] {
    return items.map(item => ({
        ...item,
        tags: [
            ...(item.tags ?? []),
            "processed"
        ]
    }));
}


//testing applyCoupon()

export function applyCoupon(
    taxRate: number,
    usedCoupons: string[],
    code: string
): {
    taxRate: number;
    usedCoupons: string[];
} {

    if (usedCoupons.includes(code)) {

        return {
            taxRate: taxRate,
            usedCoupons: usedCoupons
        };

    }

    return {
        taxRate: taxRate - 0.05,
        usedCoupons: [...usedCoupons, code]
    };
}

// testing calculateTotal()

export function calculateTotal(input: TotalInput) : number {
    const total = input.items.reduce(
        (sum, item) =>
            sum + item.price * item.qty,
        0
    );

    return total
        * input.discountMultiplier
        * input.surchargeMultiplier
        * input.taxRate;
}