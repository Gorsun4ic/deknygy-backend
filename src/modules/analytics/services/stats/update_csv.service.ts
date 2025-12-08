import {
  Injectable,
  Logger,
  InternalServerErrorException,
} from '@nestjs/common';
import { google, sheets_v4 } from 'googleapis';
import * as path from 'path';

@Injectable()
export class GoogleSheetsService {
  private readonly logger = new Logger(GoogleSheetsService.name);

  // Define scopes required for reading and writing
  private readonly SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

  /**
   * Updates a row if the first column (Date) matches, otherwise appends a new row.
   *
   * @param spreadsheetId The ID of the Google Sheet (from the URL)
   * @param sheetName The name of the tab (e.g., "Sheet1")
   * @param newRow An array of strings/numbers representing the row data
   * @param keyFilePath Path to your service-account.json file
   */
  async updateOrAddTableRow(
    spreadsheetId: string,
    sheetName: string,
    newRow: (string | number)[],
    keyFilePath: string,
  ): Promise<void> {
    try {
      // 1. Authenticate
      this.logger.log('🔑 Authenticating...');
      const auth = new google.auth.GoogleAuth({
        keyFile: path.resolve(keyFilePath), // Ensures absolute path
        scopes: this.SCOPES,
      });

      const client = await auth.getClient();
      const sheets: sheets_v4.Sheets = google.sheets({
        version: 'v4',
        auth: client as unknown as sheets_v4.Options['auth'],
      });
      // 2. Fetch all values from the sheet
      this.logger.log(`📂 Opening spreadsheet: ${spreadsheetId}`);
      this.logger.log(`📊 Fetching all values from: ${sheetName}`);

      const response = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: sheetName, // Fetches everything in the sheet
      });

      const allValues = response.data.values || [];

      if (allValues.length === 0) {
        this.logger.warn('⚠️ Warning: The sheet is empty.');
      }

      const headers = allValues[0] || [];
      this.logger.log(`📄 Headers detected: ${JSON.stringify(headers)}`);
      this.logger.log(`📅 Checking for existing date: ${newRow[0]}`);

      // 3. Validation: Check column length match
      // (Optional: Only check if headers exist to avoid crashing on empty new sheets)
      if (headers.length > 0 && newRow.length !== headers.length) {
        throw new Error(
          `❌ Row length mismatch! Got ${newRow.length}, expected ${headers.length}`,
        );
      }

      // 4. Find if the row exists (Search in Column A / Index 0)
      // We skip the header row (index 0) in our logic, but we need the absolute index for API
      const targetDate = String(newRow[0]); // Ensure string comparison

      // findIndex returns -1 if not found.
      // We search allValues directly.
      const foundIndex = allValues.findIndex(
        (row, index) => index > 0 && String(row[0]) === targetDate,
      );

      // 5. Execute Logic
      if (foundIndex !== -1) {
        // --- UPDATE ---
        // Google Sheets API is 1-based.
        // Array index 0 = Row 1.
        // Array index foundIndex = Row foundIndex + 1.
        const rowNumber = foundIndex + 1;
        this.logger.log(`🔄 Updating row ${rowNumber}`);

        await sheets.spreadsheets.values.update({
          spreadsheetId,
          range: `${sheetName}!A${rowNumber}`, // e.g., "Sheet1!A5"
          valueInputOption: 'USER_ENTERED', // Parses dates and numbers like typing in UI
          requestBody: {
            values: [newRow],
          },
        });
      } else {
        // --- APPEND ---
        // If not found, add to the bottom
        this.logger.log(`➕ Adding a new row at end of sheet`);

        await sheets.spreadsheets.values.append({
          spreadsheetId,
          range: sheetName,
          valueInputOption: 'USER_ENTERED',
          insertDataOption: 'INSERT_ROWS', // Ensures we don't overwrite existing empty cells accidentally
          requestBody: {
            values: [newRow],
          },
        });
      }

      this.logger.log('✅ Operation successful!');
    } catch (error) {
      this.logger.error(
        '❌ Error updating/adding row:',
        (error as Error).stack,
      );
      throw new InternalServerErrorException((error as Error).message);
    }
  }
}
