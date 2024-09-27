
PNR_RESPONSE = {
    "status": true,
    "message": "Success",
    "timestamp": 1662104408060,
    "data": {
        "Pnr": "4335734389",
        "TrainNo": "17221",
        "TrainName": "COA LTT EXPRESS",
        "Doj": "03-09-2022",
        "BookingDate": "27-08-2022",
        "Quota": "GN",
        "DestinationDoj": "03-09-2022",
        "SourceDoj": "03-09-2022",
        "From": "CCT",
        "To": "SC",
        "ReservationUpto": "SC",
        "BoardingPoint": "CCT",
        "Class": "3A",
        "ChartPrepared": false,
        "BoardingStationName": "Kakinada Town",
        "TrainStatus": "",
        "TrainCancelledFlag": false,
        "ReservationUptoName": "Secunderabad Junction",
        "PassengerCount": 1,
        "PassengerStatus": [
            {
                "Pnr": null,
                "Number": 1,
                "Prediction": null,
                "PredictionPercentage": "100",
                "ConfirmTktStatus": "Confirm",
                "Coach": "B5",
                "Berth": 55,
                "BookingStatus": "CNF B5 55",
                "CurrentStatus": "CNF",
                "CoachPosition": null,
                "BookingBerthNo": "55",
                "BookingCoachId": "B5",
                "BookingStatusNew": "CNF",
                "BookingStatusIndex": "0",
                "CurrentBerthNo": "",
                "CurrentCoachId": "",
                "BookingBerthCode": "SL",
                "CurrentBerthCode": null,
                "CurrentStatusNew": "CNF",
                "CurrentStatusIndex": "0"
            }
        ],
        "DepartureTime": "09:08",
        "ArrivalTime": "20:20",
        "ExpectedPlatformNo": "1",
        "BookingFare": "855",
        "TicketFare": "855",
        "CoachPosition": "L SLR D1 D2 D3 S1 S2 S3 S4 S5 S6 S7 B1 B2 B3 B4 B5 A1 A2 H1 SLR",
        "Rating": 3.9,
        "FoodRating": 3.4,
        "PunctualityRating": 4.1,
        "CleanlinessRating": 4.2,
        "SourceName": "Kakinada",
        "DestinationName": null,
        "Duration": "11:12",
        "RatingCount": 445,
        "HasPantry": false
    }
}

exports.FARE = {
    "status": true,
    "message": "Success",
    "timestamp": 1662275995178,
    "data": {
        "general": [
            {
                "classType": "3A",
                "fare": 505,
                "breakup": [
                    {
                        "title": "Base Charges",
                        "key": "baseFare",
                        "cost": 441
                    },
                    {
                        "title": "Reservation Charges",
                        "key": "reservationCharges",
                        "cost": 40
                    },
                    {
                        "title": "GST",
                        "key": "serviceTax",
                        "cost": 24
                    },
                    {
                        "title": "Total Amount",
                        "key": "total",
                        "cost": 505
                    }
                ]
            },
            {
                "classType": "SL",
                "fare": 175,
                "breakup": [
                    {
                        "title": "Base Charges",
                        "key": "baseFare",
                        "cost": 155
                    },
                    {
                        "title": "Reservation Charges",
                        "key": "reservationCharges",
                        "cost": 20
                    },
                    {
                        "title": "Total Amount",
                        "key": "total",
                        "cost": 175
                    }
                ]
            },
            {
                "classType": "2A",
                "fare": 710,
                "breakup": [
                    {
                        "title": "Base Charges",
                        "key": "baseFare",
                        "cost": 626
                    },
                    {
                        "title": "Reservation Charges",
                        "key": "reservationCharges",
                        "cost": 50
                    },
                    {
                        "title": "GST",
                        "key": "serviceTax",
                        "cost": 34
                    },
                    {
                        "title": "Total Amount",
                        "key": "total",
                        "cost": 710
                    }
                ]
            },
            {
                "classType": "2S",
                "fare": 105,
                "breakup": [
                    {
                        "title": "Base Charges",
                        "key": "baseFare",
                        "cost": 90
                    },
                    {
                        "title": "Reservation Charges",
                        "key": "reservationCharges",
                        "cost": 15
                    },
                    {
                        "title": "Total Amount",
                        "key": "total",
                        "cost": 105
                    }
                ]
            }
        ],
        "tatkal": [
            {
                "classType": "3A",
                "fare": 1105,
                "breakup": [
                    {
                        "title": "Base Charges",
                        "key": "baseFare",
                        "cost": 712
                    },
                    {
                        "title": "Reservation Charges",
                        "key": "reservationCharges",
                        "cost": 40
                    },
                    {
                        "title": "GST",
                        "key": "serviceTax",
                        "cost": 53
                    },
                    {
                        "title": "Tatkal Charges",
                        "key": "tatkalCharges",
                        "cost": 300
                    },
                    {
                        "title": "Total Amount",
                        "key": "total",
                        "cost": 1105
                    }
                ]
            },
            {
                "classType": "SL",
                "fare": 395,
                "breakup": [
                    {
                        "title": "Base Charges",
                        "key": "baseFare",
                        "cost": 275
                    },
                    {
                        "title": "Reservation Charges",
                        "key": "reservationCharges",
                        "cost": 20
                    },
                    {
                        "title": "Tatkal Charges",
                        "key": "tatkalCharges",
                        "cost": 100
                    },
                    {
                        "title": "Total Amount",
                        "key": "total",
                        "cost": 395
                    }
                ]
            },
            {
                "classType": "2A",
                "fare": 1540,
                "breakup": [
                    {
                        "title": "Base Charges",
                        "key": "baseFare",
                        "cost": 1016
                    },
                    {
                        "title": "Reservation Charges",
                        "key": "reservationCharges",
                        "cost": 50
                    },
                    {
                        "title": "GST",
                        "key": "serviceTax",
                        "cost": 74
                    },
                    {
                        "title": "Tatkal Charges",
                        "key": "tatkalCharges",
                        "cost": 400
                    },
                    {
                        "title": "Total Amount",
                        "key": "total",
                        "cost": 1540
                    }
                ]
            },
            {
                "classType": "2S",
                "fare": 190,
                "breakup": [
                    {
                        "title": "Base Charges",
                        "key": "baseFare",
                        "cost": 160
                    },
                    {
                        "title": "Reservation Charges",
                        "key": "reservationCharges",
                        "cost": 15
                    },
                    {
                        "title": "Tatkal Charges",
                        "key": "tatkalCharges",
                        "cost": 15
                    },
                    {
                        "title": "Total Amount",
                        "key": "total",
                        "cost": 190
                    }
                ]
            }
        ]
    }
}

exports.TRAIN_BETWEEN_STATIONS = {
    "status": true,
    "message": "Success",
    "timestamp": 1680379328922,
    "data": [
        {
            "train_number": "22221",
            "train_name": "MUMBAI CSMT - HAZRAT NIZAMUDDIN Rajdhani Express",
            "run_days": [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun"
            ],
            "train_src": "CSMT",
            "train_dstn": "NZM",
            "from_std": "16:00",
            "from_sta": "16:00",
            "local_train_from_sta": 960,
            "to_sta": "09:55",
            "to_std": "09:55",
            "from_day": 0,
            "to_day": 1,
            "d_day": 0,
            "from": "CSMT",
            "to": "NZM",
            "from_station_name": "MUMBAI CSMT",
            "to_station_name": "DELHI HAZRAT NIZAMUDDIN",
            "duration": "17:55",
            "special_train": false,
            "train_type": "RAJ",
            "train_date": "26-05-2023",
            "class_type": [
                "3A",
                "2A",
                "1A"
            ]
        },
        {
            "train_number": "12951",
            "train_name": "MUMBAI CENTRAL - NEW DELHI Rajdhani Express",
            "run_days": [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun"
            ],
            "train_src": "MMCT",
            "train_dstn": "NDLS",
            "from_std": "17:24",
            "from_sta": "17:22",
            "local_train_from_sta": 1042,
            "to_sta": "08:32",
            "to_std": "08:32",
            "from_day": 0,
            "to_day": 1,
            "d_day": 0,
            "from": "BVI",
            "to": "NDLS",
            "from_station_name": "BORIVALI",
            "to_station_name": "NEW DELHI",
            "duration": "15:8",
            "special_train": false,
            "train_type": "RAJ",
            "train_date": "26-05-2023",
            "class_type": [
                "3A",
                "2A",
                "1A"
            ]
        },
        {
            "train_number": "12953",
            "train_name": "MUMBAI CENTRAL - HAZRAT NIZAMUDDIN August Kranti Rajdhani Exp",
            "run_days": [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun"
            ],
            "train_src": "MMCT",
            "train_dstn": "NZM",
            "from_std": "17:35",
            "from_sta": "17:33",
            "local_train_from_sta": 1053,
            "to_sta": "09:43",
            "to_std": "09:43",
            "from_day": 0,
            "to_day": 1,
            "d_day": 0,
            "from": "BVI",
            "to": "NZM",
            "from_station_name": "BORIVALI",
            "to_station_name": "DELHI HAZRAT NIZAMUDDIN",
            "duration": "16:8",
            "special_train": false,
            "train_type": "RAJ",
            "train_date": "26-05-2023",
            "class_type": [
                "3A",
                "2A",
                "1A"
            ]
        },
        {
            "train_number": "12925",
            "train_name": "MUMBAI BANDRA T - AMRITSAR Paschim SF Express",
            "run_days": [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun"
            ],
            "train_src": "MMCT",
            "train_dstn": "ASR",
            "from_std": "11:58",
            "from_sta": "11:55",
            "local_train_from_sta": 715,
            "to_sta": "10:40",
            "to_std": "11:05",
            "from_day": 0,
            "to_day": 1,
            "d_day": 0,
            "from": "BVI",
            "to": "NDLS",
            "from_station_name": "BORIVALI",
            "to_station_name": "NEW DELHI",
            "duration": "22:42",
            "special_train": false,
            "train_type": "SUF",
            "train_date": "26-05-2023",
            "class_type": [
                "SL",
                "3A",
                "2A",
                "1A"
            ]
        },
        {
            "train_number": "12903",
            "train_name": "MUMBAI CENTRAL - AMRITSAR Golden Temple SF Mail",
            "run_days": [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun"
            ],
            "train_src": "MMCT",
            "train_dstn": "ASR",
            "from_std": "19:18",
            "from_sta": "19:15",
            "local_train_from_sta": 1155,
            "to_sta": "13:50",
            "to_std": "14:05",
            "from_day": 0,
            "to_day": 1,
            "d_day": 0,
            "from": "BVI",
            "to": "NZM",
            "from_station_name": "BORIVALI",
            "to_station_name": "DELHI HAZRAT NIZAMUDDIN",
            "duration": "18:32",
            "special_train": false,
            "train_type": "SUF",
            "train_date": "26-05-2023",
            "class_type": [
                "SL",
                "3A",
                "2A",
                "1A"
            ]
        },
        {
            "train_number": "12137",
            "train_name": "MUMBAI CSMT - FIROZPUR CANTT SF Punjab Mail",
            "run_days": [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun"
            ],
            "train_src": "CSMT",
            "train_dstn": "FZR",
            "from_std": "19:50",
            "from_sta": "19:47",
            "local_train_from_sta": 1187,
            "to_sta": "21:25",
            "to_std": "21:40",
            "from_day": 0,
            "to_day": 1,
            "d_day": 0,
            "from": "DR",
            "to": "NDLS",
            "from_station_name": "MUMBAI DADAR CENTRAL",
            "to_station_name": "NEW DELHI",
            "duration": "25:35",
            "special_train": false,
            "train_type": "SUF",
            "train_date": "26-05-2023",
            "class_type": [
                "SL",
                "3A",
                "2A",
                "1A"
            ]
        },
        {
            "train_number": "22209",
            "train_name": "MUMBAI CENTRAL - NEW DELHI AC Duronto Exp",
            "run_days": [
                "Mon",
                "Fri"
            ],
            "train_src": "MMCT",
            "train_dstn": "NDLS",
            "from_std": "23:00",
            "from_sta": "23:00",
            "local_train_from_sta": 1380,
            "to_sta": "15:55",
            "to_std": "15:55",
            "from_day": 0,
            "to_day": 1,
            "d_day": 0,
            "from": "MMCT",
            "to": "NDLS",
            "from_station_name": "MUMBAI CENTRAL",
            "to_station_name": "NEW DELHI",
            "duration": "16:55",
            "special_train": false,
            "train_type": "DRNT",
            "train_date": "26-05-2023",
            "class_type": [
                "3A",
                "2A",
                "1A"
            ]
        },
        {
            "train_number": "12471",
            "train_name": "MUMBAI BANDRA T - SMVD KATRA Swaraj SF Express",
            "run_days": [
                "Sun",
                "Mon",
                "Thu",
                "Fri"
            ],
            "train_src": "BDTS",
            "train_dstn": "SVDK",
            "from_std": "11:26",
            "from_sta": "11:23",
            "local_train_from_sta": 683,
            "to_sta": "05:25",
            "to_std": "05:40",
            "from_day": 0,
            "to_day": 1,
            "d_day": 0,
            "from": "BVI",
            "to": "NDLS",
            "from_station_name": "BORIVALI",
            "to_station_name": "NEW DELHI",
            "duration": "17:59",
            "special_train": false,
            "train_type": "SUF",
            "train_date": "26-05-2023",
            "class_type": [
                "SL",
                "3A",
                "2A",
                "1A"
            ]
        },
        {
            "train_number": "12247",
            "train_name": "MUMBAI BANDRA T - HAZRAT NIZAMUDDIN Yuva Exp",
            "run_days": [
                "Fri"
            ],
            "train_src": "BDTS",
            "train_dstn": "NZM",
            "from_std": "17:30",
            "from_sta": "17:30",
            "local_train_from_sta": 1050,
            "to_sta": "10:15",
            "to_std": "10:15",
            "from_day": 0,
            "to_day": 1,
            "d_day": 0,
            "from": "BDTS",
            "to": "NZM",
            "from_station_name": "MUMBAI BANDRA TERMINUS",
            "to_station_name": "DELHI HAZRAT NIZAMUDDIN",
            "duration": "16:45",
            "special_train": false,
            "train_type": "SUF",
            "train_date": "26-05-2023",
            "class_type": [
                "CC",
                "3A"
            ]
        },
        {
            "train_number": "19019",
            "train_name": "MUMBAI BANDRA T - HARIDWAR Express",
            "run_days": [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun"
            ],
            "train_src": "BDTS",
            "train_dstn": "HW",
            "from_std": "00:35",
            "from_sta": "00:30",
            "local_train_from_sta": 30,
            "to_sta": "02:30",
            "to_std": "02:45",
            "from_day": 0,
            "to_day": 1,
            "d_day": 0,
            "from": "BVI",
            "to": "NZM",
            "from_station_name": "BORIVALI",
            "to_station_name": "DELHI HAZRAT NIZAMUDDIN",
            "duration": "25:55",
            "special_train": false,
            "train_type": "MEX",
            "train_date": "26-05-2023",
            "class_type": [
                "SL",
                "3A",
                "2A",
                "1A"
            ]
        },
        {
            "train_number": "11057",
            "train_name": "MUMBAI CSMT - AMRITSAR Express",
            "run_days": [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun"
            ],
            "train_src": "CSMT",
            "train_dstn": "ASR",
            "from_std": "00:05",
            "from_sta": "00:02",
            "local_train_from_sta": 1442,
            "to_sta": "03:40",
            "to_std": "03:55",
            "from_day": 1,
            "to_day": 2,
            "d_day": 1,
            "from": "TNA",
            "to": "NDLS",
            "from_station_name": "THANE",
            "to_station_name": "NEW DELHI",
            "duration": "27:35",
            "special_train": false,
            "train_type": "MEX",
            "train_date": "26-05-2023",
            "class_type": [
                "SL",
                "3A",
                "2A"
            ]
        },
        {
            "train_number": "12216",
            "train_name": "MUMBAI BANDRA T - DELHI SARAI ROHILLA Garib Rath Exp",
            "run_days": [
                "Tue",
                "Wed",
                "Fri",
                "Sun"
            ],
            "train_src": "BDTS",
            "train_dstn": "DEE",
            "from_std": "12:24",
            "from_sta": "12:21",
            "local_train_from_sta": 741,
            "to_sta": "11:00",
            "to_std": "11:00",
            "from_day": 0,
            "to_day": 1,
            "d_day": 0,
            "from": "BVI",
            "to": "DEE",
            "from_station_name": "BORIVALI",
            "to_station_name": "DELHI SARAI ROHILLA",
            "duration": "22:36",
            "special_train": false,
            "train_type": "GBR",
            "train_date": "26-05-2023",
            "class_type": [
                "3A"
            ]
        },
        {
            "train_number": "12617",
            "train_name": "ERNAKULAM - HAZRAT NIZAMUDDIN Mangala Lakshadweep SF Exp",
            "run_days": [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun"
            ],
            "train_src": "ERS",
            "train_dstn": "NZM",
            "from_std": "13:30",
            "from_sta": "13:27",
            "local_train_from_sta": 2247,
            "to_sta": "13:20",
            "to_std": "13:20",
            "from_day": 1,
            "to_day": 2,
            "d_day": 1,
            "from": "KYN",
            "to": "NZM",
            "from_station_name": "KALYAN JN",
            "to_station_name": "DELHI HAZRAT NIZAMUDDIN",
            "duration": "23:50",
            "special_train": false,
            "train_type": "SUF",
            "train_date": "26-05-2023",
            "class_type": [
                "SL",
                "3A",
                "2A"
            ]
        },
        {
            "train_number": "12263",
            "train_name": "PUNE - HAZRAT NIZAMUDDIN AC Duronto Express",
            "run_days": [
                "Tue",
                "Fri"
            ],
            "train_src": "PUNE",
            "train_dstn": "NZM",
            "from_std": "14:25",
            "from_sta": "14:20",
            "local_train_from_sta": 860,
            "to_sta": "06:45",
            "to_std": "06:45",
            "from_day": 0,
            "to_day": 1,
            "d_day": 0,
            "from": "BSR",
            "to": "NZM",
            "from_station_name": "VASAI ROAD",
            "to_station_name": "DELHI HAZRAT NIZAMUDDIN",
            "duration": "16:20",
            "special_train": false,
            "train_type": "DRNT",
            "train_date": "26-05-2023",
            "class_type": [
                "3A",
                "2A",
                "1A"
            ]
        },
        {
            "train_number": "12431",
            "train_name": "TRIVANDRUM CENTRAL - HAZRAT NIZAMUDDIN Rajdhani Exp",
            "run_days": [
                "Wed",
                "Fri",
                "Sat"
            ],
            "train_src": "TVC",
            "train_dstn": "NZM",
            "from_std": "18:05",
            "from_sta": "18:00",
            "local_train_from_sta": 2520,
            "to_sta": "12:30",
            "to_std": "12:30",
            "from_day": 1,
            "to_day": 2,
            "d_day": 1,
            "from": "PNVL",
            "to": "NZM",
            "from_station_name": "PANVEL",
            "to_station_name": "DELHI HAZRAT NIZAMUDDIN",
            "duration": "18:25",
            "special_train": false,
            "train_type": "RAJ",
            "train_date": "26-05-2023",
            "class_type": [
                "3A",
                "2A",
                "1A"
            ]
        }
    ]
}

