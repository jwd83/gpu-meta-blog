import googleapiclient.discovery as discovery


DRIVE = discovery.build('drive', 'v3')

spreadsheetId = '12PQOqNCoaBP7KQ8rCpeQ7cM6A1BORmxqQOdEYFLcK2c' # Please set the Spreadsheet ID.
DST_MIMETYPE = 'text/csv'


# Retrieve Spreadsheet name from Spreadsheet ID.
res1 = DRIVE.files().get(fileId=spreadsheetId).execute()

print(res1)