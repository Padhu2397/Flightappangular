import { Timestamp } from "rxjs"

export class Ticket{
   public pnr!: any;
   public   meal!: any;  

   public  airlineName!: any;
   public  emailId!: any;
   public  endTimeStamp!: Timestamp<Date>;
   public flightNo!: any;
   public  fromPlace!: any;

   public   startTimeStamp!: Timestamp<Date>; 
   public   ticketCost!: any; 
   public   toPlace!: any;
   public   totalCost!: any; 
   public   totalSeat!: any;
   public   userName!: any
}