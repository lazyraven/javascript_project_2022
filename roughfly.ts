import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { LookupValues, Modal } from 'src/app/SSCommon/models/filterConst';
import { GlobalService } from 'src/app/SSCommon/services/global.service';
import { WorkbookService } from 'src/app/SSCommon/services/workbook-service/workbook.service';
import { WorkscopeService } from 'src/app/SSCommon/services/master-workscope/workscope.service';
import * as _ from 'lodash';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { DateFormat } from 'src/app/SSCommon/Utility/util';
import { Subscription } from 'rxjs';
import { SharedServiceService } from 'src/app/services/shared-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarUtils } from '../../../snackbar/snackbar-utils';
import { environment } from 'src/environments/environment';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-create-routerscrope',
  templateUrl: './create-routerscrope.component.html',
  styleUrls: ['./create-routerscrope.component.scss'],
})
export class CreateRouterscropeComponent implements OnInit, OnDestroy {
  constructor(
    private sharedService: SharedServiceService,
    private _snackBar: MatSnackBar,
    private modal: NzModalService,
    private router: Router
  ) {}
  private BASE_URL = environment.BASE_URL;
  private api = environment.api;

  getAllLookupValue: any;
  isVisible: false;
  productConfigLst = [];
  isVisibleCustomerModal: boolean = false;
  isVisibleCPMModal: boolean = false;
  userInfo = null;
  otherCustomer = {
    customerId: 0,
    name: '',
    email: '',
    customerType: 'Customer',
  };
  otherCpm = {
    customerId: 0,
    name: '',
    email: '',
    role: '',
    customerType: 'CPM',
  };

  rsData = {
    routerScopeId: null,
    projectNo: '',
    esn: '',
    prodType: { prodTypeId: '' },
    productLine: { productLineId: '' },
    prodConfig: { prodConfigId: '' },
    customer: { customerId: '' },
    channel: { channelId: '' },
    contractType: { contractTypeId: '' },
    cpm: { customerId: '' },
    cfm: { customerId: '' },
    engineer: { customerId: '' },
    ptType: { ptTypeId: '' },
    fuelSystemType: { fuelSystemTypeId: '' },
    hpcrType: { hpcrTypeId: '' },
    hsType: { hsTypeId: '' },
    sprintType: { sprintTypeId: '' },
  };
  pageHeaderText = 'Create';
  savedLookupValue: any;
  filterFuelSystemTypeOptions:any = []
  filterPtTypeOptions:any = []
  // visibleDropDown:boolean = false;
  lm2500qmRes:any;
  lm6000qmRes:any;

  filterContractTypeOptions:any = [];
  visibleSprintDropDown:boolean = false;
  filterSpringTypeOptions:any = []
  filterHsTypeOptions:any = [];
  filterHpcrTypeOptions:any = [];
  filterChannelOptions:any = [];

  ngOnInit(): void {
    // let url = `${this.BASE_URL}${this.api.QUESTION_MATRIX}`;
    let url = `${this.api.QUESTION_MATRIX}`;
    this.sharedService.httpGet(url).subscribe((res) => {
      console.log("QUESTION_MATRIX res", res);
      this.lm2500qmRes =  res;
    });

    let urlLm6000 = `${this.api.QUESTION_MATRIX_LM6000}`;
    this.sharedService.httpGet(urlLm6000).subscribe((res) => {
      console.log("QUESTION_MATRIX res Lm6000", res);
      this.lm6000qmRes =  res;
    });

    this.getLookupValues();
    this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    this.toggleSprintType();
  }

  getLookupValues() {
    this.savedLookupValue = JSON.parse(localStorage.getItem('lookupValues'));
    console.log(this.savedLookupValue);
    if (!this.savedLookupValue) {
      let url = `${this.BASE_URL}${this.api.master_task.GET_LOOKUP_VALUES}`;
      let queryParams = ``;
      const fullUrl = `${url}?${queryParams}`;
      this.sharedService.httpGet(fullUrl).subscribe((res) => {
        localStorage.setItem('lookupValues', JSON.stringify(res));
        this.getAllLookupValue = res.data;
        console.log("getLookupValues", this.getAllLookupValue);
      });
    } else {
      this.getAllLookupValue = this.savedLookupValue.data;
    }
    this.masterLookUpOptions();
  }