exports.TRAINS_BY_STATION = { "status": true, "timestamp": 1726251735097, "data": { "originating": [], "passing": [], "destination": [] } }

exports.SEARCH_STATION = { "status": true, "message": "Success", "timestamp": 1726251896760, "data": [{ "name": "DR AMBEDKAR NAGAR - MHOW", "eng_name": "DR AMBEDKAR NAGAR - MHOW", "code": "DADN", "state_name": "Andhra Pradesh" }, { "name": "MHOW", "eng_name": "MHOW", "code": "MHOW", "state_name": "MADHYA PRADESH" }] }

exports.SEARCH_TRAIN = { "status": true, "message": "Success", "timestamp": 1726252271492, "data": [{ "train_number": "19038", "train_name": "Avadh Express", "eng_train_name": "Avadh Express", "new_train_number": "" }, { "train_number": "19037", "train_name": "AVADH EXP", "eng_train_name": "AVADH EXP", "new_train_number": "" }, { "train_number": "22948", "train_name": "BHAGALPUR - SURAT Tapti Ganga SF Exp", "eng_train_name": "BHAGALPUR - SURAT Tapti Ganga SF Exp", "new_train_number": "19048" }, { "train_number": "22966", "train_name": "Bhagat Ki Kothi - Mumbai Bandra T SF Express", "eng_train_name": "Bhagat Ki Kothi - Mumbai Bandra T SF Express", "new_train_number": "19066" }, { "train_number": "19013", "train_name": "BHUSAVAL - KATNI Express", "eng_train_name": "BHUSAVAL - KATNI Express", "new_train_number": "" }, { "train_number": "19008", "train_name": "Bhusaval - Surat Express", "eng_train_name": "Bhusaval - Surat Express", "new_train_number": "" }, { "train_number": "19006", "train_name": "Bhusaval - Surat Express", "eng_train_name": "Bhusaval - Surat Express", "new_train_number": "" }, { "train_number": "22950", "train_name": "Delhi Sarai Rohilla - Mumbai Bandra T SF Express", "eng_train_name": "Delhi Sarai Rohilla - Mumbai Bandra T SF Express", "new_train_number": "19030" }, { "train_number": "19034", "train_name": "Gujarat Queen", "eng_train_name": "Gujarat Queen", "new_train_number": "" }, { "train_number": "19033", "train_name": "Gujarat Queen", "eng_train_name": "Gujarat Queen", "new_train_number": "" }, { "train_number": "22953", "train_name": "Gujarat SF Express", "eng_train_name": "Gujarat SF Express", "new_train_number": "19011" }, { "train_number": "22954", "train_name": "Gujarat SF Express", "eng_train_name": "Gujarat SF Express", "new_train_number": "19012" }, { "train_number": "19020", "train_name": "Haridwar - Mumbai Bandra T Express", "eng_train_name": "Haridwar - Mumbai Bandra T Express", "new_train_number": "" }, { "train_number": "19092", "train_name": "Humsafar Express", "eng_train_name": "Humsafar Express", "new_train_number": "" }, { "train_number": "19091", "train_name": "Humsafar Express", "eng_train_name": "Humsafar Express", "new_train_number": "" }, { "train_number": "19009", "train_name": "Humsafar Express", "eng_train_name": "Humsafar Express", "new_train_number": "" }, { "train_number": "19010", "train_name": "Humsafar Express", "eng_train_name": "Humsafar Express", "new_train_number": "" }, { "train_number": "19035", "train_name": "VADODARA - AHMEDABAD InterCity Express", "eng_train_name": "VADODARA - AHMEDABAD InterCity Express", "new_train_number": "" }, { "train_number": "19036", "train_name": "InterCity Express", "eng_train_name": "InterCity Express", "new_train_number": "" }, { "train_number": "22960", "train_name": "InterCity Express", "eng_train_name": "InterCity Express", "new_train_number": "19060" }, { "train_number": "19056", "train_name": "Jodhpur - Valsad Express", "eng_train_name": "Jodhpur - Valsad Express", "new_train_number": "" }, { "train_number": "19003", "train_name": "Khandesh Express", "eng_train_name": "Khandesh Express", "new_train_number": "" }, { "train_number": "19004", "train_name": "Khandesh Express", "eng_train_name": "Khandesh Express", "new_train_number": "" }, { "train_number": "19014", "train_name": "KATNI - BHUSAVAL Express", "eng_train_name": "KATNI - BHUSAVAL Express", "new_train_number": "" }, { "train_number": "22965", "train_name": "Mumbai Bandra T - Bhagat Ki Kothi SF Express", "eng_train_name": "Mumbai Bandra T - Bhagat Ki Kothi SF Express", "new_train_number": "19065" }, { "train_number": "22949", "train_name": "Mumbai Bandra T - Delhi Sarai Rohilla SF Express", "eng_train_name": "Mumbai Bandra T - Delhi Sarai Rohilla SF Express", "new_train_number": "19029" }, { "train_number": "19019", "train_name": "Mumbai Bandra T - Haridwar Express", "eng_train_name": "Mumbai Bandra T - Haridwar Express", "new_train_number": "" }, { "train_number": "19054", "train_name": "Muzaffarpur - Surat Express", "eng_train_name": "Muzaffarpur - Surat Express", "new_train_number": "" }, { "train_number": "19015", "train_name": "Saurashtra Express", "eng_train_name": "Saurashtra Express", "new_train_number": "" }, { "train_number": "19016", "train_name": "Saurashtra Express", "eng_train_name": "Saurashtra Express", "new_train_number": "" }, { "train_number": "22946", "train_name": "Saurashtra Mail", "eng_train_name": "Saurashtra Mail", "new_train_number": "19006" }, { "train_number": "19051", "train_name": "Shramik Express", "eng_train_name": "Shramik Express", "new_train_number": "" }, { "train_number": "19052", "train_name": "Shramik Express", "eng_train_name": "Shramik Express", "new_train_number": "" }, { "train_number": "22947", "train_name": "SURAT - BHAGALPUR Tapti Ganga SF Exp", "eng_train_name": "SURAT - BHAGALPUR Tapti Ganga SF Exp", "new_train_number": "19047" }, { "train_number": "19005", "train_name": "Surat - Bhusaval Express", "eng_train_name": "Surat - Bhusaval Express", "new_train_number": "" }, { "train_number": "19007", "train_name": "Surat - Bhusaval Express", "eng_train_name": "Surat - Bhusaval Express", "new_train_number": "" }, { "train_number": "19053", "train_name": "Surat - Muzaffarpur Express", "eng_train_name": "Surat - Muzaffarpur Express", "new_train_number": "" }, { "train_number": "19002", "train_name": "SURAT - VIRAR Intercity Express (UnReserved)", "eng_train_name": "SURAT - VIRAR Intercity Express (UnReserved)", "new_train_number": "" }, { "train_number": "19046", "train_name": "Tapti Ganga Express", "eng_train_name": "Tapti Ganga Express", "new_train_number": "" }, { "train_number": "19045", "train_name": "Tapti Ganga Express", "eng_train_name": "Tapti Ganga Express", "new_train_number": "" }, { "train_number": "19055", "train_name": "Valsad - Jodhpur Express", "eng_train_name": "Valsad - Jodhpur Express", "new_train_number": "" }, { "train_number": "19001", "train_name": "VIRAR - SURAT Intercity Express (UnReserved)", "eng_train_name": "VIRAR - SURAT Intercity Express (UnReserved)", "new_train_number": "" }, { "train_number": "19028", "train_name": "Vivek Express", "eng_train_name": "Vivek Express", "new_train_number": "" }, { "train_number": "19027", "train_name": "Vivek Express", "eng_train_name": "Vivek Express", "new_train_number": "" }, { "train_number": "19031", "train_name": "Yoga Express", "eng_train_name": "Yoga Express", "new_train_number": "" }, { "train_number": "19032", "train_name": "Yoga Express", "eng_train_name": "Yoga Express", "new_train_number": "" }] }

exports.TRAIN_SCHEDULE = { "status": true, "message": "Success", "timestamp": 1726251960277, "data": { "trainType": "INTERCITY", "trainNumber": "12936", "trainName": "InterCity Express", "runDays": { "sun": true, "mon": true, "tue": true, "wed": true, "thu": true, "fri": true, "sat": true }, "class": [{ "value": "2S", "name": "Second Seating" }, { "value": "CC", "name": "AC Chair Car" }], "quota": [{ "value": "GN", "name": "QUOTA General" }, { "value": "TQ", "name": "Tatkal" }, { "value": "PT", "name": "Premium Tatkal" }, { "value": "LD", "name": "Ladies" }, { "value": "DF", "name": "Defence" }, { "value": "FT", "name": "Foreign Tourist" }, { "value": "DP", "name": "Duty Pass" }, { "value": "HP", "name": "Handicapped" }, { "value": "PH", "name": "Parliament House" }, { "value": "SS", "name": "Lower Berth" }, { "value": "YU", "name": "Yuva" }], "route": [{ "today_sta": 1000, "sta": 1000, "train_src": "NVS", "stop": true, "std_min": 1002, "station_name": "NAVSARI", "station_code": "NVS", "state_name": "GUJARAT", "state_code": "GJ", "sta_min": 1000, "radius": 500, "platform_number": 2, "on_time_rating": 0, "lng": "72.913814", "lat": "20.946371", "is_smart_station": false, "fog_incidence_probability": 0, "distance_from_source": "25.88", "day": 1, "d_day": 1 }, { "today_sta": 1005, "sta": 1005, "train_src": "NVS", "stop": false, "std_min": 1005, "station_name": "GANDHI SMRITI", "station_code": "GNST", "state_name": "GUJARAT", "state_code": "GJ", "sta_min": 1005, "radius": 500, "platform_number": 0, "on_time_rating": -1, "lng": "72.921211", "lat": "20.921038", "is_smart_station": false, "fog_incidence_probability": 0, "distance_from_source": "28.98", "day": 1, "d_day": 1 }, { "today_sta": 1006, "sta": 1006, "train_src": "NVS", "stop": false, "std_min": 1006, "station_name": "HANSAPORE", "station_code": "HXR", "state_name": "GUJARAT", "state_code": "GJ", "sta_min": 1006, "radius": 500, "platform_number": 0, "on_time_rating": -1, "lng": "72.926044", "lat": "20.906927", "is_smart_station": false, "fog_incidence_probability": 0, "distance_from_source": "30.48", "day": 1, "d_day": 1 }, { "today_sta": 1009, "sta": 1009, "train_src": "NVS", "stop": false, "std_min": 1009, "station_name": "VEDCHHA", "station_code": "VDH", "state_name": "GUJARAT", "state_code": "GJ", "sta_min": 1009, "radius": 500, "platform_number": 0, "on_time_rating": -1, "lng": "72.936215", "lat": "20.874451", "is_smart_station": false, "fog_incidence_probability": 0, "distance_from_source": "34.38", "day": 1, "d_day": 1 }, { "today_sta": 1012, "sta": 1012, "train_src": "NVS", "stop": false, "std_min": 1012, "station_name": "ANCHELI", "station_code": "ACL", "state_name": "GUJARAT", "state_code": "GJ", "sta_min": 1012, "radius": 500, "platform_number": 0, "on_time_rating": -1, "lng": "72.945228", "lat": "20.845417", "is_smart_station": false, "fog_incidence_probability": 0, "distance_from_source": "37.78", "day": 1, "d_day": 1 }, { "today_sta": 1015, "sta": 1015, "train_src": "NVS", "stop": false, "std_min": 1015, "station_name": "AMALSAD", "station_code": "AML", "state_name": "GUJARAT", "state_code": "GJ", "sta_min": 1015, "radius": 500, "platform_number": 0, "on_time_rating": -1, "lng": "72.956042", "lat": "20.811323", "is_smart_station": false, "fog_incidence_probability": 0, "distance_from_source": "40.88", "day": 1, "d_day": 1 }, { "today_sta": 1019, "sta": 1019, "train_src": "NVS", "stop": true, "std_min": 1021, "station_name": "BILIMORA JN", "station_code": "BIM", "state_name": "GUJARAT", "state_code": "GJ", "sta_min": 1019, "radius": 500, "platform_number": 2, "on_time_rating": 2, "lng": "72.970934", "lat": "20.763779", "is_smart_station": false, "fog_incidence_probability": 0, "distance_from_source": "46.88", "day": 1, "d_day": 1 }, { "today_sta": 1041, "sta": 1041, "train_src": "NVS", "stop": true, "std_min": 1044, "station_name": "VALSAD", "station_code": "BL", "state_name": "Gujarat", "state_code": "GJ", "sta_min": 1041, "radius": 500, "platform_number": 3, "on_time_rating": 3, "lng": "72.9335991", "lat": "20.6086295", "is_smart_station": false, "fog_incidence_probability": 0, "distance_from_source": "64.88", "day": 1, "d_day": 1 }, { "today_sta": 1063, "sta": 1063, "train_src": "NVS", "stop": true, "std_min": 1065, "station_name": "VAPI", "station_code": "VAPI", "state_name": "GUJARAT", "state_code": "GJ", "sta_min": 1063, "radius": 500, "platform_number": 2, "on_time_rating": 1, "lng": "72.908707", "lat": "20.373918", "is_smart_station": false, "fog_incidence_probability": 0, "distance_from_source": "88.88", "day": 1, "d_day": 1 }, { "today_sta": 1120, "sta": 1120, "train_src": "NVS", "stop": true, "std_min": 1122, "station_name": "BOISAR", "station_code": "BOR", "state_name": "MAHARASHTRA", "state_code": "MH", "sta_min": 1120, "radius": 500, "platform_number": 3, "on_time_rating": 4, "lng": "72.761609", "lat": "19.7982373", "is_smart_station": false, "fog_incidence_probability": 0, "distance_from_source": "159.88", "day": 1, "d_day": 1 }, { "today_sta": 1150, "sta": 1150, "train_src": "NVS", "stop": false, "std_min": 1150, "station_name": "UMROLI", "station_code": "UOI", "state_name": "MAHARASHTRA", "state_code": "MH", "sta_min": 1150, "radius": 500, "platform_number": 0, "on_time_rating": -1, "lng": "72.760477", "lat": "19.754587", "is_smart_station": false, "fog_incidence_probability": 0, "distance_from_source": "187.55", "day": 1, "d_day": 1 }, { "today_sta": 1127, "sta": 1127, "train_src": "NVS", "stop": false, "std_min": 1127, "station_name": "PALGHAR", "station_code": "PLG", "state_name": "MAHARASHTRA", "state_code": "MH", "sta_min": 1127, "radius": 500, "platform_number": 0, "on_time_rating": -1, "lng": "72.77215", "lat": "19.697708", "is_smart_station": false, "fog_incidence_probability": 0, "distance_from_source": "164.98", "day": 1, "d_day": 1 }, { "today_sta": 1131, "sta": 1131, "train_src": "NVS", "stop": false, "std_min": 1131, "station_name": "KELVA ROAD", "station_code": "KLV", "state_name": "MAHARASHTRA", "state_code": "MH", "sta_min": 1131, "radius": 500, "platform_number": 0, "on_time_rating": -1, "lng": "72.790861", "lat": "19.624641", "is_smart_station": false, "fog_incidence_probability": 0, "distance_from_source": "168.78", "day": 1, "d_day": 1 }, { "today_sta": 1134, "sta": 1134, "train_src": "NVS", "stop": false, "std_min": 1134, "station_name": "SAPHALE", "station_code": "SAH", "state_name": "MAHARASHTRA", "state_code": "MH", "sta_min": 1134, "radius": 500, "platform_number": 0, "on_time_rating": -1, "lng": "72.821846", "lat": "19.576612", "is_smart_station": false, "fog_incidence_probability": 0, "distance_from_source": "171.62", "day": 1, "d_day": 1 }, { "today_sta": 1165, "sta": 1165, "train_src": "NVS", "stop": true, "std_min": 1167, "station_name": "VIRAR", "station_code": "VR", "state_name": "MAHARASHTRA", "state_code": "MH", "sta_min": 1165, "radius": 500, "platform_number": 5, "on_time_rating": 5, "lng": "72.812147", "lat": "19.454817", "is_smart_station": false, "fog_incidence_probability": 0, "distance_from_source": "202.88", "day": 1, "d_day": 1 }, { "today_sta": 1189, "sta": 1189, "train_src": "NVS", "stop": true, "std_min": 1191, "station_name": "BORIVALI", "station_code": "BVI", "state_name": "MAHARASHTRA", "state_code": "MH", "sta_min": 1189, "radius": 500, "platform_number": 9, "on_time_rating": 2, "lng": "72.856822", "lat": "19.229149", "is_smart_station": false, "fog_incidence_probability": 0, "distance_from_source": "228.88", "day": 1, "d_day": 1 }, { "today_sta": 1205, "sta": 1205, "train_src": "NVS", "stop": true, "std_min": 1207, "station_name": "ANDHERI", "station_code": "ADH", "state_name": "MAHARASHTRA", "state_code": "MH", "sta_min": 1205, "radius": 500, "platform_number": 9, "on_time_rating": 2, "lng": "72.846563", "lat": "19.1171389", "is_smart_station": false, "fog_incidence_probability": 0, "distance_from_source": "240.88", "day": 1, "d_day": 1 }, { "today_sta": 1240, "sta": 1240, "train_src": "NVS", "stop": true, "std_min": 0, "station_name": "MUMBAI BANDRA TERMINUS", "station_code": "BDTS", "state_name": "MAHARASHTRA", "state_code": "MH", "sta_min": 1240, "radius": 500, "platform_number": 6, "on_time_rating": 9, "lng": "72.840965", "lat": "19.062341", "is_smart_station": false, "fog_incidence_probability": 0, "distance_from_source": "247.88", "day": 1, "d_day": 1 }] } }

