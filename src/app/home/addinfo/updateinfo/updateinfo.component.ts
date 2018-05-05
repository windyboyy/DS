import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { EnterService } from '../../../service/enter.service';
@Component({
  selector: 'app-updateinfo',
  templateUrl: './updateinfo.component.html',
  styleUrls: ['./updateinfo.component.css']
})
export class UpdateinfoComponent implements OnInit {

  validateFormUpdate: FormGroup;
  @Input() currentData;
  constructor(private fb: FormBuilder, private enterService: EnterService) {
    this.validateFormUpdate = this.fb.group({
      nameUpdate          : [ '', [ Validators.required ]],
      dynastyUpdate           : [ '' , [ Validators.required ]],
      placeUpdate             : [ '', [ Validators.required ]],
      typeUpdate         : [ '', [ Validators.required ]],
      loadtimeUpdate           : [ '', [ Validators.required ]],
      storagepictureUpdate           : [ '', [ Validators.required ]],
      idUpdate           : [ '', [ Validators.required ]],
      uidUpdate          : [ '', [ Validators.required ]]
    });
   }

  ngOnInit() {
    
  }

  _name = null;
  _dynasty = null;
  _place = null;
  _type = null;
  _loadtime = null;
  _storagepicture = null;
  _id = null;
  _uid = null;//自增字段
  ngOnChanges(changes: SimpleChanges): void {
    if (this.currentData) {
      // console.log("-----" + JSON.stringify(this.currentData));
      // console.log(this.currentData.startTime);
      this._name = this.currentData.name;
      this._dynasty = this.currentData.dynasty;
      this._place = this.currentData.place;
      this._type = this.currentData.type;
      this._loadtime = this.currentData.loadtime;
      this._storagepicture = "http://localhost:8080/"+this.currentData.storagepicture;
      this._id = this.currentData.id;
      this._uid = this.currentData.uid;
      this.getFormControl("nameUpdate").markAsDirty();
      this.getFormControl("dynastyUpdate").markAsDirty();
      this.getFormControl("placeUpdate").markAsDirty();
      this.getFormControl("typeUpdate").markAsDirty();     
    }
  }
  getFormControl(name) {
    return this.validateFormUpdate.controls[ name ];
  }
  confirmFormForParen (){
    for (const key in this.validateFormUpdate.controls) {
      this.validateFormUpdate.controls[ key ].markAsDirty();
    }

    for (const key in this.validateFormUpdate.controls) {
      if (!this.validateFormUpdate.controls[key].valid) {
        return false;
      }
    }
    return true;
  }
  /**
   * 提交表单数据
   * @returns {Observable<Object>}
   */
  submitFormForParent = (id) => {
    
        const params = {
          id : id,
          name : this.validateFormUpdate.controls[ "nameUpdate" ].value,
          dynasty : this.validateFormUpdate.controls[ "dynastyUpdate" ].value,
          place : this.validateFormUpdate.controls[ "placeUpdate" ].value,
          type : this.validateFormUpdate.controls[ "typeUpdate" ].value,
          uid : this.currentData.uid
        };
    
        // this.leaveService.firstCall();
        return this.enterService.updateInfo(params);
    
      }
        /**
   * 重置表单
   */
  resetFormForParent() {
    if (this.currentData) {
      this._name = this.currentData.name;
      this._dynasty = this.currentData.dynasty;
      this._place = this.currentData.place;
      this._type = this.currentData.type;
      this._loadtime = this.currentData.loadtime;
      this._storagepicture = "http://localhost:8080/"+this.currentData.storagepicture;
      this._id = this.currentData.id;
      this._uid = this.currentData.uid;
      this.getFormControl("nameUpdate").markAsDirty();
      this.getFormControl("dynastyUpdate").markAsDirty();
      this.getFormControl("placeUpdate").markAsDirty();
      this.getFormControl("typeUpdate").markAsDirty();  
    }
  }
}