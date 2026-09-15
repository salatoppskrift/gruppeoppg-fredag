import type { Item, Model, Message, Coupon } from "./components/types";
// import { defineConfig } from "vitest/config";

// export default defineConfig({
//   test: {
//     environment: "jsdom"
//   }
// });

const dummyCart: Item[] = [
  {
    id: "abcd",
    name: "guitar",
    price: 39,
    qty: 15,
    tags: ["music", "instrument", "electric"]
  },
  {
    id: "cdef",
    name: "book",
    price: 200,
    qty: 12,
    tags: ["literature"]
  }
]

Array.from({ length: 3 }, () => {
  console.log(dummyCart);
  console.log(
    checkout(
      dummyCart,
      0.25,
      new Date(Date.now()),
      0.8//Math.random()
    )
  );
});
  console.log("Ayyyy\n", dummyCart);

// saveCheckoutToStorage(dummyTotal);

function saveCheckoutToStorage(newTotal: number) {
  localStorage.setItem("lastTotal", String(newTotal));
}

function checkout(
  cartParm: Item[],
  taxRate: number,
  date: Date,
  discount: number,
  coupon?: Coupon
): number {
  const cart = [...cartParm];
  const usedCoupons = new Set<Coupon>();
  if (coupon && !usedCoupons.has(coupon)) {
    usedCoupons.add(coupon);
    taxRate -= coupon.subtraction;
  }

  for (const item of cart) { // car blir direkte mutert 4
    item.tags ??= [];
    item.tags.push("processed");
  }

  const luckyDiscount = discount < 0.1 ? 0.9 : 1.0;

  const isWeekend = [0, 6].includes(date.getDay());
  const weekendSurcharge = isWeekend ? 1.02 : 1.0;

  const subtotal = cart.reduce((s, it) => s + it.price * it.qty, 0);
  const total = subtotal * taxRate * luckyDiscount * weekendSurcharge;

  return total;
}