exports.CHECK_SEAT_AVAILABILITY = { "status": true, "message": "Success", "timestamp": 1726252074267, "data": [
    { 
        "ticket_fare": 710, 
        "catering_charge": 0, 
        "alt_cnf_seat": null, 
        "total_fare": 710, 
        "date": "16-9-2024", 
        "confirm_probability_percent": "", 
        "confirm_probability": "", 
        "current_status": "RLWL/AVAILABLE." 

    }, { "ticket_fare": 710, "catering_charge": 0, "alt_cnf_seat": null, "total_fare": 710, "date": "17-9-2024", "confirm_probability_percent": "91", "confirm_probability": "High", "current_status": "RLWL7/WL6." }, { "ticket_fare": 710, "catering_charge": 0, "alt_cnf_seat": null, "total_fare": 710, "date": "18-9-2024", "confirm_probability_percent": "91", "confirm_probability": "High", "current_status": "RLWL6/WL6." }, { "ticket_fare": 710, "catering_charge": 0, "alt_cnf_seat": null, "total_fare": 710, "date": "19-9-2024", "confirm_probability_percent": "93", "confirm_probability": "High", "current_status": "RLWL3/WL3." }, { "ticket_fare": 710, "catering_charge": 0, "alt_cnf_seat": null, "total_fare": 710, "date": "20-9-2024", "confirm_probability_percent": "94", "confirm_probability": "High", "current_status": "RLWL1/WL1." }, { "ticket_fare": 710, "catering_charge": 0, "alt_cnf_seat": null, "total_fare": 710, "date": "21-9-2024", "confirm_probability_percent": "94", "confirm_probability": "High", "current_status": "RLWL2/WL2." }] }

