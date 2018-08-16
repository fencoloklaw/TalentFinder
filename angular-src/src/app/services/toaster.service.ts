import {Injectable} from '@angular/core';
import {ToastrConfig, ToastrService} from "ngx-toastr";

@Injectable()
export class ToasterService {

  constructor(private toastr: ToastrService) {

  }

    success(message: string) {
        this.toastr.success(message);
    }
    info(message: string) {
        this.toastr.info(message);
    }
    warning(message: string) {
        this.toastr.warning(message);
    }
    error(message: string) {
        this.toastr.error(message);
    }

}
