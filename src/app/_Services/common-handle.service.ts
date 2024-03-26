import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { Timeoutsec } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonHandleService {
  constructor(
    private _snackBar: MatSnackBar,
  ) { }
  timeout_arr= [];
  handle_MQTTCommandTimeout(TXNAME: any){
    console.log('%c '+TXNAME+' time out !!', 'color: yellow');
    this._snackBar.open(`${TXNAME} Time out`, 'got it', {
      horizontalPosition: "center",
      verticalPosition: "top",
      panelClass: "snack-bar-danger",
      duration: 3000
    });
  }
  handle_PostCommandResult(commandResult: any, onSuccess?: (() => void) | null) {
    console.log(commandResult)
    if (commandResult.Content.ACK == 'NG') {
      // this._snackBar.open("failed to send command.", 'got it', {
      //   horizontalPosition: "center",
      //   verticalPosition: "top",
      //   panelClass: "snack-bar-danger",
      //   duration: 3000
      // });
      // this._sweetAlarmService.showFailedToSendCommand();
    }
    else {
      if (onSuccess != null) { onSuccess(); }
    }
  }
  handle_MQTTCommandResult(commandResult: any) {
    let txname = commandResult.TXNAME;
    let arr = txname.split('_');
    if (commandResult.CONTENT.ACK == -1) {
      this._snackBar.open(`${txname} 格式錯誤`, 'got it', {
        horizontalPosition: "center",
        verticalPosition: "top",
        panelClass: "snack-bar-danger",
        duration: 3000
      });
    }
    else if(commandResult.CONTENT.ACK == -2){
      this._snackBar.open(`${txname} 命令不在列表內`, 'got it', {
        horizontalPosition: "center",
        verticalPosition: "top",
        panelClass: "snack-bar-danger",
        duration: 3000
      });
    }
    else if (commandResult.CONTENT.ACK == 0){
      if(txname=="SETADDRESS_R"){
        this._snackBar.open(`${txname} Success`, 'got it', {
          horizontalPosition: "center",
          verticalPosition: "top",
          panelClass: "snack-bar-success",
          duration: 3000
        });
      }
    }
  }
  handle_MQTTCommandEvent(commandResult: any) {
    console.log(commandResult)
    let txname = commandResult.TXNAME;
    let arr = txname.split('_');
    if(commandResult.CONTENT.ERRORCODE==0){
      console.log(`%c ${txname} success!`, 'color: green');
    }
    else{
      this._snackBar.open(`error`, 'got it', {
        horizontalPosition: "center",
        verticalPosition: "top",
        panelClass: "snack-bar-danger",
        duration: 3000
      });
      console.log(`%c ${txname} error!`, 'color: red');
    }
  }
}
