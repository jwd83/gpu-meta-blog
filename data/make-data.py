# load the data from gpumeta.csv

import csv

def load_data():
    data = []
    with open('gpumeta.csv', 'r') as csvfile:
        reader = csv.reader(csvfile, delimiter=',')
        for row in reader:
            data.append(row)
    return data


def clean_data(s):
    return s.replace('\n', '').replace('\r', '').replace('\t', '').strip()

csv_data = load_data()

# create an empty array to store the formatted data
data_out = []

# iterate through the csv data and format it
row_num = -1

for row in csv_data:
    row_num += 1

    # skip the first 3 rows
    if row_num < 3:
        continue

    # skip the sources row and beyond
    if row[1] == 'Sources':
        break

    # clean all the data in the row
    for i in range(len(row)):
        row[i] = clean_data(row[i])

    if len(row[1]) < 1:
        continue

    new_record = {
        'Model': row[1],
        'Launch MSRP': row[2],
        'Architecture': row[11],
        'GPU Die': row[12],
        'GPU Die Variant': row[13],
        'GPU Die Size': row[14],
        'Foundry': row[15],
        'Process Node': row[16],
        'Primary Cores': row[17],
        'Base Clock': row[19],
        'Boost Clock': row[20],
        'Memory Architecture': row[22],
        'Memory Capacity (GB)': row[23],
        'Memory Clock': row[25],




    }

    data_out.append(new_record)

# json stringify data_out
import json
with open('gpu_list.js', 'w') as outfile:
    outfile.write('export const gpu_list = ')
    json.dump(data_out, outfile)
    outfile.write(';')


