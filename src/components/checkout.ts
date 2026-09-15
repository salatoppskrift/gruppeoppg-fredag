import type { Item, Model, Message, Coupon, TotalInput } from "./types";

export function update(model: Model, message: Message): Model { return model; };
export function addItem(items: Item[], item: Item) : Item[] { return items; };
export function removeItem(items: Item[], item: Item) : Item[] { return items; };
export function markProcess(items: Item[]) : Item[] {
    return items;
}
export function applyCoupon(
    taxRate: number,
    usedCoupons: string[],
    code: string
) : number {
    return taxRate;
}
export function calculateTotal(input: TotalInput) : number {
    return 10;
}