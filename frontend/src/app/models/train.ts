
export interface Train {
    train_number: string;
    train_name: string;
    run_days: string[];
    train_src: string;
    train_dstn: string;
    from_std: string;
    from_sta: string  ;
    local_train_from_sta: number;
    to_sta: string;
    to_std: string;
    from_day: number;
    to_day: number;
    d_day: number;
    from: string;
    to: string;
    from_station_name: string;
    to_station_name: string;
    duration: string;
    special_train: boolean;
    train_type: string;
    train_date: string;
    class_type: string[];
    
  }

export interface Seats{
    ticket_fare: number,
    catering_charge: number,
    alt_cnf_seat: string,
    total_fare: number,
    date: Date,
    confirm_probability_percent: string,
    confirm_probability: string,
    current_status: string,
}

export interface Fare{
    general: [
        {
            classType: string,
            fare: number,
            breakup: [
                {
                    title: string,
                    key: string,
                    cost: number
                }
            ]
        }
    ],
    Tatakal: [
        {
            classType: string,
            fare: number,
            breakup: [
                {
                    title: string,
                    key: string,
                    cost: number
                }
            ]
        }
    ]
}

export interface SortOption{
    name: string,
    icon: string
}