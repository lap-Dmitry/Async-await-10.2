import GameSavingLoader from './gameSaving';

(async () => {
  try {
    console.log(await GameSavingLoader.load());
  } catch (err) {
    console.log(err);
  }
})();
