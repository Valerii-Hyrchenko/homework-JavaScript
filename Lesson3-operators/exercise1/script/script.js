let userNeedsGadgets = Number(prompt("How many gadgets do you need?"));
let userHasGadgets = Number(prompt("How many gadgets do you have?"));
if (userNeedsGadgets > userHasGadgets) {
    alert (`You have less gadgets than you need! ${userHasGadgets} gadgets less then needed ${userNeedsGadgets}!`);
} else if (userNeedsGadgets < userHasGadgets) {
    alert (`You have more gadgets than you need! ${userHasGadgets} gadgets more then needed ${userNeedsGadgets}!`);
} else {
    alert (`You have as many gadgets as you need! ${userHasGadgets} gadgets equals ${userNeedsGadgets}!`); 
}