import { getUserBalance, postContract, putContract } from "./Middleware.js";


const acc1 = "0x9265db9F617aa2452CFBECf6CA035b00130f9299";
const acc2 = "0x056e9837334C622ee79670c54b530F0921BaE76d";
const p_acc1 = "0x67304bb5639c41e77e6424c95aa329ec3c105f666bb9ff4df5df2a6d0a59880d";
const p_acc2 = "0x1d6458c6daf49287c3a5ed31a7171f14d0ddd8543ee9bc62647422164f9454f5";

console.log(await getUserBalance(acc1));
console.log(await getUserBalance(acc2));
console.log(await postContract(acc1, p_acc1));
console.log(await postContract(acc2, p_acc2));
console.log(await putContract(acc2, p_acc2));