  changeProductLine(event) {
    this.rsData.prodConfig.prodConfigId = '';
    this.productConfigLst = this.getAllLookupValue.ProductLineOptions.find(
      (i) => i.productLineId == this.rsData.productLine.productLineId
    ).config.map((i) => {
      return {
        id: i.mstrProductConfiguration.prodConfigId,
        value: i.mstrProductConfiguration.productConfigName,
      };
    });
    // this.toggleDropDowns();
    this.toggleSprintType();
    this.masterLookUpOptions();
  }

  createRouterScope(): void {
    if (
      !this.rsData.projectNo ||
      !this.rsData.esn ||
      !this.rsData.prodType.prodTypeId ||
      !this.rsData.prodType.prodTypeId ||
      !this.rsData.prodConfig.prodConfigId ||
      !this.rsData.customer.customerId ||
      !this.rsData.channel.channelId ||
      !this.rsData.contractType.contractTypeId ||
      !this.rsData.cpm.customerId ||
      !this.rsData.cfm.customerId ||
      !this.rsData.engineer.customerId ||
      !this.rsData.hpcrType.hpcrTypeId ||
      !this.rsData.fuelSystemType.fuelSystemTypeId ||
      !this.rsData.ptType.ptTypeId
    ) {
      SnackBarUtils.customWarningMessage(
        this._snackBar,
        'Please fill all the required fields!'
      );
      return;
    } else {
      if (
        (this.rsData.prodType.prodTypeId == '1' &&
          !this.rsData.hsType.hsTypeId) ||
        (this.rsData.prodType.prodTypeId == '2' && !this.rsData.sprintType)
      ) {
        SnackBarUtils.customWarningMessage(
          this._snackBar,
          'Please fill all the required fields!'
        );
        return;
      }

      let url = `${this.BASE_URL}${this.api.router_scope.CREATE_ROUTER_SCOPE}`;
      const fullUrl = `${url}`;
      this.sharedService
        .httpPost(fullUrl, this.rsData)
        .subscribe((res: any) => {
          console.log(res);
          if (res.error == true) {
            SnackBarUtils.customErrorMessage(this._snackBar, res.message);
          } else {
            SnackBarUtils.customSuccessMessage(this._snackBar, res.message);
            this.router.navigate(['/edit-router-scope'], {
              queryParams: { routerScopeId: res.data.routerScopeId },
            });
          }
        });
    }
  }

  openNewCustomerModal(value): void {
    this.rsData.customer.customerId = value;
    this.isVisibleCustomerModal =
      this.rsData.customer.customerId == 'others' ? true : false;
  }
  addNewCustomer(): void {
    this.otherCustomer = {
      customerId: 0,
      name: this.otherCustomer.name,
      email: this.otherCustomer.email,
      customerType: 'Customer',
    };
    if (this.rsData.channel.channelId) {
      this.otherCustomer['channelId'] = Number(this.rsData.channel.channelId);
    }
    if (!this.otherCustomer.name || !this.otherCustomer.email) {
      SnackBarUtils.customWarningMessage(
        this._snackBar,
        'Please fill all the required fields!'
      );
      return;
    }
    if (!this.ValidateEmail(this.otherCustomer.email)) return;

    let url = `${this.BASE_URL}${this.api.router_scope.ROUTER_SCOPE_CUSTOMER_ADD}`;
    this.sharedService
      .httpPost(url, this.otherCustomer)
      .subscribe((res: any) => {
        // let url = `${this.BASE_URL}${this.api.master_task.GET_LOOKUP_VALUES}`;
        // this.sharedService.httpGet(url).subscribe((res: any) => {
        if (res.error) {
          SnackBarUtils.customErrorMessage(this._snackBar, res.message);
        } else {
          SnackBarUtils.customSuccessMessage(this._snackBar, res.message);
          // this.otherCustomer.customerId=999;  // replace with api resp
          this.otherCustomer.customerId = res.data.customerId;
          this.getAllLookupValue.CustomerOptions.push(this.otherCustomer);

          this.rsData.customer.customerId = this.otherCustomer.customerId.toString();
          this.isVisibleCustomerModal = false;
        }
      });
  }
  cancelCustomerModel(): void {
    this.rsData.customer.customerId = '';
    this.isVisibleCustomerModal = false;
  }

