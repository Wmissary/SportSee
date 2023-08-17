export default class UserPerformances {
  constructor(data) {
    this.userId = data.userId;
    this.data = data.data.map(item => ({
      value: item.value,
      kind: data.kind[item.kind],
    }));
  }
}
