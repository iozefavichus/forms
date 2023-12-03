import styles from '../styles/formhook.module.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import userSchema from '../validation/userValidation';
import Select from 'react-select';

import { useNavigate } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";

interface Form {
    name: string;
    age: number;
    email: string;
    password: string;
    passwordrepeat: string;
    female: boolean;
    male: boolean;
    accept: boolean;
    fileinput:React.RefObject<HTMLInputElement>;
    country: string;
}

const options = [
    { value: 'germany', label: 'Germany' },
    { value: 'cyprus', label: 'Cyprus' },
    { value: 'russia', label: 'Russia' }
  ]

const FormHook = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<Form>({
        mode: 'onBlur',
        resolver: yupResolver(userSchema)
    });

    const submit: SubmitHandler<Form> = async (data) => {
        console.log(data);
        console.log(data);
        const isValid = await userSchema.isValid(data);
        console.log(isValid);

        if (isValid){
            navigate('/');
        }
    }


    return (
        <div className={styles.root}>
            <form onSubmit={handleSubmit(submit)} noValidate>
                <div className={styles.container}>
                <div className={styles.formcontrol}>
                    <label>
                        Name:
                        <input type='text' {...register('name', {required: true})}/>
                    </label>
                    <p className={styles.errors}>{errors?.name?.message}</p>
                </div>
                <div className={styles.formcontrol}>
                    <label>
                        Age:
                        <input type='number' {...register('age', {required: true})}/>
                    </label>
                    <p className={styles.errors}>{errors?.age?.message}</p>
                </div>
                <div className={styles.formcontrol}>
                    <label>
                        Email:
                        <input type='text' {...register('email', {required: true})}/>
                    </label>
                    <p className={styles.errors}>{errors?.email?.message}</p>
                </div>
                <div>
                    <label>
                        Password:
                        <input type='text' {...register('password', {required: true})}/>
                    </label>
                    <p className={styles.errors}>{errors?.password?.message}</p>
                </div>
                <div className={styles.formcontrol}>
                <label>
                    Repeat password:
                    <input type='text' {...register('passwordrepeat', {required: true})}/>
                </label>
                    <p className={styles.errors}>{errors?.passwordrepeat?.message}</p>
                </div>

                <div>
                    <fieldset className={styles.switchGender}>
                        <legend>Please select your gender:</legend>
                        <input type='radio' id="male" value="male" checked {...register('gender')}/>
                        <label htmlFor="male">Male</label>
                        <input type='radio' id="female" value="female" {...register('gender')}/>
                        <label htmlFor="female">Female</label>
                    </fieldset>
                    <p className={styles.errors}>{errors?.female?.message}</p>
                </div>
                <div className={styles.formcontrol}>
                    <label>
                        Please accept term and conditions:
                    <input type='checkbox' {...register('accept', {required: true})}/>
                    </label>
                    <p className={styles.errors}>{errors?.accept?.message}</p>
                </div>
                <div className={styles.formcontrol}>
                    <label htmlFor="fileinput">
                        Add file
                        <input type="file"  id="file-input" {...register('fileinput', {required: true})}/>
                    </label>
                    <p className={styles.errors}>{errors?.fileinput?.message}</p>
                </div>
                <div>
                    <Select
                        className={styles.select}
                        options={options}
                        {...register('country', {required: true})}
                    />
                    <p className={styles.errors}>{errors?.country?.message}</p>
                </div>
                </div>
                <input type='submit' />
            </form>
        </div>
    );
  };

export default FormHook;