  handleEngineer(selEngineer): void {
    const engineerData = this.getAllLookupValue.EngineerOptions.find(
      (elem) => elem.customerId == selEngineer
    );
    const fullName = `${this.userInfo.firstName} ${this.userInfo.lastName}`;
    if (this.userInfo.email !== engineerData.email) {
      setTimeout(() => {
        this.modal.info({
          nzContent:
            '<p>You have selected a different Engineer from yourself, do you want to continue? We will send a notification email to Engineer</p>',
          nzOnOk: () => {},
          nzOnCancel: () => {
            this.rsData.engineer.customerId = null;
          },
        });
      }, 500);
    }
  }

  openNewCPMModal(value): void {
    this.isVisibleCPMModal = value == 'others' ? true : false;
  }
  addNewCpm(): void {
    this.otherCpm = {
      customerId: 0,
      name: this.otherCpm.name,
      email: this.otherCpm.email,
      role: this.otherCpm.role,
      customerType: 'CPM',
    };
    if (this.rsData.channel.channelId) {
      this.otherCpm['channelId'] = Number(this.rsData.channel.channelId);
    }
    // if (!this.otherCpm.name || !this.ValidateEmail(this.otherCpm.role) || !this.otherCpm.email) {
    if (
      !this.otherCpm.name ||
      !this.otherCpm.role ||
      !this.ValidateEmail(this.otherCpm.email)
    ) {
      SnackBarUtils.customWarningMessage(
        this._snackBar,
        'Please fill all the required fields!'
      );
      return;
    }

    //let url = `${this.BASE_URL}${this.api.router_scope.ROUTER_SCOPE_CPM_ADD}`;
    let url = `${this.BASE_URL}${this.api.router_scope.ROUTER_SCOPE_CUSTOMER_ADD}`;
    this.sharedService.httpPost(url, this.otherCpm).subscribe((res: any) => {
      // let url = `${this.BASE_URL}${this.api.master_task.GET_LOOKUP_VALUES}`;
      // this.sharedService.httpGet(url).subscribe((res: any) => {
      if (res.error) {
        SnackBarUtils.customErrorMessage(this._snackBar, res.message);
      } else {
        SnackBarUtils.customSuccessMessage(this._snackBar, res.message);
        // this.otherCpm.customerId=999;  // replace with api resp
        this.otherCpm.customerId = res.data.customerId;

        this.getAllLookupValue.CpmOptions.push(this.otherCpm);

        this.rsData.cpm.customerId = this.otherCpm.customerId.toString();
        this.isVisibleCPMModal = false;
      }
    });
  }

  cancelCpmModel(): void {
    this.rsData.cpm.customerId = '';
    this.isVisibleCPMModal = false;
  }

