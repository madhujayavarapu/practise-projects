import { FormControl } from '@angular/forms';

export function requiredFileType(types: string[]) {
  return function (control: FormControl) {
    const file = control.value;
    if ( file ) {
      const extension = file.name.split('.')[1].toLowerCase();
      let validType = types.indexOf(extension.toLowerCase());
      if(validType == -1) {
        return {
          requiredFileType: false
        };
      }
      return null;
    }
    return null;
  };
}