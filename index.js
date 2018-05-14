/* globals createApp, updateUI, slots */

const ui = {
  component: 'p',
  children: 'Successfully installed dapp-demo-app',
};

createApp({
  run() {
    updateUI(slots.MAIN, ui);
  },
});
