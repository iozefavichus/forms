const INITIAL_STATE = {
  nameErrMsg: '1',
  ageErrMsg: '2',
  emailErrMsg: '3',
  passErrMsg: '4',
  passRepeatErrMsg: '5',
  genderErrMsg: '6',
  acceptErrMsg: '7',
  fileErrMsg: '',
  countryErrMsg: '9',
};

const REG_EX = {
  email:/^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$/,
  password: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/,
}

interface IValidateFromProps {
  name: string | undefined;
  age: number | undefined;
  email: string | undefined;
  password: string | undefined;
  passwordRepeat: string | undefined;
  male: boolean | undefined;
  female: boolean | undefined;
  accept: boolean | undefined;
  files: FileList | undefined | null;
  country: string | undefined;
}


const validateName = (text: string | undefined) => {
  if (!text) return 'Name is a required field';
  if (
    text[0] !== text[0].toUpperCase()
  )
    return 'Name must start with uppercase letter';
  return '';
};

const validateAge = (age: number | undefined) => {
    if (!age) return 'Age is required field';
    if (age < 0) return 'Age should be a positive number';
    return '';
  };

const validateEmail = (email: string | undefined) => {
    if (!email) return 'Email is required field';
    if (!REG_EX.email.test(email)) return 'Email should be like xxx@xxx.xxx';
    return '';
  };

const validatePass = (password: string | undefined) => {
    if (!password) return 'Password is required field';
    if (!REG_EX.password.test(password)) return 'Password should contains: 1 number, 1 uppercased letter, 1 lowercased letter, 1 special character';
    return '';
  };

const validatePassRepeat = (password: string | undefined, mainpassword: string | undefined) => {
    if (!password) return 'Repeat password is required field';
    if (!(password == mainpassword)) return 'Passwords do not match'
    return '';
  };

const validateGender = (male: boolean | undefined, female: boolean | undefined) => {
  if (male === female) return 'Gender should be selected ';
  return '';
};

const validateAccept = (checkbox: boolean | undefined) => {
  if (!checkbox) return 'Checkbox should be checked';
  return '';
};

const validateCountry = (selectValue: string | undefined) => {
  if (!selectValue) return 'Country should be selected';
  return '';
};

const validateFile = (files: FileList | undefined | null) => {
  if (!files || files.length === 0) return 'Must pick file';
  if (!((files[0].type == 'image/jpg')||(files[0].type == 'image/png')||(files[0].type == 'image/jpeg'))) return 'The file should be image(png,jpg,jpeg)';
  if (files[0].size > 102400) return 'The file should be less than 100Kb'
  return '';
};

const validateForm = (validateData: IValidateFromProps) => {
  const errorMsgs = {
    ...INITIAL_STATE,
    nameErrMsg: validateName(validateData.name),
    ageErrMsg: validateAge(validateData.age),
    emailErrMsg: validateEmail(validateData.email),
    passErrMsg: validatePass(validateData.password),
    passRepeatErrMsg: validatePassRepeat(validateData.passwordRepeat, validateData.password),
    genderErrMsg: validateGender(validateData.male, validateData.female),
    acceptErrMsg: validateAccept(validateData.accept),
    fileErrMsg: validateFile(validateData.files),
    countryErrMsg: validateCountry(validateData.country),
  };
  const valid =
    !errorMsgs.nameErrMsg &&
    !errorMsgs.ageErrMsg &&
    !errorMsgs.emailErrMsg &&
    !errorMsgs.passErrMsg &&
    !errorMsgs.passRepeatErrMsg &&
    !errorMsgs.genderErrMsg &&
    !errorMsgs.acceptErrMsg &&
    !errorMsgs.fileErrMsg &&
    !errorMsgs.countryErrMsg
  return { valid, errorMsgs };
};

export default validateForm;