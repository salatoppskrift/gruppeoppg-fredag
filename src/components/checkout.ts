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

export function calculateTotal(input: TotalInput) : number {
    return 10;
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