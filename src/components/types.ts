type Action =
    | "Item added"
    | "Item removed"
    | "Coupon used"
    | "Reset";
export type Coupon = {
    name: string,
    subtraction: 0.05
}
export type Item = {
    id: string;
    name: string;
    price: number;
    qty: number;
    tags?: string[];
};

export type Model = {
    items: Item[];
    taxRate: number;
    usedCoupons: string[];
};

export type Message =
    | { type: "addItem"; item: Item }
    | { type: "removeItem"; id: string }
    | { type: "applyCoupon"; code: string }
    | { type: "reset" };

export type TotalInput = {
    items: Item[];
    taxRate: number;
    discountMultiplier: number;   // erstatter Math.random()
    surchargeMultiplier: number;  // erstatter new Date()
};