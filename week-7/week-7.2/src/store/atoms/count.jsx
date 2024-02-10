import { atom } from "recoil";

export const CountAtom = atom({
    key: "CountAtom",
    default: 0
});


export const evenSelector = atom({
    key: "evenSelector",
    get: ({get}) => {
        const count = get(CountAtom);
        return count%2;
    }
});