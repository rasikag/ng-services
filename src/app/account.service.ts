import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable({providedIn: 'root',})
export class AccountService {

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor(private loggerSerice: LoggingService) {

  }

  addAcount(name: string, status: string) {
    this.accounts.push({name: name, status: status });
    this.loggerSerice.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggerSerice.logStatusChange(status);
  }
}