exports.TRAIN_CLASSES = { "status": true, "message": "Success", "timestamp": 1726252110040, "data": ["2S", "SL", "3E", "3A", "2A", "1A"] }
exports.TRAIN_LIVE_STATUS = { "status": true, "message": "Success", "timestamp": 1726252070511, "data": { "success": true, "user_id": 0, "train_number": "19038", "train_name": "Avadh Express", "gps_unable": true, "train_start_date": "2024-09-13", "notification_date": "2024-09-13", "at_src_dstn": false, "at_src": false, "at_dstn": false, "is_run_day": true, "source": "BJU", "destination": "BDTS", "run_days": "MON,TUE,WED,THU,FRI,SAT,SUN", "journey_time": 2685, "std": "2024-09-13 07:20", "data_from": "mntes", "new_alert_id": 0, "new_alert_msg": "", "diverted_stations": null, "instance_alert": 0, "related_alert": 0, "late_update": false, "is_ry_eta": true, "update_time": "2024-09-13 23:54:00 +0530", "distance_from_source": 679, "total_distance": 2256, "avg_speed": 0, "si_no": 112, "current_station_code": "GTNR", "current_station_name": "GOMATI NAGAR~", "status": "D", "eta": "23:45", "etd": "23:47", "delay": 40, "ahead_distance": 4, "ahead_distance_text": "4 kms ahead", "status_as_of": "As of 3 mins ago", "platform_number": 1, "cur_stn_sta": "23:05", "cur_stn_std": "23:07", "stoppage_number": 34, "a_day": 0, "status_as_of_min": 3, "dfp_carousel": {}, "upcoming_stations": [{ "si_no": 113, "station_code": "BNZ", "station_name": "BADSHAHNAGAR", "is_diverted_station": false, "distance_from_source": 679, "distance_from_current_station": 0, "distance_from_current_station_txt": "Arriving...", "sta": "23:17", "std": "23:20", "eta": "23:55", "etd": "23:58", "halt": 3, "a_day": 0, "arrival_delay": 38, "platform_number": 1, "on_time_rating": 0, "station_lat": 26.8689734, "station_lng": 80.9617206, "stoppage_number": 35, "day": 0, "eta_a_min": 1435, "food_available": false, "non_stops": [{ "si_no": 114, "station_code": "DAL", "station_name": "DALIGANJ", "is_diverted_station": false, "distance_from_source": 683, "sta": "", "std": "" }] }, { "si_no": 115, "station_code": "LC", "station_name": "LUCKNOW CITY", "is_diverted_station": false, "distance_from_source": 686, "distance_from_current_station": 7, "distance_from_current_station_txt": "Next stop 7 kms to go", "sta": "23:32", "std": "23:34", "eta": "00:08", "etd": "00:10", "halt": 2, "a_day": 1, "arrival_delay": 36, "platform_number": 1, "on_time_rating": 0, "station_lat": 26.859069, "station_lng": 80.917826, "stoppage_number": 36, "day": 1, "eta_a_min": 1448, "food_available": false, "non_stops": [] }, { "si_no": 116, "station_code": "ASH", "station_name": "AISHBAGH", "is_diverted_station": false, "distance_from_source": 688, "distance_from_current_station": 9, "distance_from_current_station_txt": "Next stop 9 kms to go", "sta": "00:03", "std": "00:13", "eta": "00:34", "etd": "00:44", "halt": 10, "a_day": 1, "arrival_delay": 31, "platform_number": 3, "on_time_rating": 1, "station_lat": 26.8369380081, "station_lng": 80.9091567993, "stoppage_number": 37, "day": 1, "eta_a_min": 1474, "food_available": false, "non_stops": [{ "si_no": 117, "station_code": "MKG", "station_name": "MANAK NAGAR", "is_diverted_station": false, "distance_from_source": 692, "sta": "", "std": "" }, { "si_no": 118, "station_code": "AMS", "station_name": "AMAUSI", "is_diverted_station": false, "distance_from_source": 699, "sta": "", "std": "" }, { "si_no": 119, "station_code": "POF", "station_name": "PIPARSAND", "is_diverted_station": false, "distance_from_source": 705, "sta": "", "std": "" }] }, { "si_no": 120, "station_code": "HRN", "station_name": "HARAUNI", "is_diverted_station": false, "distance_from_source": 712, "distance_from_current_station": 33, "distance_from_current_station_txt": "Next stop 33 kms to go", "sta": "00:44", "std": "00:45", "eta": "01:09", "etd": "01:10", "halt": 1, "a_day": 1, "arrival_delay": 25, "platform_number": 1, "on_time_rating": 1, "station_lat": 26.70613, "station_lng": 80.747623, "stoppage_number": 38, "day": 1, "eta_a_min": 1509, "food_available": false, "non_stops": [{ "si_no": 121, "station_code": "JTU", "station_name": "JAITIPUR", "is_diverted_station": false, "distance_from_source": 720, "sta": "", "std": "" }, { "si_no": 122, "station_code": "KVX", "station_name": "KUSUMBHI", "is_diverted_station": false, "distance_from_source": 724, "sta": "", "std": "" }, { "si_no": 123, "station_code": "AJ", "station_name": "AJGAIN", "is_diverted_station": false, "distance_from_source": 728, "sta": "", "std": "" }, { "si_no": 124, "station_code": "SIC", "station_name": "SONIK", "is_diverted_station": false, "distance_from_source": 736, "sta": "", "std": "" }] }, { "si_no": 125, "station_code": "ON", "station_name": "UNNAO JN", "is_diverted_station": false, "distance_from_source": 744, "distance_from_current_station": 65, "distance_from_current_station_txt": "Next stop 65 kms to go", "sta": "01:09", "std": "01:11", "eta": "01:30", "etd": "01:32", "halt": 2, "a_day": 1, "arrival_delay": 21, "platform_number": 2, "on_time_rating": 0, "station_lat": 26.548724, "station_lng": 80.486569, "stoppage_number": 39, "day": 1, "eta_a_min": 1530, "food_available": false, "non_stops": [{ "si_no": 126, "station_code": "MGW", "station_name": "MAGARWARA", "is_diverted_station": false, "distance_from_source": 750, "sta": "", "std": "" }, { "si_no": 127, "station_code": "CPB", "station_name": "KANPUR BRIDGE LEFT BANK", "is_diverted_station": false, "distance_from_source": 757, "sta": "", "std": "" }] }, { "si_no": 128, "station_code": "CNB", "station_name": "KANPUR CENTRAL", "is_diverted_station": false, "distance_from_source": 761, "distance_from_current_station": 82, "distance_from_current_station_txt": "Next stop 82 kms to go", "sta": "01:45", "std": "01:50", "eta": "02:00", "etd": "02:05", "halt": 5, "a_day": 1, "arrival_delay": 15, "platform_number": 7, "on_time_rating": 0, "station_lat": 26.45436, "station_lng": 80.351086, "stoppage_number": 40, "day": 1, "eta_a_min": 1560, "food_available": false, "non_stops": [{ "si_no": 129, "station_code": "GMC", "station_name": "KANPUR GOODS MARSHAL", "is_diverted_station": false, "distance_from_source": 762, "sta": "", "std": "" }, { "si_no": 130, "station_code": "CNJO", "station_name": "JUHI OUTER CABIN", "is_diverted_station": false, "distance_from_source": 763, "sta": "", "std": "" }, { "si_no": 131, "station_code": "GOY", "station_name": "GOVINDPURI", "is_diverted_station": false, "distance_from_source": 765, "sta": "", "std": "" }, { "si_no": 132, "station_code": "PNKD", "station_name": "PANKI DHAM", "is_diverted_station": false, "distance_from_source": 772, "sta": "", "std": "" }, { "si_no": 133, "station_code": "BPU", "station_name": "BHAUPUR", "is_diverted_station": false, "distance_from_source": 784, "sta": "", "std": "" }, { "si_no": 134, "station_code": "MTO", "station_name": "MAITHA", "is_diverted_station": false, "distance_from_source": 794, "sta": "", "std": "" }, { "si_no": 135, "station_code": "RMW", "station_name": "ROSHAN MAU", "is_diverted_station": false, "distance_from_source": 798, "sta": "", "std": "" }, { "si_no": 136, "station_code": "PTRA", "station_name": "PATRA", "is_diverted_station": false, "distance_from_source": 800, "sta": "", "std": "" }, { "si_no": 137, "station_code": "RURA", "station_name": "RURA", "is_diverted_station": false, "distance_from_source": 805, "sta": "", "std": "" }, { "si_no": 138, "station_code": "AAP", "station_name": "AMBIAPUR", "is_diverted_station": false, "distance_from_source": 814, "sta": "", "std": "" }, { "si_no": 139, "station_code": "JJK", "station_name": "JHINJHAK", "is_diverted_station": false, "distance_from_source": 824, "sta": "", "std": "" }, { "si_no": 140, "station_code": "PJY", "station_name": "PARA JANI HALT", "is_diverted_station": false, "distance_from_source": 830, "sta": "", "std": "" }, { "si_no": 141, "station_code": "KNS", "station_name": "KANCHAUSI", "is_diverted_station": false, "distance_from_source": 835, "sta": "", "std": "" }] }, { "si_no": 142, "station_code": "PHD", "station_name": "PHAPHUND", "is_diverted_station": false, "distance_from_source": 844, "distance_from_current_station": 165, "distance_from_current_station_txt": "Next stop 165 kms to go", "sta": "02:45", "std": "02:46", "eta": "02:50", "etd": "02:51", "halt": 1, "a_day": 1, "arrival_delay": 5, "platform_number": 3, "on_time_rating": 0, "station_lat": 26.6322683177, "station_lng": 79.5544052124, "stoppage_number": 41, "day": 1, "eta_a_min": 1610, "food_available": false, "non_stops": [{ "si_no": 143, "station_code": "PATA", "station_name": "PATA", "is_diverted_station": false, "distance_from_source": 852, "sta": "", "std": "" }, { "si_no": 144, "station_code": "ULD", "station_name": "ACHALDA", "is_diverted_station": false, "distance_from_source": 861, "sta": "", "std": "" }, { "si_no": 145, "station_code": "GHSR", "station_name": "GHASARA HALT", "is_diverted_station": false, "distance_from_source": 866, "sta": "", "std": "" }, { "si_no": 146, "station_code": "SHW", "station_name": "SAMHON", "is_diverted_station": false, "distance_from_source": 870, "sta": "", "std": "" }] }, { "si_no": 147, "station_code": "BNT", "station_name": "BHARTHANA", "is_diverted_station": false, "distance_from_source": 881, "distance_from_current_station": 202, "distance_from_current_station_txt": "Next stop 202 kms to go", "sta": "03:10", "std": "03:11", "eta": "03:11", "etd": "03:12", "halt": 1, "a_day": 1, "arrival_delay": 1, "platform_number": 3, "on_time_rating": 0, "station_lat": 26.7506048, "station_lng": 79.2167412, "stoppage_number": 42, "day": 1, "eta_a_min": 1631, "food_available": false, "non_stops": [{ "si_no": 148, "station_code": "EKL", "station_name": "EKDIL", "is_diverted_station": false, "distance_from_source": 891, "sta": "", "std": "" }] }, { "si_no": 149, "station_code": "ETW", "station_name": "ETAWAH", "is_diverted_station": false, "distance_from_source": 901, "distance_from_current_station": 222, "distance_from_current_station_txt": "Next stop 222 kms to go", "sta": "03:53", "std": "03:55", "eta": "03:53", "etd": "03:55", "halt": 2, "a_day": 1, "arrival_delay": 0, "platform_number": 2, "on_time_rating": 0, "station_lat": 26.78638, "station_lng": 79.021912, "stoppage_number": 43, "day": 1, "eta_a_min": 1673, "food_available": false, "non_stops": [{ "si_no": 150, "station_code": "SB", "station_name": "SARAI BHOPAT", "is_diverted_station": false, "distance_from_source": 909, "sta": "", "std": "" }, { "si_no": 151, "station_code": "JGR", "station_name": "JASWANTNAGAR", "is_diverted_station": false, "distance_from_source": 917, "sta": "", "std": "" }, { "si_no": 152, "station_code": "BBL", "station_name": "BALRAI", "is_diverted_station": false, "distance_from_source": 926, "sta": "", "std": "" }, { "si_no": 153, "station_code": "BDN", "station_name": "BHADAN", "is_diverted_station": false, "distance_from_source": 936, "sta": "", "std": "" }, { "si_no": 154, "station_code": "KAA", "station_name": "KAURARA", "is_diverted_station": false, "distance_from_source": 946, "sta": "", "std": "" }] }, { "si_no": 155, "station_code": "SKB", "station_name": "SHIKOHABAD JN", "is_diverted_station": false, "distance_from_source": 956, "distance_from_current_station": 277, "distance_from_current_station_txt": "Next stop 277 kms to go", "sta": "04:28", "std": "04:30", "eta": "04:28", "etd": "04:30", "halt": 2, "a_day": 1, "arrival_delay": 0, "platform_number": 3, "on_time_rating": 0, "station_lat": 27.086066, "station_lng": 78.575335, "stoppage_number": 44, "day": 1, "eta_a_min": 1708, "food_available": false, "non_stops": [{ "si_no": 156, "station_code": "MNR", "station_name": "MAKKHANPUR", "is_diverted_station": false, "distance_from_source": 966, "sta": "", "std": "" }] }, { "si_no": 157, "station_code": "FZD", "station_name": "FIROZABAD", "is_diverted_station": false, "distance_from_source": 976, "distance_from_current_station": 297, "distance_from_current_station_txt": "Next stop 297 kms to go", "sta": "04:58", "std": "05:00", "eta": "04:58", "etd": "05:00", "halt": 2, "a_day": 1, "arrival_delay": 0, "platform_number": 1, "on_time_rating": 0, "station_lat": 27.147145, "station_lng": 78.386421, "stoppage_number": 45, "day": 1, "eta_a_min": 1738, "food_available": false, "non_stops": [{ "si_no": 158, "station_code": "HNG", "station_name": "HIRANGAON", "is_diverted_station": false, "distance_from_source": 984, "sta": "", "std": "" }] }, { "si_no": 159, "station_code": "TDL", "station_name": "TUNDLA JN", "is_diverted_station": false, "distance_from_source": 992, "distance_from_current_station": 313, "distance_from_current_station_txt": "Next stop 313 kms to go", "sta": "05:35", "std": "05:40", "eta": "05:35", "etd": "05:40", "halt": 5, "a_day": 1, "arrival_delay": 0, "platform_number": 1, "on_time_rating": 1, "station_lat": 27.207847, "station_lng": 78.233385, "stoppage_number": 46, "day": 1, "eta_a_min": 1775, "food_available": false, "non_stops": [{ "si_no": 160, "station_code": "ETUE", "station_name": "ETMADPUR", "is_diverted_station": false, "distance_from_source": 996, "sta": "", "std": "" }, { "si_no": 161, "station_code": "KBP", "station_name": "KUBERPUR", "is_diverted_station": false, "distance_from_source": 1003, "sta": "", "std": "" }, { "si_no": 162, "station_code": "CHLR", "station_name": "CHHALESAR", "is_diverted_station": false, "distance_from_source": 1007, "sta": "", "std": "" }, { "si_no": 163, "station_code": "JAB", "station_name": "YAMUNA BRIDGE AGRA", "is_diverted_station": false, "distance_from_source": 1012, "sta": "", "std": "" }] }, { "si_no": 164, "station_code": "AF", "station_name": "AGRA FORT", "is_diverted_station": false, "distance_from_source": 1015, "distance_from_current_station": 336, "distance_from_current_station_txt": "Next stop 336 kms to go", "sta": "06:15", "std": "06:25", "eta": "06:15", "etd": "06:25", "halt": 10, "a_day": 1, "arrival_delay": 0, "platform_number": 1, "on_time_rating": 1, "station_lat": 27.183188, "station_lng": 78.01898, "stoppage_number": 47, "day": 1, "eta_a_min": 1815, "food_available": false, "non_stops": [] }, { "si_no": 165, "station_code": "IDH", "station_name": "IDGAH AGRA JN", "is_diverted_station": false, "distance_from_source": 1017, "distance_from_current_station": 338, "distance_from_current_station_txt": "Next stop 338 kms to go", "sta": "06:38", "std": "06:40", "eta": "06:38", "etd": "06:40", "halt": 2, "a_day": 1, "arrival_delay": 0, "platform_number": 1, "on_time_rating": 1, "station_lat": 27.17288, "station_lng": 77.998037, "stoppage_number": 48, "day": 1, "eta_a_min": 1838, "food_available": false, "non_stops": [{ "si_no": 166, "station_code": "PTLI", "station_name": "PATHAULI", "is_diverted_station": false, "distance_from_source": 1024, "sta": "", "std": "" }, { "si_no": 167, "station_code": "MIQ", "station_name": "MIRHAKUR", "is_diverted_station": false, "distance_from_source": 1030, "sta": "", "std": "" }] }, { "si_no": 168, "station_code": "KLB", "station_name": "KIRAOLI", "is_diverted_station": false, "distance_from_source": 1038, "distance_from_current_station": 359, "distance_from_current_station_txt": "Next stop 359 kms to go", "sta": "07:05", "std": "07:07", "eta": "07:05", "etd": "07:07", "halt": 2, "a_day": 1, "arrival_delay": 0, "platform_number": 1, "on_time_rating": 0, "station_lat": 27.133778, "station_lng": 77.785692, "stoppage_number": 49, "day": 1, "eta_a_min": 1865, "food_available": false, "non_stops": [{ "si_no": 169, "station_code": "SNPR", "station_name": "SINGARPUR", "is_diverted_station": false, "distance_from_source": 1045, "sta": "", "std": "" }] }, { "si_no": 170, "station_code": "FTS", "station_name": "FATEHPUR SIKRI", "is_diverted_station": false, "distance_from_source": 1051, "distance_from_current_station": 372, "distance_from_current_station_txt": "Next stop 372 kms to go", "sta": "07:13", "std": "07:15", "eta": "07:13", "etd": "07:15", "halt": 2, "a_day": 1, "arrival_delay": 0, "platform_number": 1, "on_time_rating": 0, "station_lat": 27.093899, "station_lng": 77.670507, "stoppage_number": 50, "day": 1, "eta_a_min": 1873, "food_available": false, "non_stops": [{ "si_no": 171, "station_code": "AED", "station_name": "AULENDA", "is_diverted_station": false, "distance_from_source": 1060, "sta": "", "std": "" }] }, { "si_no": 172, "station_code": "RBS", "station_name": "RUPBAS", "is_diverted_station": false, "distance_from_source": 1065, "distance_from_current_station": 386, "distance_from_current_station_txt": "Next stop 386 kms to go", "sta": "07:30", "std": "07:32", "eta": "07:30", "etd": "07:32", "halt": 2, "a_day": 1, "arrival_delay": 0, "platform_number": 1, "on_time_rating": 0, "station_lat": 26.9899303821, "station_lng": 77.5905132294, "stoppage_number": 51, "day": 1, "eta_a_min": 1890, "food_available": false, "non_stops": [{ "si_no": 173, "station_code": "DXK", "station_name": "DHANA KHERLI", "is_diverted_station": false, "distance_from_source": 1072, "sta": "", "std": "" }, { "si_no": 174, "station_code": "BIQ", "station_name": "BANSI PAHARPUR", "is_diverted_station": false, "distance_from_source": 1078, "sta": "", "std": "" }, { "si_no": 175, "station_code": "NGLT", "station_name": "NAGLATULA", "is_diverted_station": false, "distance_from_source": 1084, "sta": "", "std": "" }, { "si_no": 176, "station_code": "BR", "station_name": "BANDH BARETA", "is_diverted_station": false, "distance_from_source": 1090, "sta": "", "std": "" }, { "si_no": 177, "station_code": "BAMA", "station_name": "BIRAMBAD", "is_diverted_station": false, "distance_from_source": 1095, "sta": "", "std": "" }] }, { "si_no": 178, "station_code": "BXN", "station_name": "BAYANA JN", "is_diverted_station": false, "distance_from_source": 1099, "distance_from_current_station": 420, "distance_from_current_station_txt": "Next stop 420 kms to go", "sta": "08:53", "std": "08:55", "eta": "08:53", "etd": "08:55", "halt": 2, "a_day": 1, "arrival_delay": 0, "platform_number": 1, "on_time_rating": 1, "station_lat": 26.916024, "station_lng": 77.296801, "stoppage_number": 52, "day": 1, "eta_a_min": 1973, "food_available": false, "non_stops": [{ "si_no": 179, "station_code": "DY", "station_name": "DUMARIYA", "is_diverted_station": false, "distance_from_source": 1108, "sta": "", "std": "" }, { "si_no": 180, "station_code": "FSP", "station_name": "FATEH SINGHPURA", "is_diverted_station": false, "distance_from_source": 1119, "sta": "", "std": "" }, { "si_no": 181, "station_code": "DNHK", "station_name": "DHINDHORA HKMKD", "is_diverted_station": false, "distance_from_source": 1124, "sta": "", "std": "" }] }, { "si_no": 182, "station_code": "HAN", "station_name": "HINDAUN CITY", "is_diverted_station": false, "distance_from_source": 1132, "distance_from_current_station": 453, "distance_from_current_station_txt": "Next stop 453 kms to go", "sta": "09:16", "std": "09:18", "eta": "09:16", "etd": "09:18", "halt": 2, "a_day": 1, "arrival_delay": 0, "platform_number": 1, "on_time_rating": 1, "station_lat": 26.755804, "station_lng": 77.031326, "stoppage_number": 53, "day": 1, "eta_a_min": 1996, "food_available": false, "non_stops": [{ "si_no": 183, "station_code": "SKDM", "station_name": "SIKRODA MINA", "is_diverted_station": false, "distance_from_source": 1137, "sta": "", "std": "" }] }, { "si_no": 184, "station_code": "SMVJ", "station_name": "SHRI MAHAVEERJI", "is_diverted_station": false, "distance_from_source": 1142, "distance_from_current_station": 463, "distance_from_current_station_txt": "Next stop 463 kms to go", "sta": "09:28", "std": "09:30", "eta": "09:28", "etd": "09:30", "halt": 2, "a_day": 1, "arrival_delay": 0, "platform_number": 1, "on_time_rating": 0, "station_lat": 26.684045, "station_lng": 76.967554, "stoppage_number": 54, "day": 1, "eta_a_min": 2008, "food_available": false, "non_stops": [{ "si_no": 185, "station_code": "KNDP", "station_name": "KHANDIP", "is_diverted_station": false, "distance_from_source": 1149, "sta": "", "std": "" }, { "si_no": 186, "station_code": "PDZ", "station_name": "PILODA", "is_diverted_station": false, "distance_from_source": 1156, "sta": "", "std": "" }, { "si_no": 187, "station_code": "COO", "station_name": "CHHOTI ODAI", "is_diverted_station": false, "distance_from_source": 1164, "sta": "", "std": "" }] }, { "si_no": 188, "station_code": "GGC", "station_name": "GANGAPUR CITY", "is_diverted_station": false, "distance_from_source": 1177, "distance_from_current_station": 498, "distance_from_current_station_txt": "Next stop 498 kms to go", "sta": "09:50", "std": "09:55", "eta": "09:50", "etd": "09:55", "halt": 5, "a_day": 1, "arrival_delay": 0, "platform_number": 2, "on_time_rating": 1, "station_lat": 26.468499, "station_lng": 76.727228, "stoppage_number": 55, "day": 1, "eta_a_min": 2030, "food_available": true, "non_stops": [{ "si_no": 189, "station_code": "LRU", "station_name": "LALPUR UMRI", "is_diverted_station": false, "distance_from_source": 1183, "sta": "", "std": "" }, { "si_no": 190, "station_code": "NNW", "station_name": "NARAYANPUR TATWARA", "is_diverted_station": false, "distance_from_source": 1193, "sta": "", "std": "" }, { "si_no": 191, "station_code": "NMD", "station_name": "NIMODA", "is_diverted_station": false, "distance_from_source": 1202, "sta": "", "std": "" }, { "si_no": 192, "station_code": "MLZ", "station_name": "MALARNA", "is_diverted_station": false, "distance_from_source": 1210, "sta": "", "std": "" }, { "si_no": 193, "station_code": "MXL", "station_name": "MOKHOLI", "is_diverted_station": false, "distance_from_source": 1221, "sta": "", "std": "" }, { "si_no": 194, "station_code": "RNT", "station_name": "RANTHAMBHORE", "is_diverted_station": false, "distance_from_source": 1230, "sta": "", "std": "" }, { "si_no": 195, "station_code": "SMDC", "station_name": "SAWAI MADHOPUR D CABIN", "is_diverted_station": false, "distance_from_source": 1237, "sta": "", "std": "" }] }, { "si_no": 196, "station_code": "SWM", "station_name": "SAWAI MADHOPUR", "is_diverted_station": false, "distance_from_source": 1240, "distance_from_current_station": 561, "distance_from_current_station_txt": "Next stop 561 kms to go", "sta": "10:38", "std": "10:43", "eta": "10:38", "etd": "10:43", "halt": 5, "a_day": 1, "arrival_delay": 0, "platform_number": 2, "on_time_rating": 1, "station_lat": 26.018069, "station_lng": 76.35601, "stoppage_number": 56, "day": 1, "eta_a_min": 2078, "food_available": true, "non_stops": [{ "si_no": 197, "station_code": "KTA", "station_name": "KUSHTALA", "is_diverted_station": false, "distance_from_source": 1247, "sta": "", "std": "" }, { "si_no": 198, "station_code": "RWJ", "station_name": "RAWANIA DUNGAR", "is_diverted_station": false, "distance_from_source": 1256, "sta": "", "std": "" }, { "si_no": 199, "station_code": "AMLI", "station_name": "AMLI", "is_diverted_station": false, "distance_from_source": 1263, "sta": "", "std": "" }, { "si_no": 200, "station_code": "IDG", "station_name": "INDARGARH SUMERGANJ MANDI", "is_diverted_station": false, "distance_from_source": 1276, "sta": "", "std": "" }] }, { "si_no": 201, "station_code": "LKE", "station_name": "LAKHERI", "is_diverted_station": false, "distance_from_source": 1287, "distance_from_current_station": 608, "distance_from_current_station_txt": "Next stop 608 kms to go", "sta": "11:18", "std": "11:20", "eta": "11:18", "etd": "11:20", "halt": 2, "a_day": 1, "arrival_delay": 0, "platform_number": 1, "on_time_rating": 1, "station_lat": 25.640134, "station_lng": 76.192417, "stoppage_number": 57, "day": 1, "eta_a_min": 2118, "food_available": false, "non_stops": [{ "si_no": 202, "station_code": "LBN", "station_name": "LABAN", "is_diverted_station": false, "distance_from_source": 1294, "sta": "", "std": "" }, { "si_no": 203, "station_code": "GKB", "station_name": "GHATAKA VARANA", "is_diverted_station": false, "distance_from_source": 1303, "sta": "", "std": "" }, { "si_no": 204, "station_code": "KPZ", "station_name": "KAPREN", "is_diverted_station": false, "distance_from_source": 1313, "sta": "", "std": "" }, { "si_no": 205, "station_code": "ARE", "station_name": "ARNETHA", "is_diverted_station": false, "distance_from_source": 1322, "sta": "", "std": "" }, { "si_no": 206, "station_code": "KPTN", "station_name": "KESHORAI PATAN", "is_diverted_station": false, "distance_from_source": 1333, "sta": "", "std": "" }, { "si_no": 207, "station_code": "GQLN", "station_name": "GURLA N", "is_diverted_station": false, "distance_from_source": 1338, "sta": "", "std": "" }, { "si_no": 208, "station_code": "GNCN", "station_name": "GURLA N CABIN", "is_diverted_station": false, "distance_from_source": 1338, "sta": "", "std": "" }, { "si_no": 209, "station_code": "GQL", "station_name": "GURLA", "is_diverted_station": false, "distance_from_source": 1342, "sta": "", "std": "" }, { "si_no": 210, "station_code": "GCCN", "station_name": "GURLA C CABIN", "is_diverted_station": false, "distance_from_source": 1342, "sta": "", "std": "" }, { "si_no": 211, "station_code": "KCCN", "station_name": "KOTA C CABIN", "is_diverted_station": false, "distance_from_source": 1346, "sta": "", "std": "" }] }, { "si_no": 212, "station_code": "KOTA", "station_name": "KOTA JN", "is_diverted_station": false, "distance_from_source": 1348, "distance_from_current_station": 669, "distance_from_current_station_txt": "Next stop 669 kms to go", "sta": "12:10", "std": "12:20", "eta": "12:10", "etd": "12:20", "halt": 10, "a_day": 1, "arrival_delay": 0, "platform_number": 2, "on_time_rating": 1, "station_lat": 25.223733, "station_lng": 75.88068, "stoppage_number": 58, "day": 1, "eta_a_min": 2170, "food_available": true, "non_stops": [{ "si_no": 213, "station_code": "KTTY", "station_name": "KOTA YARD", "is_diverted_station": false, "distance_from_source": 1350, "sta": "", "std": "" }, { "si_no": 214, "station_code": "KTSC", "station_name": "KOTA JN SOUTH C", "is_diverted_station": false, "distance_from_source": 1351, "sta": "", "std": "" }] }, { "si_no": 215, "station_code": "DKNT", "station_name": "DAKANIYA TALAV", "is_diverted_station": false, "distance_from_source": 1357, "distance_from_current_station": 678, "distance_from_current_station_txt": "Next stop 678 kms to go", "sta": "12:30", "std": "12:32", "eta": "12:30", "etd": "12:32", "halt": 2, "a_day": 1, "arrival_delay": 0, "platform_number": 2, "on_time_rating": 1, "station_lat": 25.145518, "station_lng": 75.865831, "stoppage_number": 59, "day": 1, "eta_a_min": 2190, "food_available": false, "non_stops": [{ "si_no": 216, "station_code": "DARA", "station_name": "DARA", "is_diverted_station": false, "distance_from_source": 1396, "sta": "", "std": "" }] }, { "si_no": 217, "station_code": "MKX", "station_name": "MORAK", "is_diverted_station": false, "distance_from_source": 1410, "distance_from_current_station": 731, "distance_from_current_station_txt": "Next stop 731 kms to go", "sta": "13:03", "std": "13:05", "eta": "13:03", "etd": "13:05", "halt": 2, "a_day": 1, "arrival_delay": 0, "platform_number": 2, "on_time_rating": 0, "station_lat": 24.731163, "station_lng": 75.973549, "stoppage_number": 60, "day": 1, "eta_a_min": 2223, "food_available": false, "non_stops": [] }, { "si_no": 218, "station_code": "RMA", "station_name": "RAMGANJ MANDI", "is_diverted_station": false, "distance_from_source": 1420, "distance_from_current_station": 741, "distance_from_current_station_txt": "Next stop 741 kms to go", "sta": "13:13", "std": "13:15", "eta": "13:13", "etd": "13:15", "halt": 2, "a_day": 1, "arrival_delay": 0, "platform_number": 1, "on_time_rating": 0, "station_lat": 24.644326, "station_lng": 75.939131, "stoppage_number": 61, "day": 1, "eta_a_min": 2233, "food_available": false, "non_stops": [] }, { "si_no": 219, "station_code": "JHW", "station_name": "JHALAWAR ROAD", "is_diverted_station": false, "distance_from_source": 1432, "distance_from_current_station": 753, "distance_from_current_station_txt": "Next stop 753 kms to go", "sta": "13:24", "std": "13:25", "eta": "13:24", "etd": "13:25", "halt": 1, "a_day": 1, "arrival_delay": 0, "platform_number": 2, "on_time_rating": 0, "station_lat": 24.542283, "station_lng": 75.920076, "stoppage_number": 62, "day": 1, "eta_a_min": 2244, "food_available": false, "non_stops": [] }, { "si_no": 220, "station_code": "BWM", "station_name": "BHAWANI MANDI", "is_diverted_station": false, "distance_from_source": 1448, "distance_from_current_station": 769, "distance_from_current_station_txt": "Next stop 769 kms to go", "sta": "13:43", "std": "13:45", "eta": "13:43", "etd": "13:45", "halt": 2, "a_day": 1, "arrival_delay": 0, "platform_number": 1, "on_time_rating": 0, "station_lat": 24.419408, "station_lng": 75.830353, "stoppage_number": 63, "day": 1, "eta_a_min": 2263, "food_available": false, "non_stops": [] }, { "si_no": 221, "station_code": "GOH", "station_name": "GAROTH", "is_diverted_station": false, "distance_from_source": 1471, "distance_from_current_station": 792, "distance_from_current_station_txt": "Next stop 792 kms to go", "sta": "14:03", "std": "14:05", "eta": "14:03", "etd": "14:05", "halt": 2, "a_day": 1, "arrival_delay": 0, "platform_number": 1, "on_time_rating": 0, "station_lat": 24.2788119912, "station_lng": 75.6840419769, "stoppage_number": 64, "day": 1, "eta_a_min": 2283, "food_available": false, "non_stops": [] }, { "si_no": 222, "station_code": "SGZ", "station_name": "SHAMGARH", "is_diverted_station": false, "distance_from_source": 1482, "distance_from_current_station": 803, "distance_from_current_station_txt": "Next stop 803 kms to go", "sta": "14:18", "std": "14:20", "eta": "14:18", "etd": "14:20", "halt": 2, "a_day": 1, "arrival_delay": 0, "platform_number": 1, "on_time_rating": 0, "station_lat": 24.191271, "station_lng": 75.642972, "stoppage_number": 65, "day": 1, "eta_a_min": 2298, "food_available": true, "non_stops": [] }, { "si_no": 223, "station_code": "SVA", "station_name": "SUWASRA", "is_diverted_station": false, "distance_from_source": 1495, "distance_from_current_station": 816, "distance_from_current_station_txt": "Next stop 816 kms to go", "sta": "14:33", "std": "14:35", "eta": "14:33", "etd": "14:35", "halt": 2, "a_day": 1, "arrival_delay": 0, "platform_number": 1, "on_time_rating": 0, "station_lat": 24.070094, "station_lng": 75.648594, "stoppage_number": 66, "day": 1, "eta_a_min": 2313, "food_available": false, "non_stops": [{ "si_no": 224, "station_code": "NKH", "station_name": "NATHUKHERI", "is_diverted_station": false, "distance_from_source": 1501, "sta": "", "std": "" }] }, { "si_no": 225, "station_code": "CMU", "station_name": "CHAU MAHLA", "is_diverted_station": false, "distance_from_source": 1511, "distance_from_current_station": 832, "distance_from_current_station_txt": "Next stop 832 kms to go", "sta": "14:53", "std": "14:55", "eta": "14:53", "etd": "14:55", "halt": 2, "a_day": 1, "arrival_delay": 0, "platform_number": 2, "on_time_rating": 1, "station_lat": 23.948645, "station_lng": 75.601301, "stoppage_number": 67, "day": 1, "eta_a_min": 2333, "food_available": false, "non_stops": [{ "si_no": 226, "station_code": "TLZ", "station_name": "TALAVLI", "is_diverted_station": false, "distance_from_source": 1516, "sta": "", "std": "" }, { "si_no": 227, "station_code": "THUR", "station_name": "THURIA", "is_diverted_station": false, "distance_from_source": 1525, "sta": "", "std": "" }] }, { "si_no": 228, "station_code": "VMA", "station_name": "VIKRAMGARH ALOT", "is_diverted_station": false, "distance_from_source": 1533, "distance_from_current_station": 854, "distance_from_current_station_txt": "Next stop 854 kms to go", "sta": "15:23", "std": "15:25", "eta": "15:23", "etd": "15:25", "halt": 2, "a_day": 1, "arrival_delay": 0, "platform_number": 1, "on_time_rating": 1, "station_lat": 23.765001, "station_lng": 75.538259, "stoppage_number": 68, "day": 1, "eta_a_min": 2363, "food_available": false, "non_stops": [] }, { "si_no": 229, "station_code": "MEP", "station_name": "MAHIDPUR ROAD", "is_diverted_station": false, "distance_from_source": 1556, "distance_from_current_station": 877, "distance_from_current_station_txt": "Next stop 877 kms to go", "sta": "15:38", "std": "15:40", "eta": "15:38", "etd": "15:40", "halt": 2, "a_day": 1, "arrival_delay": 0, "platform_number": 1, "on_time_rating": 0, "station_lat": 23.567449, "station_lng": 75.500278, "stoppage_number": 69, "day": 1, "eta_a_min": 2378, "food_available": false, "non_stops": [] }, { "si_no": 230, "station_code": "NAD", "station_name": "NAGDA JN", "is_diverted_station": false, "distance_from_source": 1573, "distance_from_current_station": 894, "distance_from_current_station_txt": "Next stop 894 kms to go", "sta": "16:15", "std": "16:20", "eta": "16:15", "etd": "16:20", "halt": 5, "a_day": 1, "arrival_delay": 0, "platform_number": 2, "on_time_rating": 2, "station_lat": 23.45616, "station_lng": 75.412731, "stoppage_number": 70, "day": 1, "eta_a_min": 2415, "food_available": true, "non_stops": [{ "si_no": 231, "station_code": "BRNA", "station_name": "BERAWANYA", "is_diverted_station": false, "distance_from_source": 1581, "sta": "", "std": "" }] }, { "si_no": 232, "station_code": "KUH", "station_name": "KHACHROD", "is_diverted_station": false, "distance_from_source": 1587, "distance_from_current_station": 908, "distance_from_current_station_txt": "Next stop 908 kms to go", "sta": "16:30", "std": "16:32", "eta": "16:30", "etd": "16:32", "halt": 2, "a_day": 1, "arrival_delay": 0, "platform_number": 1, "on_time_rating": 1, "station_lat": 23.442853, "station_lng": 75.286517, "stoppage_number": 71, "day": 1, "eta_a_min": 2430, "food_available": false, "non_stops": [{ "si_no": 233, "station_code": "RNH", "station_name": "RUNKHERA", "is_diverted_station": false, "distance_from_source": 1597, "sta": "", "std": "" }, { "si_no": 234, "station_code": "BOD", "station_name": "BANGROD", "is_diverted_station": false, "distance_from_source": 1604, "sta": "", "std": "" }, { "si_no": 235, "station_code": "RTME", "station_name": "RATLAM EAST CABIN", "is_diverted_station": false, "distance_from_source": 1611, "sta": "", "std": "" }] }, { "si_no": 236, "station_code": "RTM", "station_name": "RATLAM JN", "is_diverted_station": false, "distance_from_source": 1614, "distance_from_current_station": 935, "distance_from_current_station_txt": "Next stop 935 kms to go", "sta": "17:05", "std": "17:15", "eta": "17:05", "etd": "17:15", "halt": 10, "a_day": 1, "arrival_delay": 0, "platform_number": 4, "on_time_rating": 1, "station_lat": 23.34068, "station_lng": 75.051126, "stoppage_number": 72, "day": 1, "eta_a_min": 2465, "food_available": true, "non_stops": [{ "si_no": 237, "station_code": "RTD", "station_name": "RATLAM A CABIN", "is_diverted_station": false, "distance_from_source": 1615, "sta": "", "std": "" }, { "si_no": 238, "station_code": "DRRN", "station_name": "DR R K NAGAR", "is_diverted_station": false, "distance_from_source": 1620, "sta": "", "std": "" }, { "si_no": 239, "station_code": "MRN", "station_name": "MORWANI", "is_diverted_station": false, "distance_from_source": 1625, "sta": "", "std": "" }, { "si_no": 240, "station_code": "BILD", "station_name": "BILDI", "is_diverted_station": false, "distance_from_source": 1634, "sta": "", "std": "" }, { "si_no": 241, "station_code": "RTI", "station_name": "RAOTI", "is_diverted_station": false, "distance_from_source": 1641, "sta": "", "std": "" }, { "si_no": 242, "station_code": "BOG", "station_name": "BHAIRONGARH", "is_diverted_station": false, "distance_from_source": 1653, "sta": "", "std": "" }] }, { "si_no": 243, "station_code": "BMI", "station_name": "BAMNIA", "is_diverted_station": false, "distance_from_source": 1659, "distance_from_current_station": 980, "distance_from_current_station_txt": "Next stop 980 kms to go", "sta": "17:52", "std": "17:54", "eta": "17:52", "etd": "17:54", "halt": 2, "a_day": 1, "arrival_delay": 0, "platform_number": 1, "on_time_rating": 1, "station_lat": 23.0952935, "station_lng": 74.7585458, "stoppage_number": 73, "day": 1, "eta_a_min": 2512, "food_available": false, "non_stops": [{ "si_no": 244, "station_code": "PCN", "station_name": "PANCH PIPILA", "is_diverted_station": false, "distance_from_source": 1673, "sta": "", "std": "" }, { "si_no": 245, "station_code": "THDR", "station_name": "THANDLA RD", "is_diverted_station": false, "distance_from_source": 1687, "sta": "", "std": "" }] }, { "si_no": 246, "station_code": "MGN", "station_name": "MEGHNAGAR", "is_diverted_station": false, "distance_from_source": 1695, "distance_from_current_station": 1016, "distance_from_current_station_txt": "Next stop 1016 kms to go", "sta": "18:21", "std": "18:23", "eta": "18:21", "etd": "18:23", "halt": 2, "a_day": 1, "arrival_delay": 0, "platform_number": 2, "on_time_rating": 1, "station_lat": 22.907329, "station_lng": 74.539704, "stoppage_number": 74, "day": 1, "eta_a_min": 2541, "food_available": false, "non_stops": [{ "si_no": 247, "station_code": "NRH", "station_name": "NAHARGARH", "is_diverted_station": false, "distance_from_source": 1701, "sta": "", "std": "" }, { "si_no": 248, "station_code": "ANAS", "station_name": "ANAS", "is_diverted_station": false, "distance_from_source": 1709, "sta": "", "std": "" }, { "si_no": 249, "station_code": "BIO", "station_name": "BORDI", "is_diverted_station": false, "distance_from_source": 1717, "sta": "", "std": "" }, { "si_no": 250, "station_code": "DHMA", "station_name": "DHAMARDA", "is_diverted_station": false, "distance_from_source": 1723, "sta": "", "std": "" }] }, { "si_no": 251, "station_code": "DHD", "station_name": "DAHOD", "is_diverted_station": false, "distance_from_source": 1728, "distance_from_current_station": 1049, "distance_from_current_station_txt": "Next stop 1049 kms to go", "sta": "18:47", "std": "18:49", "eta": "18:47", "etd": "18:49", "halt": 2, "a_day": 1, "arrival_delay": 0, "platform_number": 1, "on_time_rating": 1, "station_lat": 22.843907, "station_lng": 74.253674, "stoppage_number": 75, "day": 1, "eta_a_min": 2567, "food_available": true, "non_stops": [{ "si_no": 252, "station_code": "RET", "station_name": "RENTIA", "is_diverted_station": false, "distance_from_source": 1733, "sta": "", "std": "" }, { "si_no": 253, "station_code": "JKT", "station_name": "JEKOT", "is_diverted_station": false, "distance_from_source": 1739, "sta": "", "std": "" }, { "si_no": 254, "station_code": "USRA", "station_name": "USRA", "is_diverted_station": false, "distance_from_source": 1746, "sta": "", "std": "" }, { "si_no": 255, "station_code": "MAM", "station_name": "MANGAL MAHUDI", "is_diverted_station": false, "distance_from_source": 1751, "sta": "", "std": "" }, { "si_no": 256, "station_code": "LMK", "station_name": "LIMKHEDA", "is_diverted_station": false, "distance_from_source": 1759, "sta": "", "std": "" }, { "si_no": 257, "station_code": "PPD", "station_name": "PIPLOD JN", "is_diverted_station": false, "distance_from_source": 1768, "sta": "", "std": "" }, { "si_no": 258, "station_code": "SAT", "station_name": "SANT ROAD", "is_diverted_station": false, "distance_from_source": 1780, "sta": "", "std": "" }, { "si_no": 259, "station_code": "CCL", "station_name": "CHANCHELAV", "is_diverted_station": false, "distance_from_source": 1789, "sta": "", "std": "" }, { "si_no": 260, "station_code": "KIZ", "station_name": "KANSUDHI", "is_diverted_station": false, "distance_from_source": 1797, "sta": "", "std": "" }] }, { "si_no": 261, "station_code": "GDA", "station_name": "GODHRA JN", "is_diverted_station": false, "distance_from_source": 1802, "distance_from_current_station": 1123, "distance_from_current_station_txt": "Next stop 1123 kms to go", "sta": "20:10", "std": "20:12", "eta": "20:10", "etd": "20:12", "halt": 2, "a_day": 1, "arrival_delay": 0, "platform_number": 1, "on_time_rating": 2, "station_lat": 22.776894, "station_lng": 73.603592, "stoppage_number": 76, "day": 1, "eta_a_min": 2650, "food_available": false, "non_stops": [{ "si_no": 262, "station_code": "KRSA", "station_name": "KHARSALIYA", "is_diverted_station": false, "distance_from_source": 1812, "sta": "", "std": "" }, { "si_no": 263, "station_code": "BOA", "station_name": "BAHERIYA ROAD", "is_diverted_station": false, "distance_from_source": 1818, "sta": "", "std": "" }] }, { "si_no": 264, "station_code": "DRL", "station_name": "DEROL", "is_diverted_station": false, "distance_from_source": 1825, "distance_from_current_station": 1146, "distance_from_current_station_txt": "Next stop 1146 kms to go", "sta": "20:31", "std": "20:33", "eta": "20:31", "etd": "20:33", "halt": 2, "a_day": 1, "arrival_delay": 0, "platform_number": 1, "on_time_rating": 2, "station_lat": 22.629975, "station_lng": 73.461928, "stoppage_number": 77, "day": 1, "eta_a_min": 2671, "food_available": false, "non_stops": [{ "si_no": 265, "station_code": "SMLA", "station_name": "SAMLAYA JN", "is_diverted_station": false, "distance_from_source": 1849, "sta": "", "std": "" }] }, { "si_no": 266, "station_code": "BRC", "station_name": "VADODARA JN", "is_diverted_station": false, "distance_from_source": 1876, "distance_from_current_station": 1197, "distance_from_current_station_txt": "Next stop 1197 kms to go", "sta": "21:30", "std": "21:38", "eta": "21:30", "etd": "21:38", "halt": 8, "a_day": 1, "arrival_delay": 0, "platform_number": 1, "on_time_rating": 2, "station_lat": 22.310696, "station_lng": 73.181005, "stoppage_number": 78, "day": 1, "eta_a_min": 2730, "food_available": true, "non_stops": [{ "si_no": 267, "station_code": "VS", "station_name": "VISHVAMITRI", "is_diverted_station": false, "distance_from_source": 1879, "sta": "", "std": "" }, { "si_no": 268, "station_code": "MPR", "station_name": "MAKARPURA", "is_diverted_station": false, "distance_from_source": 1885, "sta": "", "std": "" }, { "si_no": 269, "station_code": "VRM", "station_name": "VARNAMA", "is_diverted_station": false, "distance_from_source": 1890, "sta": "", "std": "" }, { "si_no": 270, "station_code": "ITA", "station_name": "ITOLA", "is_diverted_station": false, "distance_from_source": 1894, "sta": "", "std": "" }, { "si_no": 271, "station_code": "KSPR", "station_name": "KASHIPURA SARAR", "is_diverted_station": false, "distance_from_source": 1898, "sta": "", "std": "" }, { "si_no": 272, "station_code": "MYG", "station_name": "MIYAGAM KARJAN", "is_diverted_station": false, "distance_from_source": 1906, "sta": "", "std": "" }, { "si_no": 273, "station_code": "LKD", "station_name": "LAKODARA", "is_diverted_station": false, "distance_from_source": 1913, "sta": "", "std": "" }, { "si_no": 274, "station_code": "PLJ", "station_name": "PALEJ", "is_diverted_station": false, "distance_from_source": 1921, "sta": "", "std": "" }, { "si_no": 275, "station_code": "VRE", "station_name": "VAREDIYA", "is_diverted_station": false, "distance_from_source": 1928, "sta": "", "std": "" }, { "si_no": 276, "station_code": "NIU", "station_name": "NABIPUR", "is_diverted_station": false, "distance_from_source": 1934, "sta": "", "std": "" }, { "si_no": 277, "station_code": "CVJ", "station_name": "CHAVAJ", "is_diverted_station": false, "distance_from_source": 1941, "sta": "", "std": "" }, { "si_no": 278, "station_code": "BH", "station_name": "BHARUCH JN", "is_diverted_station": false, "distance_from_source": 1946, "sta": "", "std": "" }, { "si_no": 279, "station_code": "CCTA", "station_name": "CONCOR CONTAINER TERMINAL", "is_diverted_station": false, "distance_from_source": 1955, "sta": "", "std": "" }] }, { "si_no": 280, "station_code": "AKV", "station_name": "ANKLESHWAR JN", "is_diverted_station": false, "distance_from_source": 1955, "distance_from_current_station": 1276, "distance_from_current_station_txt": "Next stop 1276 kms to go", "sta": "22:19", "std": "22:21", "eta": "22:19", "etd": "22:21", "halt": 2, "a_day": 1, "arrival_delay": 0, "platform_number": 2, "on_time_rating": 1, "station_lat": 21.624359, "station_lng": 73.001103, "stoppage_number": 79, "day": 1, "eta_a_min": 2779, "food_available": false, "non_stops": [{ "si_no": 281, "station_code": "SNJL", "station_name": "SANJALI", "is_diverted_station": false, "distance_from_source": 1961, "sta": "", "std": "" }, { "si_no": 282, "station_code": "PAO", "station_name": "PANOLI", "is_diverted_station": false, "distance_from_source": 1965, "sta": "", "std": "" }, { "si_no": 283, "station_code": "HAT", "station_name": "HATHURAN", "is_diverted_station": false, "distance_from_source": 1969, "sta": "", "std": "" }, { "si_no": 284, "station_code": "KSB", "station_name": "KOSAMBA JN", "is_diverted_station": false, "distance_from_source": 1974, "sta": "", "std": "" }, { "si_no": 285, "station_code": "KIM", "station_name": "KIM", "is_diverted_station": false, "distance_from_source": 1982, "sta": "", "std": "" }, { "si_no": 286, "station_code": "KDSD", "station_name": "KUDSAD", "is_diverted_station": false, "distance_from_source": 1984, "sta": "", "std": "" }, { "si_no": 287, "station_code": "SYN", "station_name": "SAYAN", "is_diverted_station": false, "distance_from_source": 1992, "sta": "", "std": "" }, { "si_no": 288, "station_code": "GTX", "station_name": "GOTHANGAM", "is_diverted_station": false, "distance_from_source": 1994, "sta": "", "std": "" }, { "si_no": 289, "station_code": "KSE", "station_name": "KOSAD", "is_diverted_station": false, "distance_from_source": 1999, "sta": "", "std": "" }, { "si_no": 290, "station_code": "URN", "station_name": "UTRAN", "is_diverted_station": false, "distance_from_source": 2002, "sta": "", "std": "" }] }, { "si_no": 291, "station_code": "ST", "station_name": "SURAT", "is_diverted_station": false, "distance_from_source": 2005, "distance_from_current_station": 1326, "distance_from_current_station_txt": "Next stop 1326 kms to go", "sta": "23:24", "std": "23:29", "eta": "23:24", "etd": "23:29", "halt": 5, "a_day": 1, "arrival_delay": 0, "platform_number": 2, "on_time_rating": 3, "station_lat": 21.206418, "station_lng": 72.840643, "stoppage_number": 80, "day": 1, "eta_a_min": 2844, "food_available": false, "non_stops": [{ "si_no": 292, "station_code": "UDN", "station_name": "UDHNA JN", "is_diverted_station": false, "distance_from_source": 2009, "sta": "", "std": "" }, { "si_no": 293, "station_code": "BHET", "station_name": "BHESTAN", "is_diverted_station": false, "distance_from_source": 2014, "sta": "", "std": "" }, { "si_no": 294, "station_code": "SCH", "station_name": "SACHIN", "is_diverted_station": false, "distance_from_source": 2020, "sta": "", "std": "" }, { "si_no": 295, "station_code": "MRL", "station_name": "MAROLI", "is_diverted_station": false, "distance_from_source": 2026, "sta": "", "std": "" }, { "si_no": 296, "station_code": "NVS", "station_name": "NAVSARI", "is_diverted_station": false, "distance_from_source": 2035, "sta": "", "std": "" }, { "si_no": 297, "station_code": "GNST", "station_name": "GANDHI SMRITI", "is_diverted_station": false, "distance_from_source": 2037, "sta": "", "std": "" }, { "si_no": 298, "station_code": "HXR", "station_name": "HANSAPORE", "is_diverted_station": false, "distance_from_source": 2039, "sta": "", "std": "" }, { "si_no": 299, "station_code": "VDH", "station_name": "VEDCHHA", "is_diverted_station": false, "distance_from_source": 2043, "sta": "", "std": "" }, { "si_no": 300, "station_code": "ACL", "station_name": "ANCHELI", "is_diverted_station": false, "distance_from_source": 2046, "sta": "", "std": "" }, { "si_no": 301, "station_code": "AML", "station_name": "AMALSAD", "is_diverted_station": false, "distance_from_source": 2050, "sta": "", "std": "" }, { "si_no": 302, "station_code": "BIM", "station_name": "BILIMORA JN", "is_diverted_station": false, "distance_from_source": 2055, "sta": "", "std": "" }, { "si_no": 303, "station_code": "JRS", "station_name": "JORAVASAN", "is_diverted_station": false, "distance_from_source": 2059, "sta": "", "std": "" }, { "si_no": 304, "station_code": "DGI", "station_name": "DUNGRI", "is_diverted_station": false, "distance_from_source": 2064, "sta": "", "std": "" }] }, { "si_no": 305, "station_code": "BL", "station_name": "VALSAD", "is_diverted_station": false, "distance_from_source": 2073, "distance_from_current_station": 1394, "distance_from_current_station_txt": "Next stop 1394 kms to go", "sta": "00:47", "std": "00:49", "eta": "00:47", "etd": "00:49", "halt": 2, "a_day": 2, "arrival_delay": 0, "platform_number": 3, "on_time_rating": 2, "station_lat": 20.6086295, "station_lng": 72.9335991, "stoppage_number": 81, "day": 2, "eta_a_min": 2927, "food_available": false, "non_stops": [{ "si_no": 306, "station_code": "ATUL", "station_name": "ATUL", "is_diverted_station": false, "distance_from_source": 2080, "sta": "", "std": "" }, { "si_no": 307, "station_code": "PAD", "station_name": "PARDI", "is_diverted_station": false, "distance_from_source": 2083, "sta": "", "std": "" }, { "si_no": 308, "station_code": "UVD", "station_name": "UDVADA", "is_diverted_station": false, "distance_from_source": 2088, "sta": "", "std": "" }, { "si_no": 309, "station_code": "BAGD", "station_name": "BAGWADA", "is_diverted_station": false, "distance_from_source": 2090, "sta": "", "std": "" }] }, { "si_no": 310, "station_code": "VAPI", "station_name": "VAPI", "is_diverted_station": false, "distance_from_source": 2097, "distance_from_current_station": 1418, "distance_from_current_station_txt": "Next stop 1418 kms to go", "sta": "01:08", "std": "01:10", "eta": "01:08", "etd": "01:10", "halt": 2, "a_day": 2, "arrival_delay": 0, "platform_number": 2, "on_time_rating": 2, "station_lat": 20.373918, "station_lng": 72.908707, "stoppage_number": 82, "day": 2, "eta_a_min": 2948, "food_available": false, "non_stops": [{ "si_no": 311, "station_code": "KEB", "station_name": "KARAMBELI", "is_diverted_station": false, "distance_from_source": 2104, "sta": "", "std": "" }, { "si_no": 312, "station_code": "BLD", "station_name": "BHILAD", "is_diverted_station": false, "distance_from_source": 2109, "sta": "", "std": "" }, { "si_no": 313, "station_code": "SJN", "station_name": "SANJAN", "is_diverted_station": false, "distance_from_source": 2121, "sta": "", "std": "" }, { "si_no": 314, "station_code": "UBR", "station_name": "UMBARGAM ROAD", "is_diverted_station": false, "distance_from_source": 2126, "sta": "", "std": "" }, { "si_no": 315, "station_code": "BRRD", "station_name": "BORDI ROAD", "is_diverted_station": false, "distance_from_source": 2131, "sta": "", "std": "" }, { "si_no": 316, "station_code": "GVD", "station_name": "GHOLVAD", "is_diverted_station": false, "distance_from_source": 2136, "sta": "", "std": "" }, { "si_no": 317, "station_code": "DRD", "station_name": "DAHANU ROAD", "is_diverted_station": false, "distance_from_source": 2147, "sta": "", "std": "" }, { "si_no": 318, "station_code": "VGN", "station_name": "VANGAON", "is_diverted_station": false, "distance_from_source": 2159, "sta": "", "std": "" }] }, { "si_no": 319, "station_code": "BOR", "station_name": "BOISAR", "is_diverted_station": false, "distance_from_source": 2169, "distance_from_current_station": 1490, "distance_from_current_station_txt": "Next stop 1490 kms to go", "sta": "02:10", "std": "02:12", "eta": "02:10", "etd": "02:12", "halt": 2, "a_day": 2, "arrival_delay": 0, "platform_number": 3, "on_time_rating": 3, "station_lat": 19.7982373, "station_lng": 72.761609, "stoppage_number": 83, "day": 2, "eta_a_min": 3010, "food_available": false, "non_stops": [{ "si_no": 320, "station_code": "UOI", "station_name": "UMROLI", "is_diverted_station": false, "distance_from_source": 2174, "sta": "", "std": "" }, { "si_no": 321, "station_code": "PLG", "station_name": "PALGHAR", "is_diverted_station": false, "distance_from_source": 2180, "sta": "", "std": "" }, { "si_no": 322, "station_code": "KLV", "station_name": "KELVA ROAD", "is_diverted_station": false, "distance_from_source": 2189, "sta": "", "std": "" }, { "si_no": 323, "station_code": "SAH", "station_name": "SAPHALE", "is_diverted_station": false, "distance_from_source": 2195, "sta": "", "std": "" }, { "si_no": 324, "station_code": "VTN", "station_name": "VAITARNA", "is_diverted_station": false, "distance_from_source": 2203, "sta": "", "std": "" }, { "si_no": 325, "station_code": "VR", "station_name": "VIRAR", "is_diverted_station": false, "distance_from_source": 2211, "sta": "", "std": "" }, { "si_no": 326, "station_code": "VCSV", "station_name": "VIRAR CARSHED", "is_diverted_station": false, "distance_from_source": 2213, "sta": "", "std": "" }, { "si_no": 327, "station_code": "NSP", "station_name": "NALLA SOPARA", "is_diverted_station": false, "distance_from_source": 2215, "sta": "", "std": "" }, { "si_no": 328, "station_code": "BSR", "station_name": "VASAI ROAD", "is_diverted_station": false, "distance_from_source": 2219, "sta": "", "std": "" }, { "si_no": 329, "station_code": "NIG", "station_name": "NAIGAON", "is_diverted_station": false, "distance_from_source": 2223, "sta": "", "std": "" }, { "si_no": 330, "station_code": "BYR", "station_name": "BHAYANDAR", "is_diverted_station": false, "distance_from_source": 2228, "sta": "", "std": "" }, { "si_no": 331, "station_code": "MIRA", "station_name": "MIRA ROAD", "is_diverted_station": false, "distance_from_source": 2231, "sta": "", "std": "" }, { "si_no": 332, "station_code": "DIC", "station_name": "DAHISAR", "is_diverted_station": false, "distance_from_source": 2235, "sta": "", "std": "" }] }, { "si_no": 333, "station_code": "BVI", "station_name": "BORIVALI", "is_diverted_station": false, "distance_from_source": 2237, "distance_from_current_station": 1558, "distance_from_current_station_txt": "Next stop 1558 kms to go", "sta": "03:12", "std": "03:17", "eta": "03:12", "etd": "03:17", "halt": 5, "a_day": 2, "arrival_delay": 0, "platform_number": 6, "on_time_rating": 2, "station_lat": 19.229149, "station_lng": 72.856822, "stoppage_number": 84, "day": 2, "eta_a_min": 3072, "food_available": false, "non_stops": [{ "si_no": 334, "station_code": "KDKC", "station_name": "KANDIVLI EMU SHED", "is_diverted_station": false, "distance_from_source": 2239, "sta": "", "std": "" }, { "si_no": 335, "station_code": "KILE", "station_name": "KANDIVLI", "is_diverted_station": false, "distance_from_source": 2240, "sta": "", "std": "" }, { "si_no": 336, "station_code": "MDD", "station_name": "MALAD", "is_diverted_station": false, "distance_from_source": 2242, "sta": "", "std": "" }, { "si_no": 337, "station_code": "GMN", "station_name": "GOREGAON", "is_diverted_station": false, "distance_from_source": 2245, "sta": "", "std": "" }, { "si_no": 338, "station_code": "RMAR", "station_name": "RAM MANDIR OSHIWARA", "is_diverted_station": false, "distance_from_source": 2246, "sta": "", "std": "" }, { "si_no": 339, "station_code": "JOS", "station_name": "JOGESHWARI", "is_diverted_station": false, "distance_from_source": 2248, "sta": "", "std": "" }] }, { "si_no": 340, "station_code": "ADH", "station_name": "ANDHERI", "is_diverted_station": false, "distance_from_source": 2250, "distance_from_current_station": 1571, "distance_from_current_station_txt": "Next stop 1571 kms to go", "sta": "03:33", "std": "03:35", "eta": "03:33", "etd": "03:35", "halt": 2, "a_day": 2, "arrival_delay": 0, "platform_number": 8, "on_time_rating": 2, "station_lat": 19.1171389, "station_lng": 72.846563, "stoppage_number": 85, "day": 2, "eta_a_min": 3093, "food_available": false, "non_stops": [{ "si_no": 341, "station_code": "VLP", "station_name": "VILE PARLE", "is_diverted_station": false, "distance_from_source": 2252, "sta": "", "std": "" }, { "si_no": 342, "station_code": "STC", "station_name": "SANTA CRUZ", "is_diverted_station": false, "distance_from_source": 2254, "sta": "", "std": "" }] }, { "si_no": 343, "station_code": "BDTS", "station_name": "MUMBAI BANDRA TERMINUS", "is_diverted_station": false, "distance_from_source": 2256, "distance_from_current_station": 1577, "distance_from_current_station_txt": "Next stop 1577 kms to go", "sta": "04:05", "std": "04:05", "eta": "04:05", "etd": "04:05", "halt": 0, "a_day": 2, "arrival_delay": 0, "platform_number": 1, "on_time_rating": 3, "station_lat": 19.062341, "station_lng": 72.840965, "stoppage_number": 86, "day": 2, "eta_a_min": 3125, "food_available": false, "non_stops": [] }], "previous_stations": [{ "si_no": 1, "station_code": "BJU", "station_name": "BARAUNI JN", "is_diverted_station": false, "distance_from_source": 0, "sta": "07:20", "std": "07:20", "eta": "07:33", "etd": "07:33", "halt": 0, "a_day": 0, "arrival_delay": 13, "platform_number": 1, "station_lat": 25.462088, "station_lng": 85.989068, "stoppage_number": 1, "non_stops": [{ "si_no": 2, "station_code": "BUJ", "station_name": "BARAUNI FLAG", "is_diverted_station": false, "distance_from_source": 3, "sta": "", "std": "" }, { "si_no": 3, "station_code": "TGA", "station_name": "TEGHRA", "is_diverted_station": false, "distance_from_source": 7, "sta": "", "std": "" }, { "si_no": 4, "station_code": "MPNH", "station_name": "MAJNUPUR NAWADA", "is_diverted_station": false, "distance_from_source": 10, "sta": "", "std": "" }, { "si_no": 5, "station_code": "BCA", "station_name": "BACHWARA JN", "is_diverted_station": false, "distance_from_source": 16, "sta": "", "std": "" }, { "si_no": 6, "station_code": "STJT", "station_name": "SATHAJAGAT", "is_diverted_station": false, "distance_from_source": 23, "sta": "", "std": "" }, { "si_no": 7, "station_code": "DSS", "station_name": "DALSINGH SARAI", "is_diverted_station": false, "distance_from_source": 28, "sta": "", "std": "" }, { "si_no": 8, "station_code": "BSRA", "station_name": "BASARHIA HALT", "is_diverted_station": false, "distance_from_source": 32, "sta": "", "std": "" }, { "si_no": 9, "station_code": "NAZJ", "station_name": "NAZIRGANJ", "is_diverted_station": false, "distance_from_source": 35, "sta": "", "std": "" }, { "si_no": 10, "station_code": "UJP", "station_name": "UJIARPUR", "is_diverted_station": false, "distance_from_source": 42, "sta": "", "std": "" }, { "si_no": 11, "station_code": "BLRI", "station_name": "BELARI HALT", "is_diverted_station": false, "distance_from_source": 46, "sta": "", "std": "" }] }, { "si_no": 12, "station_code": "SPJ", "station_name": "SAMASTIPUR JN", "is_diverted_station": false, "distance_from_source": 51, "sta": "08:33", "std": "08:38", "eta": "08:33", "etd": "08:38", "halt": 5, "a_day": 0, "arrival_delay": 0, "platform_number": 6, "station_lat": 25.858374, "station_lng": 85.78743, "stoppage_number": 2, "non_stops": [{ "si_no": 13, "station_code": "KPGM", "station_name": "KARPURIGRAM", "is_diverted_station": false, "distance_from_source": 58, "sta": "", "std": "" }, { "si_no": 14, "station_code": "KRBP", "station_name": "KHUDIRAM B PUSA", "is_diverted_station": false, "distance_from_source": 64, "sta": "", "std": "" }, { "si_no": 15, "station_code": "VBH", "station_name": "VISHNUPUR BATHUA HALT", "is_diverted_station": false, "distance_from_source": 68, "sta": "", "std": "" }, { "si_no": 16, "station_code": "DUBH", "station_name": "DUBAHA", "is_diverted_station": false, "distance_from_source": 72, "sta": "", "std": "" }, { "si_no": 17, "station_code": "DOL", "station_name": "DHOLI", "is_diverted_station": false, "distance_from_source": 78, "sta": "", "std": "" }, { "si_no": 18, "station_code": "SIHO", "station_name": "SIHO", "is_diverted_station": false, "distance_from_source": 85, "sta": "", "std": "" }, { "si_no": 19, "station_code": "SLT", "station_name": "SILAUT", "is_diverted_station": false, "distance_from_source": 92, "sta": "", "std": "" }, { "si_no": 20, "station_code": "NRPA", "station_name": "NARAYANPUR ANANT", "is_diverted_station": false, "distance_from_source": 98, "sta": "", "std": "" }] }, { "si_no": 21, "station_code": "MFP", "station_name": "MUZAFFARPUR JN", "is_diverted_station": false, "distance_from_source": 103, "sta": "09:35", "std": "09:40", "eta": "09:33", "etd": "09:43", "halt": 10, "a_day": 0, "arrival_delay": 0, "platform_number": 2, "station_lat": 26.122151, "station_lng": 85.377846, "stoppage_number": 3, "non_stops": [{ "si_no": 22, "station_code": "KVC", "station_name": "KAPARPURA", "is_diverted_station": false, "distance_from_source": 112, "sta": "", "std": "" }, { "si_no": 23, "station_code": "KTI", "station_name": "KANTI", "is_diverted_station": false, "distance_from_source": 116, "sta": "", "std": "" }, { "si_no": 24, "station_code": "PPRH", "station_name": "PIPARAHAN HALT", "is_diverted_station": false, "distance_from_source": 120, "sta": "", "std": "" }, { "si_no": 25, "station_code": "NRV", "station_name": "NARIYAR", "is_diverted_station": false, "distance_from_source": 124, "sta": "", "std": "" }] }, { "si_no": 26, "station_code": "MTR", "station_name": "MOTIPUR", "is_diverted_station": false, "distance_from_source": 129, "sta": "10:12", "std": "10:14", "eta": "10:08", "etd": "10:16", "halt": 8, "a_day": 0, "arrival_delay": 0, "platform_number": 1, "station_lat": 26.257088721, "station_lng": 85.1682472229, "stoppage_number": 4, "non_stops": [{ "si_no": 27, "station_code": "MHL", "station_name": "MAHWAL", "is_diverted_station": false, "distance_from_source": 136, "sta": "", "std": "" }] }, { "si_no": 28, "station_code": "MAI", "station_name": "MEHSI", "is_diverted_station": false, "distance_from_source": 142, "sta": "10:28", "std": "10:30", "eta": "10:30", "etd": "10:32", "halt": 2, "a_day": 0, "arrival_delay": 2, "platform_number": 1, "station_lat": 26.354728, "station_lng": 85.096149, "stoppage_number": 5, "non_stops": [{ "si_no": 29, "station_code": "HRNG", "station_name": "HARPUR NAG HALT", "is_diverted_station": false, "distance_from_source": 146, "sta": "", "std": "" }] }, { "si_no": 30, "station_code": "CAA", "station_name": "CHAKIA", "is_diverted_station": false, "distance_from_source": 151, "sta": "10:38", "std": "10:40", "eta": "10:41", "etd": "10:43", "halt": 2, "a_day": 0, "arrival_delay": 3, "platform_number": 1, "station_lat": 26.417662, "station_lng": 85.04684, "stoppage_number": 6, "non_stops": [{ "si_no": 31, "station_code": "KXRA", "station_name": "KURIA HALT", "is_diverted_station": false, "distance_from_source": 158, "sta": "", "std": "" }] }, { "si_no": 32, "station_code": "PPA", "station_name": "PIPRA", "is_diverted_station": false, "distance_from_source": 161, "sta": "10:50", "std": "10:52", "eta": "10:52", "etd": "10:54", "halt": 2, "a_day": 0, "arrival_delay": 2, "platform_number": 1, "station_lat": 26.490164, "station_lng": 84.986115, "stoppage_number": 7, "non_stops": [{ "si_no": 33, "station_code": "KPCM", "station_name": "KUWARCHINTAWA", "is_diverted_station": false, "distance_from_source": 166, "sta": "", "std": "" }, { "si_no": 34, "station_code": "BGAR", "station_name": "BANGARI", "is_diverted_station": false, "distance_from_source": 169, "sta": "", "std": "" }, { "si_no": 35, "station_code": "JDR", "station_name": "JIWDHARA", "is_diverted_station": false, "distance_from_source": 174, "sta": "", "std": "" }, { "si_no": 36, "station_code": "MCO", "station_name": "MOTIHARI COURT", "is_diverted_station": false, "distance_from_source": 179, "sta": "", "std": "" }] }, { "si_no": 37, "station_code": "BMKI", "station_name": "BAPUDHAM MOTIHARI", "is_diverted_station": false, "distance_from_source": 183, "sta": "11:08", "std": "11:10", "eta": "11:14", "etd": "11:16", "halt": 2, "a_day": 0, "arrival_delay": 6, "platform_number": 1, "station_lat": 26.655533, "station_lng": 84.90509, "stoppage_number": 8, "non_stops": [{ "si_no": 38, "station_code": "CHAH", "station_name": "CHAILAHA HALT", "is_diverted_station": false, "distance_from_source": 185, "sta": "", "std": "" }, { "si_no": 39, "station_code": "SRA", "station_name": "SEMRA", "is_diverted_station": false, "distance_from_source": 194, "sta": "", "std": "" }] }, { "si_no": 40, "station_code": "SGL", "station_name": "SAGAULI JN", "is_diverted_station": false, "distance_from_source": 203, "sta": "11:38", "std": "11:40", "eta": "11:35", "etd": "11:42", "halt": 7, "a_day": 0, "arrival_delay": 0, "platform_number": 1, "station_lat": 26.758027, "station_lng": 84.73918, "stoppage_number": 9, "non_stops": [{ "si_no": 41, "station_code": "PRSN", "station_name": "PARSA NAGAR", "is_diverted_station": false, "distance_from_source": 209, "sta": "", "std": "" }, { "si_no": 42, "station_code": "MJL", "station_name": "MAJHOWLIA", "is_diverted_station": false, "distance_from_source": 216, "sta": "", "std": "" }] }, { "si_no": 43, "station_code": "BTH", "station_name": "BETTIAH", "is_diverted_station": false, "distance_from_source": 226, "sta": "11:59", "std": "12:01", "eta": "12:04", "etd": "12:07", "halt": 3, "a_day": 0, "arrival_delay": 5, "platform_number": 1, "station_lat": 26.8054447, "station_lng": 84.5225161, "stoppage_number": 10, "non_stops": [{ "si_no": 44, "station_code": "PJPT", "station_name": "PRAJAPATI HALT", "is_diverted_station": false, "distance_from_source": 228, "sta": "", "std": "" }, { "si_no": 45, "station_code": "KUMB", "station_name": "KUMARBAGH", "is_diverted_station": false, "distance_from_source": 235, "sta": "", "std": "" }, { "si_no": 46, "station_code": "CAI", "station_name": "CHANPATIA", "is_diverted_station": false, "distance_from_source": 243, "sta": "", "std": "" }, { "si_no": 47, "station_code": "RSWN", "station_name": "RAMESHWAR NAGAR", "is_diverted_station": false, "distance_from_source": 247, "sta": "", "std": "" }, { "si_no": 48, "station_code": "SAHI", "station_name": "SATHI", "is_diverted_station": false, "distance_from_source": 251, "sta": "", "std": "" }, { "si_no": 49, "station_code": "MSHW", "station_name": "MUSHARWA HALT", "is_diverted_station": false, "distance_from_source": 256, "sta": "", "std": "" }] }, { "si_no": 50, "station_code": "NKE", "station_name": "NARKATIAGANJ JN", "is_diverted_station": false, "distance_from_source": 262, "sta": "12:45", "std": "12:50", "eta": "12:45", "etd": "12:50", "halt": 5, "a_day": 0, "arrival_delay": 0, "platform_number": 1, "station_lat": 27.104825, "station_lng": 84.463835, "stoppage_number": 11, "non_stops": [{ "si_no": 51, "station_code": "CAMU", "station_name": "CHAMUA", "is_diverted_station": false, "distance_from_source": 270, "sta": "", "std": "" }] }, { "si_no": 52, "station_code": "HIR", "station_name": "HARINAGAR", "is_diverted_station": false, "distance_from_source": 278, "sta": "13:04", "std": "13:06", "eta": "13:09", "etd": "13:11", "halt": 2, "a_day": 0, "arrival_delay": 5, "platform_number": 1, "station_lat": 27.156157, "station_lng": 84.324017, "stoppage_number": 12, "non_stops": [{ "si_no": 53, "station_code": "BRU", "station_name": "BHAIROGANJ", "is_diverted_station": false, "distance_from_source": 286, "sta": "", "std": "" }, { "si_no": 54, "station_code": "KPB", "station_name": "KHARPOKHRA", "is_diverted_station": false, "distance_from_source": 295, "sta": "", "std": "" }] }, { "si_no": 55, "station_code": "BUG", "station_name": "BAGAHA", "is_diverted_station": false, "distance_from_source": 304, "sta": "13:29", "std": "13:31", "eta": "13:51", "etd": "13:53", "halt": 2, "a_day": 0, "arrival_delay": 22, "platform_number": 1, "station_lat": 27.130265, "station_lng": 84.067211, "stoppage_number": 13, "non_stops": [{ "si_no": 56, "station_code": "AWS", "station_name": "ASWANI HALT", "is_diverted_station": false, "distance_from_source": 308, "sta": "", "std": "" }, { "si_no": 57, "station_code": "VKNR", "station_name": "VALMIKINAGAR RD", "is_diverted_station": false, "distance_from_source": 314, "sta": "", "std": "" }] }, { "si_no": 58, "station_code": "PNYA", "station_name": "PANIAHWA", "is_diverted_station": false, "distance_from_source": 326, "sta": "14:53", "std": "14:55", "eta": "14:39", "etd": "14:57", "halt": 18, "a_day": 0, "arrival_delay": 0, "platform_number": 1, "station_lat": 27.167306, "station_lng": 83.933659, "stoppage_number": 14, "non_stops": [] }, { "si_no": 59, "station_code": "KZA", "station_name": "KHADDA", "is_diverted_station": false, "distance_from_source": 333, "sta": "15:05", "std": "15:07", "eta": "15:05", "etd": "15:07", "halt": 2, "a_day": 0, "arrival_delay": 0, "platform_number": 1, "station_lat": 27.182806, "station_lng": 83.868256, "stoppage_number": 15, "non_stops": [{ "si_no": 60, "station_code": "GRRG", "station_name": "GURLI RAMGARHWA", "is_diverted_station": false, "distance_from_source": 343, "sta": "", "std": "" }] }, { "si_no": 61, "station_code": "SBZ", "station_name": "SISWA BAZAR", "is_diverted_station": false, "distance_from_source": 347, "sta": "15:22", "std": "15:24", "eta": "15:22", "etd": "15:24", "halt": 2, "a_day": 0, "arrival_delay": 0, "platform_number": 1, "station_lat": 27.1492069522, "station_lng": 83.7559890747, "stoppage_number": 16, "non_stops": [{ "si_no": 62, "station_code": "GH", "station_name": "GHUGHULI", "is_diverted_station": false, "distance_from_source": 359, "sta": "", "std": "" }, { "si_no": 63, "station_code": "KSNR", "station_name": "KHUSHAL NAGAR", "is_diverted_station": false, "distance_from_source": 366, "sta": "", "std": "" }] }, { "si_no": 64, "station_code": "CPJ", "station_name": "KAPTANGANJ JN", "is_diverted_station": false, "distance_from_source": 373, "sta": "15:50", "std": "15:55", "eta": "15:50", "etd": "15:55", "halt": 5, "a_day": 0, "arrival_delay": 0, "platform_number": 1, "station_lat": 26.926508, "station_lng": 83.700027, "stoppage_number": 17, "non_stops": [{ "si_no": 65, "station_code": "BBW", "station_name": "BODARWAR", "is_diverted_station": false, "distance_from_source": 381, "sta": "", "std": "" }, { "si_no": 66, "station_code": "MUUA", "station_name": "MAHUAWA KHURD", "is_diverted_station": false, "distance_from_source": 385, "sta": "", "std": "" }] }, { "si_no": 67, "station_code": "PPC", "station_name": "PIPRAICH", "is_diverted_station": false, "distance_from_source": 393, "sta": "16:13", "std": "16:15", "eta": "16:13", "etd": "16:16", "halt": 3, "a_day": 0, "arrival_delay": 0, "platform_number": 1, "station_lat": 26.828207, "station_lng": 83.535748, "stoppage_number": 18, "non_stops": [{ "si_no": 68, "station_code": "UNLA", "station_name": "UNAULA", "is_diverted_station": false, "distance_from_source": 401, "sta": "", "std": "" }, { "si_no": 69, "station_code": "GKC", "station_name": "GORAKHPUR CANT", "is_diverted_station": false, "distance_from_source": 408, "sta": "", "std": "" }] }, { "si_no": 70, "station_code": "GKP", "station_name": "GORAKHPUR JN", "is_diverted_station": false, "distance_from_source": 412, "sta": "17:05", "std": "17:15", "eta": "17:10", "etd": "17:20", "halt": 10, "a_day": 0, "arrival_delay": 5, "platform_number": 5, "station_lat": 26.759751, "station_lng": 83.381939, "stoppage_number": 19, "non_stops": [{ "si_no": 71, "station_code": "DMG", "station_name": "DOMINGARH", "is_diverted_station": false, "distance_from_source": 416, "sta": "", "std": "" }, { "si_no": 72, "station_code": "JTB", "station_name": "JAGATBELA", "is_diverted_station": false, "distance_from_source": 423, "sta": "", "std": "" }] }, { "si_no": 73, "station_code": "SWA", "station_name": "SAHJANWA", "is_diverted_station": false, "distance_from_source": 430, "sta": "17:42", "std": "17:44", "eta": "17:47", "etd": "18:11", "halt": 24, "a_day": 0, "arrival_delay": 5, "platform_number": 1, "station_lat": 26.763545, "station_lng": 83.21517, "stoppage_number": 20, "non_stops": [{ "si_no": 74, "station_code": "SIPR", "station_name": "SIHAPAR", "is_diverted_station": false, "distance_from_source": 435, "sta": "", "std": "" }] }, { "si_no": 75, "station_code": "MHH", "station_name": "MAGHAR", "is_diverted_station": false, "distance_from_source": 439, "sta": "17:54", "std": "17:56", "eta": "18:24", "etd": "18:26", "halt": 2, "a_day": 0, "arrival_delay": 30, "platform_number": 1, "station_lat": 26.749903, "station_lng": 83.133631, "stoppage_number": 21, "non_stops": [] }, { "si_no": 76, "station_code": "KLD", "station_name": "KHALILABAD", "is_diverted_station": false, "distance_from_source": 447, "sta": "18:08", "std": "18:10", "eta": "18:36", "etd": "18:38", "halt": 2, "a_day": 0, "arrival_delay": 28, "platform_number": 1, "station_lat": 26.77481, "station_lng": 83.055353, "stoppage_number": 22, "non_stops": [{ "si_no": 77, "station_code": "CRV", "station_name": "CHUREB", "is_diverted_station": false, "distance_from_source": 455, "sta": "", "std": "" }, { "si_no": 78, "station_code": "MND", "station_name": "MUNDERWA", "is_diverted_station": false, "distance_from_source": 463, "sta": "", "std": "" }, { "si_no": 79, "station_code": "ORW", "station_name": "ORWARA", "is_diverted_station": false, "distance_from_source": 471, "sta": "", "std": "" }] }, { "si_no": 80, "station_code": "BST", "station_name": "BASTI", "is_diverted_station": false, "distance_from_source": 477, "sta": "18:35", "std": "18:38", "eta": "19:14", "etd": "19:17", "halt": 3, "a_day": 0, "arrival_delay": 39, "platform_number": 1, "station_lat": 26.815558, "station_lng": 82.769939, "stoppage_number": 23, "non_stops": [{ "si_no": 81, "station_code": "GOVR", "station_name": "GOVINDNAGAR", "is_diverted_station": false, "distance_from_source": 485, "sta": "", "std": "" }, { "si_no": 82, "station_code": "TH", "station_name": "TINICH", "is_diverted_station": false, "distance_from_source": 492, "sta": "", "std": "" }] }, { "si_no": 83, "station_code": "GAUR", "station_name": "GAUR", "is_diverted_station": false, "distance_from_source": 500, "sta": "18:58", "std": "19:00", "eta": "19:28", "etd": "19:32", "halt": 4, "a_day": 0, "arrival_delay": 30, "platform_number": 1, "station_lat": 26.913651, "station_lng": 82.561398, "stoppage_number": 24, "non_stops": [] }, { "si_no": 84, "station_code": "BV", "station_name": "BABHNAN", "is_diverted_station": false, "distance_from_source": 507, "sta": "19:02", "std": "19:04", "eta": "19:41", "etd": "19:43", "halt": 2, "a_day": 0, "arrival_delay": 39, "platform_number": 1, "station_lat": 26.938255, "station_lng": 82.499857, "stoppage_number": 25, "non_stops": [{ "si_no": 85, "station_code": "PATI", "station_name": "PARSA TEWARI", "is_diverted_station": false, "distance_from_source": 512, "sta": "", "std": "" }, { "si_no": 86, "station_code": "BNGY", "station_name": "BAHMAN JYOTIA", "is_diverted_station": false, "distance_from_source": 515, "sta": "", "std": "" }] }, { "si_no": 87, "station_code": "SNC", "station_name": "SWAMI NARAYAN CHHAPIA", "is_diverted_station": false, "distance_from_source": 519, "sta": "19:16", "std": "19:18", "eta": "19:55", "etd": "19:57", "halt": 2, "a_day": 0, "arrival_delay": 39, "platform_number": 1, "station_lat": 26.9807521017, "station_lng": 82.3959159851, "stoppage_number": 26, "non_stops": [] }, { "si_no": 88, "station_code": "MSW", "station_name": "MASKANWA", "is_diverted_station": false, "distance_from_source": 524, "sta": "19:26", "std": "19:28", "eta": "20:05", "etd": "20:07", "halt": 2, "a_day": 0, "arrival_delay": 39, "platform_number": 1, "station_lat": 27.0012492301, "station_lng": 82.3596096039, "stoppage_number": 27, "non_stops": [{ "si_no": 89, "station_code": "LKNR", "station_name": "LAKHPAT NAGAR", "is_diverted_station": false, "distance_from_source": 533, "sta": "", "std": "" }] }, { "si_no": 90, "station_code": "MUR", "station_name": "MANKAPUR JN", "is_diverted_station": false, "distance_from_source": 538, "sta": "19:56", "std": "19:58", "eta": "20:25", "etd": "20:35", "halt": 10, "a_day": 0, "arrival_delay": 29, "platform_number": 2, "station_lat": 27.039098, "station_lng": 82.227688, "stoppage_number": 28, "non_stops": [{ "si_no": 91, "station_code": "JLHI", "station_name": "JHILAHI", "is_diverted_station": false, "distance_from_source": 545, "sta": "", "std": "" }, { "si_no": 92, "station_code": "MOTG", "station_name": "MOTIGANJ", "is_diverted_station": false, "distance_from_source": 552, "sta": "", "std": "" }, { "si_no": 93, "station_code": "BRCK", "station_name": "BARUA CHAK", "is_diverted_station": false, "distance_from_source": 558, "sta": "", "std": "" }] }, { "si_no": 94, "station_code": "GD", "station_name": "GONDA JN", "is_diverted_station": false, "distance_from_source": 566, "sta": "20:35", "std": "20:40", "eta": "21:12", "etd": "21:23", "halt": 11, "a_day": 0, "arrival_delay": 37, "platform_number": 1, "station_lat": 27.154553, "station_lng": 81.978092, "stoppage_number": 29, "non_stops": [{ "si_no": 95, "station_code": "GDK", "station_name": "GONDA KACHAHRI", "is_diverted_station": false, "distance_from_source": 571, "sta": "", "std": "" }, { "si_no": 96, "station_code": "KTHL", "station_name": "KATHOLA", "is_diverted_station": false, "distance_from_source": 577, "sta": "", "std": "" }, { "si_no": 97, "station_code": "MIR", "station_name": "MAIJAPUR", "is_diverted_station": false, "distance_from_source": 584, "sta": "", "std": "" }, { "si_no": 98, "station_code": "KSR", "station_name": "KASTURI", "is_diverted_station": false, "distance_from_source": 589, "sta": "", "std": "" }] }, { "si_no": 99, "station_code": "CLJ", "station_name": "COLONELGANJ", "is_diverted_station": false, "distance_from_source": 595, "sta": "21:06", "std": "21:08", "eta": "21:56", "etd": "21:58", "halt": 2, "a_day": 0, "arrival_delay": 50, "platform_number": 1, "station_lat": 27.137598, "station_lng": 81.694078, "stoppage_number": 30, "non_stops": [{ "si_no": 100, "station_code": "SUJ", "station_name": "SARJU", "is_diverted_station": false, "distance_from_source": 601, "sta": "", "std": "" }] }, { "si_no": 101, "station_code": "JLD", "station_name": "JARWAL ROAD", "is_diverted_station": false, "distance_from_source": 612, "sta": "21:24", "std": "21:26", "eta": "22:16", "etd": "22:18", "halt": 2, "a_day": 0, "arrival_delay": 52, "platform_number": 1, "station_lat": 27.120639, "station_lng": 81.540656, "stoppage_number": 31, "non_stops": [{ "si_no": 102, "station_code": "GHT", "station_name": "GHAGHARA GHAT", "is_diverted_station": false, "distance_from_source": 616, "sta": "", "std": "" }, { "si_no": 103, "station_code": "CKG", "station_name": "CHOWKA GHAT", "is_diverted_station": false, "distance_from_source": 621, "sta": "", "std": "" }] }, { "si_no": 104, "station_code": "BUW", "station_name": "BURHWAL", "is_diverted_station": false, "distance_from_source": 627, "sta": "21:44", "std": "21:46", "eta": "22:44", "etd": "22:49", "halt": 5, "a_day": 0, "arrival_delay": 60, "platform_number": 1, "station_lat": 27.086601, "station_lng": 81.38968, "stoppage_number": 32, "non_stops": [{ "si_no": 105, "station_code": "BUR", "station_name": "BINDAURA", "is_diverted_station": false, "distance_from_source": 637, "sta": "", "std": "" }, { "si_no": 106, "station_code": "RFR", "station_name": "RAFINAGAR", "is_diverted_station": false, "distance_from_source": 643, "sta": "", "std": "" }, { "si_no": 107, "station_code": "JBR", "station_name": "JAHANGIRABAD ROAD", "is_diverted_station": false, "distance_from_source": 647, "sta": "", "std": "" }] }, { "si_no": 108, "station_code": "BBK", "station_name": "BARABANKI JN", "is_diverted_station": false, "distance_from_source": 655, "sta": "22:33", "std": "22:35", "eta": "23:13", "etd": "23:15", "halt": 2, "a_day": 0, "arrival_delay": 40, "platform_number": 2, "station_lat": 26.935385, "station_lng": 81.18109, "stoppage_number": 33, "non_stops": [{ "si_no": 109, "station_code": "SFH", "station_name": "SAFEDABAD", "is_diverted_station": false, "distance_from_source": 662, "sta": "", "std": "" }, { "si_no": 110, "station_code": "JRR", "station_name": "JUGAUR", "is_diverted_station": false, "distance_from_source": 666, "sta": "", "std": "" }, { "si_no": 111, "station_code": "ML", "station_name": "MALHOUR", "is_diverted_station": false, "distance_from_source": 671, "sta": "", "std": "" }] }], "current_location_info": [{ "type": 1, "deeplink": "", "img_url": "", "label": "As of 3 mins ago", "message": "Departed from GOMATI NAGAR~ at 23:47", "readable_message": "Departed from gomati nagar at 23:47", "hint": "Delay 40m" }, { "type": 4, "deeplink": "", "img_url": "", "label": "As of 3 mins ago", "message": "4 kms ahead of GOMATI NAGAR~", "readable_message": "4 kilometers ahead of gomati nagar", "hint": "Travelling West" }], "spent_time": 0.8526 } }