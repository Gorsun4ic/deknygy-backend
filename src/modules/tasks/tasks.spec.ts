// src/modules/tasks/tasks.service.spec.ts (Top of File)

// 1. --- DEFINE MOCKS (Except Logger Instance) ---
const mockStatsService = {
  getTotalStatsForADay: jest.fn(),
  getHourlyStats: jest.fn(),
  getMonthlyReport: jest.fn(),
};

// 2. --- EXPOSE MUTABLE LOGGER REFERENCES ---
// Declare a variable outside the factory. This variable holds the mock instance.
let mockLogger;
let mockLoggerInstance; // Keep this variable as a temporary measure for clarity if needed

// 3. --- APPLY THE JEST MOCK (Fully Self-Contained) ---
jest.mock('@nestjs/common', () => {
  // Define the actual mock logger instance HERE, inside the factory.
  mockLoggerInstance = {
    debug: jest.fn(),
    error: jest.fn(),
    log: jest.fn(),
    warn: jest.fn(),
  };

  // Assign it to the outside variable so tests can access it.
  mockLogger = mockLoggerInstance;

  const MockLoggerClass = jest.fn(function () {
    // This now safely returns the locally defined instance.
    return mockLoggerInstance;
  });

  // Attach the static properties
  Object.assign(MockLoggerClass, {
    overrideLogger: jest.fn(),
    log: jest.fn(),
    error: jest.fn(),
  });

  // Return the mocked module
  return {
    ...jest.requireActual('@nestjs/common'),
    Logger: MockLoggerClass,
  };
});

// 4. --- IMPORTS ---
import { StatsService } from '../analytics/services/stats/stats.service';
import { TasksService } from './tasks.service';
import { Test, TestingModule } from '@nestjs/testing';
import { Logger } from '@nestjs/common';
// The import for Mock is not needed and can be removed.

// ... rest of your file is correct ...

// ... rest of your file is correct ...
describe('TasksService', () => {
  let service: TasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TasksService,
        // Provide the mock services to the module
        { provide: StatsService, useValue: mockStatsService },
      ],
    }).compile();

    service = module.get<TasksService>(TasksService);
  });

  afterEach(() => {
    // Clear mock data/call counts after each test
    jest.clearAllMocks();
  });

  // ------------------------------------------------------------------
  // 1. Daily Report Tests
  // ------------------------------------------------------------------

  describe('sendDailyReport', () => {
    const mockDailyStats = { searches: 1000, newUsers: 50 };

    it('should successfully fetch daily stats and log the result', async () => {
      // Arrange: Set up the successful return value
      mockStatsService.getTotalStatsForADay.mockResolvedValue(mockDailyStats);

      // Act: Trigger the cron job method
      await service.sendDailyReport();

      // Assert: Verify calls and logging
      expect(mockStatsService.getTotalStatsForADay).toHaveBeenCalledTimes(1);
      // Verify that the call includes a Date object (the current date)
      expect(mockStatsService.getTotalStatsForADay).toHaveBeenCalledWith(
        expect.any(Date),
      );
      expect(mockLogger.debug).toHaveBeenCalledWith('Sending daily report');
      expect(mockLogger.debug).toHaveBeenCalledWith(mockDailyStats);
      expect(mockLogger.error).not.toHaveBeenCalled();
    });

    it('should log an error if statsService.getTotalStatsForADay fails', async () => {
      const mockError = new Error('Daily DB Timeout');
      // Arrange: Set up the method to throw an error
      mockStatsService.getTotalStatsForADay.mockRejectedValue(mockError);

      // Act: Trigger the cron job method
      await service.sendDailyReport();

      // Assert: Verify error handling
      expect(mockStatsService.getTotalStatsForADay).toHaveBeenCalledTimes(1);
      expect(mockLogger.error).toHaveBeenCalledWith(
        'Error sending daily report',
        mockError,
      );
      // Ensure successful logging was not executed
      expect(mockLogger.debug).toHaveBeenCalledWith('Sending daily report');
      expect(mockLogger.debug).not.toHaveBeenCalledWith(mockDailyStats);
    });
  });

  // ------------------------------------------------------------------
  // 2. Hourly Report Tests
  // ------------------------------------------------------------------

  describe('sendHourlyReport', () => {
    const mockHourlyStats = { searches: 50, logins: 12 };

    it('should successfully fetch hourly stats and log the result', async () => {
      // Arrange
      mockStatsService.getHourlyStats.mockResolvedValue(mockHourlyStats);

      // Act
      await service.sendHourlyReport();

      // Assert
      expect(mockStatsService.getHourlyStats).toHaveBeenCalledTimes(1);
      expect(mockLogger.debug).toHaveBeenCalledWith('Sending hourly report');
      expect(mockLogger.debug).toHaveBeenCalledWith(mockHourlyStats);
      expect(mockLogger.error).not.toHaveBeenCalled();
    });

    it('should log an error if statsService.getHourlyStats fails', async () => {
      const mockError = new Error('Hourly API failure');
      // Arrange
      mockStatsService.getHourlyStats.mockRejectedValue(mockError);

      // Act
      await service.sendHourlyReport();

      // Assert
      expect(mockStatsService.getHourlyStats).toHaveBeenCalledTimes(1);
      expect(mockLogger.error).toHaveBeenCalledWith(
        'Error sending hourly report',
        mockError,
      );
    });
  });

  // ------------------------------------------------------------------
  // 3. Monthly Report Tests
  // ------------------------------------------------------------------

  describe('sendMonthlyReport', () => {
    const mockMonthlyStats = { users: 2000, feedbacks: 50 };

    it('should successfully fetch monthly stats and log the result', async () => {
      // Arrange
      mockStatsService.getMonthlyReport.mockResolvedValue(mockMonthlyStats);

      // Act
      await service.sendMonthlyReport();

      // Assert
      expect(mockStatsService.getMonthlyReport).toHaveBeenCalledTimes(1);
      expect(mockLogger.debug).toHaveBeenCalledWith('Sending monthly report');
      expect(mockLogger.debug).toHaveBeenCalledWith(mockMonthlyStats);
      expect(mockLogger.error).not.toHaveBeenCalled();
    });

    it('should log an error if statsService.getMonthlyReport fails', async () => {
      const mockError = new Error('Monthly service is down');
      // Arrange
      mockStatsService.getMonthlyReport.mockRejectedValue(mockError);

      // Act
      await service.sendMonthlyReport();

      // Assert
      expect(mockStatsService.getMonthlyReport).toHaveBeenCalledTimes(1);
      expect(mockLogger.error).toHaveBeenCalledWith(
        'Error sending monthly report',
        mockError,
      );
    });
  });
});
