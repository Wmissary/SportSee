class UserData {
  constructor(data) {
    this.id = data.id;
    this.firstName = data.userInfos.firstName;
    this.lastName = data.userInfos.lastName;
    this.age = data.userInfos.age;
    this.todayScore = data.todayScore;
    this.keyData = {
      calorieCount: data.keyData.calorieCount,
      proteinCount: data.keyData.proteinCount,
      carbohydrateCount: data.keyData.carbohydrateCount,
      lipidCount: data.keyData.lipidCount,
    };
  }
}

class UserActivity {
  constructor(data) {
    this.userId = data.userId;
    this.sessions = data.sessions.map(session => ({
      day: session.day,
      kilogram: session.kilogram,
      calories: session.calories,
    }));
  }
}

class UserAverageSessions {
  constructor(data) {
    this.userId = data.userId;
    this.sessions = data.sessions.map(session => ({
      day: session.day,
      sessionLength: session.sessionLength,
    }));
  }
}

class UserPerformance {
  constructor(data) {
    this.userId = data.userId;
    this.data = data.data.map(item => ({
      value: item.value,
      kind: data.kind[item.kind],
    }));
  }
}

export { UserData, UserActivity, UserAverageSessions, UserPerformance };
