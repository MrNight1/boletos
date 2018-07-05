import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';

export interface Rango {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  selectedValue = 'Centro de negocios';
  isLinear = true;
  firstFormGroup: FormGroup;

  rangos: Rango[] = [
    {value: 'Centro de negocios'       , viewValue: 'Centro de negocios'       },
    {value: 'Participante'             , viewValue: 'Participante'             },
    {value: 'Creyente'                 , viewValue: 'Creyente'                 },
    {value: 'Constructor'              , viewValue: 'Constructor'              },
    {value: 'Triunfador'               , viewValue: 'Triunfador'               },
    {value: 'Lider'                    , viewValue: 'Líder'                    },
    {value: 'Lider Bronce'             , viewValue: 'Líder Bronce'             },
    {value: 'Lider Plata'              , viewValue: 'Líder Plata'              },
    {value: 'Lider Oro'                , viewValue: 'Líder Oro'                },
    {value: 'Lider Oro Ejecutivo'      , viewValue: 'Líder Oro Ejecutivo'      },
    {value: 'Lider Rubi'               , viewValue: 'Líder Rubí'               },
    {value: 'Lider Rubi Ejecutivo'     , viewValue: 'Líder Rubí Ejecutivo'     },
    {value: 'Lider Esmeralda'          , viewValue: 'Líder Esmeralda'          },
    {value: 'Lider Esmeralda Ejecutivo', viewValue: 'Líder Esmeralda Ejecutivo'},
    {value: 'Lider Diamante'           , viewValue: 'Líder Diamante'           },
    {value: 'Lider Diamante Ejecutivo' , viewValue: 'Líder Diamante Ejecutivo' }
  ];

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      idCtrl: ['', Validators.required],
      rangoCtrl: ['', Validators.required]
    });
  }

  loginGoogle() {

  }

}
