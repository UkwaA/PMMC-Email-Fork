export class QuantiyFormData {
    AdultQuantity: number;
    Age57Quantity: number;
    Age810Quantity: number;
    Age1112Quantity: number;
    Age1314Quantity: number;
    Age1415Quantity: number;
    Age1517Quantity: number;
    TotalQuantity: number;
    SchedulePK: number;
    SelectedDateStr: string;
    SelectedTimeStr: string;
    Availability: number;

    constructor( AdultQuantity: number,
                Age57Quantity: number,
                Age810Quantity: number,
                Age1112Quantity: number,
                Age1314Quantity: number,
                Age1415Quantity: number,
                Age1517Quantity: number,
                TotalQuantity: number,
                SchedulePK: number,
                SelectedDateStr: string,
                SelectedTimeStr: string,
                Availability: number) {
      this.AdultQuantity = AdultQuantity;
      this.Age57Quantity = Age57Quantity;
      this.Age810Quantity = Age810Quantity;
      this.Age1112Quantity = Age1112Quantity;
      this.Age1314Quantity = Age1314Quantity;
      this.Age1415Quantity = Age1415Quantity;
      this.Age1517Quantity = Age1517Quantity;
      this.TotalQuantity = TotalQuantity;
      this.SchedulePK = SchedulePK;
      this.SelectedDateStr = SelectedDateStr;
      this.SelectedTimeStr = SelectedTimeStr;
      this.Availability = Availability;
    }
  }
  