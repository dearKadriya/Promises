import GameSavingLoader from './GameSavingLoader';

test('Проверка создания объекта GameSaving', async () => {
  let gameSavingObj = {};
  await GameSavingLoader.load().then((saving) => { gameSavingObj = saving; });
  // eslint-disable-next-line
    expect(gameSavingObj).toEqual('{\"id\":9,\"created\":1546300800,\"userInfo\":{\"id\":1,name\":\"Hitman\",\"level\":10,\"points\":2000}}');
});
