const INITIAL_STATE = {
  nameErrMsg: '1',
  ageErrMsg: '2',
  emailErrMsg: '3',
  passErrMsg: '4',
  passRepeatErrMsg: '5',
};

interface IValidateFromProps {
  name: string | undefined;
  age: number | undefined;
  email: string | undefined;
  password: string | undefined;
  passwordRepeat: string | undefined;
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
    if (email) return 'Email should be like xxx@xxx.xxx';
    return '';
  };

const validatePass = (password: string | undefined) => {
    if (!password) return 'Password is required field';
    if (password) return 'Email should be like xxx@xxx.xxx';
    return '';
  };

const validatePassRepeat = (password: string | undefined) => {
    if (!password) return 'Repeat password is required field';
    if (password) return 'Email should be like xxx@xxx.xxx';
    return '';
  };

// const validateGenderPick = (male: boolean | undefined, female: boolean | undefined) => {
//   if (male === female) return 'Must pick one';
//   return '';
// };

// const validateConsent = (checkbox: boolean | undefined) => {
//   if (!checkbox) return 'Must agree';
//   return '';
// };

// const validateSelect = (selectValue: string | undefined) => {
//   if (!selectValue) return 'Must select';
//   return '';
// };

// const validateFile = (files: FileList | undefined | null) => {
//   if (!files || files.length === 0) return 'Must pick file';
//   if (!files[0].type.startsWith('image')) return 'Must pick image';
//   return '';
// };

const validateForm = (validateData: IValidateFromProps) => {
  const errorMsgs = {
    ...INITIAL_STATE,
    nameErrMsg: validateName(validateData.name),
    ageErrMsg: validateAge(validateData.age),
    emailErrMsg: validateEmail(validateData.email),
    passErrMsg: validatePass(validateData.password),
    passRepeatErrMsg: validatePassRepeat(validateData.passwordRepeat),
  };
  const valid =
    !errorMsgs.nameErrMsg &&
    !errorMsgs.ageErrMsg &&
    !errorMsgs.emailErrMsg &&
    !errorMsgs.passErrMsg &&
    !errorMsgs.passRepeatErrMsg
  return { valid, errorMsgs };
};

export default validateForm;