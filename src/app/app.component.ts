import { Component, OnInit } from "@angular/core";
import { RestService } from "./rest.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  list: any;

  constructor(private restService: RestService) {}

  ngOnInit(): void {
    this.restService.getHoteis().subscribe((res) => {
      this.list = res;
      console.log(res);

    });
  }
}