  ValidateEmail(email): boolean {
    let flag = true;
    var mailformat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.match(mailformat)) {
      SnackBarUtils.customWarningMessage(
        this._snackBar,
        'Please enter valid email address'
      );
      flag = false;
    }
    return flag;
  }

  changeProductConfig(event) {
    const filterFuelArray = [];
    const filterPtTypeArray = [];
    const filterContractTypeArray = [];
    const filterChannelOptionsArray = [];
    const filterHpcrTypeOptionsArray = [];
    const filterHsTypeOptionsArray = [];

    this.rsData.prodType.prodTypeId = "";
    this.rsData.channel.channelId = "";
    this.rsData.contractType.contractTypeId = "";
    this.rsData.fuelSystemType.fuelSystemTypeId = "";
    this.rsData.ptType.ptTypeId = "";
    this.rsData.hpcrType.hpcrTypeId = "";
    this.rsData.hsType.hsTypeId = "";
    this.rsData.sprintType.sprintTypeId = ""

    const qmProdConfigOptionsId = this.lm2500qmRes.ProductConfig[event];
    const { FuelSystemTypeOptions: fuelSystemMasterOptions,
       PtTypeOptions: ptTypeMasterOptions,
       ContractTypeOptions: contractMasterOptions,
       ChannelOptions:channelMasterOptions,
       HpcrTypeOptions:hpcrMasterOptions,
       HsTypeOptions:hsTypeMasterOptions
      } = this.getAllLookupValue;

    console.log("getAllLookupValue records", this.getAllLookupValue);
    if (this.rsData.productLine.productLineId == '1') {
        fuelSystemMasterOptions.forEach((fuelRec) => {
          if (!qmProdConfigOptionsId.FuelSystemTypeOptions.includes(fuelRec.fuelSystemTypeId)) {
            filterFuelArray.push(fuelRec);
          }
        })
        this.filterFuelSystemTypeOptions = [...filterFuelArray];

        ptTypeMasterOptions.forEach((ptTypeRec) => {
          if (!qmProdConfigOptionsId.PtTypeOptions.includes(ptTypeRec.ptTypeId)) {
            filterPtTypeArray.push(ptTypeRec);
          }
        })
        this.filterPtTypeOptions = [...filterPtTypeArray];

        contractMasterOptions.forEach((contractTypeRec) => {
          if (!qmProdConfigOptionsId.ContractTypeOptions.includes(contractTypeRec.contractTypeId)) {
            filterContractTypeArray.push(contractTypeRec);
          }
        })
        this.filterContractTypeOptions = [...filterContractTypeArray];

        channelMasterOptions.forEach((channelRec) => {
          if (!qmProdConfigOptionsId.ChannelOptions.includes(channelRec.channelId)) {
            filterChannelOptionsArray.push(channelRec);
          }
        })
        this.filterChannelOptions = [...filterChannelOptionsArray];

          hpcrMasterOptions.forEach((hpcrRec) => {
            if (!qmProdConfigOptionsId.HpcrTypeOptions.includes(hpcrRec.hpcrTypeId)) {
              filterHpcrTypeOptionsArray.push(hpcrRec);
            }
          })
        this.filterHpcrTypeOptions = [...filterHpcrTypeOptionsArray];

        if (qmProdConfigOptionsId.HsTypeOptions.length != hsTypeMasterOptions.length) {
          hsTypeMasterOptions.forEach((hsRec) => {
            if (!qmProdConfigOptionsId.HsTypeOptions.includes(hsRec.hsTypeId)) {
              filterHsTypeOptionsArray.push(hsRec);
            }
          })
        }
        this.filterHsTypeOptions = [...filterHsTypeOptionsArray];
    } else {
      this.masterLookUpOptions();
    }
  }

  changeProductType(event){
    const filterFuelArray = [];
    const filterPtTypeArray = [];
    const filterContractTypeArray = [];
    const filterChannelOptionsArray = [];
    const filterHpcrTypeOptionsArray = [];
    const filterHsTypeOptionsArray = [];

    this.rsData.channel.channelId = "";
    this.rsData.contractType.contractTypeId = ""
    this.rsData.fuelSystemType.fuelSystemTypeId = "";
    this.rsData.ptType.ptTypeId = "";
    this.rsData.hsType.hsTypeId = "";
    this.rsData.hpcrType.hpcrTypeId = "";

    const qmPtTypeOptionId = this.lm2500qmRes.ProductTypeOptions[event];

    const { FuelSystemTypeOptions: fuelSystemMasterOptions,
      PtTypeOptions: ptTypeMasterOptions,
      ContractTypeOptions: contractMasterOptions,
      ChannelOptions:channelMasterOptions,
      HpcrTypeOptions:hpcrMasterOptions,
      HsTypeOptions:hsTypeMasterOptions
     } = this.getAllLookupValue;

    if (this.rsData.productLine.productLineId == '1') {

      fuelSystemMasterOptions.forEach((fuelRec) => {
        if (!qmPtTypeOptionId.FuelSystemTypeOptions.includes(fuelRec.fuelSystemTypeId)) {
          filterFuelArray.push(fuelRec);
        }
      })
      this.filterFuelSystemTypeOptions = [...filterFuelArray];

      ptTypeMasterOptions.forEach((ptTypeRec) => {
        if (!qmPtTypeOptionId.PtTypeOptions.includes(ptTypeRec.ptTypeId)) {
          filterPtTypeArray.push(ptTypeRec);
        }
      })
      this.filterPtTypeOptions = [...filterPtTypeArray];

      contractMasterOptions.forEach((contractTypeRec) => {
        if (!qmPtTypeOptionId.ContractTypeOptions.includes(contractTypeRec.contractTypeId)) {
          filterContractTypeArray.push(contractTypeRec);
        }
      })
      this.filterContractTypeOptions = [...filterContractTypeArray];

      channelMasterOptions.forEach((channelRec) => {
        if (!qmPtTypeOptionId.ChannelOptions.includes(channelRec.channelId)) {
          filterChannelOptionsArray.push(channelRec);
        }
      })
      this.filterChannelOptions = [...filterChannelOptionsArray];

      hpcrMasterOptions.forEach((hpcrRec) => {
        if (!qmPtTypeOptionId.HpcrTypeOptions.includes(hpcrRec.hpcrTypeId)) {
          filterHpcrTypeOptionsArray.push(hpcrRec);
        }
      })
      this.filterHpcrTypeOptions = [...filterHpcrTypeOptionsArray];

      if (qmPtTypeOptionId.HsTypeOptions.length != hsTypeMasterOptions.length) {
        hsTypeMasterOptions.forEach((hsRec) => {
          if (!qmPtTypeOptionId.HsTypeOptions.includes(hsRec.hsTypeId)) {
            filterHsTypeOptionsArray.push(hsRec);
          }
        })
      }
      this.filterHsTypeOptions = [...filterHsTypeOptionsArray];
    } else {
      this.masterLookUpOptions()
    }
  }

  changeChannelOptions(event) {
    const filterFuelArray = [];
    const filterPtTypeArray = [];
    const filterContractTypeArray = [];
    const filterHpcrTypeOptionsArray = [];
    const filterHsTypeOptionsArray = [];

    this.rsData.contractType.contractTypeId = ""
    this.rsData.fuelSystemType.fuelSystemTypeId = "";
    this.rsData.ptType.ptTypeId = "";
    this.rsData.hsType.hsTypeId = "";
    this.rsData.hpcrType.hpcrTypeId = "";
    
    const qmChannelOptionId = this.lm2500qmRes.ChannelOptions[event];

    const { FuelSystemTypeOptions: fuelSystemMasterOptions,
      PtTypeOptions: ptTypeMasterOptions,
      ContractTypeOptions: contractMasterOptions,
      ChannelOptions:channelMasterOptions,
      HpcrTypeOptions:hpcrMasterOptions,
      HsTypeOptions:hsTypeMasterOptions
     } = this.getAllLookupValue;

    if (this.rsData.productLine.productLineId == '1') {

      fuelSystemMasterOptions.forEach((fuelRec) => {
        if (!qmChannelOptionId.FuelSystemTypeOptions.includes(fuelRec.fuelSystemTypeId)) {
          filterFuelArray.push(fuelRec);
        }
      })
      this.filterFuelSystemTypeOptions = [...filterFuelArray];

      ptTypeMasterOptions.forEach((ptTypeRec) => {
        if (!qmChannelOptionId.PtTypeOptions.includes(ptTypeRec.ptTypeId)) {
          filterPtTypeArray.push(ptTypeRec);
        }
      })
      this.filterPtTypeOptions = [...filterPtTypeArray];

      contractMasterOptions.forEach((contractTypeRec) => {
        if (!qmChannelOptionId.ContractTypeOptions.includes(contractTypeRec.contractTypeId)) {
          filterContractTypeArray.push(contractTypeRec);
        }
      })
      this.filterContractTypeOptions = [...filterContractTypeArray];

      hpcrMasterOptions.forEach((hpcrRec) => {
        if (!qmChannelOptionId.HpcrTypeOptions.includes(hpcrRec.hpcrTypeId)) {
          filterHpcrTypeOptionsArray.push(hpcrRec);
        }
      })
      this.filterHpcrTypeOptions = [...filterHpcrTypeOptionsArray];

      if (qmChannelOptionId.HsTypeOptions.length != hsTypeMasterOptions.length) {
        hsTypeMasterOptions.forEach((hsRec) => {
          if (!qmChannelOptionId.HsTypeOptions.includes(hsRec.hsTypeId)) {
            filterHsTypeOptionsArray.push(hsRec);
          }
        })
      }
      this.filterHsTypeOptions = [...filterHsTypeOptionsArray];

    } else {
      this.masterLookUpOptions();
    }
  }

  changeContractOptions(event) {
    const filterFuelArray = [];
    const filterPtTypeArray = [];
    const filterHpcrTypeOptionsArray = [];
    const filterHsTypeOptionsArray = [];

    this.rsData.fuelSystemType.fuelSystemTypeId = "";
    this.rsData.ptType.ptTypeId = "";
    this.rsData.hsType.hsTypeId = "";
    this.rsData.hpcrType.hpcrTypeId = "";

    const qmContractOptionId = this.lm2500qmRes.ContractTypeOptions[event];

    const { FuelSystemTypeOptions: fuelSystemMasterOptions,
      PtTypeOptions: ptTypeMasterOptions,
      HpcrTypeOptions:hpcrMasterOptions,
      HsTypeOptions:hsTypeMasterOptions
     } = this.getAllLookupValue;

    if (this.rsData.productLine.productLineId == '1') {
      fuelSystemMasterOptions.forEach((fuelRec) => {
        if (!qmContractOptionId.FuelSystemTypeOptions.includes(fuelRec.fuelSystemTypeId)) {
          filterFuelArray.push(fuelRec);
        }
      })
      this.filterFuelSystemTypeOptions = [...filterFuelArray];

      ptTypeMasterOptions.forEach((ptTypeRec) => {
        if (!qmContractOptionId.PtTypeOptions.includes(ptTypeRec.ptTypeId)) {
          filterPtTypeArray.push(ptTypeRec);
        }
      })
      this.filterPtTypeOptions = [...filterPtTypeArray];

      hpcrMasterOptions.forEach((hpcrRec) => {
        if (!qmContractOptionId.HpcrTypeOptions.includes(hpcrRec.hpcrTypeId)) {
          filterHpcrTypeOptionsArray.push(hpcrRec);
        }
      })
      this.filterHpcrTypeOptions = [...filterHpcrTypeOptionsArray];

      if (qmContractOptionId.HsTypeOptions.length != hsTypeMasterOptions.length) {
        hsTypeMasterOptions.forEach((hsRec) => {
          if (!qmContractOptionId.HsTypeOptions.includes(hsRec.hsTypeId)) {
            filterHsTypeOptionsArray.push(hsRec);
          }
        })
      }
      this.filterHsTypeOptions = [...filterHsTypeOptionsArray];
    } else {
      this.masterLookUpOptions();
    }
  }

  changePtTypeOptions(event) {
    const filterFuelArray = [];
    const filterHpcrTypeOptionsArray = [];
    const filterHsTypeOptionsArray = [];

    this.rsData.fuelSystemType.fuelSystemTypeId = "";
    this.rsData.hsType.hsTypeId = "";
    this.rsData.hpcrType.hpcrTypeId = "";
    const qmPtTypeOptionId = this.lm2500qmRes.PtTypeOptions[event];

    const { FuelSystemTypeOptions: fuelSystemMasterOptions,
      HpcrTypeOptions:hpcrMasterOptions,
      HsTypeOptions:hsTypeMasterOptions
     } = this.getAllLookupValue;

    if (this.rsData.productLine.productLineId == '1') {
      fuelSystemMasterOptions.forEach((fuelRec) => {
        if (!qmPtTypeOptionId.FuelSystemTypeOptions.includes(fuelRec.fuelSystemTypeId)) {
          filterFuelArray.push(fuelRec);
        }
      })
      this.filterFuelSystemTypeOptions = [...filterFuelArray];

      hpcrMasterOptions.forEach((hpcrRec) => {
        if (!qmPtTypeOptionId.HpcrTypeOptions.includes(hpcrRec.hpcrTypeId)) {
          filterHpcrTypeOptionsArray.push(hpcrRec);
        }
      })
      this.filterHpcrTypeOptions = [...filterHpcrTypeOptionsArray];

      if (qmPtTypeOptionId.HsTypeOptions.length != hsTypeMasterOptions.length) {
        hsTypeMasterOptions.forEach((hsRec) => {
          if (!qmPtTypeOptionId.HsTypeOptions.includes(hsRec.hsTypeId)) {
            filterHsTypeOptionsArray.push(hsRec);
          }
        })
      }
      this.filterHsTypeOptions = [...filterHsTypeOptionsArray];
    } else {
      this.masterLookUpOptions();
    }
  }

  changeFuelSysOptions(event) {
    const filterHpcrTypeOptionsArray = [];
    const filterHsTypeOptionsArray = [];
    this.rsData.hsType.hsTypeId = "";
    this.rsData.hpcrType.hpcrTypeId = "";

    const qmFuelOptionId = this.lm2500qmRes.FuelSystemType[event];
    const { HpcrTypeOptions:hpcrMasterOptions,
      HsTypeOptions:hsTypeMasterOptions
     } = this.getAllLookupValue;

    if (this.rsData.productLine.productLineId == '1') {
      hpcrMasterOptions.forEach((hpcrRec) => {
        if (!qmFuelOptionId.HpcrTypeOptions.includes(hpcrRec.hpcrTypeId)) {
          filterHpcrTypeOptionsArray.push(hpcrRec);
        }
      })
      this.filterHpcrTypeOptions = [...filterHpcrTypeOptionsArray];

      if (qmFuelOptionId.HsTypeOptions.length != hsTypeMasterOptions.length) {
        hsTypeMasterOptions.forEach((hsRec) => {
          if (!qmFuelOptionId.HsTypeOptions.includes(hsRec.hsTypeId)) {
            filterHsTypeOptionsArray.push(hsRec);
          }
        })
      }
      this.filterHsTypeOptions = [...filterHsTypeOptionsArray];
    } else {
      this.masterLookUpOptions();
    }
  }

  changeHpcrTypeOptions(event) {
    const filterHsTypeOptionsArray = [];
    this.rsData.hsType.hsTypeId = "";

    const qmHpcrOptionsId = this.lm2500qmRes.HpcrTypeOptions[event];

    const { HsTypeOptions:hsTypeMasterOptions } = this.getAllLookupValue;

    if (this.rsData.productLine.productLineId == '1') {
      if (qmHpcrOptionsId.HsTypeOptions.length != hsTypeMasterOptions.length) {
        hsTypeMasterOptions.forEach((hsRec) => {
          if (!qmHpcrOptionsId.HsTypeOptions.includes(hsRec.hsTypeId)) {
            filterHsTypeOptionsArray.push(hsRec);
          }
        })
      }
      this.filterHsTypeOptions = [...filterHsTypeOptionsArray];
    } else {
      this.masterLookUpOptions();
    }
  }
  // toggleDropDowns() {
  //   if ( this.rsData.prodConfig.prodConfigId == '' ||
  //     this.rsData.prodConfig.prodConfigId == '1' ||
  //     this.rsData.prodConfig.prodConfigId == '2'
  //   ) {
  //     this.visibleDropDown = true;
  //   } else {
  //     this.visibleDropDown = false;
  //   }
  // }

  // toggleProductOption(){
  //   if (this.rsData.prodType.prodTypeId != '3') {
  //     this.visibleDropDown = true;
  //   } else {
  //     this.visibleDropDown = false;
  //   }
  // }

  toggleSprintType(){
    if (this.rsData.productLine.productLineId != '1') {
      this.visibleSprintDropDown = true;
    }else{
      this.visibleSprintDropDown = false;
    }
  }

  masterLookUpOptions(){
    const { FuelSystemTypeOptions: fuelSystemMasterOptions,
      PtTypeOptions: ptTypeMasterOptions,
      ContractTypeOptions: contractMasterOptions,
      ChannelOptions:channelMasterOptions,
      HpcrTypeOptions:hpcrMasterOptions,
      HsTypeOptions:hsTypeMasterOptions
     } = this.getAllLookupValue;

    this.filterFuelSystemTypeOptions = fuelSystemMasterOptions;
    this.filterPtTypeOptions = ptTypeMasterOptions;
    this.filterHsTypeOptions = hsTypeMasterOptions;
    this.filterHpcrTypeOptions = hpcrMasterOptions;
    this.filterContractTypeOptions = contractMasterOptions;
    this.filterChannelOptions = channelMasterOptions;
  }

  createRouterScopeSave(){
    if(this.filterChannelOptions.length !=0) {

    }
    if (
      !this.rsData.projectNo ||
      !this.rsData.esn ||
      !this.rsData.prodType.prodTypeId ||
      !this.rsData.prodType.prodTypeId ||
      !this.rsData.prodConfig.prodConfigId ||
      !this.rsData.customer.customerId ||
      !this.rsData.channel.channelId ||
      !this.rsData.contractType.contractTypeId ||
      !this.rsData.cpm.customerId ||
      !this.rsData.cfm.customerId ||
      !this.rsData.engineer.customerId ||
      !this.rsData.hpcrType.hpcrTypeId ||
      !this.rsData.fuelSystemType.fuelSystemTypeId ||
      !this.rsData.ptType.ptTypeId
    ) {
      SnackBarUtils.customWarningMessage(
        this._snackBar,
        'Please fill all the required fields!'
      );
      return;
    } else {
      if (
        (this.rsData.prodType.prodTypeId == '1' &&
          !this.rsData.hsType.hsTypeId) ||
        (this.rsData.prodType.prodTypeId == '2' && !this.rsData.sprintType)
      ) {
        SnackBarUtils.customWarningMessage(
          this._snackBar,
          'Please fill all the required fields!'
        );
        return;
      }

      let url = `${this.BASE_URL}${this.api.router_scope.CREATE_ROUTER_SCOPE}`;
      const fullUrl = `${url}`;
      this.sharedService
        .httpPost(fullUrl, this.rsData)
        .subscribe((res: any) => {
          console.log(res);
          if (res.error == true) {
            SnackBarUtils.customErrorMessage(this._snackBar, res.message);
          } else {
            SnackBarUtils.customSuccessMessage(this._snackBar, res.message);
            this.router.navigate(['/edit-router-scope'], {
              queryParams: { routerScopeId: res.data.routerScopeId },
            });
          }
        });
    }
  }
  ngOnDestroy(): void {}
}
