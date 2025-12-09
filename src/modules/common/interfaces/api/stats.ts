export interface IDailyStats {
  newUsers: number;
  searches: number;
  feedbacks: number;
  totalQueriesFromUniqueUsers: number;
  newUsersWhoMadeAQuery: number;
}

export interface IHourlyStats {
  searches: number;
  feedbacks: number;
  newUsers: number;
}

export interface IMonthlyStats {
  searches: number;
  feedbacks: number;
  newUsers: number;
}
