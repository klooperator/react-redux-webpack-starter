import {
SET_FORM_TYPE,
SET_FORM_VALUES,
CLEAR_FORMS,
FORM_LOGIN,
FORM_FORGOT,
FORM_REGISTER,
} from './global-constants'


/*
  /$$$$$$                                           
 /$$__  $$                                          
| $$  \__//$$$$$$   /$$$$$$  /$$$$$$/$$$$   /$$$$$$$
| $$$$   /$$__  $$ /$$__  $$| $$_  $$_  $$ /$$_____/
| $$_/  | $$  \ $$| $$  \__/| $$ \ $$ \ $$|  $$$$$$ 
| $$    | $$  | $$| $$      | $$ | $$ | $$ \____  $$
| $$    |  $$$$$$/| $$      | $$ | $$ | $$ /$$$$$$$/
|__/     \______/ |__/      |__/ |__/ |__/|_______/ 
                                                   */
export function setFormType(formType){
    return {
        type: SET_FORM_TYPE,
        value: formType
    }
}

export function setFormValues(values){
    return {
        type: SET_FORM_VALUES,
        value: values
    }
}